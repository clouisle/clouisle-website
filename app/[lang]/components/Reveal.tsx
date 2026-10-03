"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades its direct children in, staggered, the first time each one enters the viewport.
 *
 * The hidden state is only applied once the effect has run, so children stay visible until
 * hydration and under `prefers-reduced-motion` — content never disappears when JavaScript
 * is unavailable. Use it in place of the grid/column wrapper it names, so the element and
 * its children keep the same layout.
 */
export default function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(container.children) as HTMLElement[];
    items.forEach((item, index) => {
      item.dataset.revealItem = "";
      item.style.setProperty("--reveal-index", String(index));
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    container.dataset.reveal = "";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}