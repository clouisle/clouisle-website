# Release notes postcard reproduction Design Document

## Background & Goals
- Replace the placeholder release-notes detail layout with the observed Dia-style release-note surface already represented by the local route and assets.
- Preserve Clouisle's bilingual content model while reproducing the observable postcard interaction: two-sided card, pointer tilt/sheen, entrance motion, metadata strip, and past-issues cards.
- Keep all release copy in `app/i18n/release-notes/en.ts` and `app/i18n/release-notes/zh.ts`; no hardcoded user-facing release copy in components.

Success criteria:
- `/en/release-notes` and `/zh/release-notes` render localized release cards.
- Each generated detail route renders the selected release, supports click/tap flipping, mouse tilt on the front, reduced-motion behavior, and mobile layout.
- Detail metadata and Past Issues use the same release data and remain localized.
- `npm run build` passes with all static locale/slug routes generated.

## High-Level Design
- `app/[lang]/release-notes/page.tsx` remains the server-rendered release index and links to localized detail routes.
- `app/[lang]/release-notes/[slug]/page.tsx` remains the server-rendered data selector and composes client interaction components.
- `app/[lang]/release-notes/Postcard.tsx` owns only browser interaction state and animation frames; release copy and asset paths are passed as props.
- `app/[lang]/release-notes/ReleaseMetadata.tsx` owns the compact metadata strip and digit rollers.
- `app/[lang]/release-notes/PastIssues.tsx` owns viewport reveal state and reuses the release-card visual language.
- `app/globals.css` owns the release-note visual system, responsive breakpoints, dark color-scheme overrides, and reduced-motion fallback.
- Local release-note images and self-hosted fonts live under `public/clouisle-assets/release-notes/` and `public/fonts/`.

## Implementation Plan

### Stage 1: Data and route contract
- **Files modified**: `app/i18n/types.ts`, `app/i18n/release-notes/en.ts`, `app/i18n/release-notes/zh.ts`, `app/[lang]/release-notes/page.tsx`, `app/[lang]/release-notes/[slug]/page.tsx`
- **Specific logic**: Keep the existing typed release records as the single source for cards and detail pages. Add only metadata fields that the rendered detail strip needs, with both locales populated.
- **Validation**: Confirm every English release has a matching Chinese slug and all required fields; confirm links preserve the current locale segment.

### Stage 2: Interactive postcard
- **Files modified**: `app/[lang]/release-notes/Postcard.tsx`, `app/globals.css`
- **Specific logic**: Add front/back faces, click/tap flip, mouse-only pointer tilt, sheen variables, entrance motion, and `prefers-reduced-motion` handling. Keep the front decorative and the back readable.
- **Validation**: Verify the flip control has an accessible label and that pointer leave clears tilt state; verify reduced-motion users receive no entrance or pointer animation.

### Stage 3: Metadata and Past Issues
- **Files modified**: `app/[lang]/release-notes/ReleaseMetadata.tsx`, `app/[lang]/release-notes/PastIssues.tsx`, `app/globals.css`
- **Specific logic**: Render localized date/location/issue/version metadata and bounded digit rollers. Reveal the Past Issues heading/cards through `IntersectionObserver` without hiding content when scripting is unavailable.
- **Validation**: Verify metadata wraps or scrolls safely on narrow screens; verify Past Issues is visible before and after the observer transition.

### Stage 4: Route integration and responsive styling
- **Files modified**: `app/[lang]/release-notes/[slug]/page.tsx`, `app/globals.css`
- **Specific logic**: Compose the detail page with shared back navigation, metadata, postcard, and past issues. Keep the existing shared `PageShell` chrome intact. Use a single-column mobile layout and touch-safe controls.
- **Validation**: Run the production build and inspect generated locale/slug route output. Check both locales and a narrow-width rendering path without starting a development server.

### Stage 5: Verification and documentation
- **Files modified**: `docs/IMPLEMENTATION_PLAN.md`, this document
- **Specific logic**: Mark completed implementation stages after build and static route generation pass. Browser verification is intentionally excluded because the repository rules prohibit starting browser sessions without explicit permission.
- **Validation**: `npm run build`; verify output includes both locales and all release slugs.

## Testing Strategy
- Happy path: localized index cards link to each matching detail route; detail route selects the correct release and renders its copy/features.
- Interaction: click/tap the postcard to flip and flip back; pointer movement changes tilt only for a mouse pointer on the front; pointer leave clears tilt variables.
- Error path: unknown locale and unknown slug use `notFound()`; all metadata fields are required by the typed release record.
- Accessibility: flip control has an accessible label, decorative images are hidden from assistive technology, and reduced-motion users receive no continuous roller/tilt motion.
- Regression: existing home/security routes continue through `PageShell`; TypeScript/build checks cover all statically generated locale and release routes.

## Risks & Mitigation
- `framer-motion` can increase client JavaScript; keep it isolated to the postcard and use CSS for static decoration.
- Continuous animation can waste battery; stop pointer state on leave, disable touch sheen, and honor reduced motion.
- Release metadata is content-specific; derive it from typed localized release data and avoid hardcoded per-component copy.
- Original source uses proprietary assets and behavior; local assets are used only where already harvested, while Clouisle release copy remains local and bilingual.
- Rollback: revert the release-notes component/style/data changes and remove the isolated font/dependency additions; shared home/security components remain untouched.
