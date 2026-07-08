"use client";

import { useCallback, useEffect, useRef } from "react";

const VIDEO_ID = "Z1nMZWILMvo";

const VIDEO_VOLUME = 30;

const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&modestbranding=1&rel=0&enablejsapi=1&loop=1&playlist=${VIDEO_ID}&controls=1`;

function sendPlayerCommand(
  iframe: HTMLIFrameElement | null,
  command: string,
  args: unknown = ""
) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func: command, args }),
    "*"
  );
}

type MissionVideoProps = {
  className?: string;
};

export function MissionVideo({ className = "" }: MissionVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isInViewRef = useRef(false);
  const isReadyRef = useRef(false);
  const hasInitializedRef = useRef(false);

  const initializePlayer = useCallback(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;
    sendPlayerCommand(iframeRef.current, "setVolume", [VIDEO_VOLUME]);
    sendPlayerCommand(iframeRef.current, "mute");
  }, []);

  const playIfAllowed = useCallback(() => {
    if (isInViewRef.current && isReadyRef.current && !document.hidden) {
      sendPlayerCommand(iframeRef.current, "playVideo");
    }
  }, []);

  const pauseVideo = useCallback(() => {
    sendPlayerCommand(iframeRef.current, "pauseVideo");
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.35;

        if (isInViewRef.current) {
          playIfAllowed();
        } else {
          pauseVideo();
        }
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.75, 1], rootMargin: "-8% 0px" }
    );

    observer.observe(container);

    const handleVisibility = () => {
      if (document.hidden) {
        pauseVideo();
      } else {
        playIfAllowed();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      pauseVideo();
    };
  }, [pauseVideo, playIfAllowed]);

  const handleIframeLoad = () => {
    isReadyRef.current = true;
    initializePlayer();
    playIfAllowed();
  };

  return (
    <div ref={containerRef} className={`group relative w-full ${className}`}>
      <div className="relative overflow-hidden rounded-xl bg-foreground ring-1 ring-border/80 sm:rounded-2xl">
        <div className="absolute left-0 top-0 z-10 h-0.5 w-full bg-gradient-to-r from-primary via-primary-light to-accent" />
        <div className="relative aspect-[4/3] w-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[360px]">
          <iframe
            ref={iframeRef}
            src={EMBED_URL}
            title="Playpen School — Our Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={handleIframeLoad}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
