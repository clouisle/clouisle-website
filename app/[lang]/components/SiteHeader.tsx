"use client";

import Link from "next/link";
import type { Translations } from "../../i18n/translations";

type SiteHeaderProps = {
  t: Translations;
  localeSwitchHref: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onDownload: () => void;
  onWatchTrailer: () => void;
};

export default function SiteHeader({
  t,
  localeSwitchHref,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onDownload,
  onWatchTrailer,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className={`site-nav ${menuOpen ? "is-open" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Clouisle">
          <img className="clouisle-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" />
          <span className="wordmark-name">Clouisle</span>
        </a>

        <nav className="desktop-links" aria-label="Main navigation">
          <a href="#features">{t.nav.features}</a>
          <a href="#privacy">{t.nav.security}</a>
          <a href="#reports">{t.nav.reports}</a>
        </nav>

        <Link
          className="lang-toggle"
          href={localeSwitchHref}
          aria-label="Switch language"
          onClick={onCloseMenu}
        >
          {t.language.switchTo}
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={onToggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav id="mobile-navigation-menu" className="mobile-menu" aria-label="Main navigation">
        <div className="mobile-menu-links">
          <a href="#features" onClick={onCloseMenu}>{t.nav.features}</a>
          <a href="#privacy" onClick={onCloseMenu}>{t.nav.security}</a>
          <a href="#reports" onClick={onCloseMenu}>{t.nav.reports}</a>
        </div>
        <div className="mobile-menu-actions">
          <button className="button button-dark" type="button" onClick={onDownload}>{t.mobile.download}</button>
          <button className="button button-soft with-play" type="button" onClick={onWatchTrailer}>
            <span className="play-icon" aria-hidden="true" />
            {t.mobile.watchTrailer}
          </button>
        </div>
      </nav>
    </header>
  );
}
