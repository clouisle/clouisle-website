"use client";

import Link from "next/link";
import Image from "next/image";
import type { Translations } from "../../i18n/translations";
import { assetUrl } from "../../seo";

type SiteHeaderProps = {
  t: Translations;
  homeHref: string;
  releaseHref: string;
  securityHref: string;
  localeSwitchHref: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const githubRepoHref = "https://github.com/clouisle/Clouisle";

export default function SiteHeader({
  t,
  homeHref,
  releaseHref,
  securityHref,
  localeSwitchHref,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className={`site-nav ${menuOpen ? "is-open" : ""}`}>
        <Link className="wordmark" href={homeHref} aria-label="Clouisle">
          <Image className="clouisle-mark" src={assetUrl("clouisle-mark.svg")} alt="" width={30} height={30} unoptimized />
        </Link>

        <nav className="desktop-links" aria-label="Main navigation">
          <Link href={releaseHref} onClick={onCloseMenu}>{t.nav.features}</Link>
          <Link href={securityHref} onClick={onCloseMenu}>{t.nav.security}</Link>
          <a href="https://docs.clouisle.asia" target="_blank" rel="noopener noreferrer" onClick={onCloseMenu}>{t.nav.docs}</a>
          <a className="github-nav-link" href={githubRepoHref} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={onCloseMenu}>
            <GitHubIcon />
          </a>
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
          <a className="github-nav-link" href={githubRepoHref} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={onCloseMenu}>
            <GitHubIcon />
          </a>
        </div>
        <div className="mobile-menu-actions">
          <a className="button button-dark" href="https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf" target="_blank" rel="noopener noreferrer" onClick={onCloseMenu}>{t.mobile.download}</a>
          <Link className="lang-toggle" href={localeSwitchHref} onClick={onCloseMenu}>{t.language.switchTo}</Link>
        </div>
      </nav>
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg className="github-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.647 1.653.24 2.873.12 3.176.765.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
