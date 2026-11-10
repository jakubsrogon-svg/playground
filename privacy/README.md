# Privacy & Security page

The "Kickresume Privacy Landing Page" draft rebuilt with the **Kickresume
Design System v2** (claude.ai artifact `Cz2V6Fae5FS5PjhtpZgJkm`, the
organization default), using its landing kit (`.kr-lp-*`). The draft's
structure and text are kept. The one text change: tile 6 reads "Deleted within
30 days", because the draft had it lowercase and showed it uppercase with CSS.

## Files

- `src/index.src.html`: the page source. Plain HTML and CSS, with no script.
  The FAQ uses `<details>`.
- `vendor/kickresume-ds/`: the parts of the design system the page uses, copied
  unchanged: `tokens.css`, `components/bundle.css` (which includes the landing
  kit), the Graphik Regular/Medium and Henk-Work Regular fonts, the hero blur,
  and the few images `bundle.css` references.
- `build.py`: inlines the design system into one self-contained `index.html`
  with fonts and images as data URIs. `python3 build.py --artifact` writes the
  claude.ai artifact version to `build/artifact.html`.
- `index.html`: the built page. Rebuild it after you edit the source.

## What each section uses

| Draft section | Design-system pattern |
| --- | --- |
| Hero | Landing kit `hero` head: eyebrow, Henk-Work h1, sub, colored blur |
| Six ways we protect your data | Landing kit `trust`: the column with the tinted strip, on a 3 → 2 → 1 grid. Core `.kr-iconbox--48.kr-iconbox--raised` holds the icons |
| 01–06 detail sections | Landing kit `features` rows in two joined panel columns (blue, yellow, green ×2). Tag = icon + number + name. The checklist uses the row's color |
| TL;DR | Core `.kr-list` card with `--interactive` rows that link to each section |
| Transparent with your data and your wallet | Landing kit `bento` tiles with the kit's own tints (cyan, peach, green), glass buttons, and glass image slots |
| FAQ | Landing kit `faq` (`<details>`, chevron) |

## Differences from the draft

- The detail visuals sit in the kit's joined right-hand panel column, so they
  no longer alternate sides.
- Icons are Charcoal (feature colors in the detail rows) rather than coral. The
  design system keeps coral for primary CTAs and errors.
- The hero eyebrow is the kit's plain eyebrow, not a pill with an icon.
- No site header or footer. The draft had none. The kit's `kr-lp-header` and
  `kr-lp-footer` can be added.

## Still to fill in

- The `[VISUAL: …]` and `[IMAGE: …]` placeholders.
- The `#compare-plans` and `#free-premium` links.

## Checked

`tools/ds-render-check.js` from the design system at 1440, 1280, 1024, 768 and
390px. Nothing spills out of its container and the page never scrolls
sideways. The remaining findings are values the landing kit itself uses
(section paddings, feature tints, glass buttons, the eyebrow and FAQ type),
which landing pages keep.
