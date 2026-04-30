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
- `blog/` — **BR blog** (static HTML/CSS, served at `/blog/`). `blog/index.html` is the index, each post lives in `blog/<slug>/index.html`, and shared styles live in `blog/_styles.css`.
- `us/` — **Built** US site (Vite output: `index.html`, `assets/`, `dumpster/index.html`, `privacy-policy/index.html`, `blog/`, `dumpster/blog/`)
- `_us-source/` — Source code for the US React app (not served as a site; underscore prefix keeps it out of the way)

## Blog System
Each landing page has its own blog section, all sharing the visual language of their parent LP:
- **`/blog/`** (PT-BR) — static HTML, matches the BR landing page (Inter, white surface, green primary `#16a34a`).
- **`/us/blog/`** (EN, Moving) — React route `BlogIndex` + `BlogPost` rendered with the moving `Navbar`/`Footer`.
- **`/us/dumpster/blog/`** (EN, Dumpster) — same React components with `variant="dumpster"`, rendered with `DumpsterNavbar`/`DumpsterFooter`.

React blog files live in `_us-source/src/`:
- `data/blogPosts.ts` — typed posts grouped by `BlogVariant` (`moving` | `dumpster`).
- `pages/BlogIndex.tsx` — variant-aware blog index (cards with category badge, excerpt, reading time, CTA).
- `pages/BlogPost.tsx` — variant-aware single-post template (back link, h2/h3, paragraphs, pull quote, green CTA matching the site's existing button style).

To add a post: append to the right array in `data/blogPosts.ts`, then add the slug to `BLOG_POST_SLUGS` in `_us-source/vite.config.ts` so the SPA-fallback plugin writes a static `index.html` for direct URL access. Then run `cd _us-source && npm run build`.

To add a BR post: copy any folder under `blog/` to a new slug, edit the content, and add a card link in `blog/index.html`.

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

## Secrecy / Geo-Isolation (US site)
The US site must remain hidden from Brazilian audiences and search engines. Four layers protect this:
1. **`robots.txt`** at project root disallows `/us/` for all crawlers, with explicit allows for social-media link-preview bots (Facebook, WhatsApp, Twitter, LinkedIn, Slack, Telegram, Discord) so shared links still render previews.
2. **`<meta name="robots" content="noindex, nofollow, ...">`** in `_us-source/index.html` — applied to every built US page.
3. **Client-side geo-redirect** in `_us-source/index.html`: on page load, calls `https://ipapi.co/json/`; if country is `BR`, replaces location with `/`. Result is cached in `sessionStorage` so the check runs only once per session.
4. **`rel="nofollow noopener noreferrer"`** on the hidden `©` link in the BR `index.html` footer — Google won't follow this link to discover `/us/`.

## Per-Route Social Sharing Metadata
Each US route has its own `<title>`, `description`, `og:title`, `og:description`, `og:url`, `og:image`, and `twitter:image` so that link previews on WhatsApp/Facebook/Twitter/LinkedIn show the correct content + branded preview image for the page being shared:
- `/us/` → "Olivar Scale Jobs — Booked Moving Jobs On Demand" + `og-moving.png` (set in `_us-source/index.html`)
- `/us/dumpster` → "Olivar Scale Jobs — 50-90+ Booked Dumpster Rentals Per Week" + `og-dumpster.png`
- `/us/privacy-policy` → "Privacy Policy — Olivar Scale Jobs" + `og-privacy.png`

The per-route metadata for `dumpster` and `privacy-policy` is injected at build time by the `spaFallbackPlugin` in `_us-source/vite.config.ts`. To change titles/descriptions/images for those routes, edit the `ROUTE_META` map at the top of that file and rebuild.

### OG preview images (1200×630)
Located in `_us-source/public/` and copied to `us/og-*.png` at build time:
- `og-moving.png` — moving truck background + "Booked Moving Jobs On Demand" headline
- `og-dumpster.png` — dumpster truck background + "Booked Dumpster Rentals Per Week" headline
- `og-privacy.png` — generic background + "Privacy Policy" headline

To regenerate them after editing the source backgrounds or copy: drop new `og-bg-moving.png` / `og-bg-dumpster.png` into `_us-source/public/`, then composite the text overlays via the `sharp` script (see chat history for the exact code, or recreate by loading background → resize cover 1200×630 right-anchored → overlay an SVG with a left-side dark green gradient + Inter-style headline + green eyebrow "OLIVAR SCALE JOBS" + subtitle + green underline accent).

## Hidden Cross-Site Navigation
- **BR → US (Moving home):** the `©` symbol in the BR `index.html` footer is wrapped in an invisible `<a href="/us/">`.
- **US → BR (escape hatch):** the final period (`.`) after "All rights reserved" in `Footer.tsx` (Moving page) and `dumpster/DumpsterFooter.tsx` (Dumpster page) is wrapped in a plain `<a href="/">` that triggers a full page navigation out of the React SPA back to the BR site.
- **Internal US (already in the source):** the `©` on the Moving page footer links to `/dumpster`, and the `©` on the Dumpster page footer links back to `/` (Moving). Both are owner-only navigation cues styled to look like plain text.

Traffic to the US site should come exclusively from paid ads (Google/Meta Ads geo-targeted to the US), direct outreach, QR codes, or email signatures — not organic search.

## Deployment
- **Target**: Static site
- **Public directory**: `.` (project root) — both `index.html` (BR) and `us/` (built US site) ship together.
- The `_us-source/` folder ships too but contains no `index.html`, so it isn't a discoverable site.
