"use client";

import { useEffect, useRef } from "react";

type PingPongVideoProps = {
  className?: string;
  src: string;
};

export function PingPongVideo({ className = "", src }: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let direction: 1 | -1 = 1;
    let lastTime = performance.now();

    const tick = (now: number) => {
      if (document.hidden) {
        lastTime = now;
        frame = requestAnimationFrame(tick);
        return;
      }

      const duration = video.duration || 0;
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (duration > 0) {
        const nextTime = video.currentTime + delta * direction;

        if (nextTime >= duration - 0.035) {
          video.currentTime = Math.max(duration - 0.035, 0);
          direction = -1;
        } else if (nextTime <= 0.035) {
          video.currentTime = 0.035;
          direction = 1;
        } else {
          video.currentTime = nextTime;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    const start = async () => {
      video.pause();
      video.currentTime = 0.035;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const onLoadedMetadata = () => {
      void start();
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) void start();

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  return (
    <video
      aria-hidden="true"
      className={className}
      muted
      playsInline
      poster="/images/noise-sphere-placeholder.jpg"
      preload="auto"
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
