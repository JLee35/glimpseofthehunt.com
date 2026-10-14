# glimpseofthehunt.com

Business website for Glimpse of the Hunt, a taxidermy shop in Selah, WA (Erick Bond).

## Project type

Plain static single-page site. No framework, no build pipeline, no JavaScript.

## Key files

- `index.html` — the entire site (~500 lines); all content lives here
- `css/index.css` — all custom styles
- `img/` — logo (multi-resolution PNGs), gallery images (.jp2), and icon SVGs
- `CNAME` — GitHub Pages custom domain marker; must not be removed

`package.json` declares Bootstrap, jQuery, and motion-ui but these are vestigial — they are not used by the site. The page loads Foundation CSS from an AWS CloudFront CDN and Font Awesome 4.7 from cdnjs.

## Tech stack

- **Foundation CSS** — loaded from CDN, not npm
- **Font Awesome 4.7** — loaded from cdnjs
- **JPEG 2000 (.jp2)** — all gallery images use this format (Safari-optimized compression)
- **No JavaScript** — smooth scrolling and nav animations are pure CSS

## Running locally

No build step required. Serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Deployment

GitHub Pages serves the `master` branch at `glimpseofthehunt.com`. Pushing to master deploys automatically. The `CNAME` file must remain for the custom domain to work.

## Conventions

- Keep all site content in `index.html`; do not split into multiple HTML files
- Responsive breakpoints: 350px, 375px, 600px, 800px, 1020px
- The extras pricing table uses two layouts (`.extras__mobile` / `.extras__desktop`) toggled via CSS `display`
- No tests exist and none are expected
