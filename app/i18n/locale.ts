import type { Locale } from "./types";

export type { Locale };

export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Picks the locale from a stored preference, falling back to the Accept-Language header and
 * finally to English. Shared by proxy.ts (which redirects bare paths into a locale) and the
 * 404 page, so both choose the same language for the same request.
 */
export function detectLocale(cookieValue: string | undefined, acceptLanguage: string | null): Locale {
  if (cookieValue && hasLocale(cookieValue)) return cookieValue;

  const preferences = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number.parseFloat(q) : 1 };
    })
    .sort((first, second) => second.q - first.q);

  for (const { tag } of preferences) {
    if (tag.startsWith("zh")) return "zh";
    if (tag.startsWith("en")) return "en";
  }

  return "en";
}