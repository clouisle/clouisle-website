import type { MetadataRoute } from "next";
import { locales, translations, type Locale } from "./i18n/translations";
import { absoluteUrl, localizedPath } from "./seo";

const staticPaths = ["", "/about", "/help", "/privacy", "/terms", "/security", "/release-notes/latest"];

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
    ...translations.en.releaseNotes.issues.map((issue) => `/release-notes/${issue.slug}`),
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
