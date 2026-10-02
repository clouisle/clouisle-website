import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, translations, type Locale, type ReleaseArticle } from "../../i18n/translations";
import { getReleaseArticles } from "../../i18n/release/articles";
import { assetUrl, compactDescription, localizedPageMetadata, SITE_URL } from "../../seo";
import ChromaText from "../components/ChromaText";
import ReleaseBackground from "./ReleaseBackground";
import ReleaseTimeline from "./ReleaseTimeline";
import { formatShortDate, groupByMonth } from "./format";

export { generateStaticParams } from "../generateStaticParams";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = translations[lang].releaseNotes;
  const keywords = lang === "zh"
    ? ["Clouisle新功能", "Clouisle更新日志", "Clouisle发布说明", "开源AI更新", "智能体工作流更新"]
    : ["Clouisle what's new", "Clouisle changelog", "Clouisle release notes", "open source AI updates", "AI agents workflows release"];
  return localizedPageMetadata(lang, t.title, compactDescription(t.seoDescription), "/release-notes", keywords);
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReleaseCard({ article, lang, latest }: { article: ReleaseArticle; lang: Locale; latest: boolean }) {
  const t = translations[lang].releaseNotes;
  return (
    <Link className="rn-card" href={`/${lang}/release-notes/${article.slug}`}>
      <div className="rn-card-media">
        <Image
          src={article.cover}
          alt=""
          width={1217}
          height={808}
          unoptimized
          loading={latest ? "eager" : "lazy"}
          sizes="(min-width: 800px) 40vw, 100vw"
        />
      </div>
      <div className="rn-card-copy">
        <div className="rn-chips">
          {latest ? <span className="rn-chip is-solid">{t.latestBadge}</span> : null}
          <span className="rn-chip">{article.tag}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <span className="rn-more">
          {t.readMore}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default async function ReleaseNotesPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const t = translations[lang].releaseNotes;
  const articles = getReleaseArticles(lang);
  const groups = groupByMonth(articles, lang);
  const latestSlug = articles[0]?.slug;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.title,
    description: t.seoDescription,
    url: `${SITE_URL}/${lang}/release-notes`,
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${lang}/release-notes/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <div className="rn-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ReleaseBackground gradient={t.gradient} />

      <header className="rn-header">
        <Link className="rn-brand" href={`/${lang}`} aria-label="Clouisle">
          <Image className="rn-brand-mark" src={assetUrl("clouisle-mark.svg")} alt="" aria-hidden="true" width={30} height={30} unoptimized />
          <span className="rn-brand-name">Clouisle</span>
        </Link>
        <h1>
          <ChromaText>{t.title}</ChromaText>
        </h1>
        <p className="rn-intro">{t.intro}</p>
      </header>

      <div className="rn-timeline-wrap">
        <ReleaseTimeline label={t.timelineLabel}>
          {groups.map((group) => (
            <Fragment key={group.key}>
              <li className="rn-month" data-rn-node>
                <span className="rn-month-label">
                  {group.label}
                  <small>{group.year}</small>
                </span>
                <span className="rn-dot is-ring" aria-hidden="true" />
              </li>
              {group.items.map((article) => {
                const isLatest = article.slug === latestSlug;
                return (
                  <li className={`rn-node${isLatest ? " is-latest" : ""}`} data-rn-node key={article.slug}>
                    <div className="rn-meta">
                      <time dateTime={article.isoDate}>{formatShortDate(article.isoDate, lang)}</time>
                      <span className="rn-version">v{article.version}</span>
                    </div>
                    <span className="rn-dot" aria-hidden="true" />
                    <ReleaseCard article={article} lang={lang} latest={isLatest} />
                  </li>
                );
              })}
            </Fragment>
          ))}
          <li className="rn-end" data-rn-node>
            <span className="rn-dot is-end" aria-hidden="true" />
            <span className="rn-end-note">{t.endNote}</span>
          </li>
        </ReleaseTimeline>
      </div>
    </div>
  );
}
