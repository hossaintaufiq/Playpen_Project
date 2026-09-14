"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import type { HeroSlide } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

const SLIDE_INTERVAL_MS = 6000;
const VIDEO_SLIDE_INTERVAL_MS = 12000;
const DEFAULT_YOUTUBE_ID = "Z1nMZWILMvo";

const fallbackSlides = defaultCMSData.heroSlides.map((slide) => ({
  src: slide.src,
  alt: slide.alt,
  description: "A trusted school community in Dhaka, dedicated to nurturing every learner with warmth, excellence, and opportunity.",
}));

type HeroSectionProps = {
  slides?: (Pick<HeroSlide, "src" | "alt"> & { description?: string })[];
  youtubeVideoId?: string;
};

type HeroItem =
  | {
      type: "video";
      videoId: string;
      alt: string;
      description?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      description?: string;
    };

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

export function HeroSection({ slides, youtubeVideoId = DEFAULT_YOUTUBE_ID }: HeroSectionProps) {
  const heroImages = slides?.length ? slides : fallbackSlides;

  const heroItems: HeroItem[] = [
    {
      type: "video",
      videoId: youtubeVideoId,
      alt: "Playpen School Overview Video",
      description: "Experience the vibrant spirit, world-class learning, and inspiring community at Playpen.",
    },
    ...heroImages.map((img) => ({
      type: "image" as const,
      src: img.src,
      alt: img.alt,
      description: img.description,
    })),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoLoadedRef = useRef(false);

  const totalSlides = heroItems.length;

  const handlePrev = useCallback(() => {
    setIsPausedByUser(true);
    setActiveIndex((current) => (current === 0 ? totalSlides - 1 : current - 1));
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setIsPausedByUser(true);
    setActiveIndex((current) => (current + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [totalSlides]);

  // Handle video play / pause on slide changes
  useEffect(() => {
    if (activeIndex === 0) {
      sendPlayerCommand(iframeRef.current, "mute");
      sendPlayerCommand(iframeRef.current, "playVideo");

      // Multiple attempts to ensure YouTube API receiver is ready
      const t1 = setTimeout(() => {
        sendPlayerCommand(iframeRef.current, "mute");
        sendPlayerCommand(iframeRef.current, "playVideo");
      }, 300);

      const t2 = setTimeout(() => {
        sendPlayerCommand(iframeRef.current, "mute");
        sendPlayerCommand(iframeRef.current, "playVideo");
      }, 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      sendPlayerCommand(iframeRef.current, "pauseVideo");
    }
  }, [activeIndex]);

  // Auto-advance slides
  useEffect(() => {
    if (reduceMotion || totalSlides <= 1 || isPausedByUser) return;

    const currentItem = heroItems[activeIndex];
    const duration = currentItem?.type === "video" ? VIDEO_SLIDE_INTERVAL_MS : SLIDE_INTERVAL_MS;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, duration);

    return () => window.clearInterval(interval);
  }, [reduceMotion, totalSlides, isPausedByUser, activeIndex, heroItems]);

  const toggleMute = () => {
    if (isMuted) {
      sendPlayerCommand(iframeRef.current, "unMute");
      sendPlayerCommand(iframeRef.current, "setVolume", [70]);
      setIsMuted(false);
    } else {
      sendPlayerCommand(iframeRef.current, "mute");
      setIsMuted(true);
    }
  };

  const handleIframeLoad = () => {
    videoLoadedRef.current = true;
    sendPlayerCommand(iframeRef.current, "mute");
    sendPlayerCommand(iframeRef.current, "setVolume", [70]);
    if (activeIndex === 0) {
      sendPlayerCommand(iframeRef.current, "playVideo");
      setTimeout(() => {
        sendPlayerCommand(iframeRef.current, "playVideo");
      }, 300);
    }
  };

  const activeItem = heroItems[activeIndex];
  const activeDescription =
    activeItem?.description ??
    "A trusted school community in Dhaka, dedicated to nurturing every learner with warmth, excellence, and opportunity.";

  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${youtubeVideoId}&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <section
      className="group relative min-h-[calc(100dvh-100px)] overflow-hidden"
      aria-label="Playpen Hero Carousel"
    >
      {/* Slide Backgrounds */}
      <div className="absolute inset-0">
        {heroItems.map((item, index) => {
          const isActive = index === activeIndex;

          if (item.type === "video") {
            return (
              <div
                key={`hero-video-${item.videoId}`}
                className={`absolute inset-0 overflow-hidden bg-black transition-opacity duration-1000 ease-in-out ${
                  isActive ? "z-10 opacity-100" : "z-0 pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    src={embedUrl}
                    title="Playpen School — Campus and Student Life"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    onLoad={handleIframeLoad}
                    className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={`${item.src}-${index}`}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index <= 1}
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out ${
                  isActive && !reduceMotion ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-100px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-12 lg:py-28">
        <div className="max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white sm:text-xs">
              Welcome To Playpen
            </p>
            {activeItem.type === "video" && (
              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-black/60 active:scale-95"
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                {isMuted ? "Sound Off" : "Sound On"}
              </button>
            )}
          </div>

          <h1 className="mt-5 font-serif text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.15]">
            We assure you of the best possible care and education for your child.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/95 sm:mt-6 sm:text-base md:text-lg">
            {activeDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 drop-shadow-none">
            <Link
              href="/admissions"
              className="playpen-text w-full rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-primary shadow-lg transition hover:bg-white/92 sm:w-auto"
            >
              Apply for Admission
            </Link>
            <Link
              href="/about"
              className="w-full rounded-full border border-white/40 bg-black/25 backdrop-blur-sm px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:border-white/60 hover:bg-black/35 sm:w-auto"
            >
              Explore Our Story
            </Link>
          </div>

          {/* Dots Indicator */}
          <div className="mt-10 flex flex-wrap items-center gap-2 sm:mt-12 drop-shadow-none">
            {heroItems.map((item, index) => (
              <button
                key={item.type === "video" ? "dot-video" : `${item.src}-dot-${index}`}
                type="button"
                onClick={() => {
                  setIsPausedByUser(true);
                  setActiveIndex(index);
                }}
                aria-label={`Show slide ${index + 1}${item.type === "video" ? " (Video)" : ""}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full shadow transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Left and Right Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-black/70 active:scale-95 sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-black/70 active:scale-95 sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>
    </section>
  );
}
