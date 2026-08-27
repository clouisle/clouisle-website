import { en as homeEn } from "./home/en";
import { zh as homeZh } from "./home/zh";
import { en as securityEn } from "./security/en";
import { zh as securityZh } from "./security/zh";
import { en as releaseNotesEn } from "./release-notes/en";
import { zh as releaseNotesZh } from "./release-notes/zh";
import type { Locale, ReleaseNotesTranslations, Translations } from "./types";

export type { Locale, ReleaseNotesTranslations, Translations } from "./types";

export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const translations: Record<Locale, Translations> = {
  en: { ...homeEn, securityPage: securityEn, releaseNotes: releaseNotesEn },
  zh: { ...homeZh, securityPage: securityZh, releaseNotes: releaseNotesZh },
};