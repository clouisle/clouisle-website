"use client";
import Image from "next/image";
import type { Translations } from "../../i18n/translations";

import { assetUrl } from "../../seo";
import { ArrowRightIcon } from "./icons";
import GlyphWord from "./GlyphWord";
import SideRays from "./SideRays";

type HeroProps = {
  t: Translations;
  onWatchVideo: () => void;
};

export default function Hero({ t, onWatchVideo }: HeroProps) {
  return (
    <section className="hero" id="top">
      <SideRays className="hero-rays" />
      <Image className="hero-image" src={assetUrl("demo.png")} alt="Clouisle product workspace" width={3122} height={1920} priority unoptimized sizes="50vw" />
      <div className="hero-content">
        <h1 aria-label="Clouisle">
          <GlyphWord text="Clouisle" />
        </h1>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <a
          className="hero-download"
          href="https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.hero.download} <ArrowRightIcon />
        </a>
        <p className="trial-note">{t.hero.trialNote}</p>
      </div>
      <button className="hero-video-button" type="button" onClick={onWatchVideo}>
        <span className="hero-video-play" aria-hidden="true"><span className="play-icon" /></span>
        {t.hero.watchVideo}
      </button>
    </section>
  );
}
