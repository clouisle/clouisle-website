import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";
import SecurityToc from "./SecurityToc";
import SecurityFaq from "./SecurityFaq";

type SecurityPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function SecurityPage({ params }: SecurityPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].securityPage;

  return (
    <div className="security-page">
      <header className="security-header">
        <Link className="security-brand" href={`/${lang}`} aria-label="Clouisle">
          <img className="security-brand-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" aria-hidden="true" />
          <span className="security-brand-name">Clouisle</span>
        </Link>
        <h1>{t.title}</h1>
      </header>

      <div className="security-body">
        <SecurityToc sections={t.sections} label={t.title} faqTitle={t.faqTitle} />

        <div className="security-content">
          {t.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => {
                switch (block.type) {
                  case "lead":
                  case "p":
                    return <p key={index} data-variant={block.type}>{block.text}</p>;
                  case "strong":
                    return (
                      <p key={index} data-variant="strong-block">
                        <strong>{block.text}</strong>
                        {block.body && <><br />{block.body}</>}
                      </p>
                    );
                  case "list":
                    return (
                      <ul key={index}>
                        {block.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    );
                }
              })}
            </section>
          ))}
          <section className="security-faq" id="security-faq">
            <h2>{t.faqTitle}</h2>
            <div className="security-faq-list">
              <SecurityFaq faqs={t.faqs} />
            </div>
          </section>
          <a className="security-docs-link" href={t.docs.href} target="_blank" rel="noopener noreferrer">
            {t.docs.label} <span aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </div>
  );
}
