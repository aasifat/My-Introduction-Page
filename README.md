# Sifat — Personal Introduction Page

A single-page React + Vite + Tailwind CSS site for Ahsan Ahmed Sifat, built from the project PRD.

## Getting started

```bash
npm install
npm run dev       # starts a dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     one component per PRD section (Navbar, Hero, About, Education,
                   Skills, Projects, Interests, Journey, Goals, Contact, Footer)
  data/
    content.js    all copy and structured content — the single source of truth
  hooks/
    useScrollSpy.js   drives the active nav-link highlight while scrolling
  lib/
    api.js            placeholder for future backend calls
    formatText.jsx     tiny **bold** / *italic* markdown-style renderer
  index.css       design tokens (colors, fonts) + component styles
  App.jsx         assembles all sections in order
  main.jsx        React entry point
```

## Adding a backend later

Everything the page shows — projects, skills, journey milestones, goals, contact
links — comes from `src/data/content.js`. That's the seam to cut along:

1. Add your API calls to `src/lib/api.js` (a starting example is already
   commented in there).
2. In the component that should go dynamic (e.g. `src/components/Projects.jsx`),
   replace the static import from `content.js` with a `useState` +
   `useEffect` fetch, or a data-fetching library like React Query/SWR if you'd
   rather not hand-roll loading/error states.
3. Keep the fetched data shaped like the arrays/objects already in
   `content.js` — every component just maps over that shape, so nothing else
   needs to change.

Good first candidates to wire up: **Projects** (serve from a CMS or database
so you can add new work without redeploying), and **Contact** (turn the
placeholder links into a real form that posts to an endpoint).

## Notes

- Contact links and project "View Project" / "GitHub" buttons are
  intentionally inert placeholders (`href: null` in `content.js`) until real
  URLs exist — set them there and the components pick them up automatically.
- Fonts (Archivo Black, Space Grotesk, JetBrains Mono) load from Google Fonts
  in `index.html`.
- Colors and fonts are defined once in `tailwind.config.js` (for Tailwind
  utilities) and mirrored as CSS variables in `src/index.css` (for the
  hand-written component styles) — keep both in sync if you change the palette.
