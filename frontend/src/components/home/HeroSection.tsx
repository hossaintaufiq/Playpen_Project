"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Pause,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { HeroSlide } from "@/lib/cms/types";

const DEFAULT_YOUTUBE_ID = "Z1nMZWILMvo";

interface FeaturedHeroSlide {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
}

const DEFAULT_SLIDES: FeaturedHeroSlide[] = [
  {
    id: "heritage",
    tag: "10-Storey Campus",
    title: "Purpose-Built 10-Storey Campus in Bashundhara",
    caption: "A modern architectural home providing climate-controlled classrooms, sports grounds, and science facilities.",
    image: "/school-images/about/our-campus/DSC01243.webp",
  },
  {
    id: "cambridge",
    tag: "Cambridge Curriculum",
    title: "Playgroup to A-Level Cambridge Excellence",
    caption: "Over four decades of proven academic rigor and outstanding Cambridge learner achievements.",
    image: "/school-images/about/our-campus/DSC01231.webp",
  },
  {
    id: "laboratories",
    tag: "Science & Innovation",
    title: "State-of-the-Art Laboratories & Learning Spaces",
    caption: "Cambridge and British Council-approved science laboratories equipped for hands-on discovery.",
    image: "/images/schools/senior.webp",
  },
  {
    id: "student-life",
    tag: "Vibrant Community",
    title: "Nurturing Character, Sports & Creativity",
    caption: "Fostering well-rounded individuals through athletics, arts, and community leadership.",
    image: "/images/schools/elementary.webp",
  },
];

type HeroSectionProps = {
  slides?: (Pick<HeroSlide, "src" | "alt"> & { description?: string })[];
  youtubeVideoId?: string;
};

export function HeroSection({
  slides = [],
  youtubeVideoId = DEFAULT_YOUTUBE_ID,
}: HeroSectionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const heroSlides: FeaturedHeroSlide[] =
    slides.length > 0
      ? slides.map((s, idx) => ({
          id: `cms-${idx}`,
          tag: "Playpen Campus",
          title: s.alt || `Playpen School View ${idx + 1}`,
          caption: s.description || "Celebrating 49 years of nurturing excellence.",
          image: s.src,
        }))
      : DEFAULT_SLIDES;

  useEffect(() => {
    if (isPlayingVideo || isPausedByUser) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlayingVideo, isPausedByUser, heroSlides.length]);

  const activeSlide = heroSlides[currentSlideIndex] || heroSlides[0];
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${youtubeVideoId}&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] w-full overflow-hidden bg-[#0c0205] text-white flex flex-col justify-between">
      {/* Background Media: Photography Slides or Campus Video */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {isPlayingVideo ? (
          <div className="absolute inset-0 h-full w-full bg-black">
            <iframe
              src={embedUrl}
              title="Playpen School Campus Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100%] w-[100vw] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 opacity-90 transition-opacity duration-1000"
            />
          </div>
        ) : (
          heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlideIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center transform transition-transform duration-[8000ms] ease-out scale-105"
                sizes="100vw"
              />
            </div>
          ))
        )}

        {/* Clean Vignette & Legibility Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0204] via-[#0e0306]/70 to-[#0a0204]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0205]/95 via-[#0e0306]/65 to-transparent" />
      </div>

      {/* Main Clean Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Highlighted 49-Year Celebration Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-black/40 backdrop-blur-md pl-2 pr-4.5 py-1.5 shadow-lg mb-6">
            <div className="relative h-7 w-7 shrink-0 drop-shadow">
              <Image
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years of the Glorious Journey"
                fill
                sizes="28px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="text-amber-300 uppercase">49 Years of the Glorious Journey</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-white/80 font-medium">Est. 1977</span>
            </div>
          </div>

          {/* Simple, Bold Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight text-white drop-shadow-sm">
            WHERE EVERY CHILD <br />
            <span className="text-amber-300">CAN SHINE.</span>
          </h1>

          {/* Clean, Focused Subtitle */}
          <p className="mt-5 max-w-xl text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed">
            49 years of Cambridge International excellence, character building, and world-class learning on our purpose-built 10-storey campus in Dhaka.
          </p>

          {/* Clean Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/admissions/apply"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about/our-campus"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <Compass className="h-4 w-4 text-amber-300" />
              <span>Explore Campus</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsPlayingVideo(!isPlayingVideo);
                setIsPausedByUser(true);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/15"
            >
              {isPlayingVideo ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-amber-300" />
                  <span>Pause Video</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
                  <span>Watch Campus Video</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean, Minimal Bottom Bar: Slide Pagination & Quick Highlights */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          {/* Slide Navigation & Current Slide Title */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => {
                    setIsPlayingVideo(false);
                    setIsPausedByUser(true);
                    setCurrentSlideIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex && !isPlayingVideo
                      ? "w-8 bg-amber-400"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <span className="text-white/40 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5 text-white/80 font-medium text-[11px] sm:text-xs">
              <span className="text-amber-300 font-bold">{activeSlide.tag}:</span>
              <span className="truncate max-w-[160px] sm:max-w-xs">{activeSlide.title}</span>
            </div>

            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                aria-label="Previous Slide"
                onClick={() => {
                  setIsPlayingVideo(false);
                  setIsPausedByUser(true);
                  setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next Slide"
                onClick={() => {
                  setIsPlayingVideo(false);
                  setIsPausedByUser(true);
                  setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Key Quick Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-white/70 font-semibold tracking-wide text-[11px] sm:text-xs">
            <span>Playgroup to A-Level</span>
            <span className="text-amber-400">&bull;</span>
            <span>Cambridge International</span>
            <span className="text-amber-400 hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Bashundhara R/A Campus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
