"use client";

import type { Translations } from "../../i18n/translations";

export default function DownloadNotice({
  t,
  onDismiss,
}: {
  t: Translations;
  onDismiss: () => void;
}) {
  return (
    <div className="download-notice" role="status">
      <span>{t.downloadNotice.text}</span>
      <button type="button" aria-label={t.downloadNotice.dismiss} onClick={onDismiss}>x</button>
    </div>
  );
}
