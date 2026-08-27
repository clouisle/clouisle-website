"use client";

import { useEffect, useState } from "react";
import type { ReleaseNotesTranslations } from "../../i18n/translations";

type Release = ReleaseNotesTranslations["releases"][number];

type MetadataProps = {
  release: Release;
  labels: ReleaseNotesTranslations["metadata"];
};

function MetadataIcon({ type }: { type: "date" | "location" }) {
  if (type === "location") {
    return <svg className="release-meta-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="8.5" r="3" stroke="currentColor" /><path d="M10 19s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" stroke="currentColor" /></svg>;
  }
  return <svg className="release-meta-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9.5" stroke="currentColor" /><path d="M9.5 10h1v6h-1v-6Z" fill="currentColor" /></svg>;
}

function DigitRoller({ value }: { value: string }) {
  const [animate, setAnimate] = useState(false);
  const isDigit = /^\d$/.test(value);
  const target = isDigit ? Number(value) : 0;
  const sequence = isDigit ? `${"0123456789".repeat(2)}${value}` : value;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimate(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <span className={`release-digit ${isDigit ? "is-number" : "is-symbol"}`} aria-hidden="true">
      <span className="release-digit-viewport">
        <span className={`release-digit-track${animate && isDigit ? " is-rolling" : ""}`} style={isDigit ? { transform: `translateY(-${(10 + target) * 18}px)` } : undefined}>
          {[...sequence].map((digit, index) => <span className="release-digit-value" key={`${digit}-${index}`}>{digit}</span>)}
        </span>
      </span>
    </span>
  );
}

function VersionRoller({ value }: { value: string }) {
  return <span className="release-version-roller" aria-label={value}>{[...value].map((character, index) => <DigitRoller key={`${character}-${index}`} value={character} />)}</span>;
}

export default function ReleaseMetadata({ release, labels }: MetadataProps) {
  return (
    <aside className="release-metadata" aria-label={`${labels.issueLabel}, ${release.issue}`}>
      <div className="release-metadata-inner">
        <div className="release-meta-item"><MetadataIcon type="date" /><span>{release.metadataDate}</span></div>
        <div className="release-meta-item"><MetadataIcon type="location" /><span>{release.location}</span></div>
        <div className="release-meta-item release-meta-roller"><span>{labels.issueLabel}</span><VersionRoller value={release.issueNo} /></div>
        <div className="release-meta-item release-meta-roller"><span>{labels.versionLabel}</span><VersionRoller value={release.version.replace(/^v/, "")} /></div>
      </div>
    </aside>
  );
}
