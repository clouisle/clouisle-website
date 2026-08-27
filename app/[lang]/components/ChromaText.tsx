"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ChromaTextProps = {
  children: ReactNode;
  /** Animation duration in seconds. Default .9s (matches diabrowser.com). */
  duration?: number;
  /** Delay before the sweep starts once fully in view, in seconds. Default .1s. */
  delay?: number;
};

/**
 * Dia-style chroma reveal: the text is gradient-clipped with a transparent
 * window (invisible), then a color band sweeps across and settles on solid
 * black once the element is FULLY inside the viewport (plays once).
 */
export default function ChromaText({ children, duration = 0.9, delay = 0.1 }: ChromaTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 1)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`chroma-text${inView ? " chroma-text-animate" : ""}`}
      style={{ "--chroma-duration": `${duration}s`, "--chroma-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
