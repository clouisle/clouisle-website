import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";

type PrivacyPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].privacyPage;
  const groupStarts = [0, 3, 6];
  const groups = groupStarts.map((start, index) => ({
    heading: t.sections[start].title,
    sections: t.sections.slice(start, groupStarts[index + 1] ?? t.sections.length),
  }));

  return (
    <div className="privacy-page" data-locale={lang}>
      <header className="privacy-header">
        <Link className="privacy-brand" href={`/${lang}`} aria-label="Clouisle">
          <img className="privacy-brand-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" aria-hidden="true" />
          <span className="privacy-brand-name">Clouisle</span>
        </Link>
        <h1>{t.title}</h1>
      </header>

      <div className="privacy-content">
        <h2>{t.overviewTitle}</h2>
        <div className="privacy-copy">
          {groups.map((group, index) => (
            <div className="privacy-copy-group" key={group.heading}>
              {index === 0 && <p className="privacy-summary">{t.summary}</p>}
              <p className="privacy-subheading"><strong>{group.heading}</strong></p>
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
