# ATS-friendly Resume Templates page

The "ATS-friendly Resume Templates — Landing Page" draft styled with the
**Kickresume Design System v2** (claude.ai artifact `Cz2V6Fae5FS5PjhtpZgJkm`,
the organization default). The draft's structure, layout and text are kept:
the same sections in the same order, with the same grids, widths and spacing.
The draft was built on an older version of the design system. This page
brings it up to v2.

## Files

- `src/index.src.html`: the page source. HTML and CSS, plus a small script for
  the two carousels, the logo strip and the FAQ "Show Less" button.
- `assets/`: the draft's own photos and images (Stanford logo, Ya'el Courtney,
  Marta Říhová, the student photo, the world map).
- `vendor/kickresume-ds/`: the parts of the design system the page uses, copied
  unchanged: `tokens.css`, `components/bundle.css`, fonts, the company logos,
  the rating stars, the Spotify logo and the LinkedIn mark.
- `build.py`: inlines everything into one self-contained `index.html`.
  `{{asset:…}}` comes from the design system and `{{img:…}}` from `assets/`.
  `python3 build.py --artifact` writes `build/artifact.html`.
- `index.html`: the built page. Rebuild it after you edit the source.

## What the design system changes

| Draft | Now |
| --- | --- |
| Henk-Work on card titles, row titles and quotes | Henk-Work only on h1 and section titles. Template names use `--text-h3`, feature-row titles `--text-h2`, quotes `--text-blockquote`, all in Graphik |
| Free-sized type (18/28 subs, 20/28 and 22/28 card titles, 15/22 tool text) | The `--text-*` styles: body 16/24, h5 18/24, h4 24/28, medium 14/20 |
| Category tabs: active tab white with a shadow | `.kr-chip`, with the active one in Charcoal (selected is Charcoal) |
| Coral "Read more reviews" link, blue FAQ links | White link on Dark Blue, Charcoal underlined FAQ links |
| White-10% cards on Dark Blue | The design system's glass on color (`--kr-glass-on-color`) |
| Icon boxes with a hairline, 10px corners | `.kr-iconbox--48.kr-iconbox--raised` (12px corners) |
| A4 placeholders with 2px corners | `aspect-ratio: 210 / 297` and 4px corners, as the system sets for document thumbs |
| Text "Spotify" in the logo strip | The design system's Spotify logo |
| Buttons from the old React bundle | Landing kit buttons (`.kr-lp-btn--coral`, `--coral-ol`) |

Kept on purpose: the Trustpilot green (it's Trustpilot's brand mark) and the
final banner's own gradient, because the world-map image has that background
built in.

## Notes

- The FAQ button switches between "Show Less" and "Show More". The draft only
  had "Show Less".
- The FAQ link to "Box" pointed at `Main.dc.html#templates` in the draft. It now
  points at `#templates`.

## Still to fill in

- The template images, the "Image: …" placeholders, the six placeholder
  testimonials (quotes, logos, photos) and the four "Placeholder" buttons.
