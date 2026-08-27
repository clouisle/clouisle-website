import { notFound, redirect } from "next/navigation";

import { hasLocale, translations } from "../../i18n/translations";

export { generateStaticParams } from "../generateStaticParams";

type ReleaseNotesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ReleaseNotesPage({ params }: ReleaseNotesPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const latestRelease = translations[lang].releaseNotes.releases[0];
  if (!latestRelease) notFound();

  redirect(`/${lang}/release-notes/${latestRelease.slug}`);
}