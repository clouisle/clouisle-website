"use client";

import type { Translations } from "../../i18n/translations";
import MuxVideo, { muxStream } from "./MuxVideo";

type FeatureMedia = {
  className: string;
  image?: string;
  poster?: string;
  stream?: string;
};

const featureMedia: FeatureMedia[] = [
  { className: "feature-wide", image: "/dia-assets/decks.png" },
  {
    className: "feature-tall",
    poster:
      "https://image.mux.com/I88MBGecyQVKRzo6NFuq02xLgXhqBB00enYJ2O02AGKYKs/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("I88MBGecyQVKRzo6NFuq02xLgXhqBB00enYJ2O02AGKYKs"),
  },
  {
    className: "feature-tall",
    poster:
      "https://image.mux.com/E5RJTOXaiqwYHPNO8IFYspUiOrViAiq9XCWbkz1D9j4/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("E5RJTOXaiqwYHPNO8IFYspUiOrViAiq9XCWbkz1D9j4"),
  },
  { className: "feature-wide", image: "/dia-assets/profiles.png" },
  { className: "feature-wide", image: "/dia-assets/splits.png" },
  {
    className: "feature-tall feature-tab-organize",
    poster:
      "https://image.mux.com/zqOwkkAS9zCeLJq016siCak1olCG0202BGJXtLq2xxNEHI/thumbnail.webp?width=960&fit_mode=preserve",
    stream: muxStream("zqOwkkAS9zCeLJq016siCak1olCG0202BGJXtLq2xxNEHI"),
  },
];

export default function WorkSection({ t }: { t: Translations }) {
  return (
    <section className="work-section" id="features">
      <div className="section-intro work-intro">
        <h2>{t.work.title}</h2>
      </div>

      <div className="feature-grid">
        {t.work.features.map((feature, index) => (
          <article className={`work-tile ${featureMedia[index].className}`} key={feature.label}>
            <div className="tile-copy">
              <span className="feature-label">{feature.label}</span>
              <h3>{feature.title}</h3>
            </div>
            <div className="tile-media">
              {featureMedia[index].stream && featureMedia[index].poster ? (
                <MuxVideo
                  source={featureMedia[index].stream!}
                  poster={featureMedia[index].poster!}
                  className="feature-video"
                  label={`${feature.label} ${t.work.inDia}`}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img src={featureMedia[index].image} alt={`${feature.label} ${t.work.inDia}`} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
