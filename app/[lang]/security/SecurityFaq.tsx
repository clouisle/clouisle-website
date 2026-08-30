"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

function FaqItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `security-faq-panel-${index}`;

  return (
    <div className="security-faq-item" data-open={open}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg className="security-faq-plus" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span>{faq.question}</span>
      </button>
      <div id={panelId} role="region" aria-hidden={!open} className="security-faq-panel">
        <div className="security-faq-panel-inner">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function SecurityFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {faqs.map((faq, index) => (
        <FaqItem faq={faq} index={index} key={faq.question} />
      ))}
    </>
  );
}
