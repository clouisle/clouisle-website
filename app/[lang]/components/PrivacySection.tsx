"use client";

import { useState } from "react";
import type { Translations } from "../../i18n/translations";

export default function PrivacySection({ t }: { t: Translations }) {
  return (
    <section className="privacy-section" id="privacy">
      <div className="privacy-panel">
        <svg
          className="privacy-border"
          aria-hidden="true"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            rx="12"
            ry="12"
            stroke="rgba(0, 0, 0, 0.6)"
            strokeWidth="1"
            strokeDasharray="1 6"
            strokeDashoffset="3.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg
          className="privacy-lock-mark"
          aria-hidden="true"
          width="78"
          height="45"
          viewBox="0 0 78 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="78" height="44" transform="translate(0 0.903809)" fill="#F8F8F8" />
          <path
            d="M29.5273 40.8491C28.4596 40.8491 27.5807 40.4845 26.8906 39.7554C26.2135 39.0392 25.875 38.1147 25.875 36.9819V22.0601C25.875 20.9272 26.2135 20.0028 26.8906 19.2866C27.5807 18.5705 28.4596 18.2124 29.5273 18.2124H48.4531C49.5078 18.2124 50.3802 18.5705 51.0703 19.2866C51.7604 20.0028 52.1055 20.9272 52.1055 22.0601V36.9819C52.1055 38.1147 51.7604 39.0392 51.0703 39.7554C50.3802 40.4845 49.5078 40.8491 48.4531 40.8491H29.5273ZM29.4297 39.853H48.5508C49.2799 39.853 49.8789 39.5861 50.3477 39.0522C50.8294 38.5314 51.0703 37.8608 51.0703 37.0405V22.021C51.0703 21.1877 50.8294 20.5041 50.3477 19.9702C49.8789 19.4364 49.2799 19.1694 48.5508 19.1694H29.4297C28.6875 19.1694 28.0755 19.4364 27.5938 19.9702C27.125 20.5041 26.8906 21.1877 26.8906 22.021V37.0405C26.8906 37.8608 27.125 38.5314 27.5938 39.0522C28.0755 39.853 29.4297 39.853 29.4297 39.853ZM29.5078 18.6421V13.8765C29.5078 11.8973 29.9049 10.1525 30.6992 8.64209C31.4935 7.11865 32.6003 5.92725 34.0195 5.06787C35.4388 4.19548 37.0924 3.75928 38.9805 3.75928C40.8815 3.75928 42.5417 4.19548 43.9609 5.06787C45.3802 5.92725 46.4805 7.11865 47.2617 8.64209C48.056 10.1525 48.4531 11.8973 48.4531 13.8765V18.6421H47.4375V13.9546C47.4375 12.1447 47.0794 10.5496 46.3633 9.16943C45.6602 7.7762 44.6771 6.68896 43.4141 5.90771C42.151 5.12646 40.6732 4.73584 38.9805 4.73584C37.2878 4.73584 35.8099 5.12646 34.5469 5.90771C33.2839 6.68896 32.3008 7.7762 31.5977 9.16943C30.8945 10.5496 30.543 12.1447 30.543 13.9546V18.6421H29.5078Z"
            fill="black"
          />
        </svg>
        <h2>{t.privacy.title}</h2>
        <PrivacyToggles t={t} />
        <p>{t.privacy.description1}</p>
        <p>{t.privacy.description2}</p>
        <a className="privacy-link" href="#top">{t.privacy.learnMore} <span aria-hidden="true">&rarr;</span></a>
        <img
          className="privacy-footer-mark"
          src="/clouisle-assets/clouisle-light.svg"
          alt=""
          aria-hidden="true"
          width={80}
          height={56}
        />
      </div>
    </section>
  );
}

function PrivacyToggles({ t }: { t: Translations }) {
  const [states, setStates] = useState<boolean[]>(() =>
    Array.from({ length: t.privacy.toggles.length }, () => true),
  );

  return (
    <div className="privacy-marquee" aria-label="Privacy controls preview">
      <div className="privacy-track">
        {[...t.privacy.toggles, ...t.privacy.toggles].map((name, index) => {
          const stateIndex = index % t.privacy.toggles.length;
          const enabled = states[stateIndex];
          return (
            <button
              className="privacy-chip"
              data-on={enabled}
              key={`${name}-${index}`}
              type="button"
              aria-pressed={enabled}
              aria-label={`${name} demo toggle - currently ${enabled ? t.privacy.on : t.privacy.off}`}
              onClick={() => setStates((prev) => prev.map((state, position) => position === stateIndex ? !state : state))}
            >
              <span className="chip-dot" aria-hidden="true" />
              {name}
              <b>{enabled ? t.privacy.on : t.privacy.off}</b>
            </button>
          );
        })}
      </div>
    </div>
  );
}
