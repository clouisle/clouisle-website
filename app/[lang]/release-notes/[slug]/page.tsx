import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, translations, type Locale } from "../../../i18n/translations";
import { assetUrl, compactDescription, localizedPageMetadata } from "../../../seo";
import ReleaseNotes from "../latest/ReleaseNotes";

function getAllIssues(t: typeof translations[Locale]["releaseNotes"]): typeof t.issues {
  const latestIssue = {
    slug: "v0-2-9",
    date: t.date,
    issueNumber: `No. ${t.issueNumber}`,
    version: `App v${t.version}`,
    title: t.title,
    description: t.message.join(" "),
    image: t.heroImage,
    greeting: t.greeting,
    message: t.message,
    signature: t.signature,
    heroImage: t.heroImage,
    polaroidImage: t.polaroidImage,
    gradient: t.gradient,
  };
  return [latestIssue, ...t.issues];
}

function getIssue(t: typeof translations[Locale]["releaseNotes"], slug: string) {
  return getAllIssues(t).find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    getAllIssues(translations[lang].releaseNotes).map((issue) => ({
      lang,
      slug: issue.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  if (!hasLocale(rawLang)) return {};
  const issue = getIssue(translations[rawLang].releaseNotes, slug);
  if (!issue) return {};
  const keywords = rawLang === "zh"
    ? [`Clouisle ${issue.version}`, "Clouisle更新日志", "发布说明", issue.title]
    : [`Clouisle ${issue.version}`, "Clouisle changelog", "release notes", issue.title];
  return localizedPageMetadata(rawLang, issue.title, compactDescription(issue.description), `/release-notes/${issue.slug}`, keywords);
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
  const allIssues = getAllIssues(t);
  const currentIndex = allIssues.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) notFound();
  const issue = allIssues[currentIndex];
  const pastIssues = allIssues.slice(currentIndex + 1);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: issue.title,
    description: issue.description,
    image: issue.heroImage ?? issue.image,
    url: `https://clouisle.asia/${lang}/release-notes/${issue.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Clouisle",
      url: "https://clouisle.asia",
      logo: assetUrl("clouisle-mark.svg"),
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Clouisle Release Notes",
      url: `https://clouisle.asia/${lang}/release-notes/latest`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ReleaseNotes
        lang={lang}
        t={{
          ...t,
          title: issue.title,
          date: issue.date,
          issueNumber: issue.issueNumber.replace(/\D/g, ""),
          version: issue.version.replace(/^App\s*v/i, ""),
          greeting: issue.greeting ?? t.greeting,
          message: issue.message ?? [issue.description],
          signature: issue.signature ?? t.signature,
          heroImage: issue.heroImage ?? issue.image,
          polaroidImage: issue.polaroidImage ?? t.polaroidImage,
          gradient: issue.gradient ?? t.gradient,
          issues: pastIssues,
          archiveIssueCount: Math.max(0, pastIssues.length - 3),
        }}
      />
    </>
  );
}
