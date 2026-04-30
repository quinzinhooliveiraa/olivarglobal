# Olivar Global Sales — Multi-Site Landing

## Project Overview
This project hosts **two sites on the same domain**:

1. **Olivar Global Sales (BR)** — root `/`
   Static landing page in Portuguese (pt-BR) for B2B prospecting/sales services targeting the USA market.
2. **Olivar Scale Jobs (US)** — hidden routes under `/us/`
   React/Vite SPA from the `mover-dumpster-fusion` codebase. Not linked from the BR site; only accessible by direct URL.
   - `/us/` — Moving service homepage
   - `/us/dumpster` — Dumpster service page
   - `/us/privacy-policy` — Privacy policy

## Tech Stack
- **BR site**: Pure HTML5/CSS3/Vanilla JS (no build), Inter font, HubSpot form, WhatsApp redirect
- **US site**: React 18 + Vite 5 + TypeScript + Tailwind + shadcn/ui + react-router-dom
- **Server**: Python `http.server` serving static files from project root

## Project Structure
- `index.html` — BR landing page (single file with embedded CSS/JS)
- `images/prova-social/` — BR social proof gallery
- `us/` — **Built** US site (Vite output: `index.html`, `assets/`, `dumpster/index.html`, `privacy-policy/index.html`)
- `_us-source/` — Source code for the US React app (not served as a site; underscore prefix keeps it out of the way)

## Running the App
- **Workflow**: `Start application`
- **Command**: `python3 -m http.server 5000 --bind 0.0.0.0`
- **Port**: 5000

## Rebuilding the US Site
After editing anything in `_us-source/`:
```bash
cd _us-source && npm run build
```
This rebuilds into `us/` and recreates the SPA-fallback copies of `index.html` at `us/dumpster/` and `us/privacy-policy/` automatically (via the `spaFallbackPlugin` in `_us-source/vite.config.ts`).

## Key Configuration Notes
- `_us-source/vite.config.ts` sets `base: "/us/"` and `build.outDir: "../us"`.
- `_us-source/src/App.tsx` uses `<BrowserRouter basename="/us">` so the React Router paths resolve correctly under the `/us/` prefix.
- The SPA-fallback plugin duplicates `us/index.html` into each route folder so direct visits to `/us/dumpster` or `/us/privacy-policy` work on a static server (no rewrite rules needed).

## Deployment
- **Target**: Static site
- **Public directory**: `.` (project root) — both `index.html` (BR) and `us/` (built US site) ship together.
- The `_us-source/` folder ships too but contains no `index.html`, so it isn't a discoverable site.
