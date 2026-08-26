"use client";

import type { Translations } from "../../i18n/translations";

export default function FinalCta({ t, onDownload }: { t: Translations; onDownload: () => void }) {
  return (
    <section className="final-cta">
      <h2>{t.finalCta.title}</h2>
      <button className="cta-download" type="button" onClick={onDownload}>{t.finalCta.download}</button>
      <p>{t.finalCta.availability}</p>
    </section>
  );
}
