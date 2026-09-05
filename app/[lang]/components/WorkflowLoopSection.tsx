"use client";

import { useRef, useState, type PointerEvent } from "react";
import type { Translations } from "../../i18n/translations";

export default function WorkflowLoopSection({ t }: { t: Translations }) {
  const data = t.workflowLoop;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPointerInside, setIsPointerInside] = useState(false);

  // Follow mouse horizontal position inside the section
  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (!sectionRef.current || !trackRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    setScrollProgress(ratio);
    
    // Smoothly scroll the horizontal track
    const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    if (maxScroll > 0) {
      trackRef.current.scrollTo({
        left: maxScroll * ratio,
        behavior: "auto",
      });
    }
  }

  // Active step index
  const activeStep = Math.min(
    data.steps.length - 1,
    Math.floor(scrollProgress * data.steps.length),
  );

  return (
    <section
      ref={sectionRef}
      className="workflow-loop-section"
      id="workflow-loop"
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => setIsPointerInside(false)}
      onPointerMove={handlePointerMove}
    >
      <div className="workflow-loop-header">
        <span className="workflow-loop-eyebrow">{data.eyebrow}</span>
        <h2 className="workflow-loop-title">{data.title}</h2>
        <p className="workflow-loop-description">{data.description}</p>
      </div>

      <div className="workflow-loop-container">
        {/* Step indicator rail */}
        <div className="workflow-loop-rail" aria-hidden="true">
          <div
            className="workflow-loop-rail-fill"
            style={{ width: `${Math.max(8, (scrollProgress || 0.05) * 100)}%` }}
          />
        </div>

        {/* Horizontal draggable / mouse-following track */}
        <div ref={trackRef} className="workflow-loop-track" tabIndex={0} role="region" aria-label={data.title}>
          {data.steps.map((item, index) => {
            const isActive = isPointerInside && activeStep === index;
            return (
              <article
                key={item.step}
                className={`workflow-step-card ${isActive ? "is-active" : ""}`}
                data-step={item.step}
              >
                <div className="step-card-top">
                  <span className="step-badge">{item.step}</span>
                  <span className="step-tag">{item.tag}</span>
                </div>
                <h3 className="step-card-title">{item.title}</h3>
                <h4 className="step-card-subtitle">{item.subtitle}</h4>
                <p className="step-card-description">{item.description}</p>
                <div className="step-card-arrow" aria-hidden="true">
                  <span>→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="workflow-loop-footer">
        <p className="workflow-loop-closing">{data.closing}</p>
      </div>
    </section>
  );
}
