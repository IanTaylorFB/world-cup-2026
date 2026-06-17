# Skill: /update-worldcup

Update the FIFA World Cup 2026 status chart with today's latest results, standings, and predictions.

**Working directory:** `/Users/Ian/Code/Fun/World Cup`
**Data file:** `data.js`

---

## Step 1 — Fetch today's results (parallel)

Run these three WebSearches simultaneously:

- `FIFA World Cup 2026 results scores goals [TODAY'S DATE]`
- `FIFA World Cup 2026 group standings table [TODAY'S DATE]`
- `FIFA World Cup 2026 red cards disciplinary [TODAY'S DATE]`

---

## Step 2 — Fetch YouTube highlights

For each match that is newly completed (has a score) AND has `yt: null`, run:

`"[Home] vs [Away]" "World Cup 2026" highlights youtube`

Prefer official or broadcaster channels. Only use a URL if the video is under 9 minutes; leave `yt: null` if none found.

---

## Step 3 — Read data.js

Read the full contents of `data.js`.

---

## Step 4 — Update match data

**4a. Clear new flags**
Set `new: false` (or remove the `new` key) from every match that currently has `new: true`, across both `groups` and `knockout`.

**4b. Apply new results**
For each match that now has a result and previously had `score: null`:

```
score: {h: N, a: N}
goals: [{t: "Team", p: "Player", m: 34}, ...]   // add og:true or pen:true where applicable
reds:  [{t: "Team", p: "Player", m: 78}, ...]
yt:    "https://youtube.com/watch?v=..."  // or null
new:   true
```

**4c. Update stage flag**
- If all 72 group matches have scores → set `stage: "knockout"`.
- On the first run after group stage ends, resolve knockout `home_team`/`away_team` for all Round of 32 matches using the final group standings and the FIFA Annex C table for best-3rd slots.

---

## Step 5 — Refresh predictions

### 5a. Group predicted standings (`predictions.groups`)

For each group A–L, build the predicted final standings array (index 0 = 1st place):

- **Group complete** (3 matchdays played): use actual final standings.
- **Group in progress** (1–2 matchdays): use current standings; for tied teams with remaining matches, use FanDuel group-winner odds to break ties.
- **Group not started** (0 matches): use FanDuel group-winner odds order.

Search: `FIFA World Cup 2026 group winner odds FanDuel [TODAY'S DATE]`

### 5b. Best 3rd slot assignment (`predictions.best_thirds_slots`)

1. From `predictions.groups`, identify the predicted 3rd-place team for each group (index 2).
2. Estimate which 8 of the 12 will have enough points to qualify — use current 3rd-place standings where available; for groups not yet played, assume the strongest non-top-2 team qualifies.
3. Assign the 8 predicted qualifying thirds to the 8 bracket slots using a greedy algorithm that respects each slot's eligible-group constraint:

   | Slot label | Eligible groups |
   |---|---|
   | Best 3rd (A/B/C/D/F) | A, B, C, D, F |
   | Best 3rd (C/D/F/G/H) | C, D, F, G, H |
   | Best 3rd (C/E/F/H/I) | C, E, F, H, I |
   | Best 3rd (E/H/I/J/K) | E, H, I, J, K |
   | Best 3rd (B/E/F/I/J) | B, E, F, I, J |
   | Best 3rd (A/E/H/I/J) | A, E, H, I, J |
   | Best 3rd (E/F/G/I/J) | E, F, G, I, J |
   | Best 3rd (D/E/I/J/L) | D, E, I, J, L |

   Assign each qualifying third to the slot where its group appears, avoiding conflicts. Use a bipartite matching approach: assign the most-constrained teams first (fewest eligible slots).

   Write the result as:
   ```js
   "Best 3rd (A/B/C/D/F)": {team: "Morocco", group: "C"}
   ```

### 5c. Knockout predictions (`predictions.knockout`)

Search: `FIFA World Cup 2026 knockout odds predictions [TODAY'S DATE]`

For each match with `score: null` in `r32`, `r16`, `qf`, `sf`, `third_place`, and `final`:

1. Determine which teams are predicted home and away by recursively resolving the match's `home_label` and `away_label` through the current bracket (following `predictions.knockout` for upstream matches).
2. Look up odds or probability for those two teams.
3. Store `"home"` if the home team is favoured, `"away"` if the away team is favoured.

**Important:** values must be `"home"` or `"away"` — never team names. Team names are always resolved dynamically by `index.html`.

---

## Step 6 — Update timestamp

Set `updated` to the current UTC time: `"YYYY-MM-DDTHH:MM:SSZ"`

---

## Step 7 — Write data.js

Write the complete updated `data.js`. Preserve the file structure exactly — only values change.

---

## Step 8 — Report

Tell the user:
- Date/time of update
- Matches updated with new scores (list them)
- YouTube links found / not found
- Whether stage changed group → knockout
- Predictions refreshed: which groups used odds vs actual standings
- Any issues (conflicting sources, missing data, Annex C lookup needed)
