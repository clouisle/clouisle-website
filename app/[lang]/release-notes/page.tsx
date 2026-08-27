import { notFound } from "next/navigation";
import { hasLocale, translations } from "../../i18n/translations";
import ReleaseCard from "./ReleaseCard";
export { generateStaticParams } from "../generateStaticParams";

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
        {t.releases.map((release) => <ReleaseCard key={release.slug} release={release} lang={lang} />)}
      </div>
    </div>
  );
}