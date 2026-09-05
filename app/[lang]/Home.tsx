"use client";

import { useState } from "react";
import { translations, type Locale } from "../i18n/translations";
import Hero from "./components/Hero";
import ProductVideoModal from "./components/ProductVideoModal";
import UseCasesSection from "./components/UseCasesSection";
import FeaturesSection from "./components/FeaturesSection";
import PrivacySection from "./components/PrivacySection";
import PlansSection from "./components/PlansSection";
import FaqSection from "./components/FaqSection";

export default function Home({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const [productVideoOpen, setProductVideoOpen] = useState(false);
  const openProductVideo = () => setProductVideoOpen(true);

  return (
    <>
      <Hero t={t} onWatchVideo={openProductVideo} />
      <UseCasesSection t={t} />
      <FeaturesSection t={t} />
      <PrivacySection t={t} />
      <PlansSection t={t} />
      <FaqSection t={t} />
      {productVideoOpen ? <ProductVideoModal t={t} onClose={() => setProductVideoOpen(false)} /> : null}
    </>
  );
}
