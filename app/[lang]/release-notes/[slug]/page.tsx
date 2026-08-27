import Link from "next/link";
import { notFound } from "next/navigation";

import { hasLocale, translations } from "../../../i18n/translations";
import PastIssues from "../PastIssues";
import Postcard from "../Postcard";
import ReleaseMetadata from "../ReleaseMetadata";

type ReleaseDetailPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const lang of ["en", "zh"] as const) {
    for (const release of translations[lang].releaseNotes.releases) slugs.add(release.slug);
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
    <div className="release-detail-page">
      <Link className="release-back" href={`/${lang}/release-notes`}>
        <span aria-hidden="true">&larr;</span> {t.backLabel}
      </Link>
      <ReleaseMetadata release={release} labels={t.metadata} />
      <main className="release-detail-main">
        <h1 className="release-detail-title">{release.cardTitle}</h1>
        <p className="release-greeting">{release.greeting}</p>
        <Postcard release={release} flipLabel={t.postcardFlipLabel} featuresLabel={t.newFeaturesLabel} />
      </main>
      <PastIssues title={t.pastIssuesLabel} releases={t.releases.filter((item) => item.slug !== release.slug)} lang={lang} />
    </div>
  );
}