"use client";

import type { Translations } from "../../i18n/translations";
import { ArrowRightIcon } from "./icons";
import GlyphWord from "./GlyphWord";

type HeroProps = {
  t: Translations;
  onDownload: () => void;
  onWatchTrailer: () => void;
};

export default function Hero({ t, onDownload, onWatchTrailer }: HeroProps) {
  return (
    <section className="hero" id="top">
      <img className="hero-scream" src="/clouisle-assets/hero.png" alt="" aria-hidden="true" />
      <div className="hero-content">
        <h1 aria-label="Clouisle">
          <GlyphWord text="Clouisle" />
        </h1>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <button className="hero-download" type="button" onClick={onDownload}>
          {t.hero.download} <ArrowRightIcon />
        </button>
        <p className="trial-note">{t.hero.trialNote}</p>
      </div>
      <button className="watch-button" type="button" onClick={onWatchTrailer}>
        <span className="watch-play" aria-hidden="true"><span className="play-icon" /></span>
        {t.hero.watchScream}
      </button>
    </section>
  );
}
