"use client";

import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/instrument-sans/wdth.css";
import "@fontsource-variable/noto-sans-sc/wght.css";
import "@fontsource-variable/noto-serif-sc/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "./[lang]/PageShell";
import ChromaText from "./[lang]/components/ChromaText";
import { translations } from "./i18n/translations";
import { assetUrl } from "./seo";

/**
 * The 404 page.
 *
 * Static, bilingual-neutral 404 page. The root boundary has no root layout, so fonts,
 * global styles and page chrome are imported explicitly.
 */
export default function NotFound() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const cookieLocale = document.cookie
        .split(";")
        .map((part) => part.trim())
        .find((part) => part.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];
      setLang(cookieLocale === "zh" || cookieLocale === "en"
        ? cookieLocale
        : navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const t = translations[lang].notFoundPage;
  const nav = translations[lang].nav;

  return (
    <PageShell lang={lang}>
      <div className="nf-page">
        <div className="nf-panel">
          <Link className="nf-brand" href={`/${lang}`} aria-label="Clouisle">
            <Image
              className="nf-brand-mark"
              src={assetUrl("clouisle-mark.svg")}
              alt=""
              aria-hidden="true"
              width={34}
              height={34}
              unoptimized
            />
            <span className="nf-brand-name">Clouisle</span>
          </Link>

          <span className="nf-eyebrow">{t.eyebrow}</span>
          <h1><ChromaText>{t.title}</ChromaText></h1>
          <p className="nf-description">{t.description}</p>

          <div className="nf-actions">
            <Link className="nf-primary" href={`/${lang}`}>{t.backHome}</Link>
            <Link className="nf-link" href={`/${lang}/release-notes`}>{nav.features}</Link>
            <Link className="nf-link" href={`/${lang}/help`}>{t.help}</Link>
            <Link className="nf-link" href={`/${lang}/security`}>{nav.security}</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}