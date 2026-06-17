# ⚽ FIFA World Cup 2026 Dashboard

A live, self-contained dashboard tracking the FIFA World Cup 2026 - group standings, results, and knockout bracket predictions, all in a single static HTML page.

**[View the dashboard →](https://iantaylorfb.github.io/world-cup-2026/)**

---

## Features

- **12 group tables** with live standings, updated daily
- **Predicted knockout bracket** - current table positions cascade through the bracket automatically; where groups haven't started, bookmaker odds are used instead
- **Knockout match predictions** - unplayed matches show the predicted winner based on current odds
- **Best 3rd place slots** - the 8 qualifying 3rd-place teams are assigned to their bracket slots using the eligible-group constraints defined in the [FIFA World Cup 2026 Regulations, Annex C](https://www.fifa.com/tournaments/mens/worldcup/canadamexicousa2026)
- **Match details** - click any group panel to expand and see individual match results, goal scorers, red cards, and YouTube highlight links
- **Your local timezone** - all kick-off times are displayed in your browser's local timezone (e.g. BST, EDT, PDT)

---

## YouTube Highlights

We select the short (< 9 minutes) official FIFA highlights video for each match. Depending on TV rights in your region, this specific video may not be available, but the YouTube recommendations usually include a comparable regional version.

---

## How it works

The dashboard is a single `index.html` file that loads `data.js` (the match data) via a `<script>` tag - no server, no build step, no API calls at runtime. It works locally via `file://` and online via GitHub Pages identically.

`data.js` is updated daily using a local [Claude Code](https://claude.ai/code) skill (`/update-worldcup`) that:

1. Searches for new results, goal scorers, and red cards
2. Finds YouTube highlight links for newly completed matches
3. Recomputes group standings and knockout bracket predictions
4. Refreshes bookmaker odds for upcoming matches
5. Commits and pushes the updated file

---

## License

[GPL v3](LICENSE) - free to use and modify, provided derivatives remain freely available under the same terms.
