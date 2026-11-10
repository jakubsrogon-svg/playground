# Privacy & Security page

The "Kickresume Privacy Landing Page" draft styled with the **Kickresume Design
System v2** (claude.ai artifact `Cz2V6Fae5FS5PjhtpZgJkm`, the organization
default). The draft's structure, layout and text are kept exactly: same
sections in the same order, same grids, widths and spacing, the visual
alternating sides in the detail sections. The design system supplies the look:
fonts, colors, type styles, radii and components.

## Files

- `src/index.src.html`: the page source. Plain HTML and CSS, no script (the FAQ
  uses `<details>`).
- `vendor/kickresume-ds/`: the parts of the design system the page uses, copied
  unchanged: `tokens.css`, `components/bundle.css`, the Graphik Regular/Medium
  and Henk-Work Regular fonts, and the few images `bundle.css` references.
- `build.py`: inlines the design system into one self-contained `index.html`
  (fonts and images as data URIs). `python3 build.py --artifact` writes the
  claude.ai artifact version to `build/artifact.html`.
- `index.html`: the built page. Rebuild after editing the source.

## What the design system changes

| Draft | Now |
| --- | --- |
| Graphik headings, navy `#081430` | Henk-Work section titles (`--text-h1`), Charcoal text throughout |
| Coral icons, numbers and links | Charcoal icons in white / Background icon boxes (`.kr-iconbox--48`); Charcoal Inactive numbers; Charcoal text links (`.kr-lp-btn--text`). Coral is kept for primary CTAs and errors |
| Coral-tint hero pill | Glass pill (`--kr-glass`), as neutral badges on a fill are glass |
| Dashed visual placeholders | Solid placeholder blocks (dashed outlines mean "upload a file") |
| TL;DR card with shadow, coral hover | `.kr-list` card: hairline, grey hover |
| Bento gradients | The landing kit's own cyan, peach and green tints, glass image slots |
| FAQ +/- buttons with script | `<details>` items in the same grey panel, same +/- icons |

## Still to fill in

- The `[VISUAL: …]` and `[IMAGE: …]` placeholders.
- The `#compare-plans` and `#free-premium` links.
