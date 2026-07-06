# Portfolio — Agent Onboarding

Context file for AI agents (Codex, Claude, Cursor, etc.) and new contributors. The README covers *what* this is and how to run it; this covers the intent, the rules, and the traps.

## What this is

Héctor Coronado's personal developer portfolio — a **hiring artifact**. Its audience is employers and recruiters; every change should be judged by "does this make a stronger first impression in under 60 seconds?". Live at `https://toydrum.github.io/HectorCoronadoPortfolio/`, deployed from `main` via GitHub Actions → GitHub Pages.

Angular 21 SPA: standalone components, signals, **zoneless**, `@defer` for below-the-fold sections, View Transitions API for card→case-study morphs. Two routes only: `/` (single-page scroll sections) and `/projects/:slug` (case studies).

## Rules (do not break these)

1. **Zero UI/animation libraries.** Every effect (particle canvas, 3D tilt, magnetic buttons, typewriter, scroll reveals, count-ups) is hand-rolled on purpose — the implementation IS the evidence of skill the portfolio exists to show. Do not add component/animation/CSS frameworks.
2. **No confidential Simultrayd data.** The professional case studies describe architecture and impact in aggregate. Never add client names, real quota/revenue numbers, internal field ids, API keys, or platform internals. When updating case studies, keep the same abstraction level as the existing copy.
3. **The terminal is a toy, offline, and stays that way.** `features/terminal` is a hardcoded command switch (`help`, `sudo hire-me`, etc.). No LLM integration, no network calls, no eval. Owner explicitly vetoed "wake up, Neo" copy — don't reintroduce it.
4. **Content lives in `src/app/data/` only.** Copy, projects, skills, timeline, links — all edits happen in the data layer; components render whatever is there. If a content change requires touching a component, the data model is wrong — fix the model.
5. **Bilingual with EN as source of truth** (`data/i18n/en.ts` defines `Dict`; `es.ts: Dict` — the compiler enforces parity). Note this is the *opposite* of RoadMap2U (ES-first). Never hardcode user-facing strings in templates.
6. **`prefers-reduced-motion` respected everywhere.** Any new effect must check it (see `fx.service.ts` / existing directives) and degrade to static.
7. **Privacy-light analytics only.** GoatCounter (no cookies), loaded by `core/analytics.service.ts` only when `GOATCOUNTER_CODE` in `data/profile.ts` is non-null. No other trackers.

## Map

```
src/app/
  core/     i18n.service.ts (signal lang, persisted) · analytics.service.ts (GoatCounter)
            github.service.ts (live public-API stats card, deferred) · fx.service.ts (motion gate)
            tilt.directive.ts · magnetic.directive.ts · reveal.directive.ts
  data/     profile.ts (name, links, hero roles, stats, openToWork flag, GOATCOUNTER_CODE)
            projects.ts (cards + case studies, EN/ES) · skills.ts · experience.ts · i18n/{en,es}.ts
  features/ home/ (hero + all scroll sections) · project-detail/ · terminal/ (~ key) · fx/ (particles etc.)
  layout/   navbar (lang switch, theme) · footer
```

- `profile.openToWork: true` drives the visible "Open to work" hero badge — flip to `false` when hired.
- Konami code (↑↑↓↓←→←→BA) and the `~` terminal are the two easter eggs.

## Content pipeline

- Master source for professional content: Héctor's master CV (kept outside the repo, `CV_Hector_Coronado_Master_Base_*.md` in Downloads). Portfolio copy in `data/` is derived from it — when the CV changes, sync `experience.ts` / `projects.ts` / `skills.ts` / hero stats.
- **CV PDF**: source of truth `tools/cv/cv.md` → hand-styled `tools/cv/cv.html` → regenerate with the `msedge --headless=new --print-to-pdf` command in the comment at the top of `cv.html` → output `public/cv/HectorCoronado_CV.pdf` (the download button target).
- **Social share card**: `tools/og/og.html` → regenerate `public/og.png` (1200×630) with the `--screenshot` command in its header comment. Update it when the headline/roles change.

## Dev & deploy

```bash
npm install && npm start   # dev at :4200
npm run build              # → dist/portfolio/browser
```

- Push to `main` → `.github/workflows/deploy.yml`: build with `--base-href /HectorCoronadoPortfolio/` (**exact casing**), copy `index.html→404.html` (Pages SPA fallback), deploy. `workflow_dispatch` is enabled for manual runs.
- **Pages flake playbook** (same as RoadMap2U): if `deploy-pages` fails with "Deployment failed, try again later", rerunning the same run reuses the deployment id (= commit SHA) and keeps failing — **push a fresh (empty) commit** instead. If a push produces no run at all (dropped webhook), trigger via `workflow_dispatch`. Verify a deploy actually landed by comparing the `main-*.js` bundle hash in the live HTML against `dist/`.
- Layout verification: headless `msedge --window-size` screenshots **lie about mobile layout** — use playwright-core with real viewport emulation (`channel: 'msedge'`; see RoadMap2U `tools/` for the pattern).

## Related repo

`RoadMap2U` (github.com/Toydrum/RoadMap2U) is the flagship personal project featured here — its case study card should track that app's real state (live URL, screenshots). Its own `AGENTS.md` documents that codebase.
