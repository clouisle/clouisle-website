"use client";

import type { Translations } from "../../i18n/translations";

export default function FinalCta({ t }: { t: Translations }) {
  return (
    <section className="final-cta">
      <h2>{t.finalCta.title}</h2>
      <div className="final-plan-grid">
        {t.finalCta.plans.map((plan, index) => (
          <article className="final-plan-card" key={plan.name}>
            <span className="final-plan-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
          </article>
        ))}
      </div>
      <p className="final-cta-note">{t.finalCta.availability}</p>
    </section>
  );
}
