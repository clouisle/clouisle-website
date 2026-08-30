import { en as homeEn } from "./home/en";
import { zh as homeZh } from "./home/zh";
import { en as securityEn } from "./security/en";
import { zh as securityZh } from "./security/zh";
import { en as privacyEn } from "./privacy/en";
import { zh as privacyZh } from "./privacy/zh";
import { en as termsEn } from "./terms/en";
import { zh as termsZh } from "./terms/zh";
import { en as releaseEn } from "./release/en";
import { zh as releaseZh } from "./release/zh";
import { en as helpEn } from "./help/en";
import { zh as helpZh } from "./help/zh";
import { en as aboutEn } from "./about/en";
import { zh as aboutZh } from "./about/zh";
import type { Locale, Translations } from "./types";

export type { Locale, ReleaseIssue, Translations } from "./types";

export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const translations: Record<Locale, Translations> = {
  en: { ...homeEn, securityPage: securityEn, privacyPage: privacyEn, termsPage: termsEn, releaseNotes: releaseEn, helpPage: helpEn, aboutPage: aboutEn },
  zh: { ...homeZh, securityPage: securityZh, privacyPage: privacyZh, termsPage: termsZh, releaseNotes: releaseZh, helpPage: helpZh, aboutPage: aboutZh },
};
