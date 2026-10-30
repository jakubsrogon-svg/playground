# About Kickresume page

Static build of the "About Us" draft (Claude Design artboards "About Us — desktop"
and "About Us — short version"), styled with the Kickresume design system.

- `index.html`: the full About page.
- `trust-short.html`: the short trust strip for use on other pages.
- `styles.css`: page styles. Every color, radius, shadow, font and spacing value
  comes from `--kr-*` tokens.
- `kickresume-theme.css` and `kickresume-fonts.css`: copied verbatim from the
  `@kickresume/theme` registry item. Don't edit them; update them from the registry.
  Fonts load from `ui.kickresume.com`.

## Still to fill in

- Founder photos: add `assets/founders-2013.jpg` and `assets/founders-today.jpg`
  and swap the `.photo-ph` placeholders for `<img class="photo">` (see TODO comments).
- Forbes and Revolut logos are text stand-ins (`.logo-forbes`, `.logo-tile`).
  Replace them with the official logo files.
- Links marked `data-todo` (LinkedIn, PARWCC study, team profiles) and the `[DATE]`
  placeholders in the footer note.
