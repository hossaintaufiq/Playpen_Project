"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

const SLIDE_INTERVAL_MS = 5500;

const fallbackSlides = defaultCMSData.heroSlides.map((slide) => ({
  src: slide.src,
  alt: slide.alt,
}));

type HeroSectionProps = {
  slides?: Pick<HeroSlide, "src" | "alt">[];
};

export function HeroSection({ slides }: HeroSectionProps) {
  const heroImages = slides?.length ? slides : fallbackSlides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [heroImages.length]);

  useEffect(() => {
    if (reduceMotion || heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [reduceMotion, heroImages.length]);

  return (
    <section className="relative min-h-[calc(100dvh-100px)] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={`${image.src}-${index}`}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out ${
                  isActive && !reduceMotion ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000]/92 via-[#800000]/78 to-[#800000]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/40 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-100px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/75 sm:text-xs">
            Welcome To Playpen
          </p>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-[1.18] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.15]">
            We assure you of the best possible care and education for your child.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/78 sm:mt-6 sm:text-base md:text-lg">
            A trusted school community in Dhaka, dedicated to nurturing every learner
            with warmth, excellence, and opportunity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/admissions"
              className="playpen-text w-full rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-primary transition hover:bg-white/92 sm:w-auto"
            >
              Apply for Admission
            </Link>
            <Link
              href="/about"
              className="w-full rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8 sm:w-auto"
            >
              Explore Our Story
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-2.5 sm:mt-12">
            {heroImages.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background sm:h-20" />
    </section>
  );
}
