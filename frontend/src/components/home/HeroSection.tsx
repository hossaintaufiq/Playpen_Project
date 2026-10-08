"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { HeroSlide } from "@/lib/cms/types";

type HeroSectionProps = {
  slides?: (Pick<HeroSlide, "src" | "alt"> & { description?: string })[];
};

const heroFeatures = [
  { first: "Limitless", second: "Ambition" },
  { first: "Academic", second: "Brilliance" },
  { first: "Global", second: "Distinction" },
  { first: "Character", second: "First" },
  { first: "Future", second: "Leaders" },
];

export function HeroSection({}: HeroSectionProps = {}) {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback for auto-play policy
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroFeatures.length);
        setIsFading(false);
      }, 400);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const current = heroFeatures[index];

  return (
    <section className="relative h-[85vh] sm:h-[90vh] min-h-[500px] max-h-[960px] w-full overflow-hidden bg-black text-white flex flex-col justify-end">
      {/* 01 — Autoplay Background Video (Hardware-accelerated & Centered) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover object-center transform-gpu will-change-transform pointer-events-none"
        >
          <source
            src="/school-images/videos/hero-video2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 02 — Top Header Subtle Vignette */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none z-10" />

      {/* 03 — Bottom Black Shade Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none z-10" />

      {/* 04 — Bottom Overlay Content (Tight, Cohesive Spacing) */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 sm:pb-10 lg:px-8 lg:pb-14">
        <div className="max-w-3xl">
          {/* Luxury 49-Year Heritage Badge */}
          <div className="inline-flex max-w-full items-center gap-2.5 sm:gap-3 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-black/70 to-black/50 backdrop-blur-xl px-3.5 sm:px-4 py-1.5 shadow-[0_4px_24px_rgba(245,158,11,0.2)] mb-2 sm:mb-2.5 ring-1 ring-white/15">
            <div className="relative h-5 w-5 sm:h-5.5 sm:w-5.5 shrink-0 drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              <Image
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years of Heritage"
                width={22}
                height={22}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-bold tracking-[0.16em] uppercase text-amber-200">
              <span>49 Years of Heritage</span>
              <span className="text-amber-400/40">&bull;</span>
              <span className="text-white/85 normal-case font-semibold tracking-normal">Est. 1977</span>
            </div>
          </div>

          {/* Dynamic Rotating 2-Word Headline */}
          <div className="h-[2.8rem] sm:h-[3.6rem] md:h-[4.2rem] lg:h-[4.8rem] overflow-hidden flex items-center">
            <h1
              className={`font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-none drop-shadow-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isFading
                  ? "-translate-y-6 opacity-0 blur-[2px]"
                  : "translate-y-0 opacity-100 blur-0"
              }`}
            >
              <span>{current.first} {current.second}</span>
              <span className="text-[#e23a63]">.</span>
            </h1>
          </div>

          {/* Clean Institutional Action CTAs */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            <a
              href="#achievements"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white shadow-[0_4px_20px_rgba(122,8,38,0.4)] transition-all duration-200 hover:bg-primary-dark hover:shadow-[0_6px_28px_rgba(122,8,38,0.6)] hover:-translate-y-0.5 active:translate-y-0 ring-1 ring-white/15"
            >
              Explore Achievements
            </a>

            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white transition-all duration-200 hover:bg-white hover:text-foreground hover:border-white hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
