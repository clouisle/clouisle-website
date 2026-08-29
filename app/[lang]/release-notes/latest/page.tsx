import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale } from "../../../i18n/translations";
import ReleaseNotes from "./ReleaseNotes";

export { generateStaticParams } from "../../generateStaticParams";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: `${translations[lang].releaseNotes.eyebrow} | ${translations[lang].releaseNotes.title}`,
    description: translations[lang].releaseNotes.title,
  };
}

export default async function ReleaseNotesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  return <ReleaseNotes lang={lang} t={translations[lang].releaseNotes} />;
}
