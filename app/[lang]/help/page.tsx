import Image from "next/image";
import Link from "next/link";
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

export default async function HelpPage({ params }: HelpPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].helpPage;

  return (
    <div className="help-page">
      <header className="help-brand">
        <Link className="help-brand-link" href={`/${lang}`} aria-label="Clouisle">
          <Image className="help-brand-mark" src={assetUrl("clouisle-mark.svg")} alt="" aria-hidden="true" width={30} height={30} unoptimized />
          <span className="help-brand-name">Clouisle</span>
        </Link>
      </header>
      <h1>{t.title}</h1>
      <p className="help-description">{t.description}</p>

      <section className="help-chat" aria-label={t.chatPlaceholder}>
        {/* Reserved area: the AI chat box will be embedded here via an iframe. */}
        <p className="help-chat-placeholder">{t.chatPlaceholder}</p>
      </section>
    </div>
  );
}