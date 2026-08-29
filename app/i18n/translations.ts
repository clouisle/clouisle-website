import { en as homeEn } from "./home/en";
import { zh as homeZh } from "./home/zh";
import { en as securityEn } from "./security/en";
import { zh as securityZh } from "./security/zh";
import { en as releaseEn } from "./release/en";
import { zh as releaseZh } from "./release/zh";
import { en as helpEn } from "./help/en";
import { zh as helpZh } from "./help/zh";
import type { Locale, Translations } from "./types";

export type { Locale, ReleaseIssue, Translations } from "./types";

export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const translations: Record<Locale, Translations> = {
  en: { ...homeEn, securityPage: securityEn, releaseNotes: releaseEn, helpPage: helpEn },
  zh: { ...homeZh, securityPage: securityZh, releaseNotes: releaseZh, helpPage: helpZh },
};
