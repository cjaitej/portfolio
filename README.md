# Portfolio — Jaitej

Personal portfolio for an AI engineer. One page, no images, no illustrations —
the design is built entirely from type and hairline rules.

**Live:** https://cjaitej.github.io/portfolio/

React 19 · Vite 8 · Tailwind CSS v4. No UI kit, no animation library, no icon
package, no image assets — the only runtime dependency is React itself.

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle (at /portfolio/, see base below)
npm run lint     # eslint
```

## Editing content

**`src/data/site.js` holds every piece of copy on the site.** Components read
from it and contain no prose of their own, so changing what the page says is a
one-file job. It covers the profile and socials, nav, hero, projects, research,
experience, education and skills.

Two conventions worth knowing before editing it:

- **Entries are one line each, and that line should carry a number.** The
  measurement is the part worth reading, and a paragraph around it tends to bury
  it. Anything needing more than a line belongs in the linked repo.
- **`hero.title` is authored as separate strings, not one sentence.** Each line
  animates out of its own clipping mask, so the line breaks have to be explicit
  rather than left to the viewport.

Marking a project `featured: true` pulls it out of the numbered index into a
larger block above the list, where it gets a lead sentence and three figures.
Indices come from position in the `projects` array, so the featured entry stays
`01` and the list continues from `02`.

## Layout

| Path | Purpose |
| --- | --- |
| `src/data/site.js` | All copy. Edit this first. |
| `src/App.jsx` | Layout and the scroll-spy driving the active nav item |
| `src/pages/Home.jsx` | Section order |
| `src/index.css` | Design tokens, base styles, layout primitives, keyframes |
| `src/components/` | One component per section, plus shared primitives |
| `src/hooks/useTheme.js` | Light/dark, persisted to `localStorage` |

Shared primitives: `SectionHead` (the rule-and-label each section opens with),
`Reveal` (scroll-triggered entrance), `CountUp` (figures that count up),
`StatusDot`, `SectionLink`, `Icon`.

## Design notes

- **Monochrome, with one deliberate exception.** There is no accent hue:
  hierarchy comes from type scale, weight and hairline rules. The single
  exception is the green availability dot, allowed because it is the only place
  colour carries meaning rather than decoration. It only stays an exception
  while it stays a 7px dot.
- **Hairlines do the dividing.** No cards, shadows, gradients or rounded
  panels. Sections open on a rule that draws itself in; project rows underline
  themselves on hover; columns are separated by a single line.
- **Motion.** The hero animates on load (masked lines rising, staggered by
  inline `animationDelay` — see the `T` object in `Hero.jsx`); everything below
  animates on scroll via `IntersectionObserver`. A faint grid drifts one cell
  every 72s behind the page (`body::before`). All of it is disabled under
  `prefers-reduced-motion`.
- **Theme** is `data-theme` on `<html>`, set before first paint by an inline
  script in `index.html`, so there is no flash of the wrong theme.
- **No router.** Every nav item is a section on the one page; `SectionLink`
  scrolls without touching the URL.

Two implementation details that are easy to trip over:

- The page background lives on `<html>`, not `<body>`. The backdrop grid is
  `body::before` at `z-index: -1`, and a background on `<body>` paints later in
  the stacking order and would cover it completely.
- Tailwind v4 compiles `scale-*` to the CSS **`scale`** property, not
  `transform`. A `transform` override will not affect them.

## Deployment

Pushing to `main` builds and publishes via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Two things have to agree or the deploy silently produces an unstyled page:

1. **`base` in `vite.config.js` must match the repo name** (`/portfolio/`).
   At the default `/`, the deployed page requests `/assets/index-*.js`, which on
   `github.io` resolves to the domain root rather than this project. Change it
   to `/` if the site ever moves to a user site or a custom domain.
2. **Pages source must be set to "GitHub Actions"** under Settings → Pages —
   not "Deploy from a branch". That setting is what lets the workflow publish.
