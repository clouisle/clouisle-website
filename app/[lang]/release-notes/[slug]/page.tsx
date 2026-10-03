import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales, translations, type Locale, type ReleaseArticle } from "../../../i18n/translations";
import { getReleaseArticles } from "../../../i18n/release/articles";
import { assetUrl, compactDescription, localizedPageMetadata, SITE_URL } from "../../../seo";
import ChromaText from "../../components/ChromaText";
import ReleaseBackground from "../ReleaseBackground";
import SecurityToc from "../../security/SecurityToc";
import ReleaseMarkdown from "../ReleaseMarkdown";
import { formatFullDate, formatIssue } from "../format";

type PageProps = { params: Promise<{ lang: string; slug: string }> };

// Articles are bundled, so a slug that was not prerendered can still render on demand;
// the page 404s itself for slugs that do not exist. Without this, the Cloudflare cache
// (which does not persist prerendered HTML) would answer every article with a 404.

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    getReleaseArticles(lang).map((article) => ({ slug: article.slug, lang })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const article = getReleaseArticles(lang).find((item) => item.slug === slug);
  if (!article) return {};
  const keywords = lang === "zh"
    ? [`Clouisle v${article.version}`, "Clouisle更新日志", "发布说明", article.title]
    : [`Clouisle v${article.version}`, "Clouisle changelog", "release notes", article.title];
  return localizedPageMetadata(
    lang,
    article.title,
    compactDescription(article.summary),
    `/release-notes/${article.slug}`,
    keywords,
    { url: article.cover, alt: article.title },
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PagerLink({
  article,
  lang,
  label,
  direction,
}: {
  article: ReleaseArticle | undefined;
  lang: Locale;
  label: string;
  direction: "newer" | "older";
}) {
  if (!article) return <span />;
  return (
    <Link className={`rn-pager-link is-${direction}`} href={`/${lang}/release-notes/${article.slug}`}>
      <span className="rn-pager-label">
        {direction === "newer" ? <Arrow direction="left" /> : null}
        {label}
        {direction === "older" ? <Arrow direction="right" /> : null}
      </span>
      <span className="rn-pager-title">{article.title}</span>
      <span className="rn-pager-version">v{article.version}</span>
    </Link>
  );
}

export default async function ReleaseArticlePage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const t = translations[lang].releaseNotes;
  const articles = getReleaseArticles(lang);
  const index = articles.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const article = articles[index];
  const newer = articles[index - 1];
  const older = articles[index + 1];
  const url = `${SITE_URL}/${lang}/release-notes/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: article.cover,
    url,
    datePublished: article.isoDate,
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    author: { "@type": "Organization", name: "Clouisle", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Clouisle",
      url: SITE_URL,
      logo: assetUrl("clouisle-mark.svg"),
    },
    isPartOf: { "@type": "CollectionPage", name: t.title, url: `${SITE_URL}/${lang}/release-notes` },
  };

  return (
    <div className="rn-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ReleaseBackground gradient={article.gradient} />

      <article className="rn-article">
        <header className="rn-article-header">
          <Link className="rn-back" href={`/${lang}/release-notes`}>
            <Arrow direction="left" />
            {t.backToList}
          </Link>
          <div className="rn-article-meta">
            <span className="rn-chip">{article.tag}</span>
            <time dateTime={article.isoDate}>{formatFullDate(article.isoDate, lang)}</time>
            <i aria-hidden="true" />
            <span>v{article.version}</span>
            <i aria-hidden="true" />
            <span>{formatIssue(t.issueLabel, article.issueNumber)}</span>
          </div>
          <h1><ChromaText>{article.title}</ChromaText></h1>
          <p className="rn-lede">{article.summary}</p>
        </header>

        <figure className="rn-cover">
          <Image src={article.cover} alt={article.title} width={1217} height={808} unoptimized priority sizes="(min-width: 1040px) 1000px, 100vw" />
        </figure>

        <div className="rn-article-body">
          {article.headings.length > 0 ? (
            <aside className="rn-aside">
              <div className="rn-aside-inner">
                <h2>{t.outlineTitle}</h2>
                <SecurityToc sections={article.headings} label={t.outlineTitle} />
              </div>
            </aside>
          ) : (
            <span />
          )}

          <div className="rn-prose">
            <ReleaseMarkdown>{article.body}</ReleaseMarkdown>
            <p className="rn-signature">
              <span>{t.signature}</span>
              <small>{t.byline}</small>
              <i className="rn-seal" aria-hidden="true">
                <Image src={assetUrl("clouisle-mark.svg")} alt="" width={64} height={64} unoptimized />
              </i>
            </p>
          </div>
        </div>

        <nav className="rn-pager" aria-label={t.timelineLabel}>
          <PagerLink article={newer} lang={lang} label={t.newer} direction="newer" />
          <PagerLink article={older} lang={lang} label={t.older} direction="older" />
        </nav>
      </article>
    </div>
  );
}
