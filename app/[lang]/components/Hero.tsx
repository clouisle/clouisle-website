"use client";
import Image from "next/image";
import type { Locale, Translations } from "../../i18n/translations";

import { assetUrl } from "../../seo";
import { ArrowRightIcon } from "./icons";
import GlyphWord from "./GlyphWord";
import SideRays from "./SideRays";

type HeroProps = {
  t: Translations;
  lang?: Locale;
  onWatchVideo: () => void;
};

export default function Hero({ t, lang = "en", onWatchVideo }: HeroProps) {
  const headingAriaLabel =
    lang === "zh"
      ? "Clouisle 开源 AI 工作空间｜私有化部署智能体与工作流"
      : "Clouisle - Open-Source AI Workspace for Private Deployment";
  return (
    <section className="hero" id="top">
      <SideRays className="hero-rays" />
      <Image className="hero-image" src={assetUrl("demo.png")} alt="Clouisle product workspace" width={3122} height={1920} priority unoptimized sizes="50vw" />
      <div className="hero-content">
        <h1 aria-label={headingAriaLabel}>
          <GlyphWord text="Clouisle" />
          <span className="sr-only">{headingAriaLabel}</span>
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
