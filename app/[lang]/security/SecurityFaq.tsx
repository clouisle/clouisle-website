"use client";

import { useState } from "react";

type Faq = { question: string; answer: string[] };

function FaqItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);
  const regionId = `security-faq-panel-${index}`;
  return (
    <div className="security-faq-item" data-open={open}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg className="security-faq-plus" width="17" height="18" viewBox="0 0 17 18" fill="none" aria-hidden="true">
          <path d="M16.875 9C16.875 9.54688 16.4453 9.9375 15.9375 9.9375H9.6875V16.1875C9.6875 16.7344 9.25781 17.1641 8.75 17.1641C8.20312 17.1641 7.8125 16.7344 7.8125 16.1875V9.9375H1.5625C1.01562 9.9375 0.625 9.54688 0.625 9.03906C0.625 8.49219 1.01562 8.0625 1.5625 8.0625H7.8125V1.8125C7.8125 1.30469 8.20312 0.914062 8.75 0.914062C9.25781 0.914062 9.6875 1.30469 9.6875 1.8125V8.0625H15.9375C16.4453 8.0625 16.875 9.54688 16.875 9Z" fill="currentColor" />
        </svg>
        {faq.question}
      </button>
      <div id={regionId} role="region" className="security-faq-panel">
        <div className="security-faq-panel-inner">
          {faq.answer.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
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
