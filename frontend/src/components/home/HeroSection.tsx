"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import type { HeroSlide } from "@/lib/cms/types";

type HeroSectionProps = {
  slides?: (Pick<HeroSlide, "src" | "alt"> & { description?: string })[];
};

export function HeroSection({}: HeroSectionProps = {}) {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] min-h-[560px] max-h-[960px] w-full overflow-hidden bg-black text-white flex flex-col justify-end">
      {/* 01 — Autoplay Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center"
        >
          <source
            src="/school-images/videos/hero-video2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 02 — Top Header Subtle Vignette */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      {/* 03 — Bottom Black Shade Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

      {/* 04 — Bottom Overlay Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="max-w-3xl">
          {/* 49-Year Celebration Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-black/50 backdrop-blur-md pl-2 pr-4 py-1.5 shadow-lg mb-3">
            <div className="relative h-6 w-6 shrink-0 drop-shadow">
              <Image
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years of Excellence"
                fill
                sizes="24px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
              <span className="text-amber-300 uppercase">49 Years of Excellence</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-white/80 font-medium">Est. 1977</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-white drop-shadow-md">
            Shaping Tomorrow&apos;s Leaders.
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-white/95 font-medium leading-relaxed drop-shadow">
            Cambridge International Curriculum &bull; Playgroup to A-Level &bull; Bashundhara R/A, Dhaka
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#achievements"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]"
            >
              <Trophy className="h-4 w-4 text-amber-300" />
              <span>Explore Our Achievements</span>
            </a>

            <Link
              href="/admissions/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/40 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
