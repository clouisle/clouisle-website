"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import type { Locale, ReleaseIssue, Translations } from "../../../i18n/translations";
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
  const [showAllIssues, setShowAllIssues] = useState(false);
  const [archiveIssues, setArchiveIssues] = useState<ReleaseIssue[]>([]);
  const [isLoadingIssues, setIsLoadingIssues] = useState(false);
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

  const visibleIssues = showAllIssues ? [...t.issues, ...archiveIssues] : t.issues.slice(0, 3);

  async function loadAllIssues() {
    setIsLoadingIssues(true);
    try {
      const response = await fetch("/api/release-notes");
      if (!response.ok) throw new Error("Could not load release notes");
      const { releaseNotes } = await response.json() as { releaseNotes: ReleaseIssue[] };
      setArchiveIssues(releaseNotes);
      setShowAllIssues(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingIssues(false);
    }
  }

  return (
    <main className="release-page">
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
            <img className="postcard-blank" src="/clouisle-assets/release-postcard/card-blank.png" alt="" aria-hidden="true" />
            <div className={`postcard-card ${flipped ? "is-flipped" : ""}`} data-flipped={flipped}>
              <div className="postcard-inner">
                <div className="postcard-blank-layer" aria-hidden="true">
                  <img src="/clouisle-assets/release-postcard/card-blank.png" alt="" draggable="false" />
                </div>
                <div className="postcard-face postcard-front" aria-hidden={flipped}>
                  <img src={t.heroImage} alt="" draggable="false" />
                  <span className="postcard-sheen" aria-hidden="true" />
                </div>
                <div className="postcard-paperclip-layer" aria-hidden="true">
                  <img src="/clouisle-assets/release-postcard/paperclip.png" alt="" draggable="false" />
                </div>
                <div className="postcard-face postcard-back" aria-hidden={!flipped}>
                  <img className="postcard-paper" src="/clouisle-assets/release-postcard/postcard-back.png" alt="" aria-hidden="true" />
                  <img className="postcard-stamp" src="/clouisle-assets/release-postcard/stamp.png" alt="" aria-hidden="true" />
                  <img className="postcard-postmark" src="/clouisle-assets/release-postcard/postmark.png" alt="" aria-hidden="true" />
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
                    <img className="postcard-polaroid-frame" src="/clouisle-assets/release-postcard/polaroid.png" alt="" draggable="false" />
                    <div className="postcard-polaroid-photo">
                      <img src={t.polaroidImage} alt="" draggable="false" />
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

      <section className="release-issues" id="past-issues">
        <h2>{t.pastIssues}</h2>
        <div className="release-issue-grid">
          {visibleIssues.map((issue) => (
            <Link className="release-issue-card" href={`/${lang}/release-notes/${issue.slug}`} key={issue.issueNumber}>
              <div className="release-issue-meta"><span>{issue.date}</span><i aria-hidden="true" /><span>{issue.issueNumber}</span><i aria-hidden="true" /><span>{issue.version}</span></div>
              <p>{issue.title}</p>
              <div className="release-issue-image"><img src={issue.image} alt={issue.title} loading="lazy" /></div>
            </Link>
          ))}
        </div>
        {!showAllIssues && t.archiveIssueCount > 0 && (
          <button
            className="release-view-all"
            type="button"
            disabled={isLoadingIssues}
            onClick={loadAllIssues}
          >
            {isLoadingIssues ? t.loadingAll : t.viewAll}
          </button>
        )}
      </section>
    </main>
  );
}
