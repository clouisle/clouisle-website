import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";
import SecurityToc from "./SecurityToc";
import FaqAccordion from "../components/FaqAccordion";
import { assetUrl, pageSeoMetadata, localizedPageMetadata } from "../../seo";
type SecurityPageProps = {
  params: Promise<{ lang: string }>;
};
import type { Metadata } from "next";

export async function generateMetadata({ params }: SecurityPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const seo = pageSeoMetadata[lang].security;
  return localizedPageMetadata(lang, seo.title, seo.description, "/security", seo.keywords);
}

export default async function SecurityPage({ params }: SecurityPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].securityPage;

  return (
    <div className="security-page">
      <header className="security-header">
        <Link className="security-brand" href={`/${lang}`} aria-label="Clouisle">
          <Image className="security-brand-mark" src={assetUrl("clouisle-mark.svg")} alt="" aria-hidden="true" width={30} height={30} unoptimized />
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
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </section>
          ))}
          <section className="security-faq" id="security-faq">
            <h2>{t.faqTitle}</h2>
            <div className="faq-accordion-list">
              <FaqAccordion faqs={t.faqs} />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
