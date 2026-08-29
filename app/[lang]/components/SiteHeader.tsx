"use client";

import Link from "next/link";
import type { Translations } from "../../i18n/translations";

type SiteHeaderProps = {
  t: Translations;
  homeHref: string;
  releaseHref: string;
  securityHref: string;
  localeSwitchHref: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onDownload: () => void;
  onWatchTrailer: () => void;
};

export default function SiteHeader({
  t,
  homeHref,
  releaseHref,
  securityHref,
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
        <Link className="wordmark" href={homeHref} aria-label="Clouisle">
          <img className="clouisle-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" />
        </Link>

        <nav className="desktop-links" aria-label="Main navigation">
          <Link href={releaseHref} onClick={onCloseMenu}>{t.nav.features}</Link>
          <Link href={securityHref} onClick={onCloseMenu}>{t.nav.security}</Link>
          <a href="https://docs.clouisle.asia" target="_blank" rel="noopener noreferrer" onClick={onCloseMenu}>{t.nav.docs}</a>
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
          <Link href={releaseHref} onClick={onCloseMenu}>{t.nav.features}</Link>
          <Link href={securityHref} onClick={onCloseMenu}>{t.nav.security}</Link>
          <a href="https://docs.clouisle.asia" target="_blank" rel="noopener noreferrer" onClick={onCloseMenu}>{t.nav.docs}</a>
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
