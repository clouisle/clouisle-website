import Link from "next/link";
import { notFound } from "next/navigation";

import { hasLocale, translations } from "../../../i18n/translations";

type ReleaseDetailPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const lang of ["en", "zh"] as const) {
    for (const release of translations[lang].releaseNotes.releases) {
      slugs.add(release.slug);
    }
  }
  return [...slugs].map((slug) => ({ slug }));
}

export default async function ReleaseDetailPage({ params }: ReleaseDetailPageProps) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].releaseNotes;
  const release = t.releases.find((item) => item.slug === slug);
  if (!release) notFound();

  return (
    <div className="release-page">
      <Link className="release-back" href="release-notes">
        <span aria-hidden="true">&larr;</span> {t.backLabel}
      </Link>

      <article className="release-detail">
        <header className="release-detail-meta">
          <div className="release-card-labels">
            <span className="release-label">{release.issue}</span>
            <span className="release-label">{release.date}</span>
            <span className="release-label">{release.version}</span>
          </div>
          <h1 className="release-detail-title">{release.cardTitle}</h1>
          <p className="release-greeting">{release.greeting}</p>
        </header>

        <div className="release-detail-cover">
          <img src={release.cover} alt="" />
          <img className="release-paperclip" src="/clouisle-assets/release-notes/paperclip.png" alt="" aria-hidden="true" />
        </div>

        <div className="release-detail-body">
          {release.message.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <h2 className="release-features-title">{t.newFeaturesLabel}</h2>
          <ul className="release-features">
            {release.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="release-signoff">{release.signOff}</p>
        </div>
      </article>
    </div>
  );
}