import { en } from "./en";
import { zh } from "./zh";
import type { Locale, Translations } from "./types";

export type { Locale, Translations } from "./types";

export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const translations: Record<Locale, Translations> = {
  en,
  zh,
};