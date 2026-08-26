"use client";

import { useEffect, useRef } from "react";

export const muxStream = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8?rendition_order=desc&min_resolution=1080p`;

type MuxVideoProps = {
  source: string;
  poster: string;
  className: string;
  label: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export default function MuxVideo({
  source,
  poster,
  className,
  label,
  autoPlay = false,
  controls = false,
  loop = false,
  muted = false,
}: MuxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;
    let player: { destroy: () => void } | undefined;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      if (autoPlay) {
        void video.play().catch(() => undefined);
      }
      return () => {
        video.removeAttribute("src");
        video.load();
      };
    }

    void import("hls.js").then(({ default: Hls }) => {
      if (!active || !Hls.isSupported()) return;

      const hls = new Hls({ enableWorker: true });
      player = hls;
      hls.loadSource(source);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) void video.play().catch(() => undefined);
      });
    });

    return () => {
      active = false;
      player?.destroy();
    };
  }, [autoPlay, source]);

  return (
    <video
      ref={videoRef}
      className={className}
      aria-label={label}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      poster={poster}
      preload="metadata"
    />
  );
}
