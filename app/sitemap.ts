import type { MetadataRoute } from "next";
import { locales, type Locale } from "./i18n/translations";
import { getReleaseArticles } from "./i18n/release/articles";
import { absoluteUrl, localizedPath } from "./seo";

const staticPaths = ["", "/about", "/help", "/privacy", "/terms", "/security", "/release-notes"];

function sitemapAlternates(path: string) {
  return {
    languages: {
      en: absoluteUrl(localizedPath("en", path)),
      "zh-CN": absoluteUrl(localizedPath("zh", path)),
      "x-default": absoluteUrl(localizedPath("en", path)),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...getReleaseArticles("en").map((article) => `/release-notes/${article.slug}`),
  ];

  return locales.flatMap((lang: Locale) =>
    paths.map((path) => ({
      url: absoluteUrl(localizedPath(lang, path)),
      alternates: sitemapAlternates(path),
      changeFrequency: path.includes("release-notes") ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.includes("release-notes") ? 0.7 : 0.6,
    })),
  );
}
