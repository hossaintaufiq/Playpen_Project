"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function HeritageIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Timeline:
    // 0ms - 1100ms: Step 1 - Minimalist white background with incoming introductory typography
    // 1100ms - 2800ms: Step 2 - Logos reveal (Playpen School crest & 49 Years celebration emblem)
    // 2800ms: Trigger smooth exit dissolve
    // 3400ms: Completely unmount from DOM
    const step2Timer = setTimeout(() => {
      setStep(2);
    }, 1100);

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    const closeTimer = setTimeout(() => {
      setVisible(false);
    }, 3400);

    return () => {
      clearTimeout(step2Timer);
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setVisible(false);
    }, 350);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Playpen School 49 Years Intro"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white text-slate-900 overflow-hidden transition-all duration-700 ease-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Minimalist Soft Radial Gradient Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(248,250,252,0.98)_60%,rgba(241,245,249,0.95)_100%)]" />

      {/* Subtle Warm Amber / Gold Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      {/* Skip Button (Minimalist & Clean) */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute top-6 right-6 z-30 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-600 border border-slate-200 transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
      >
        <span>Skip</span>
        <span className="text-slate-400 text-sm">✕</span>
      </button>

      {/* STEP 1: Minimalist Text Entrance */}
      <div
        className={`relative z-20 flex flex-col items-center text-center px-6 max-w-xl mx-auto transition-all duration-700 ease-out ${
          step === 1
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-6 pointer-events-none absolute"
        }`}
      >
        <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">
          Est. 1977 &middot; Dhaka
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Where Every Child <br />
          <span className="text-primary font-extrabold">Can Shine.</span>
        </h1>

        <div className="w-16 h-0.5 bg-primary/30 rounded-full my-4" />

        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-md">
          49 Years of Nurturing Leaders, Inspiring Excellence &amp; Shaping Bright Futures.
        </p>
      </div>

      {/* STEP 2: The 49-Year Celebration Logo & Playpen School Logo */}
      <div
        className={`relative z-20 flex flex-col items-center text-center px-6 max-w-2xl mx-auto transition-all duration-700 ease-out ${
          step === 2
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-6 pointer-events-none absolute"
        }`}
      >
        {/* Dual Logos Showcase */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-5">
          {/* 1. Official Playpen Logo */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
              <Image
                src="/logo/playpen-logo.png"
                alt="Playpen School Logo"
                fill
                sizes="96px"
                className="object-contain p-1.5"
                priority
              />
            </div>
            <span className="font-heading text-xs sm:text-sm font-extrabold text-slate-900 mt-2 tracking-wide">
              PLAYPEN
            </span>
          </div>

          {/* Minimalist Divider */}
          <div className="flex flex-col items-center justify-center py-2">
            <div className="w-px h-12 bg-slate-200" />
            <span className="my-1.5 text-amber-500 text-xs font-bold">&diams;</span>
            <div className="w-px h-12 bg-slate-200" />
          </div>

          {/* 2. Official 49 Years Celebration Emblem */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_12px_24px_rgba(245,158,11,0.25)] animate-float-subtle">
              <Image
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years of the Glorious Journey Celebration Logo"
                fill
                sizes="112px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading text-[10px] sm:text-xs font-bold text-amber-600 mt-1 uppercase tracking-wider">
              49 Years
            </span>
          </div>
        </div>

        {/* Jubilee Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200/80">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-amber-700">
              1977 &ndash; 2026 Jubilee
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            49 Years of the Glorious Journey
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Playpen School &middot; Bashundhara R/A, Dhaka
          </p>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="w-40 h-1 bg-slate-100 rounded-full mt-6 overflow-hidden relative border border-slate-200/60">
          <div className="h-full bg-gradient-to-r from-primary via-amber-500 to-amber-400 rounded-full animate-jubilee-progress" />
        </div>
      </div>
    </div>
  );
}
