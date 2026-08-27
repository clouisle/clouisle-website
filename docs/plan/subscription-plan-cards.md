# Subscription Plan Cards Design Document

## Background & Goals

The final CTA currently contains the page title and a small note after its former download button was removed. Replace that button area with three subscription-plan cards that fit the existing Clouisle landing-page visual language.

Success criteria:

- The Chinese page shows exactly three plans: `免费版`, `Plus 会员`, and `定制`.
- The English page shows the corresponding `Free`, `Plus`, and `Custom` plans.
- Cards use localized data rather than hardcoded component copy.
- Desktop layout uses three columns; narrow screens stack the cards vertically.
- No unsupported prices, entitlements, or fake purchase links are introduced.
- The existing final CTA title and note remain available.

## High-Level Design

`app/i18n/translations.ts` owns the localized plan names and neutral positioning copy. `app/[lang]/components/FinalCta.tsx` maps the plan data into semantic `<article>` cards. `app/globals.css` supplies the card grid, card surface, typography, and mobile stacking rules while retaining the existing final CTA section.

The cards are informational in this iteration. Purchase actions, pricing, feature limits, and destination URLs require product decisions and are intentionally not represented as non-functional controls.

## Implementation Plan

### Stage 1: Define localized plan data

- **Files modified**: `app/i18n/translations.ts`
- **Specific logic**: Extend `finalCta` with a typed `plans` array containing `name` and `description`; provide three English and three Chinese entries.
- **Validation**: TypeScript build confirms both locale objects satisfy the shared translation type.

### Stage 2: Replace the final CTA button area

- **Files modified**: `app/[lang]/components/FinalCta.tsx`
- **Specific logic**: Render a three-item plan grid between the title and the existing note. Use stable plan names as keys and semantic article/card markup. Do not add purchase buttons without real destinations.
- **Validation**: Inspect the generated route markup through the build output and verify exactly three plan entries per locale.

### Stage 3: Add responsive card presentation

- **Files modified**: `app/globals.css`
- **Specific logic**: Add a bounded three-column grid, card borders/surfaces, plan index styling, and mobile single-column rules. Keep the existing page background and CTA typography consistent with the surrounding design.
- **Validation**: Run the production build; verify CSS parses and the route generation completes for `/en` and `/zh`. Visual browser verification is not run because starting services/browser sessions is prohibited by repository instructions.

### Stage 4: Final verification and plan status

- **Files modified**: `docs/IMPLEMENTATION_PLAN.md`
- **Specific logic**: Mark completed implementation tasks after build verification.
- **Validation**: `npm run build` passes with both localized static routes generated.

## Testing Strategy

- Happy path: build `/en` and `/zh` and confirm both locale dictionaries include three plans.
- Regression: confirm the final CTA title and note still render and existing Hero/download interactions remain untouched.
- Responsive contract: inspect the CSS rules for three columns above the mobile breakpoint and one column below it.
- Negative scope check: confirm no plan purchase buttons or unsupported price claims are rendered.

## Risks & Mitigation

- **Missing commercial details**: prices, limits, features, and purchase URLs are intentionally omitted until supplied; this prevents misleading subscription claims.
- **Long localized text**: descriptions use constrained card widths and natural wrapping; mobile cards stack to avoid horizontal overflow.
- **Existing uncommitted asset**: `public/clouisle-assets/hero.png` is pre-existing user work and will not be modified.

Rollback: revert the plan-data, component, style, and plan-index commits together; no other page section depends on the new `finalCta.plans` field.
