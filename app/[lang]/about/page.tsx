import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale } from "../../i18n/translations";
import { pageSeoMetadata, localizedPageMetadata } from "../../seo";
import AboutExperience from "./AboutExperience";

export { generateStaticParams } from "../generateStaticParams";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) return {};

  const seo = pageSeoMetadata[rawLang].about;
  return localizedPageMetadata(rawLang, seo.title, seo.description, "/about", seo.keywords);
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();

  const lang: Locale = rawLang;
  return <AboutExperience lang={lang} t={translations[lang].aboutPage} />;
}
