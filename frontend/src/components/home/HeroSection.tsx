"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Pause,
  Compass,
  Award,
  ChevronLeft,
  ChevronRight,
  Building2,
  GraduationCap,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { siteLogo } from "@/lib/brand";
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
    tag: "49 Years of Heritage",
    title: "10-Storey Custom-Built Campus",
    caption: "A modern architectural home in Bashundhara R/A providing climate-controlled classrooms, sports grounds, and science facilities.",
    image: "/school-images/about/our-campus/DSC01243.webp",
  },
  {
    id: "cambridge",
    tag: "Cambridge International",
    title: "Playgroup to A-Level Excellence",
    caption: "Over four decades of proven academic rigor, critical thinking, and outstanding Cambridge learner awards.",
    image: "/school-images/about/our-campus/DSC01231.webp",
  },
  {
    id: "laboratories",
    tag: "Science & Innovation",
    title: "State-of-the-Art Science & ICT Labs",
    caption: "Cambridge and British Council-approved science laboratories equipped for hands-on inquiry and practical discovery.",
    image: "/images/schools/senior.webp",
  },
  {
    id: "student-life",
    tag: "Character & Community",
    title: "Vibrant Student Life & Leadership",
    caption: "Fostering well-rounded individuals through athletics, performing arts, cultural programs, and community service.",
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
          tag: "Playpen Life",
          title: s.alt || `Playpen School View ${idx + 1}`,
          caption: s.description || "Celebrating 49 years of inspiring young minds and shaping global leaders.",
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
    }, 6500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlayingVideo, isPausedByUser, heroSlides.length]);

  const activeSlide = heroSlides[currentSlideIndex] || heroSlides[0];
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${youtubeVideoId}&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <section className="relative min-h-[92vh] sm:min-h-[96vh] lg:min-h-[98vh] w-full overflow-hidden bg-[#120307] text-[#fffdfa] flex flex-col justify-between">
      {/* Background Canvas: Dynamic Real Photography or Campus Reel */}
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
                className="object-cover object-center transform transition-transform duration-[9000ms] ease-out scale-105"
                sizes="100vw"
              />
            </div>
          ))
        )}

        {/* Organic Warm Atmosphere Overlays: Softened deep maroon & warm charcoal vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0205] via-[#1a040b]/75 to-[#0e0205]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120307]/90 via-[#1a040b]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,8,38,0.4),transparent_65%)]" />
      </div>

      {/* Main Hero Storytelling Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-12 lg:px-8 lg:pt-16 flex-1 flex flex-col justify-center">
        {/* Heritage Pill & Academic Status */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* 49-Year Heritage Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent pl-2 pr-4 py-1 backdrop-blur-md shadow-md">
            <div className="relative h-6 w-6 shrink-0 drop-shadow">
              <Image
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years Celebration"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              49 Years of the Glorious Journey &middot; Est. 1977
            </span>
          </div>

          {/* Admissions Open Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
            <span className="text-amber-400">&bull;</span>
            <span>Admissions Open 2025–2026</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">Playgroup to A-Level</span>
          </div>
        </div>

        {/* Hero Narrative & Crest */}
        <div className="mt-6 sm:mt-8 max-w-4xl">
          {/* School Crest & Identity Header */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="relative h-13 w-13 sm:h-15 sm:w-15 shrink-0 rounded-2xl bg-white p-1.5 shadow-xl border border-white/30">
              <Image
                src={siteLogo.src}
                alt={siteLogo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  PLAYPEN
                </span>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  SINCE 1977
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/90 mt-0.5">
                School of Excellence &middot; Bashundhara R/A, Dhaka
              </p>
            </div>
          </div>

          {/* Majestic, Organic Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.04] tracking-tight text-white text-balance drop-shadow-sm">
            WHERE EVERY CHILD <br />
            <span className="text-amber-300">
              CAN SHINE.
            </span>
          </h1>

          {/* Human-Centered, Grounded Description */}
          <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed text-balance">
            For nearly five decades, Playpen has guided generations of pupils through a rigorous 
            Cambridge International curriculum, nurturing curious minds, moral courage, and compassionate leaders in our 10-storey campus community.
          </p>

          {/* Genuine Action Suite */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="/admissions/apply"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about/our-campus"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass className="h-4 w-4 text-amber-300" />
              <span>Explore Our Campus</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsPlayingVideo(!isPlayingVideo);
                setIsPausedByUser(true);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              {isPlayingVideo ? (
                <>
                  <Pause className="h-4 w-4 text-amber-300" />
                  <span>Pause Campus Film</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 text-amber-300 fill-amber-300" />
                  <span>Watch Campus Reel</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Heritage & Facility Trust Dock */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: 4 Interactive Highlights Tabs */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    Campus Highlights
                  </span>
                  <span className="text-white/30">&bull;</span>
                  <span className="text-xs font-medium text-white/80">
                    {activeSlide.tag}
                  </span>
                </div>

                {/* Manual Navigation */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Previous Slide"
                    onClick={() => {
                      setIsPlayingVideo(false);
                      setIsPausedByUser(true);
                      setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                    }}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next Slide"
                    onClick={() => {
                      setIsPlayingVideo(false);
                      setIsPausedByUser(true);
                      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
                    }}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Clickable Channel Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex && !isPlayingVideo;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsPlayingVideo(false);
                        setIsPausedByUser(true);
                        setCurrentSlideIndex(idx);
                      }}
                      className={`text-left p-2.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? "border-amber-400 bg-white/15 shadow-md ring-1 ring-amber-400"
                          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute top-0 left-0 right-0 h-0.5 bg-amber-400" />
                      )}
                      <p className="text-[10px] font-bold text-amber-300">0{idx + 1}</p>
                      <p className="text-xs font-bold text-white truncate mt-0.5">{slide.title}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Authentic 49-Year Heritage Statistics */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/15 pt-4 lg:pt-0 lg:pl-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl font-black text-amber-300">49 Years</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-0.5">
                    Heritage (Est. 1977)
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl font-black text-white">5,000+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-0.5">
                    Alumni Worldwide
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl font-black text-amber-300">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-0.5">
                    Cambridge Pathway
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl font-black text-white">10-Storey</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-0.5">
                    Bashundhara Campus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
