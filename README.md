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

### Automatic deployment on push

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys every push to `main` (and can also be started manually). Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN` — token with permission to deploy Workers and edit Workers Scripts.
- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID that owns the `clouisle-web` Worker.

Once these secrets are configured, pushing to `main` runs `npm ci` and `npm run deploy` automatically. Without the secrets, the workflow will fail at the deploy step. For a local manual deploy, authenticate Wrangler with `npx wrangler login`, then run:

```bash
npm run deploy      # build + wrangler deploy
```

All pages, including every localized release article, are prerendered at build time. Add release Markdown in both `content/release-notes/en/` and `content/release-notes/zh/`, then rebuild and deploy. Request-time APIs, server actions, ISR and dynamic routes are intentionally unsupported; see the Next.js static export guide before adding server-dependent features.
