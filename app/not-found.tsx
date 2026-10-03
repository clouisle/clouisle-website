import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/instrument-sans/wdth.css";
import "@fontsource-variable/noto-sans-sc/wght.css";
import "@fontsource-variable/noto-serif-sc/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import { cookies, headers } from "next/headers";
import PageShell from "./[lang]/PageShell";
import ChromaText from "./[lang]/components/ChromaText";
import { detectLocale, LOCALE_COOKIE } from "./i18n/locale";
import { translations } from "./i18n/translations";
import { assetUrl } from "./seo";

/**
 * The 404 page.
 *
 * It has to live at the app root: proxy.ts sends every path into a locale, and Next renders
 * the root not-found boundary for URLs no route matches — a nested one under /[lang] is
 * never reached. The route also has no root layout to inherit from, so the fonts, global
 * stylesheet and page chrome are pulled in here explicitly. The language follows the same
 * rule proxy.ts uses to route the request.
 */
export default async function NotFound() {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()]);
  const lang = detectLocale(
    cookieStore.get(LOCALE_COOKIE)?.value,
    requestHeaders.get("accept-language"),
  );
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