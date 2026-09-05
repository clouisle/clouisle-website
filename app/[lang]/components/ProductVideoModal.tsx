"use client";

import type { Translations } from "../../i18n/translations";

export default function ProductVideoModal({ t, onClose }: { t: Translations; onClose: () => void }) {
  return (
    <div className="product-video-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="product-video-modal"
        role="dialog"
        aria-modal="true"
        aria-label={t.productVideo.label}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="product-video-close" type="button" aria-label={t.productVideo.close} onClick={onClose}>x</button>
        <div className="product-video-frame">
          <video
            className="product-video"
            aria-label={t.productVideo.videoLabel}
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src="https://rustfs-endpoint.yhnotes.com/clouisle/clouisle-assets/product-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
