"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function HeritageIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Clean 2.6s descriptive presentation then smooth fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2600);

    const closeTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Playpen School 49 Years Intro"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white text-slate-900 px-4 transition-all duration-700 ease-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Pure, Minimalist White Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,#faf9f6_70%,#f5f2eb_100%)]" />

      {/* Subtle Warm Amber Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      {/* Minimal Skip Button */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-600 border border-slate-200 transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
      >
        <span>Skip Intro</span>
        <span className="text-slate-400 text-xs">✕</span>
      </button>

      {/* Centered Descriptive Content Flow */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Jubilee Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/90 shadow-xs mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-amber-800">
            1977 &ndash; 2026 &middot; 49th Anniversary
          </span>
        </div>

        {/* Centered Official 49 Years Celebration Emblem */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 my-1 drop-shadow-[0_12px_30px_rgba(245,158,11,0.3)] animate-float-subtle">
          <Image
            src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
            alt="Playpen School 49 Years Celebration Emblem"
            fill
            sizes="(max-width: 640px) 144px, 192px"
            className="object-contain"
            priority
          />
        </div>

        {/* School Name & Headline */}
        <div className="mt-2 space-y-1.5">
          <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-primary">
            Playpen School
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            49 Years of the Glorious Journey
          </h1>
        </div>

        {/* Descriptive Summary */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
          Nurturing young minds, inspiring global leaders, and empowering curious learners through Cambridge International education since 1977.
        </p>

        {/* Campus & Curriculum Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] font-semibold text-slate-500">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200">
            Playgroup to A-Level
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200">
            Cambridge Pathway
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200">
            Bashundhara R/A Campus
          </span>
        </div>

        {/* Centered Smooth Progress Line */}
        <div className="w-48 h-1 bg-slate-100 rounded-full mt-6 overflow-hidden relative border border-slate-200/60">
          <div className="h-full bg-gradient-to-r from-primary via-amber-500 to-amber-400 rounded-full animate-jubilee-progress" />
        </div>
      </div>
    </div>
  );
}
