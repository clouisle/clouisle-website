"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReleaseNotesTranslations } from "../../i18n/translations";

type Release = ReleaseNotesTranslations["releases"][number];

type PostcardProps = {
  release: Release;
  flipLabel: string;
  featuresLabel: string;
};


export default function Postcard({ release, flipLabel, featuresLabel }: PostcardProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const tiltTimer = useRef<number | null>(null);
  const userFlipped = useRef(false);
  const [flipped, setFlipped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    const frame = window.requestAnimationFrame(update);
    media.addEventListener("change", update);
    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (tiltTimer.current !== null) window.clearTimeout(tiltTimer.current);
    };
  }, []);

  function clearTilt() {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.removeAttribute("data-tilting");
    scene.removeAttribute("data-tilt-entering");
    scene.style.removeProperty("--postcard-rotate-x");
    scene.style.removeProperty("--postcard-rotate-y");
    scene.style.removeProperty("--postcard-rotate-z");
    scene.style.removeProperty("--postcard-sheen-x");
    scene.style.removeProperty("--postcard-sheen-y");
    scene.style.removeProperty("--postcard-sheen-opacity");
  }

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const updateFromScroll = () => {
      if (userFlipped.current) return;
      const rect = scene.getBoundingClientRect();
      const hasScrolled = window.scrollY >= 50;
      const cardAtBottom = rect.bottom <= window.innerHeight - 32;
      const cardCenterInUpperViewport = rect.top + rect.height / 2 <= window.innerHeight * 0.65;
      const shouldFlip = hasScrolled && (cardAtBottom || cardCenterInUpperViewport);
      if (shouldFlip) clearTilt();
      setFlipped(shouldFlip);
    };

    const frame = window.requestAnimationFrame(updateFromScroll);
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  function handlePointerEnter(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || flipped || reducedMotion) return;
    const scene = sceneRef.current;
    if (!scene) return;
    scene.setAttribute("data-tilting", "true");
    scene.setAttribute("data-tilt-entering", "true");
    scene.style.setProperty("--postcard-sheen-opacity", "0.55");
    if (tiltTimer.current !== null) window.clearTimeout(tiltTimer.current);
    tiltTimer.current = window.setTimeout(() => scene.removeAttribute("data-tilt-entering"), 400);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || flipped || reducedMotion) return;
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    scene.style.setProperty("--postcard-rotate-x", `${-4.5 * y}deg`);
    scene.style.setProperty("--postcard-rotate-y", `${6.5 * x}deg`);
    scene.style.setProperty("--postcard-rotate-z", `${-0.8 * x}deg`);
    scene.style.setProperty("--postcard-sheen-x", `${x * rect.width * 0.2}px`);
    scene.style.setProperty("--postcard-sheen-y", `${y * rect.height * 0.16}px`);
  }

  function handleFlip() {
    userFlipped.current = true;
    clearTilt();
    setFlipped((current) => !current);
  }

  const enterTransition = reducedMotion ? { duration: 0 } : { duration: 0.95, delay: 0.1, ease: [0.5, 0.02, 0.35, 1] as const };
  const cardTransition = reducedMotion ? { duration: 0 } : { duration: 0.95, delay: 0.1, ease: [0.12, 0.66, 0.3, 1] as const };

  return (
    <motion.div className="postcard-entrance-y" initial={reducedMotion ? false : { y: "55%" }} animate={{ y: 0 }} transition={enterTransition}>
      <motion.div className="postcard-entrance-x" initial={reducedMotion ? false : { opacity: 0, x: "-18%", rotate: -7, scale: 0.72 }} animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }} transition={cardTransition}>
        <div
          className="postcard-scene"
          ref={sceneRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={clearTilt}
        >
          <div className="postcard-card" data-flipped={flipped ? "true" : undefined}>
            <div className="postcard-inner">
              <div className="postcard-face postcard-front" aria-hidden="true" />
              <div className="postcard-paperclip-layer" aria-hidden="true">
                <img src="/clouisle-assets/release-notes/paperclip.png" alt="" draggable="false" />
              </div>
              <div className="postcard-face postcard-back">
                <picture className="postcard-paper">
                  <source media="(prefers-color-scheme: dark)" srcSet="/clouisle-assets/release-notes/postcard-back-dark.png" />
                  <img src="/clouisle-assets/release-notes/postcard-back.png" alt="" draggable="false" />
                </picture>
                <img className="postcard-stamp" src="/clouisle-assets/release-notes/stamp.png" alt="" aria-hidden="true" draggable="false" />
                <img className="postcard-postmark" src="/clouisle-assets/release-notes/postmark.png" alt="" aria-hidden="true" draggable="false" />
                <div className="postcard-copy">
                  <p className="postcard-greeting">{release.greeting}</p>
                  <div className="postcard-message">
                    {release.message.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <h2 className="postcard-features-title">{featuresLabel}</h2>
                  <ul className="postcard-features">
                    {release.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <p className="postcard-signoff">{release.signOff}</p>
                </div>
              </div>
              <div className="postcard-paperclip-layer postcard-paperclip-back-layer" aria-hidden="true">
                <img src="/clouisle-assets/release-notes/paperclip.png" alt="" draggable="false" />
              </div>
              <div className="postcard-polaroid-layer" aria-hidden="true">
                <div className="postcard-polaroid">
                  <img src="/clouisle-assets/release-notes/polaroid.png" alt="" draggable="false" />
                  <div className="postcard-polaroid-photo"><img src={release.cover} alt="" draggable="false" /></div>
                </div>
              </div>
              <div className="postcard-sheen" aria-hidden="true" />
              <button className="postcard-flip-toggle" type="button" aria-label={flipLabel} onClick={handleFlip} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
