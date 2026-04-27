# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project Overview
Static multi-page website for **Wander-IT** (wander-it.be) — a Belgian digital solutions company. No build step, no framework. Pure HTML/CSS/JS with Tailwind via CDN.

**Pages:** `index.html`, `a-propos.html`, `realisations.html`, `services.html`, `mentions-legales.html`, `projets/projet.html` (dynamic via `?id=N`)

## Brand Identity
- **Logo:** `assets/logo/WANDERIT_2couleurs.svg`
- **Colors:** `#F5F3EF` (bg cream), `#0B1C22` (dark text/nav), `#6B3020` (accent rust/terracotta), `#B1DCED` (light blue highlight)
- **Fonts:** Roboto Slab (headings) + Monda (body) — loaded from Google Fonts
- **Grain texture:** SVG noise filter on `body::after`, always present across all pages

## Architecture

### Global JS files (loaded on every page)
- **`translations.js`** — `window.WANDER_TRANSLATIONS` object with `fr`/`en`/`de` keys. Applied via `data-i18n="key"` attributes on elements. Page `<html>` has `data-i18n-title="key"` for `<title>`.
- **`ticker-items.js`** — `TICKER_ITEMS` array for the scrolling marquee ribbon. Add/remove items here to update the ribbon.
- **`cookie-consent.js`** — GDPR/APD-compliant cookie banner. Blocks GTM (`GTM-MGF3F5DV`) until explicit consent. Must be the **first** script in `<head>`.

### Project data (`projets/data.js`)
`window.PROJETS` — central array of project objects. `projets/projet.html` reads `?id=N` from the URL and renders the matching entry. Fields include `titre`, `client`, `technologies`, `imageCard` (3:4 ratio), `imageGrid` (16:9 ratio), `contexte` (HTML string), `logoClient`, etc.

### Animations
- `.reveal` — opacity-only reveal via IntersectionObserver (opacity 0→1). Force `.in` class to show immediately in screenshots.
- `.au` + `.d1`–`.d5` — `fadeUp` entrance animation with staggered delays.
- `.float` — gentle vertical float loop.

## Dev Commands

```bash
# Start local server (http://localhost:3000)
node scripts/serve.mjs

# Screenshot (saves to ./_dev/screenshots/screenshot-N.png)
node scripts/screenshot.mjs http://localhost:3000
node scripts/screenshot.mjs http://localhost:3000/a-propos.html
node scripts/screenshot.mjs http://localhost:3000 hero      # clips to #hero section
node scripts/screenshot.mjs http://localhost:3000 services  # clips to #services section

# Regenerate sitemap.xml from projets/data.js
node scripts/build-sitemap.mjs

# Convert images to WebP (uses sharp)
node scripts/convert-webp.mjs
```

## Local Server
- Always serve on localhost — never screenshot a `file:///` URL.
- Check if server is running before starting a new instance (`lsof -ti:3000`).

## Screenshot Workflow
- Screenshots save to `./_dev/screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Viewport: 1440×900 @2x. `.reveal` elements are force-shown before capture.
- Section labels (`hero`, `services`, `approach`, `contact`) clip to that section only.
- After screenshotting, Read the PNG — Claude can analyze it directly.
- Do at least 2 comparison rounds when matching a reference. Be specific: "heading is 32px but reference shows ~24px".

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image: design from scratch using the brand identity above.

## Output Defaults
- All styles inline in the HTML file unless told otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette. Use the brand colors above.
- **Shadows:** Layered, color-tinted shadows with low opacity — not flat `shadow-md`.
- **Typography:** Roboto Slab for headings, Monda for body. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Grain texture via SVG noise filter.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Consistent tokens — not random Tailwind steps.

## Hard Rules
- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.

## Adding a New Project
1. Add an entry to `projets/data.js` (copy an existing block, increment `id`).
2. Add images to `assets/images/projet-N/` (card: 3:4, grid: 16:9). Convert to `.webp` with `node scripts/convert-webp.mjs`.
3. Run `node scripts/build-sitemap.mjs` to update `sitemap.xml`.
4. Add translations for any new i18n keys to all three locales in `translations.js`.
