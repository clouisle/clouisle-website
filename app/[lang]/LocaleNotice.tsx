"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale, Translations } from "../i18n/translations";

const DISMISS_KEY = "locale-notice-dismissed";
const LOCALE_COOKIE = "NEXT_LOCALE";

function detectBrowserLocale(): Locale | null {
  const candidates = navigator.languages ?? [navigator.language];
  for (const tag of candidates) {
    const lower = tag.toLowerCase();
    if (lower.startsWith("zh")) return "zh";
    if (lower.startsWith("en")) return "en";
  }
  return null;
}

export default function LocaleNotice({ lang, t }: { lang: Locale; t: Translations }) {
  const [visible, setVisible] = useState(false);
  const target: Locale = lang === "en" ? "zh" : "en";

  useEffect(() => {
    const suggested = detectBrowserLocale();
    if (!suggested || suggested === lang) return;
    if (window.localStorage.getItem(DISMISS_KEY)) return;
    setVisible(true);
  }, [lang]);

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }

  function switchLocale() {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    dismiss();
  }

  if (!visible) return null;

  return (
    <aside className="locale-notice" role="status">
      <span>{t.notice.message}</span>
      <div className="locale-notice-actions">
        <Link className="locale-notice-switch" href={`/${target}`} onClick={switchLocale}>
          {t.notice.action}
        </Link>
        <button type="button" aria-label={t.notice.close} onClick={dismiss}>x</button>
      </div>
    </aside>
  );
}
