# Héctor Coronado — Portfolio

Interactive developer portfolio built with **Angular 21** — standalone components, signals, zoneless change detection, deferred loading, View Transitions API. No UI or animation libraries: every effect is hand-rolled.

**Live:** https://toydrum.github.io/HectorCoronadoPortfolio/

## Interactive features

- Canvas **particle network** in the hero, reacting to the cursor
- **Typewriter** role cycling and cursor **glow spotlight**
- **3D tilt** project cards with glare, morphing into case studies via View Transitions
- Scroll-driven **timeline**, animated skill bars and count-up stats
- Runtime **EN ⇄ ES** language switch (signal-based, persisted)
- Live **GitHub stats** card (public API, deferred until visible)
- Hidden **terminal** — press `~` (try `help`, `sudo hire-me`)
- **Konami code** easter egg (↑↑↓↓←→←→BA)
- Full `prefers-reduced-motion` support

## Development

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build into dist/
```

## Editing content

All copy and data live in `src/app/data/` — no component changes needed:

| File | Contents |
| --- | --- |
| `profile.ts` | Name, email, links, hero roles, stats |
| `projects.ts` | Project cards + case-study pages (EN/ES) |
| `skills.ts` | Skill groups and levels |
| `experience.ts` | Timeline entries (EN/ES) |
| `i18n/en.ts` · `i18n/es.ts` | Every UI string (the `Dict` type keeps both in sync) |

Drop your CV at `public/cv/HectorCoronado_CV.pdf` to make the download button work.

## Deployment

Every push to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml` (one-time setup: repo **Settings → Pages → Source: GitHub Actions**).
