# Release notes postcard reproduction Design Document

## Background & Goals
- Replace the placeholder release-notes detail layout with the observed Dia-style release-note surface already represented by the local route and assets.
- Make `/[lang]/release-notes` the stable entry URL that redirects to the first (newest) localized release; historical releases remain reachable exclusively from the active release's Past Issues surface.
- Keep all release copy in `app/i18n/release-notes/en.ts` and `app/i18n/release-notes/zh.ts`; no hardcoded user-facing release copy in components.

Success criteria:
- `/en/release-notes` and `/zh/release-notes` redirect to their localized newest release detail route.
- Each generated detail route renders the selected release, supports click/tap flipping, mouse tilt on the front, reduced-motion behavior, and mobile layout.
- Detail metadata and Past Issues use the same release data and remain localized; no independent listing page is rendered.
- `npm run build` passes with all static locale/slug routes generated.

## High-Level Design
- `app/[lang]/release-notes/page.tsx` remains a server-rendered stable entry route and redirects to the first localized release record.
- `app/[lang]/release-notes/[slug]/page.tsx` remains the only rendered release surface; Past Issues supplies links to older entries.
- `app/[lang]/release-notes/Postcard.tsx` owns only browser interaction state and animation frames; release copy and asset paths are passed as props.
- `app/[lang]/release-notes/ReleaseMetadata.tsx` owns the compact metadata strip and digit rollers.
- `app/[lang]/release-notes/PastIssues.tsx` owns viewport reveal state and reuses the release-card visual language.
- `app/globals.css` owns the release-note visual system, responsive breakpoints, dark color-scheme overrides, and reduced-motion fallback.
- Local release-note images and self-hosted fonts live under `public/clouisle-assets/release-notes/` and `public/fonts/`.

## Implementation Plan

### Stage 1: Data and route contract
- **Files modified**: `app/i18n/types.ts`, `app/i18n/release-notes/en.ts`, `app/i18n/release-notes/zh.ts`, `app/[lang]/release-notes/page.tsx`, `app/[lang]/release-notes/[slug]/page.tsx`
- **Specific logic**: Keep the existing typed release records as the single source for detail pages. Treat the first record as newest, redirect the stable entry route to it, and populate the metadata fields in both locales.
- **Validation**: Confirm every English release has a matching Chinese slug, all required fields, and the same newest record; confirm the entry redirect and historical links preserve the current locale segment.

### Stage 2: Interactive postcard
- **Specific logic**: Add front/back faces, click/tap flip, scroll-position-triggered flip while the card moves through the viewport, mouse-only pointer tilt, sheen variables, entrance motion, and `prefers-reduced-motion` handling. Keep the front decorative and the back readable.
- **Validation**: Verify the flip control has an accessible label, scrolling past the viewport threshold flips the card and scrolling back restores the front, and pointer leave clears tilt state; verify reduced-motion users receive no entrance or pointer animation.

### Stage 3: Metadata and Past Issues
- **Files modified**: `app/[lang]/release-notes/ReleaseMetadata.tsx`, `app/[lang]/release-notes/PastIssues.tsx`, `app/globals.css`
- **Specific logic**: Render localized date/location/issue/version metadata and bounded digit rollers. Reveal the Past Issues heading/cards through `IntersectionObserver` without hiding content when scripting is unavailable.
- **Validation**: Verify metadata wraps or scrolls safely on narrow screens; verify Past Issues is visible before and after the observer transition.

### Stage 4: Route integration and responsive styling
- **Files modified**: `app/[lang]/release-notes/[slug]/page.tsx`, `app/globals.css`
- **Specific logic**: Compose the only rendered release page with metadata, postcard, and past issues. Keep the existing shared `PageShell` chrome intact. Use a single-column mobile layout and touch-safe controls.
- **Validation**: Run the production build and inspect generated locale/slug route output. Check the stable entry redirect and a narrow-width rendering path without starting a development server.

### Stage 5: Verification and documentation
- **Files modified**: `docs/IMPLEMENTATION_PLAN.md`, this document
- **Specific logic**: Mark completed implementation stages after build and static route generation pass. Browser verification is intentionally excluded because the repository rules prohibit starting browser sessions without explicit permission.
- **Validation**: `npm run build`; verify output includes both locales and all release slugs.

## Testing Strategy
- Happy path: the stable localized entry route redirects to the first localized release; its Past Issues cards link to each older matching detail route.
- Interaction: click/tap the postcard to flip and flip back; pointer movement changes tilt only for a mouse pointer on the front; pointer leave clears tilt variables.
- Error path: unknown locale and unknown slug use `notFound()`; all metadata fields are required by the typed release record.
- Accessibility: flip control has an accessible label, decorative images are hidden from assistive technology, and reduced-motion users receive no continuous roller/tilt motion.
- Regression: existing home/security routes continue through `PageShell`; TypeScript/build checks cover all statically generated locale and release routes.

## Risks & Mitigation
- `framer-motion` can increase client JavaScript; keep it isolated to the postcard and use CSS for static decoration.
- Continuous animation can waste battery; stop pointer state on leave, disable touch sheen, and honor reduced motion.
- Release ordering defines the newest entry; keep the newest localized record first in both locale arrays when publishing.
- Original source uses proprietary assets and behavior; local assets are used only where already harvested, while Clouisle release copy remains local and bilingual.
- Rollback: revert the release-notes component/style/data changes and remove the isolated font/dependency additions; shared home/security components remain untouched.
