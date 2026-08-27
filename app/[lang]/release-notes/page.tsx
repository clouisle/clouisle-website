import Link from "next/link";
import { notFound } from "next/navigation";
export { generateStaticParams } from "../generateStaticParams";

import { hasLocale, translations } from "../../i18n/translations";

type ReleaseNotesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ReleaseNotesPage({ params }: ReleaseNotesPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].releaseNotes;

  return (
    <div className="security-page">
      <header className="security-header">
        <Link className="security-brand" href={`/${lang}`} aria-label="Clouisle">
          <img className="security-brand-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" aria-hidden="true" />
          <span className="security-brand-name">Clouisle</span>
        </Link>
        <h1>{t.title}</h1>
      </header>

      <div className="release-list">
        {t.releases.map((release) => (
          <article className="release-item" key={release.version}>
            <div className="release-meta">
              <h2>{release.version}</h2>
              <time>{release.date}</time>
            </div>
            <div className="release-body">
              {release.summary && <p className="release-summary">{release.summary}</p>}
              <ul className="release-features">
                {release.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}