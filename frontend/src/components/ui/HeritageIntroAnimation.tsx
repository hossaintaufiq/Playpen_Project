"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteLogo } from "@/lib/brand";

// Session flag: runs on first load and full page refresh (resets on F5)
let hasPlayedIntroInSession = false;

export interface HeritageIntroAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

export function HeritageIntroAnimation({
  onComplete,
  duration = 2000,
}: HeritageIntroAnimationProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [finished, setFinished] = useState(false);
  const [unmounted, setUnmounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  /*
   * Check session on mount — only run on 1st time load / refresh
   */
  useEffect(() => {
    if (hasPlayedIntroInSession) {
      setUnmounted(true);
      return;
    }
    hasPlayedIntroInSession = true;
    setShouldRender(true);
  }, []);

  /*
   * Reduced motion preference
   */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /*
   * Lock body scroll smoothly while preloader is active without causing layout shifts
   */
  useEffect(() => {
    if (!shouldRender || finished || unmounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldRender, finished, unmounted]);

  /*
   * Direct logo and brand reveal timer
   */
  useEffect(() => {
    if (!shouldRender) return;

    const timer = setTimeout(() => {
      setFinished(true);
    }, reducedMotion ? 0 : duration);

    return () => clearTimeout(timer);
  }, [shouldRender, duration, reducedMotion]);

  useEffect(() => {
    if (!finished) return;

    if (reducedMotion) {
      setUnmounted(true);
      onCompleteRef.current?.();
      return;
    }

    const timer = setTimeout(() => {
      setUnmounted(true);
      onCompleteRef.current?.();
    }, 850);

    return () => clearTimeout(timer);
  }, [finished, reducedMotion]);

  if (!shouldRender || unmounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f7f4ed] text-[#191817] will-change-transform ${
        reducedMotion
          ? ""
          : "transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)]"
      } ${finished ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
      aria-hidden="true"
    >
      {/* Light Warm Shade Vignette & Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_20%,#f8f5ee_60%,#ebe2d2_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[750px] h-[340px] sm:h-[600px] md:h-[750px] rounded-full bg-amber-500/10 blur-[90px] sm:blur-[130px] pointer-events-none" />

      {/* Main Logo & Heritage Presentation — Perfectly Centered on Mobile and All Viewports */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {/* Centered Dual Logos Cluster */}
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 md:gap-6">
            {/* Playpen School Crest Logo */}
            <div className="relative flex items-center justify-center shrink-0">
              <Image
                key="playpen-logo"
                src={siteLogo.src}
                alt="Playpen School Logo"
                width={160}
                height={160}
                priority
                className={`h-16 w-16 sm:h-20 sm:w-20 md:h-26 md:w-26 object-contain drop-shadow-md ${
                  reducedMotion ? "" : "animate-logo-reveal"
                }`}
              />
            </div>

            {/* Vertical Divider */}
            <div
              className={`w-[2.5px] sm:w-[3px] md:w-[3.5px] h-12 sm:h-16 md:h-20 bg-primary/80 shrink-0 rounded-full shadow-2xs ${
                reducedMotion ? "" : "animate-divider-scale"
              }`}
            />

            {/* 49 Years Celebration Emblem */}
            <div className="relative flex items-center justify-center shrink-0">
              <Image
                key="celebration-logo"
                src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                alt="49 Years Celebration"
                width={160}
                height={160}
                priority
                className={`h-16 w-16 sm:h-20 sm:w-20 md:h-26 md:w-26 object-contain drop-shadow-md ${
                  reducedMotion ? "" : "animate-text-reveal"
                }`}
              />
            </div>
          </div>

          {/* Typography: Centered below on mobile, aligned inline on desktop */}
          <div
            className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
              reducedMotion ? "" : "animate-text-reveal"
            }`}
          >
            <p className="font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-primary leading-none">
              Playpen
            </p>
            <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#92400e] mt-1 sm:mt-1.5 whitespace-nowrap">
              49 Years of Excellence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeritageIntroAnimation;
