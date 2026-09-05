"use client";

import { useState } from "react";
import type { Translations } from "../../i18n/translations";

export default function FaqSection({ t }: { t: Translations }) {
  const data = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-header">
        <span className="faq-eyebrow">{data.eyebrow}</span>
        <h2 id="faq-title" className="faq-title">{data.title}</h2>
        <p className="faq-description">{data.description}</p>
      </div>

      <div className="faq-list">
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="faq-question-btn"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleItem(index)}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" className="vertical-line" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer-panel"
                hidden={!isOpen}
              >
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
