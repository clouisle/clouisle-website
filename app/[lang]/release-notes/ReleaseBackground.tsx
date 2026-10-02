"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

type ReleaseBackgroundProps = {
  gradient?: number;
  mode?: "classic" | "transition" | "experimental";
  transitionStart?: number;
};

const gradients: Record<number, string> = {
  1: "linear-gradient(0deg, #8FC4EF 0%, rgba(143, 202, 239, 0.85) 50%, rgba(240, 254, 197, 0) 100%)",
  2: "linear-gradient(0deg, #F6FEC4 0%, rgba(255, 238, 160, 0.85) 50%, rgba(255, 236, 248, 0) 100%)",
  3: "linear-gradient(0deg, #FEB085 0%, rgba(255, 176, 178, 0.85) 17.79%, rgba(255, 204, 249, 0.85) 35%, rgba(233, 215, 255, 0.85) 56.73%, rgba(236, 242, 255, 0) 100%)",
  4: "linear-gradient(0deg, #B1BDFF 0%, rgba(154, 191, 255, 0.85) 33%, rgba(177, 215, 255, 0.85) 66%, rgba(229, 255, 254, 0) 100%)",
};

const wetMask = "linear-gradient(to top, #000 30%, rgba(0,0,0,.5) 60%, transparent 70%)";
const wetTint = "linear-gradient(to top, transparent 30%, rgba(110,205,255,.18) 54%, rgba(255,90,205,.28) 64%, transparent 72%)";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function mapRange(value: number, fromStart: number, fromEnd: number, toStart: number, toEnd: number) {
  if (value <= fromStart) return toStart;
  if (value >= fromEnd) return toEnd;
  return toStart + ((value - fromStart) / (fromEnd - fromStart)) * (toEnd - toStart);
}

function gradientFor(value: number) {
  return gradients[value] ?? gradients[1];
}

export default function ReleaseBackground({
  gradient = 1,
  mode = "transition",
  transitionStart = 30,
}: ReleaseBackgroundProps) {
  const currentGradientNumber = gradients[gradient] ? gradient : 1;
  const nextGradientNumber = currentGradientNumber === 1 ? 4 : currentGradientNumber - 1;
  const currentGradient = gradientFor(currentGradientNumber);
  const nextGradient = gradientFor(nextGradientNumber);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(mode === "experimental" ? 1 : 0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);
    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);
    return () => mediaQuery.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    function updateProgress() {
      if (mode === "classic" || reducedMotion) {
        setScrollProgress(0);
        return;
      }
      if (mode === "experimental") {
        setScrollProgress(1);
        return;
      }
      setScrollProgress(clamp((window.scrollY - transitionStart) / 230, 0, 1));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [mode, reducedMotion, transitionStart]);

  const dynamic = mode !== "classic" && !reducedMotion;
  const nextOpacity = dynamic ? mapRange(scrollProgress, 0.05, 0.85, 0, 1) : 0;
  const effectOpacity = dynamic ? mapRange(scrollProgress, 0.15, 1, 0, 0.15) : 0;
  const filterScale = dynamic ? 150 * scrollProgress : 0;
  const displacementStyle = useMemo<CSSProperties>(() => ({
    filter: "url(#release-note-wet-signal)",
  }), []);
  const gradientStyle = (image: string, opacity?: number, tinted = false): CSSProperties => ({
    backgroundImage: tinted ? `${wetTint}, ${image}` : image,
    backgroundBlendMode: tinted ? "screen" : undefined,
    maskImage: wetMask,
    WebkitMaskImage: wetMask,
    opacity,
  });

  return (
    <>
      {dynamic && (
        <svg className="release-background-filter" aria-hidden="true" width="0" height="0">
          <defs>
            <filter id="release-note-wet-signal" x="-70%" y="-70%" width="240%" height="240%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.022 0.006" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={filterScale} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      )}
      <div className="release-background-mobile" aria-hidden="true">
        {dynamic ? (
          <>
            <div className="release-background-layer" style={{ backgroundImage: currentGradient }} />
            <div className="release-background-layer" style={{ backgroundImage: nextGradient, opacity: nextOpacity }} />
            <div className="release-background-layer release-background-wet" style={displacementStyle}>
              <div className="release-background-layer" style={gradientStyle(currentGradient, 1, true)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity, true)} />
            </div>
            <div className="release-background-layer release-background-color-shift" style={{ ...displacementStyle, transform: "translate(-6px, 5px)", opacity: effectOpacity }}>
              <div className="release-background-layer" style={gradientStyle(currentGradient)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity)} />
            </div>
            <div className="release-background-layer release-background-color-shift" style={{ ...displacementStyle, transform: "translate(6px, -4px)", opacity: effectOpacity }}>
              <div className="release-background-layer" style={gradientStyle(currentGradient)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity)} />
            </div>
          </>
        ) : (
          <div className="release-background-layer" style={{ backgroundImage: currentGradient }} />
        )}
      </div>
      <div className="release-background-desktop" aria-hidden="true">
        {dynamic ? (
          <>
            <div className="release-background-layer" style={{ backgroundImage: currentGradient }} />
            <div className="release-background-layer" style={{ backgroundImage: nextGradient, opacity: nextOpacity }} />
            <div className="release-background-layer release-background-wet" style={displacementStyle}>
              <div className="release-background-layer" style={gradientStyle(currentGradient, 1, true)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity, true)} />
            </div>
            <div className="release-background-layer release-background-color-shift" style={{ ...displacementStyle, transform: "translate(-6px, 5px)", opacity: effectOpacity }}>
              <div className="release-background-layer" style={gradientStyle(currentGradient)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity)} />
            </div>
            <div className="release-background-layer release-background-color-shift" style={{ ...displacementStyle, transform: "translate(6px, -4px)", opacity: effectOpacity }}>
              <div className="release-background-layer" style={gradientStyle(currentGradient)} />
              <div className="release-background-layer" style={gradientStyle(nextGradient, nextOpacity)} />
            </div>
          </>
        ) : (
          <div className="release-background-layer" style={{ backgroundImage: currentGradient }} />
        )}
      </div>
    </>
  );
}
