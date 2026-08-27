# Subscription Plan Cards Design Document

## Background & Goals

The final CTA currently contains the page title and a small note after its former download button was removed. Replace that button area with three subscription-plan cards that fit the existing Clouisle landing-page visual language.

Success criteria:

- The Chinese page shows exactly three plans: `免费版`, `Plus 会员`, and `定制`.
- The English page shows the corresponding `Free`, `Plus`, and `Custom` plans.
- Cards use localized data rather than hardcoded component copy.
- Desktop layout uses three columns; narrow screens stack the cards vertically.
- Pricing is expressed without numeric amounts until commercial pricing is supplied.
- CTA labels are visual-only until real destination URLs are supplied.

## High-Level Design

`app/i18n/translations.ts` owns the localized plan names, non-monetary pricing expressions, descriptions, action labels, and feature lists. `app/[lang]/components/FinalCta.tsx` maps the plan data into semantic `<article>` cards. `app/globals.css` supplies the reference-style light cards, colored top marks, typography, and responsive layout.

The cards now mirror the supplied pricing-card form without inventing numeric prices or purchase behavior. CTA labels are presented visually and remain non-interactive until destinations are provided.

## Implementation Plan

### Stage 1: Define localized plan data

- **Files modified**: `app/i18n/translations.ts`
- **Specific logic**: Extend `finalCta` with a typed `plans` array containing `name`, non-monetary `price`, `period`, `description`, `action`, and `features`; provide three English and three Chinese entries.
- **Validation**: TypeScript build confirms both locale objects satisfy the shared translation type.

### Stage 2: Replace the final CTA button area

- **Files modified**: `app/[lang]/components/FinalCta.tsx`
- **Specific logic**: Render a three-item plan grid between the title and note. Each card contains a decorative mark, plan name, non-monetary pricing row, description, visual CTA label, core-capabilities label, and feature list. Use stable plan names as keys and semantic article/card markup.
- **Validation**: Inspect the generated route markup through the build output and verify exactly three plan entries and feature lists per locale.

### Stage 3: Add responsive card presentation

- **Files modified**: `app/globals.css`
- **Specific logic**: Add the supplied reference structure on the existing light page palette: white bordered cards, colored top marks, compact visual CTAs, feature dividers, and feature-list typography. Use three columns above the mobile breakpoint and a single-column stack below it.

### Stage 4: Final verification and plan status

- **Files modified**: `docs/IMPLEMENTATION_PLAN.md`
- **Specific logic**: Mark completed implementation tasks after build verification.
- **Validation**: `npm run build` passes with both localized static routes generated.
### Stage 5: Apply reference-style pricing card treatment

- **Files modified**: `app/i18n/translations.ts`, `app/[lang]/components/FinalCta.tsx`, `app/globals.css`
- **Specific logic**: Add non-monetary pricing expressions (`免费使用`, `按月订阅`, `按需报价`), visual CTA labels, and localized capability lists. Keep CTA elements non-interactive until real links exist.
- **Validation**: Run the production build and verify no numeric price or fake navigation was introduced.

## Testing Strategy

- Happy path: build `/en` and `/zh` and confirm both locale dictionaries include three plans with localized pricing expressions and feature lists.
- Regression: confirm the final CTA title and note still render and existing Hero/download interactions remain untouched.
- Responsive contract: inspect the CSS rules for three columns above the mobile breakpoint and one column below it.
- Negative scope check: confirm pricing uses no unsupported numeric amounts and visual CTA labels do not pretend to navigate.

## Risks & Mitigation

- **Missing commercial details**: numeric prices, limits, and purchase URLs are intentionally omitted; non-monetary labels preserve the visual hierarchy without misleading subscription claims.
- **Long localized text**: descriptions use constrained card widths and natural wrapping; mobile cards stack to avoid horizontal overflow.
- **Existing uncommitted asset**: `public/clouisle-assets/hero.png` is pre-existing user work and will not be modified.

Rollback: revert the plan-data, component, style, and plan-index commits together; no other page section depends on the new `finalCta.plans` field.
