# Portfolio — Jaitej

Personal portfolio site for an AI Engineer. React + Vite, plain CSS, **no runtime
dependencies beyond React** — no UI kit, no animation library, no image assets.

```bash
npm run dev      # dev server with HMR
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle
npm run lint     # eslint
```

## What's where

| Path | Purpose |
| --- | --- |
| `src/data/site.js` | **All copy lives here** — hero, about, projects, research, journey, experience, skills, contact. Edit this first. |
| `src/App.jsx` | Rail + content layout, scroll-spy for the active nav item |
| `src/components/Rail.jsx` | Fixed left navigation; collapses to a top bar with a drawer under 900px |
| `src/components/` | Section components, each with a colocated `.css` file |
| `src/pages/Home.jsx` | Section order for the single page |
| `src/index.css` | Design tokens, reset, shared primitives (buttons, chips, section headers) |
| `src/hooks/useTheme.js` | Light/dark, persisted |

## Notable pieces

- **`components/HeroVisual.jsx`** — a loss landscape (Gaussian basins and hills
  over a shallow bowl) drawn as a wireframe surface, with a ball running **real
  gradient descent** across it: `x ← x − lr·∇f` with an analytic gradient, taking
  discrete steps on a 6/sec clock so it reads as a training loop. Over 400
  simulated runs it converges in 18–120 iterations and reaches a true minimum 96%
  of the time — the global basin ~65%, a local one ~31%, depending on where it
  initialises. The surface never moves, so it renders once to an offscreen layer
  and is blitted each frame; only the optimiser is redrawn. Pauses when scrolled
  out of view or the tab is hidden, and shows a completed static run under
  `prefers-reduced-motion`.
- **`components/Thumb.jsx`** — every project/research thumbnail is generated SVG
  (a phone UI, an interior, aerial damage tiles, a Cityscapes segmentation split,
  a magma depth map, a diffusion face grid, …). Deterministic seeded randomness,
  so nothing flickers between renders. Add a new one by adding a component to the
  `arts` map and referencing its key as `art:` in `site.js`.
- **Theme** — `data-theme` on `<html>`, set before first paint by an inline script
  in `index.html` so there is no flash. Persisted to `localStorage`.
- **No router** — the site is one page. Every nav item is a section and uses
  `SectionLink`, which scrolls without touching the URL; the rail's active item
  is driven by an `IntersectionObserver` scroll-spy. "View all projects" and
  "Read Paper" expand their lists in place rather than navigating anywhere.
- **Section numbering** — the rail and the section headings both read their
  numbers from `navLinks` via `sectionNumber()`, so reordering the nav renumbers
  the headings automatically.

## Before you deploy

1. **Add your CV** at `public/resume.pdf` — the header Resume button links to it.
2. Update the social URLs, email and location in `src/data/site.js` (`profile`).
3. The projects and research entries beyond the four featured ones are
   **placeholder content** — replace them with your own.
4. The contact form has no backend: it validates client-side and hands off to the
   visitor's mail client via `mailto:`. Swap `handleSubmit` in
   `src/components/Contact.jsx` for a fetch to Formspree/Resend/your API if you
   want real submissions.
