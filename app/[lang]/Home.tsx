"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale } from "../i18n/translations";
import LocaleNotice from "./LocaleNotice";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import ReadsSection from "./components/ReadsSection";
import WorkSection from "./components/WorkSection";
import PrivacySection from "./components/PrivacySection";
import FinalCta from "./components/FinalCta";
import SiteFooter from "./components/SiteFooter";
import FilmModal from "./components/FilmModal";
import DownloadNotice from "./components/DownloadNotice";

export default function Home({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const pathname = usePathname();
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
      <SiteHeader
        t={t}
        localeSwitchHref={localeSwitchHref}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
        onDownload={showDownloadNotice}
        onWatchTrailer={openTrailer}
      />

      <Hero t={t} onDownload={showDownloadNotice} onWatchTrailer={openTrailer} />
      <ReadsSection t={t} />
      <WorkSection t={t} />
      <PrivacySection t={t} />
      <FinalCta t={t} />
      <SiteFooter t={t} />

      {filmOpen && <FilmModal t={t} onClose={() => setFilmOpen(false)} />}
      {downloadNotice && <DownloadNotice t={t} onDismiss={() => setDownloadNotice(false)} />}
      <LocaleNotice lang={lang} t={t} />
    </main>
  );
}
