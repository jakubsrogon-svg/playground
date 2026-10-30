# About Kickresume page

The "About Us" draft built with the **Kickresume Design System**
(claude.ai artifact `GWHC3KRhzUiFiHREre3wQ4`): its tokens, fonts, logos, icons,
illustrations and React component bundle (`window.KickresumeDesignSystem_6ee106`).
The draft's text is used unchanged.

## Files

- `src/index.src.html`: the page source (React via htm, no build-time JSX).
- `vendor/kickresume-ds/`: the parts of the design system the page uses, copied
  unchanged: `tokens.css`, `components/bundle.css`, `components/bundle.js`,
  `fonts/`, and the logos, icons, backgrounds and illustrations under `assets/`.
- `build.py`: inlines the design system into one self-contained `index.html`
  (fonts and images as data URIs). `python3 build.py --artifact` writes the
  claude.ai artifact version to `build/artifact.html`.
- `index.html`: the built page. Rebuild after editing the source.

React 18.3.1, htm 3.1.1 and Lucide 0.544.0 (the design system's icon set) load
from cdnjs / jsDelivr at pinned versions.

## What each section uses

| Section | Design-system parts |
| --- | --- |
| Nav | `Navbar` component |
| Intro | `Hero` layout classes (`kr-hero--center`, `kr-hero__proof`), `Eyebrow`, `StarRow`, colored-blurs background, world-users illustration |
| Founders | `FeatureRow` dark layout (`kr-feature is-dark`), `Eyebrow`, Card |
| Company facts, Revolut | `FeatureRow` layout, `Button` (coral), Card (tinted), List (checked) |
| Reviews + Forbes | `TestimonialGrid` layout: `kr-forbes` card, `kr-testi-card`, `StarRow`, `Button` (dark outline) |
| Privacy, pricing, research, experts, FAQ | Card (default / tinted), List, Lucide icons, `.stat` type style, `Button` |
| Press | `SampleCarousel` card (`kr-sample-card`) |
| Closing CTA | section title + `Button` group (coral + dark outline) on a coral tint gradient |
| Footer | `Footer` layout (`kr-footer`) with the page's own ratings, `StarRow`, brand logo and social icons |

`Navbar` is used as-is. `Hero`, `SocialRating`, `TestimonialGrid` and `Footer`
are fixed-copy components with no props, so the page uses their markup and
classes with this page's content instead of rendering them directly.

## Still to fill in

- Founder photos and a Revolut logo: neither is in the design system.
- Links marked `data-todo` (LinkedIn, PARWCC study, team profiles) and the
  `[DATE]` placeholders in the footer.
