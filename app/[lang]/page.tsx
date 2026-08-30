import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale } from "../i18n/translations";
import Home from "./Home";

export { generateStaticParams } from "./generateStaticParams";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) return {};
  const lang: Locale = rawLang;
  return {
    title: `${translations[lang].hero.tagline} | Clouisle`,
  };
}
export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <Home lang={lang} />;
}
