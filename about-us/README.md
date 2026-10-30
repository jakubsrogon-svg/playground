# About Kickresume page

Visual style follows the Figma design "Landing pages 2.0" (file
`2ZFK5m5ELCUT1yiRvCg15q`, frame `v4`, node 35176:66973): 1260px layout,
centred hero with glass proof chips, feature blocks with a gradient badge,
dashed side line and tinted panels, beige reviews band with glass cards and a
Forbes banner, and collapsed FAQ accordions. Those blocks use `lp-*` classes.

Static build of the "About Us" draft, made only from components in the
Figma library "Components (WEB)" (file `tfOoqCFhpvNCQc5PZmqDtw`). Each section
has a `data-figma` attribute with the component's node id and name.

| Section | Figma component |
| --- | --- |
| Nav | Header – Content (1070:519) |
| Intro (text in both columns), Forbes | Content / Left v2 (823:34) |
| Company facts (text in both columns), Revolut | Content / Right v2 (823:64) |
| Founders (both founder photos + bios), expert team | Team / authors update (7221:1166) |
| "How every guide is made" steps | Statistics (1349:435) |
| Reviews | Ratings only (5565:1356) |
| Data privacy, free plan | Privacy (57:11) |
| Pricing, research, trust strip | Highlights, Variant2 (1836:196) |
| Press | Articles, light (2758:661) |
| FAQ | FAQ / v3 (2026) (8643:4022) |
| Closing CTA | CTA v2 / Light (535:44) |
| Footer | Footer / Rating update (950:187) |

Files:
- `index.html`: the full About page. `trust-short.html`: the short trust strip.
- `styles.css`: component styles; every value uses the `--kr-*` tokens.
- `kickresume-theme.css`, `kickresume-fonts.css`: copied verbatim from `@kickresume/theme`. Don't edit.

## Still to fill in

- **Images, logos and icons** (`.asset-slot` elements): the library's assets
  couldn't be downloaded from the build environment. Each slot names what goes
  there (e.g. `Forbes_mention (6542:1150)`, `PARWCC logo (5410:1111)`, the
  Privacy shield icons, Trustpilot / Google Play / App Store logos, founder and
  team photos, the CTA image). Star ratings use a ★ text stand-in for the
  library's star icons.
- Links marked `data-todo` (LinkedIn, PARWCC study, team profiles) and the
  `[DATE]` placeholders in the footer.
