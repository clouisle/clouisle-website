"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale } from "../i18n/translations";
import LocaleNotice from "./LocaleNotice";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

/**
 * Shared page shell for every route under /[lang]: fixed pill header,
 * footer, and the film/download/notice overlays. Section content is
 * passed as children so every page (home, /security, ...) renders
 * inside the same chrome.
 */
export default function PageShell({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  const t = translations[lang];
  const pathname = usePathname();
  const isAboutPage = pathname.endsWith("/about");
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale: Locale = lang === "en" ? "zh" : "en";
  const restPath = pathname.replace(/^\/(?:en|zh)/, "") || "/";
  const localeSwitchHref = `/${otherLocale}${restPath === "/" ? "" : restPath}`;

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <main className="page-shell">
      {!isAboutPage && (
        <SiteHeader
          t={t}
          homeHref={`/${lang}`}
          releaseHref={`/${lang}/release-notes/latest`}
          securityHref={`/${lang}/security`}
          localeSwitchHref={localeSwitchHref}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onCloseMenu={() => setMenuOpen(false)}
        />
      )}

      {children}

      {!isAboutPage && (
        <SiteFooter
          t={t}
          lang={lang}
        />
      )}

      {!isAboutPage && <LocaleNotice lang={lang} t={t} />}
    </main>
  );
}
