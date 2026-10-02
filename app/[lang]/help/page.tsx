import Image from "next/image";
import Link from "next/link";
import ChromaText from "../components/ChromaText";
import FaqAccordion from "../components/FaqAccordion";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";
import { assetUrl, pageSeoMetadata, localizedPageMetadata } from "../../seo";

type HelpPageProps = {
  params: Promise<{ lang: string }>;
};
import type { Metadata } from "next";

export async function generateMetadata({ params }: HelpPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const seo = pageSeoMetadata[lang].help;
  return localizedPageMetadata(lang, seo.title, seo.description, "/help", seo.keywords);
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default async function HelpPage({ params }: HelpPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].helpPage;

  return (
    <div className="help-page" data-locale={lang}>
      <header className="help-header">
        <Link className="help-brand-link" href={`/${lang}`} aria-label="Clouisle">
          <Image className="help-brand-mark" src={assetUrl("clouisle-mark.svg")} alt="" aria-hidden="true" width={30} height={30} unoptimized />
          <span className="help-brand-name">Clouisle</span>
        </Link>
        <h1><ChromaText>{t.title}</ChromaText></h1>
        <p className="help-description">{t.description}</p>
        <nav className="help-jump" aria-label={t.jump.label}>
          <a href="#help-start">{t.jump.start}</a>
          <a href="#help-faq">{t.jump.faq}</a>
          <a href="#help-support">{t.jump.support}</a>
        </nav>
      </header>

      <section className="help-section" id="help-start" aria-labelledby="help-start-title">
        <p className="help-eyebrow">{t.start.eyebrow}</p>
        <h2 id="help-start-title">{t.start.title}</h2>
        <div className="help-start-grid">
          {t.start.items.map((item, index) => (
            <a className="help-start-card" href={item.href} key={item.title} {...linkProps(item.href)}>
              <span className="help-start-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="help-card-more">{t.start.linkLabel}<ArrowIcon /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="help-section" id="help-faq" aria-labelledby="help-faq-title">
        <p className="help-eyebrow">{t.faq.eyebrow}</p>
        <h2 id="help-faq-title">{t.faq.title}</h2>
        <p className="help-section-intro">{t.faq.description}</p>
        <div className="help-faq-groups">
          {t.faq.groups.map((group) => (
            <div className="help-faq-group" key={group.id}>
              <h3>{group.title}</h3>
              <div className="faq-accordion-list">
                <FaqAccordion faqs={group.items} idPrefix={`help-${group.id}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="help-section" id="help-support" aria-labelledby="help-support-title">
        <p className="help-eyebrow">{t.support.eyebrow}</p>
        <h2 id="help-support-title"><ChromaText>{t.support.title}</ChromaText></h2>
        <p className="help-section-intro">{t.support.description}</p>
        <div className="help-support-grid">
          {t.support.routes.map((route) => (
            <article className="help-support-card" data-primary={route.primary ? "true" : undefined} key={route.title}>
              <span className="help-support-tag">{route.tag}</span>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <a className="help-support-action" href={route.href} {...linkProps(route.href)}>
                {route.action}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="help-checklist">
          <h3>{t.support.checklistTitle}</h3>
          <ul>
            {t.support.checklist.map((item) => (
              <li key={item}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>{t.support.checklistNote}</p>
        </div>
      </section>
    </div>
  );
}
