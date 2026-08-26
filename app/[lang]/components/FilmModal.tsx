"use client";

import type { Translations } from "../../i18n/translations";
import MuxVideo, { muxStream } from "./MuxVideo";

const filmPlaybackId = "lP00d01uh6GP49vSdkJdDF8RftDkzEvG4kKhwdTgohkXA";

export default function FilmModal({ t, onClose }: { t: Translations; onClose: () => void }) {
  return (
    <div className="film-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="film-modal"
        role="dialog"
        aria-modal="true"
        aria-label={t.film.label}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="film-close" type="button" aria-label={t.film.close} onClick={onClose}>x</button>
        <div className="film-frame">
          <MuxVideo
            source={muxStream(filmPlaybackId)}
            poster={`https://image.mux.com/${filmPlaybackId}/thumbnail.webp?width=1920&fit_mode=preserve&time=0`}
            className="film-video"
            label={t.film.screamLabel}
            controls
          />
        </div>
      </section>
    </div>
  );
}
