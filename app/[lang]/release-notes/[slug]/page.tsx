import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, translations, type Locale } from "../../../i18n/translations";
import { archiveIssues } from "../../../i18n/release/archive";
import ReleaseNotes from "../latest/ReleaseNotes";

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    [...translations[lang].releaseNotes.issues, ...archiveIssues].map((issue) => ({ lang, slug: issue.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  if (!hasLocale(rawLang)) return {};
  const issue = [...translations[rawLang].releaseNotes.issues, ...archiveIssues].find((item) => item.slug === slug);
  if (!issue) return {};
  return {
    title: `${translations[rawLang].releaseNotes.title} | ${translations[rawLang].releaseNotes.eyebrow}`,
    description: issue.description,
  };
}

export default async function ReleaseNoteDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  if (!hasLocale(rawLang)) notFound();

  const lang: Locale = rawLang;
  const t = translations[lang].releaseNotes;
  const issue = [...t.issues, ...archiveIssues].find((item) => item.slug === slug);
  if (!issue) notFound();

  return (
    <ReleaseNotes
      lang={lang}
      t={{
        ...t,
        date: issue.date,
        issueNumber: issue.issueNumber.replace(/\D/g, ""),
        version: issue.version.replace(/^App\s*v/i, ""),
        greeting: issue.greeting ?? t.greeting,
        message: issue.message ?? [issue.description],
        signature: issue.signature ?? t.signature,
        heroImage: issue.heroImage ?? issue.image,
        polaroidImage: issue.polaroidImage ?? t.polaroidImage,
        gradient: issue.gradient ?? t.gradient,
      }}
    />
  );
}
