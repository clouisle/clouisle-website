import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";
import { assetUrl, pageSeoMetadata, localizedPageMetadata } from "../../seo";

type TermsPageProps = {
  params: Promise<{ lang: string }>;
};
import type { Metadata } from "next";

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const seo = pageSeoMetadata[lang].terms;
  return localizedPageMetadata(lang, seo.title, seo.description, "/terms", seo.keywords);
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].termsPage;
  const groupStarts = [0, 2, 4];
  const groups = groupStarts.map((start, index) => ({
    heading: t.sections[start].title,
    sections: t.sections.slice(start, groupStarts[index + 1] ?? t.sections.length),
  }));

  return (
    <div className="terms-page" data-locale={lang}>
      <header className="terms-header">
        <Link className="terms-brand" href={`/${lang}`} aria-label="Clouisle">
          <Image className="terms-brand-mark" src={assetUrl("clouisle-mark.svg")} alt="" aria-hidden="true" width={30} height={30} unoptimized />
          <span className="terms-brand-name">Clouisle</span>
        </Link>
        <h1>{t.title}</h1>
      </header>

      <div className="terms-content">
        <h2>{t.overviewTitle}</h2>
        <div className="terms-copy">
          {groups.map((group, index) => (
            <div className="terms-copy-group" key={group.heading}>
              {index === 0 && <p className="terms-summary">{t.summary}</p>}
              <p className="terms-subheading"><strong>{group.heading}</strong></p>
              {group.sections.map((section) => (
                <ReactMarkdown key={section.id}>{section.content}</ReactMarkdown>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
