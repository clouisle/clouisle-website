import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale } from "../../../i18n/translations";
import ReleaseNotes from "./ReleaseNotes";
import { compactDescription, localizedPageMetadata } from "../../../seo";

export { generateStaticParams } from "../../generateStaticParams";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = translations[lang].releaseNotes;
  const keywords = lang === "zh"
    ? ["Clouisle发布说明", "Clouisle更新日志", "开源AI更新", "智能体工作流更新"]
    : ["Clouisle release notes", "Clouisle changelog", "open source AI updates", "AI agents workflows release"];
  return localizedPageMetadata(lang, t.title, compactDescription(t.message.join(" ")), "/release-notes/latest", keywords);
}

export default async function ReleaseNotesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  return <ReleaseNotes lang={lang} t={translations[lang].releaseNotes} />;
}
