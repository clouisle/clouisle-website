"use client";

import type { Translations } from "../../i18n/translations";

export default function FinalCta({ t }: { t: Translations }) {
  return (
    <section className="final-cta">
      <h2>{t.finalCta.title}</h2>
      <p>{t.finalCta.availability}</p>
    </section>
  );
}
