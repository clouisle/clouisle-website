"use client";
import Image from "next/image";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import type { Locale, Translations } from "../../../i18n/translations";
import { assetUrl } from "../../../seo";
import ReleaseBackground from "./ReleaseBackground";

type ReleaseNotesProps = {
  lang: Locale;
  t: Translations["releaseNotes"];
};

type Tilt = {
  x: number;
  y: number;
  sheenX: number;
  sheenY: number;
  sheenOpacity: number;
};

const restingTilt: Tilt = { x: 0, y: 0, sheenX: 0, sheenY: 0, sheenOpacity: 0 };

export default function ReleaseNotes({ lang, t }: ReleaseNotesProps) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState(restingTilt);
  const sceneRef = useRef<HTMLDivElement>(null);
  const currentFlipRef = useRef(false);
  const manualFlipRef = useRef(false);


  useEffect(() => {
    if (!sceneRef.current) return;
    const sceneElement = sceneRef.current as HTMLDivElement;

    function updateFlipFromScroll() {
      if (manualFlipRef.current) return;

      const bounds = sceneElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const hasPassed =
        window.scrollY >= 50 &&
        (bounds.bottom <= viewportHeight - 32 || bounds.top + bounds.height / 2 <= viewportHeight * 0.65);

      if (hasPassed === currentFlipRef.current) return;
      currentFlipRef.current = hasPassed;
      if (hasPassed) setTilt(restingTilt);
      setFlipped(hasPassed);
    }

    updateFlipFromScroll();
    window.addEventListener("scroll", updateFlipFromScroll, { passive: true });
    window.addEventListener("resize", updateFlipFromScroll);

    return () => {
      window.removeEventListener("scroll", updateFlipFromScroll);
      window.removeEventListener("resize", updateFlipFromScroll);
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || flipped) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({
      x: y * -8,
      y: x * 8,
      sheenX: x * 16,
      sheenY: y * 12,
      sheenOpacity: 0.42,
    });
  }

  const tiltStyle = {
    "--postcard-rotate-x": `${tilt.x}deg`,
    "--postcard-rotate-y": `${tilt.y}deg`,
    "--postcard-sheen-x": `${tilt.sheenX}px`,
    "--postcard-sheen-y": `${tilt.sheenY}px`,
    "--postcard-sheen-opacity": tilt.sheenOpacity,
  } as CSSProperties;

  const visibleIssues = t.issues;

  return (
    <div className="release-page">
      <ReleaseBackground
        gradient={t.gradient}
        mode={t.experimentalMode ?? "transition"}
        transitionStart={t.transitionStart ?? 30}
      />
      <article className="release-feature">
        <h1>{t.title}</h1>
        <div className="postcard-stage">
          <div
            ref={sceneRef}
            className={`postcard-scene ${tilt.sheenOpacity ? "is-tilting" : ""}`}
            style={tiltStyle}
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setTilt(restingTilt)}
          >
            <Image className="postcard-blank" src={assetUrl("release-postcard/card-blank.png")} alt="" aria-hidden="true" width={1600} height={1920} unoptimized />
            <div className={`postcard-card ${flipped ? "is-flipped" : ""}`} data-flipped={flipped}>
              <div className="postcard-inner">
                <div className="postcard-blank-layer" aria-hidden="true">
                  <Image src={assetUrl("release-postcard/card-blank.png")} alt="" draggable="false" width={1600} height={1920} unoptimized />
                </div>
                <div className="postcard-face postcard-front" aria-hidden={flipped}>
                  <Image src={t.heroImage} alt={t.title} draggable="false" fill unoptimized sizes="(min-width: 600px) 86vw, 100vw" />
                  <span className="postcard-sheen" aria-hidden="true" />
                </div>
                <div className="postcard-paperclip-layer" aria-hidden="true">
                  <Image src={assetUrl("release-postcard/paperclip.png")} alt="" draggable="false" width={1600} height={1920} unoptimized />
                </div>
                <div className="postcard-face postcard-back" aria-hidden={!flipped}>
                  <Image className="postcard-paper" src={assetUrl("release-postcard/postcard-back.png")} alt="" aria-hidden="true" width={1580} height={996} unoptimized />
                  <Image className="postcard-stamp" src={assetUrl("release-postcard/stamp.png")} alt="" aria-hidden="true" width={451} height={554} unoptimized />
                  <Image className="postcard-postmark" src={assetUrl("release-postcard/postmark.png")} alt="" aria-hidden="true" width={674} height={370} unoptimized />
                  <div className="postcard-copy" data-long-message="true">
                    <p className="postcard-greeting">{t.greeting}</p>
                    <div className="postcard-message">
                      {t.message.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </div>
                    <p className="postcard-signature">{t.signature}</p>
                  </div>
                </div>
                <div className="postcard-polaroid-layer" aria-hidden="true">
                  <div className="postcard-polaroid">
                    <Image className="postcard-polaroid-frame" src={assetUrl("release-postcard/polaroid.png")} alt="" draggable="false" width={1608} height={1823} unoptimized />
                    <div className="postcard-polaroid-photo">
                      <Image src={t.polaroidImage} alt="" draggable="false" fill unoptimized sizes="30vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="postcard-flip-toggle"
              type="button"
              aria-pressed={flipped}
              aria-label={flipped ? t.flippedLabel : t.flipLabel}
              onClick={() => {
                manualFlipRef.current = true;
                currentFlipRef.current = !flipped;
                setFlipped((value) => !value);
              }}
            />
          </div>
        </div>
      </article>

      {t.issues.length > 0 && (
        <section className="release-issues" id="past-issues">
          <h2>{t.pastIssues}</h2>
          <div className="release-issue-grid">
            {visibleIssues.map((issue) => (
              <Link className="release-issue-card" href={`/${lang}/release-notes/${issue.slug}`} key={issue.issueNumber}>
                <div className="release-issue-meta"><span>{issue.date}</span><i aria-hidden="true" /><span>{issue.issueNumber}</span><i aria-hidden="true" /><span>{issue.version}</span></div>
                <p>{issue.title}</p>
                <div className="release-issue-image"><Image src={issue.image} alt={issue.title} loading="lazy" unoptimized width={1217} height={808} sizes="(min-width: 800px) 30vw, 100vw" /></div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
