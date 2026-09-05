"use client";

import type { Translations } from "../../i18n/translations";
import ChromaText from "./ChromaText";

export default function PlansSection({ t }: { t: Translations }) {
  return (
    <section className="plans-section">
      <div className="plans-layout">
        <h2>
          <ChromaText>{t.plans.title}</ChromaText>
        </h2>
        <div className="pricing-plan-grid">
          {t.plans.items.map((plan) => (
            <article className="pricing-plan-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="pricing-plan-description">{plan.description}</p>
              {plan.href ? (
                <a className="pricing-plan-action" href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.action}
                </a>
              ) : (
                <span className="pricing-plan-action" aria-hidden="true">{plan.action}</span>
              )}
              <div className="pricing-plan-features">
                <h4>{t.plans.featuresTitle}</h4>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.secondaryHref && plan.secondaryAction ? (
                <a className="pricing-plan-secondary-action" href={plan.secondaryHref} target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.647 1.653.24 2.873.12 3.176.765.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  {plan.secondaryAction}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
