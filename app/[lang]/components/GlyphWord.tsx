"use client";

import { type CSSProperties } from "react";

type GlyphWordProps = {
  /** Word split into per-letter animated glyphs. */
  text: string;
  /**
   * CSS custom props forwarded to glyph animations.
   * - enterStagger: delay between each letter's entrance (default .09s)
   * - idleStagger: delay between each letter's idle loop (default .28s)
   */
  enterStagger?: number;
  idleStagger?: number;
};

/**
 * Per-letter variable-font word, as used in the Hero wordmark: letters
 * pulse in ("EXPO" -100 -> 40) with a stagger, then settle into a slow
 * idle breathing loop. aria-label carries the readable word; the visual
 * glyphs are hidden from assistive tech.
 */
export default function GlyphWord({ text, enterStagger = 0.09, idleStagger = 0.28 }: GlyphWordProps) {
  return (
    <span className="hero-word" aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          className="hero-glyph"
          style={
            {
              "--i": index,
              "--enter-stagger": `${enterStagger}s`,
              "--idle-stagger": `${idleStagger}s`,
            } as CSSProperties
          }
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
