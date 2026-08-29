"use client";

import { type CSSProperties } from "react";

type GlyphWordProps = {
  /** Word split into per-letter animated glyphs. */
  text: string;
  /**
   * CSS custom props forwarded to glyph animations.
   * - stagger: delay between each letter's pulse loop (default .28s)
   */
  stagger?: number;
};

/**
 * Per-letter variable-font word, as used in the Hero wordmark: letters
 * repeatedly swell and return through the display font's weight axis with a stagger.
 * aria-label carries the readable word; the visual
 * glyphs are hidden from assistive tech.
 */
export default function GlyphWord({ text, stagger = 0.28 }: GlyphWordProps) {
  return (
    <span className="hero-word" aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          className="hero-glyph"
          style={
            {
              "--i": index,
              "--pulse-stagger": `${stagger}s`,
            } as CSSProperties
          }
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
