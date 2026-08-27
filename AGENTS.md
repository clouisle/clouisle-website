<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guide (dia-c → Clouisle landing)

## Stack & Structure

- Next.js (App Router) + Turbopack; static bilingual landing (`/en`, `/zh`).
- `app/[lang]/page.tsx` — validates the locale param, renders `Home`.
- `app/[lang]/Home.tsx` — client orchestrator: owns `menuOpen` / `filmOpen` / `downloadNotice` state, Escape-key and body-scroll-lock effects, and the locale-switch href. Composes one component per page section.
- `app/[lang]/components/` — section components (`SiteHeader`, `Hero`, `ReadsSection`, `WorkSection`, `PrivacySection`, `FinalCta`, `SiteFooter`) plus overlays (`FilmModal`, `DownloadNotice`, `LocaleNotice`), the HLS player (`MuxVideo`), and shared primitives below.
- All copy lives bilingually in `app/i18n/translations.ts`; components never hardcode user-facing text. Assets live under `public/clouisle-assets/`.
- Styling is a single global stylesheet `app/globals.css` with plain class names and media queries — no CSS modules or Tailwind.

## Reusable Animation Components

- `components/ChromaText.tsx` — Dia-style gradient sweep reveal for headings: invisible (gradient's transparent window) until fully scrolled into view, then a color band sweeps across once and settles on solid black. Props: `children`, `duration` (default `.9s`), `delay` (default `.1s`). Used by `FinalCta`.
- `components/GlyphWord.tsx` — per-letter variable-font wordmark: letters pulse in staggered, then loop a slow idle breathing animation. Props: `text`, `enterStagger` (default `.09s`), `idleStagger` (default `.28s`). Wrap in your own heading with `aria-label={text}`; it renders `aria-hidden`. Used by `Hero`.
- Both tune timing through CSS custom properties consumed by keyframes in `globals.css` (`chroma-sweep`, `dia-glyph-pulse`, `dia-glyph-idle`); defaults reproduce the current behavior exactly. Prefer these over writing new one-off animations.
