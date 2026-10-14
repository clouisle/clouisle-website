# Clouisle Landing

A bilingual Next.js 16 static site deployed as Cloudflare Workers Static Assets. `next build` prerenders all pages into `out/`; production requests are served as static assets without executing application code on a Worker.

## Getting Started

```bash
npm install
npm run dev
```

## Build and Preview

```bash
npm run build       # generates the static site in out/
npm run preview     # serves the static export locally with Wrangler
```

## Deploy to Cloudflare Workers Static Assets

To deploy locally, authenticate Wrangler with `npx wrangler login`, then run:

```bash
npm run deploy      # build + wrangler deploy
```

All pages, including every localized release article, are prerendered at build time. Add release Markdown in both `content/release-notes/en/` and `content/release-notes/zh/`, then rebuild and deploy. Request-time APIs, server actions, ISR and dynamic routes are intentionally unsupported; see the Next.js static export guide before adding server-dependent features.
