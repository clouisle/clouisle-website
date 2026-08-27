"use client";

import { useEffect, useState } from "react";
import type { ReleaseNotesTranslations } from "../../i18n/translations";
import ReleaseCard from "./ReleaseCard";

type Release = ReleaseNotesTranslations["releases"][number];

export default function PastIssues({ title, releases, lang }: { title: string; releases: Release[]; lang: "en" | "zh" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector<HTMLElement>(".past-issues");
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`past-issues${visible ? " is-visible" : ""}`}>
      <h2>{title}</h2>
      <div className="release-grid">
        {releases.map((release) => <ReleaseCard key={release.slug} release={release} lang={lang} />)}
      </div>
    </section>
  );
}
