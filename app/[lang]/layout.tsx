import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/instrument-sans/wdth.css";
import "@fontsource-variable/noto-sans-sc/wght.css";
import "@fontsource-variable/noto-serif-sc/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "../i18n/translations";
import PageShell from "./PageShell";
import { assetUrl, metadataBase, siteMetadata } from "../seo";

export { generateStaticParams } from "./generateStaticParams";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) return {};
  const seo = siteMetadata[rawLang];

  return {
    metadataBase,
    title: {
      default: "Clouisle",
      template: "%s | Clouisle",
    },
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      siteName: "Clouisle",
      type: "website",
      locale: seo.ogLocale,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const seo = siteMetadata[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${metadataBase}#organization`,
        name: "Clouisle",
        url: metadataBase.toString(),
        logo: assetUrl("clouisle-mark.svg"),
        sameAs: ["https://github.com/clouisle/Clouisle"],
        knowsAbout: seo.featureList,
      },
      {
        "@type": "WebSite",
        "@id": `${metadataBase}#website`,
        name: "Clouisle",
        url: metadataBase.toString(),
        inLanguage: lang === "zh" ? "zh-CN" : "en",
        publisher: { "@id": `${metadataBase}#organization` },
        description: seo.description,
        keywords: seo.keywords.join(", "),
      },
    ],
  };

  return (
    <html lang={lang === "zh" ? "zh-CN" : "en"} data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <PageShell lang={lang}>{children}</PageShell>
      </body>
    </html>
  );
}
