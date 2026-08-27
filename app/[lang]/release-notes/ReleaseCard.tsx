import Link from "next/link";
import type { ReleaseNotesTranslations } from "../../i18n/translations";

type Release = ReleaseNotesTranslations["releases"][number];

export default function ReleaseCard({ release, lang }: { release: Release; lang: "en" | "zh" }) {
  return (
    <Link className="release-card" href={`/${lang}/release-notes/${release.slug}`}>
      <div className="release-card-labels">
        <span className="release-label">{release.date}</span>
        <span className="release-label-dot" aria-hidden="true" />
        <span className="release-label">No. {release.issueNo}</span>
        <span className="release-label-dot" aria-hidden="true" />
        <span className="release-label">App {release.version}</span>
      </div>
      <div className="release-cover">
        <img src={release.cover} alt="" />
        <img className="release-paperclip" src="/clouisle-assets/release-notes/paperclip.png" alt="" aria-hidden="true" />
        <img className="release-polaroid" src="/clouisle-assets/release-notes/polaroid.png" alt="" aria-hidden="true" />
      </div>
      <h2 className="release-card-title">{release.cardTitle}</h2>
    </Link>
  );
}
