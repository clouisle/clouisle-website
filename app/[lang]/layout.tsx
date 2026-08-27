import type { Metadata } from "next";
import { hasLocale, locales, type Locale } from "../i18n/translations";
import PageShell from "./PageShell";

export { generateStaticParams } from "./generateStaticParams";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      languages: {
        en: "/en",
        "zh-CN": "/zh",
      },
    },
  };
}

/**
 * Per-locale layout wrapping every page in the shared PageShell (header,
 * footer, overlays). Locale-specific hreflang metadata is declared here;
 * Next does not support overriding <html lang> from a nested layout.
 */
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) return null;
  const lang: Locale = rawLang;

  return (
    <PageShell lang={lang}>{children}</PageShell>
  );
}
