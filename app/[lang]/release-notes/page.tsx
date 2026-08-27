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
    <div className="release-page">
      <h1 className="release-title">{t.title}</h1>

      <div className="release-grid">
        {t.releases.map((release) => (
          <Link className="release-card" href={`release-notes/${release.slug}`} key={release.slug}>
            <div className="release-card-labels">
              <span className="release-label">{release.issue}</span>
              <span className="release-label">{release.date}</span>
            </div>
            <div className="release-cover">
              <img src={release.cover} alt="" />
              <img className="release-paperclip" src="/clouisle-assets/release-notes/paperclip.png" alt="" aria-hidden="true" />
              <img className="release-polaroid" src="/clouisle-assets/release-notes/polaroid.png" alt="" aria-hidden="true" />
            </div>
            <h2 className="release-card-title">{release.cardTitle}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}