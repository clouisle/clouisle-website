"use client";

import type { Translations } from "../../i18n/translations";
import FaqAccordion from "./FaqAccordion";

export default function FaqSection({ t }: { t: Translations }) {
  const data = t.faq;

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-header">
        <span className="faq-eyebrow">{data.eyebrow}</span>
        <h2 id="faq-title" className="faq-title">{data.title}</h2>
        <p className="faq-description">{data.description}</p>
      </div>

      <div className="faq-accordion-list">
        <FaqAccordion faqs={data.items} />
      </div>
    </section>
  );
}
