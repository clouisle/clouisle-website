"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Timeline shell: draws the vertical rail and drives two scroll effects.
 * - `--rn-progress` fills the rail as the reader scrolls down it; nodes the
 *   fill has passed get `.is-reached` (their dot turns solid).
 * - Nodes (`[data-rn-node]`) fade up once, the first time they enter view.
 * Content stays fully visible until hydration (`data-ready`) and for
 * `prefers-reduced-motion`.
 */
export default function ReleaseTimeline({ label, children }: { label: string; children: ReactNode }) {
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const nodes = Array.from(list.querySelectorAll<HTMLElement>("[data-rn-node]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    list.dataset.ready = "true";

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add("is-in", "is-reached"));
      list.style.setProperty("--rn-progress", "100%");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    nodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = list.getBoundingClientRect();
      const reading = window.innerHeight * 0.55 - bounds.top;
      list.style.setProperty("--rn-progress", `${Math.min(bounds.height, Math.max(0, reading))}px`);
      for (const node of nodes) node.classList.toggle("is-reached", node.offsetTop + 22 <= reading);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <ol className="rn-timeline" ref={listRef} aria-label={label}>
      <li className="rn-rail" aria-hidden="true" role="presentation">
        <span className="rn-rail-fill" />
      </li>
      {children}
    </ol>
  );
}
