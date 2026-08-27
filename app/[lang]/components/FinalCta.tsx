"use client";

import { useEffect, useRef, useState } from "react";

import type { Translations } from "../../i18n/translations";

export default function FinalCta({ t }: { t: Translations }) {
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const [titleInView, setTitleInView] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 1)) {
          setTitleInView(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="final-cta">
      <h2>
        <span
          ref={titleRef}
          className={`chroma-text${titleInView ? " chroma-text-animate" : ""}`}
        >
          {t.finalCta.title}
        </span>
      </h2>
      <div className="final-plan-grid">
        {t.finalCta.plans.map((plan) => (
          <article className="final-plan-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <div className="final-plan-price">
              <strong>{plan.price}</strong>
              {plan.period && <span>{plan.period}</span>}
            </div>
            <p className="final-plan-description">{plan.description}</p>
            <span className="final-plan-action" aria-hidden="true">{plan.action}</span>
            <div className="final-plan-features">
              <h4>{t.finalCta.featuresTitle}</h4>
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
          </article>
        ))}
      </div>
      <p className="privacy-link">{t.finalCta.availability} <span aria-hidden="true">&rarr;</span></p>
    </section>
  );
}
