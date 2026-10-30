# About Kickresume page

Static build of the "About Us" draft, made 1:1 from components in the Figma
library "Components (WEB)" (file `tfOoqCFhpvNCQc5PZmqDtw`) and filled with the
draft's text unchanged. Each section has a `data-figma` attribute with the
component's node id and name.

| Section | Figma component |
| --- | --- |
| Nav | Header – Content (1070:519) |
| Intro, Forbes | Content / Left v2 (823:34) |
| Company facts, Revolut | Content / Right v2 (823:64) |
| Founders (photos + bios), expert team | Team / authors update (7221:1166) |
| Ratings, data privacy | Privacy (57:11) |
| Free plan, pricing, research, "How every guide is made" | Dos/don'ts (57:17) |
| Press | Articles, Dark=false (2758:662) |
| FAQ | FAQ / v3 (2026) (8643:4022) |
| Closing CTA | CTA v2 / Light (535:44) |
| Footer | Footer / Rating update (950:187) |
| Trust strip (`trust-short.html`) | Media, Extended (4799:946) |

Where the draft has no text for a component element (e.g. a check list or
button), that element is left out. Where the draft has a link with no button
slot, it's an inline link in the body text, as the Content components do.

Files:
- `index.html`, `trust-short.html`
- `styles.css`: component styles; every value uses the `--kr-*` tokens.
- `kickresume-theme.css`, `kickresume-fonts.css`: copied verbatim from `@kickresume/theme`. Don't edit.

## Still to fill in

- **Images, logos and icons** (`.asset-slot` elements): the library's assets
  couldn't be downloaded from the build environment. Each slot names what goes
  there. Star ratings use ★ text until the star icons are exported.
- Links marked `data-todo` (LinkedIn, PARWCC study, team profiles), footer link
  targets, and the `[DATE]` placeholders.

## Preview fonts

The brand fonts (Graphik, Henk-Work) load from `ui.kickresume.com`, which the
claude.ai artifact preview can't reach. The preview build therefore adds Inter
and Literata from Google Fonts as fallbacks. The files in this folder use only
the brand fonts.
