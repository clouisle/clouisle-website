"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Translations } from "../../i18n/translations";
import { assetUrl } from "../../seo";

const useCaseImages = [
  assetUrl("case-agents.png"),
  assetUrl("case-workflows.png"),
  assetUrl("case-knowledge.png"),
];

export default function UseCasesSection({ t }: { t: Translations }) {
  const [activeCase, setActiveCase] = useState(0);
  const caseProjectRefs = useRef<Array<HTMLElement | null>>([]);
  const pendingCaseRef = useRef<number | null>(null);
  const caseNavigationTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 851px)");
    let observer: IntersectionObserver | undefined;

    function observeProjects() {
      observer?.disconnect();
      if (!desktopQuery.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          const pendingCase = pendingCaseRef.current;

          if (pendingCase !== null) {
            const targetReached = entries.some(
              (entry) =>
                Number((entry.target as HTMLElement).dataset.caseIndex) === pendingCase &&
                entry.intersectionRatio >= 0.8,
            );

            if (!targetReached) return;

            pendingCaseRef.current = null;
            window.clearTimeout(caseNavigationTimerRef.current);
          }

          const foremostProject = entries
            .filter((entry) => entry.intersectionRatio >= 0.8)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

          if (foremostProject) {
            setActiveCase(Number((foremostProject.target as HTMLElement).dataset.caseIndex));
          }
        },
        { threshold: 0.8 },
      );

      caseProjectRefs.current.forEach((project) => {
        if (project) observer?.observe(project);
      });
    }

    observeProjects();
    desktopQuery.addEventListener("change", observeProjects);

    return () => {
      observer?.disconnect();
      window.clearTimeout(caseNavigationTimerRef.current);
      desktopQuery.removeEventListener("change", observeProjects);
    };
  }, []);

  function chooseCase(index: number) {
    pendingCaseRef.current = index;
    window.clearTimeout(caseNavigationTimerRef.current);
    setActiveCase(index);
    caseProjectRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });

    caseNavigationTimerRef.current = window.setTimeout(() => {
      pendingCaseRef.current = null;
    }, 1500);
  }

  return (
    <section className="use-cases-section" id="reports">
      <div className="section-intro">
        <h2>{t.useCases.title}</h2>
      </div>
      <div className="read-tabs-shell">
        <div className="case-picker">
          <nav className="case-picker-sticky" aria-label="Clouisle use cases">
            {t.useCases.cases.map((item, index) => (
              <button
                className={`case-picker-button ${activeCase === index ? "is-active" : ""}`}
                key={index + 1}
                type="button"
                onClick={() => chooseCase(index)}
                aria-pressed={activeCase === index}
              >
                <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="case-title">{item.title}</span>
                <span className={`case-disclosure ${activeCase === index ? "is-expanded" : ""}`}>
                  <span className="case-disclosure-inner">
                    <span className="case-description">{item.description}</span>
                  </span>
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="case-project-list">
          {t.useCases.cases.map((_, index) => (
            <article
              className="case-project"
              data-case-index={index}
              key={index + 1}
              ref={(element) => {
                caseProjectRefs.current[index] = element;
              }}
            >
              <div className="case-project-frame">
                <Image src={useCaseImages[index]} alt={`${t.useCases.cases[index].title} — Clouisle`} width={1217} height={808} loading="lazy" unoptimized sizes="(min-width: 851px) 66vw, 100vw" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mobile-case-list">
        {t.useCases.cases.map((item, index) => (
          <article className="mobile-case" key={index + 1}>
            <Image src={useCaseImages[index]} alt={`${item.title} — Clouisle`} width={1217} height={808} loading="lazy" unoptimized sizes="100vw" />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
