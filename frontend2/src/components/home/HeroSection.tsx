"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import type { HeroSlide } from "@/lib/cms/types";

type HeroSectionProps = {
  slides?: (Pick<HeroSlide, "src" | "alt"> & { description?: string })[];
};

export function HeroSection({ slides }: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] min-h-[580px] max-h-[960px] w-full overflow-hidden bg-black text-white flex flex-col justify-end border-b-3 border-[#121212]">
      {/* 01 — Full-bleed Autoplay Background Video */}
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
            src="/school-images/videos/gemini_generated_video_340f5d52.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 02 — Bottom Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="max-w-4xl space-y-4">
          {/* 49-Year Celebration Badge */}
          <div className="inline-flex items-center gap-3 bg-black/80 border-2 border-white/80 px-3.5 py-1.5 backdrop-blur-md shadow-[4px_4px_0px_#000000]">
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
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-[#d97706]">
              49 YEARS OF ACADEMIC EXCELLENCE
            </span>
            <span className="text-white/40">•</span>
            <span className="font-mono text-xs font-bold text-white/90">EST. 1977</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Where <span className="text-[#d97706] italic">Curious Minds</span> <br />
            <span className="underline decoration-[#6b0c26] decoration-wavy decoration-3">
              Grow into Global Leaders.
            </span>
          </h1>

          {/* Supporting Philosophy Text */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/95 font-medium leading-relaxed max-w-2xl border-l-4 border-[#d97706] pl-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Cambridge International Curriculum • Playgroup to A-Level • Purpose-Built 10-Storey Campus in Bashundhara R/A, Dhaka.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/admissions/apply"
              className="brutal-btn group inline-flex items-center justify-center gap-2.5 bg-[#6b0c26] text-white hover:bg-[#850e2f] px-6 sm:px-7 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-white shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] transition-all"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about/our-campus"
              className="brutal-btn inline-flex items-center justify-center gap-2 bg-black/70 hover:bg-white hover:text-black text-white px-5 sm:px-6 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-white backdrop-blur-md shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] transition-all"
            >
              <Compass className="h-4 w-4 text-[#d97706]" />
              <span>Explore Campus</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

