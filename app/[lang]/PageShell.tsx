"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale } from "../i18n/translations";
import LocaleNotice from "./LocaleNotice";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FilmModal from "./components/FilmModal";
import DownloadNotice from "./components/DownloadNotice";

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
  const [filmOpen, setFilmOpen] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const otherLocale: Locale = lang === "en" ? "zh" : "en";
  const restPath = pathname.replace(/^\/(?:en|zh)/, "") || "/";
  const localeSwitchHref = `/${otherLocale}${restPath === "/" ? "" : restPath}`;

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFilmOpen(false);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!filmOpen && !menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [filmOpen, menuOpen]);

  function showDownloadNotice() {
    setDownloadNotice(true);
    setMenuOpen(false);
  }

  function openTrailer() {
    setFilmOpen(true);
    setMenuOpen(false);
  }

  return (
    <main>
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
          onDownload={showDownloadNotice}
          onWatchTrailer={openTrailer}
        />
      )}

      {children}

      {!isAboutPage && (
        <SiteFooter
          t={t}
          lang={lang}
        />
      )}

      {filmOpen && <FilmModal t={t} onClose={() => setFilmOpen(false)} />}
      {downloadNotice && <DownloadNotice t={t} onDismiss={() => setDownloadNotice(false)} />}
      {!isAboutPage && <LocaleNotice lang={lang} t={t} />}
    </main>
  );
}
