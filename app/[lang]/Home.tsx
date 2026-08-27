"use client";

import { translations, type Locale } from "../i18n/translations";
import Hero from "./components/Hero";
import ReadsSection from "./components/ReadsSection";
import WorkSection from "./components/WorkSection";
import PrivacySection from "./components/PrivacySection";
import FinalCta from "./components/FinalCta";

export default function HomeSections({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const showDownloadNotice = () => window.dispatchEvent(new CustomEvent("clouisle:download"));
  const openTrailer = () => window.dispatchEvent(new CustomEvent("clouisle:trailer"));

  return (
    <>
      <Hero t={t} onDownload={showDownloadNotice} onWatchTrailer={openTrailer} />
      <ReadsSection t={t} />
      <WorkSection t={t} />
      <PrivacySection t={t} />
      <FinalCta t={t} />
    </>
  );
}
