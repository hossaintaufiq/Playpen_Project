"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteLogo } from "@/lib/brand";

let hasPlayedIntroInSession = false;

const DEFAULT_WORDS = [
  { num: "01", text: "ACADEMIC RIGOR." },
  { num: "02", text: "MORAL CHARACTER." },
  { num: "03", text: "CREATIVE CURIOSITY." },
  { num: "04", text: "PLAYPEN HERITAGE." },
];

export interface HeritageIntroAnimationProps {
  onComplete?: () => void;
  duration?: number;
  words?: { num: string; text: string }[];
}

export function HeritageIntroAnimation({
  onComplete,
  duration = 1100,
  words = DEFAULT_WORDS,
}: HeritageIntroAnimationProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [unmounted, setUnmounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasPlayedIntroInSession) {
      setUnmounted(true);
      return;
    }
    hasPlayedIntroInSession = true;
    setShouldRender(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!shouldRender || finished || unmounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldRender, finished, unmounted]);

  useEffect(() => {
    if (!shouldRender) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let rafId: number | null = null;
    let currentIdx = 0;
    const wordCount = words.length;

    const timeout = (callback: () => void, delay: number) => {
      const id = setTimeout(() => {
        if (!cancelled) callback();
      }, delay);
      timers.push(id);
      return id;
    };

    const finish = () => {
      if (cancelled) return;
      timeout(() => {
        if (cancelled) return;
        setFinished(true);
      }, reducedMotion ? 0 : 2000);
    };

    const cycleNext = () => {
      if (cancelled) return;
      currentIdx += 1;
      setIndex(currentIdx);

      if (currentIdx < wordCount) {
        rafId = requestAnimationFrame(() => {
          if (cancelled) return;
          timeout(cycleNext, duration);
        });
        return;
      }
      finish();
    };

    timeout(cycleNext, duration);

    return () => {
      cancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [shouldRender, duration, reducedMotion, words.length]);

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
    }, 900);

    return () => clearTimeout(timer);
  }, [finished, reducedMotion]);

  if (!shouldRender || unmounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#faf7f2] text-[#121212] will-change-transform ${
        reducedMotion
          ? ""
          : "transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)]"
      } ${finished ? "-translate-y-full pointer-events-none" : "translate-y-0"}`}
      aria-hidden="true"
    >
      {/* Swiss Grid Background */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      {/* Top Banner Stamp */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between border-b-2 border-[#121212] pb-3 font-mono text-xs font-bold text-[#524d46]">
        <span>EST. 1977 // DHAKA</span>
        <span className="bg-[#6b0c26] text-white px-2 py-0.5 border border-[#121212]">
          VOL. 49
        </span>
      </div>

      {/* Main Cycling Container */}
      <div className="relative z-10 overflow-hidden h-28 sm:h-36 md:h-44 flex items-center justify-center w-full px-4 sm:px-6">
        {index < words.length ? (
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-bold bg-[#d97706] text-[#121212] px-2.5 py-1 border-2 border-[#121212] shadow-[2px_2px_0px_#121212]">
              {words[index]?.num}
            </span>
            <span
              key={reducedMotion ? "static" : index}
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight select-none whitespace-nowrap text-[#121212] uppercase ${
                reducedMotion ? "" : "animate-word-slide"
              }`}
            >
              {words[index]?.text ?? ""}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 sm:gap-6 border-3 border-[#121212] bg-[#ffffff] p-6 shadow-[8px_8px_0px_#121212]">
            {/* Playpen School Crest Logo */}
            <div className="relative h-16 sm:h-24 w-16 sm:w-24 shrink-0 border-2 border-[#121212] p-2 bg-white">
              <Image
                src={siteLogo.src}
                alt="Playpen School Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            {/* Vertical Divider */}
            <div className="w-[3px] h-16 sm:h-20 bg-[#121212] shrink-0" />

            {/* 49 Years Logo & Brand Text */}
            <div className="flex items-center gap-4">
              <div className="relative h-16 sm:h-24 w-16 sm:w-24 shrink-0">
                <Image
                  src="/school-images/gallery/Logo/48,49,-50-year-celebration-logo-copy.webp"
                  alt="49 Years Celebration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="font-serif font-black text-2xl sm:text-4xl tracking-tight text-[#6b0c26] leading-none uppercase">
                  Playpen
                </p>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#d97706] mt-1.5 block">
                  49 Years of Excellence
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Stamp */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t-2 border-[#121212] pt-3 font-mono text-xs font-bold text-[#524d46]">
        <span>CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION</span>
        <span>DHAKA, BANGLADESH</span>
      </div>
    </div>
  );
}

export default HeritageIntroAnimation;
