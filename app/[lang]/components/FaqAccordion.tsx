"use client";

import { useState } from "react";
import Link from "next/link";

type Faq = {
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

export default function FaqAccordion({ faqs, idPrefix = "faq-accordion-panel" }: { faqs: Faq[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-${index}`;

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
            <div id={panelId} role="region" aria-hidden={!isOpen} inert={!isOpen} className="faq-accordion-panel">
              <div className="faq-accordion-panel-inner">
                <p>{faq.answer}</p>
                {faq.links?.length ? (
                  <ul className="faq-accordion-links">
                    {faq.links.map((link) => {
                      const external = /^(https?:|mailto:)/.test(link.href);
                      return (
                        <li key={link.href + link.label}>
                          {external ? (
                            <a href={link.href} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                              {link.label}<span aria-hidden="true"> ↗</span>
                            </a>
                          ) : (
                            <Link href={link.href}>{link.label}<span aria-hidden="true"> →</span></Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
