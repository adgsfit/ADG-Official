# ADG — AI Developers Group

Single-page website for ADG, the AI/ML committee at SFIT.

## Stack

Static site, no build step.

| File | Purpose |
|---|---|
| `index.html` | The entire page — markup template (`<x-dc>`) + component logic (`<script data-dc-script>`) |
| `support.js` | Runtime that parses the template, compiles the JSX/logic and mounts it with React |
| `assets/adg-badge.png` | Logo / favicon (the only asset the page loads) |
| `netlify.toml` | Netlify config: publish root, cache and security headers |

`support.js` loads React 18 and Babel standalone from `unpkg.com` at runtime and compiles
the page in the browser. That means **the page needs network access to unpkg.com to render** —
see Caveats.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly via `file://` will not work — the runtime fetches `support.js`
and React over HTTP.

## Deploy (Netlify)

Connect the GitHub repo in Netlify and accept the defaults:

- **Build command:** *(none)*
- **Publish directory:** `.`

`netlify.toml` already sets both, so no manual configuration is needed. Every push to `main`
redeploys.

## Editing content

All page data (nav links, events, albums, committee structure, form links) lives in the class
at the bottom of `index.html` inside `<script data-dc-script>`. Markup lives above it inside
`<x-dc>`. There is no separate CMS or data file.

## Caveats

- **CDN dependency.** React + Babel (~1.5 MB) are fetched from unpkg on every cold load and
  JSX is compiled in the browser. If unpkg is slow or blocked, the page renders blank. Vendoring
  those three files locally, or pre-compiling, is the fix if this becomes a problem.
- **Gallery is placeholder.** The album/lightbox section ships with empty frames and copy
  prompting for real photos — no images are wired up yet.
- **Join flow** points at an external Google Form (`forms.gle`), so no form data is collected
  or stored by this site.
