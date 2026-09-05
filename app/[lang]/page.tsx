import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale } from "../i18n/translations";
import { absoluteUrl, assetUrl, localizedPageMetadata, siteMetadata } from "../seo";
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
  const seo = siteMetadata[lang];
  return localizedPageMetadata(lang, seo.title, seo.description, "/", seo.keywords);
}
export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const seo = siteMetadata[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Clouisle",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Workspace & Workflow Automation",
    operatingSystem: "Web, Kubernetes, Docker, Linux",
    url: absoluteUrl(`/${lang}`),
    description: seo.description,
    image: assetUrl("hero.png"),
    isAccessibleForFree: true,
    license: "https://www.gnu.org/licenses/gpl-3.0.html",
    featureList: seo.featureList,
    keywords: seo.keywords.join(", "),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translations[lang].faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Home lang={lang} />
    </>
  );
}
