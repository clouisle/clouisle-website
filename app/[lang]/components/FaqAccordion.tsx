"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-accordion-panel-${index}`;

        return (
          <div className="faq-accordion-item" data-open={isOpen} key={faq.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((current) => current === index ? null : index)}
            >
              <svg className="faq-accordion-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{faq.question}</span>
            </button>
            <div id={panelId} role="region" aria-hidden={!isOpen} className="faq-accordion-panel">
              <div className="faq-accordion-panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
