# Skill: /update-worldcup

Update the FIFA World Cup 2026 status chart with today's latest results, standings, and predictions.

**Working directory:** `/Users/Ian/Code/Fun/World Cup`  
**Data file:** `data.js`

---

## Step 1 — Read data.js

Read the full contents of `data.js`. Identify all group matches where `score` is `null` and `date_bst` is on or before today's date (BST). These are the matches to update.

---

## Step 2 — Fetch results for new matches

For each match identified in Step 1, run a **WebSearch** (in parallel if multiple):

> `"[Home] [Away]" World Cup 2026 goals scorers red cards`

Find the ESPN match page in the results and **WebFetch** it. Extract:
- Final score (home / away)
- Goal scorers: name, minute, penalty (`pen:true`) or own goal (`og:true`)
- Red cards: team, player name, minute

**Source:** ESPN match pages only. Do not consult multiple sources for the same match.

---

## Step 3 — Fetch YouTube highlights

For each match being updated, run a **WebSearch** (in parallel):

> `"[Home] vs [Away]" "World Cup 2026" highlights youtube`

Select the first result from an official or broadcaster channel with a title matching `HIGHLIGHTS - [Home] v [Away]` (not "Extended Highlights"). Only use the URL if the video appears to be under 9 minutes. Otherwise leave `yt: null`.

---

## Step 4 — Fetch tournament-winner odds

**WebFetch** FoxSports for current odds:  
`https://www.foxsports.com/stories/soccer/world-cup-2026-champion-odds`

This covers the top ~17 teams. If any team involved in a prediction is not listed, **WebFetch** RotoWire for the complete 48-team table:  
`https://www.rotowire.com/soccer/article/2026-world-cup-winner-odds-favorites-to-win-fifa-world-cup-109815`

Record American odds for every team needed. **Lower number = better odds = more likely to win.**

---

## Step 5 — Update match data in data.js

**5a. Clear new flags**  
Remove `new: true` (or set it to `false`) from every match currently marked `new: true`.

**5b. Apply new results**  
For each match with a result fetched in Step 2:
```js
score: {h: N, a: N},
goals: [{t: "Team", p: "Player", m: 34}, ...],   // og:true or pen:true where applicable
reds:  [{t: "Team", p: "Player", m: 78}, ...],
yt:    "https://youtube.com/watch?v=...",          // or null
new:   true
```

**5c. Update stage flag**  
- If all 72 group matches have scores → set `stage: "knockout"`.
- On the first run after group stage ends, resolve knockout `home_team`/`away_team` for all Round of 32 matches using the final group standings and the FIFA Annex C table for best-3rd slots.

---

## Step 6 — Refresh predictions

### 6a. Group predicted standings (`predictions.groups`)

For each group A–L, build the predicted final standings array (index 0 = 1st):

- **Matches played** (any matchday): sort teams by actual results — points (W=3, D=1, L=0), then goal difference, then goals for, then alphabetical. Use this as the predicted final order.
- **No matches played**: sort by tournament-winner odds from Step 4 (lowest odds = 1st).

No separate group-winner odds search is needed.

### 6b. Best 3rd slot assignment (`predictions.best_thirds_slots`)

**Official selection criteria (applied in order):**
1. Points
2. Goal difference
3. Goals scored
4. Team conduct score (fewest yellow/red cards)
5. FIFA World Ranking (use tournament-winner odds as a proxy — lower odds ≈ higher ranking)

**Process:**
1. From `predictions.groups`, take the predicted 3rd-place team (index 2) for each group.
2. For each of those 12 teams, look up their current group stats (points, GD, GF, cards) from the actual match data in `data.js`. Use 0/0/0/0 for groups not yet started.
3. Rank all 12 thirds by the official criteria above. Select the top 8.
4. Assign to bracket slots using greedy bipartite matching — most-constrained team (fewest eligible slots) first:

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

### 6c. Knockout predictions (`predictions.knockout`)

For each unplayed knockout match (`score: null`) in `r32`, `r16`, `qf`, `sf`, `third_place`, `final`:

1. Resolve the two predicted participants by following `predictions.groups` and `predictions.knockout` upstream (recursively resolve `home_label` and `away_label` the same way `index.html` does).
2. Look up each team's tournament-winner odds from Step 4.
3. Store the **name of the team with better (lower) odds** as the prediction value.

```js
"R32-73": "Switzerland",   // South Korea +40000 vs Switzerland +6500
"R16-89": "Germany",       // Switzerland +6500 vs Germany +1400
```

**Values are always team name strings — never `"home"` or `"away"`.**

For the 3rd-place match: the participants are the losers of SF-101 and SF-102. The loser of each semi-final is whichever predicted participant is *not* the value stored in `predictions.knockout["SF-101"]` / `["SF-102"]`.

---

## Step 7 — Update timestamp

```bash
date -u +"%Y-%m-%dT%H:%M:%SZ"
```

Set `updated` to that value.

---

## Step 8 — Write data.js

Write the complete updated `data.js`. Preserve the file structure exactly — only values change.

---

## Step 9 — Report

Tell the user:
- Date/time of update
- Matches updated (list with scores)
- YouTube links found / not found
- Any group standings or knockout prediction changes
- Any issues (missing odds, conflicting data)
