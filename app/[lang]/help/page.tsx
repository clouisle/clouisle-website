import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";

type HelpPageProps = {
  params: Promise<{ lang: string }>;
};
import type { Metadata } from "next";

export async function generateMetadata({ params }: HelpPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = translations[lang].helpPage;
  return {
    title: `${t.title} | Clouisle`,
    description: t.description,
    alternates: {
      languages: {
        en: "/en/help",
        "zh-CN": "/zh/help",
      },
    },
  };
}

export default async function HelpPage({ params }: HelpPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].helpPage;

  return (
    <div className="help-page">
      <header className="help-brand">
        <Link className="help-brand-link" href={`/${lang}`} aria-label="Clouisle">
          <img className="help-brand-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" aria-hidden="true" />
          <span className="help-brand-name">Clouisle</span>
        </Link>
      </header>

      <p className="help-description">{t.description}</p>

      <section className="help-chat" aria-label={t.chatPlaceholder}>
        {/* Reserved area: the AI chat box will be embedded here via an iframe. */}
        <p className="help-chat-placeholder">{t.chatPlaceholder}</p>
      </section>
    </div>
  );
}