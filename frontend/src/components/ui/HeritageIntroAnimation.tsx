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
    }, 1000);

    return () => clearTimeout(timer);
  }, [finished, reducedMotion]);

  if (!shouldRender || unmounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-3 bg-[#f5f1e9] text-[#191817] will-change-transform ${
        reducedMotion
          ? ""
          : "transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
      } ${finished ? "-translate-y-full pointer-events-none" : "translate-y-0"}`}
      aria-hidden="true"
    >
      {/* Light Warm Shade Vignette & Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_15%,#f7f3eb_60%,#ede4d4_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-amber-500/8 blur-[120px] pointer-events-none" />

      {/* Main Logo & Heritage Presentation */}
      <div className="relative z-10 overflow-hidden flex items-center justify-center w-full px-4 sm:px-6">
        <div className="flex items-center justify-center h-20 sm:h-28 md:h-36 gap-3 sm:gap-6">
          {/* Playpen School Crest Logo */}
          <div className="overflow-hidden flex items-center justify-end pr-2 sm:pr-4 h-full">
            <Image
              key="playpen-logo"
              src={siteLogo.src}
              alt="Playpen School Logo"
              width={200}
              height={200}
              priority
              className={`h-14 sm:h-20 md:h-28 w-auto object-contain shrink-0 drop-shadow-md ${
                reducedMotion ? "" : "animate-logo-reveal"
              }`}
            />
          </div>

          {/* Vertical Divider */}
          <div
            className={`w-[3px] md:w-[4px] h-[65%] bg-primary shrink-0 rounded-full shadow-xs ${
              reducedMotion ? "" : "animate-divider-scale"
            }`}
          />

          {/* 49 Years Logo & Brand Text */}
          <div className="overflow-hidden flex items-center justify-start pl-2 sm:pl-4 h-full gap-3 sm:gap-4">
            <Image
              key="celebration-logo"
              src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
              alt="49 Years Celebration"
              width={200}
              height={200}
              priority
              className={`h-14 sm:h-20 md:h-28 w-auto object-contain shrink-0 drop-shadow-md ${
                reducedMotion ? "" : "animate-text-reveal"
              }`}
            />
            <div
              className={`flex flex-col justify-center text-left ${
                reducedMotion ? "" : "animate-text-reveal"
              }`}
            >
              <p className="font-heading font-black text-xl sm:text-3xl md:text-4xl tracking-tight text-primary leading-none">
                Playpen
              </p>
              <span className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.22em] text-amber-800 mt-1 sm:mt-1.5">
                49 Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeritageIntroAnimation;
