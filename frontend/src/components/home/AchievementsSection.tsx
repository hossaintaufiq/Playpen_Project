"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  BookOpen,
  Rocket,
  Palette,
  MapPin,
} from "lucide-react";
import type { StudentAchievement } from "@/lib/cms/types";
import { defaultStudentAchievements } from "@/lib/student-achievements-defaults";
import { CambridgeResultsShowcase } from "./CambridgeResultsShowcase";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

const stats = [
  { value: "49 Years", label: "Legacy of Excellence", sub: "Established in 1977" },
  { value: "5,000+", label: "Students Nurtured", sub: "Across all academic levels" },
  { value: "1,000+", label: "Successful Alumni", sub: "At premier global universities" },
  { value: "98%", label: "Academic Success", sub: "Cambridge O & A Level distinctions" },
  { value: "100+", label: "Awards & Trophies", sub: "National & international laurels" },
];

const categories = [
  { id: "all", label: "All Highlights", icon: Trophy },
  { id: "academic", label: "Cambridge & Academics", icon: BookOpen },
  { id: "science", label: "Science & Tech", icon: Rocket },
  { id: "sports", label: "Sports & Athletics", icon: Trophy },
  { id: "arts", label: "Arts & Culture", icon: Palette },
] as const;

const SLIDE_DURATION = 6000; // 6 seconds per slide

export function AchievementsSection({
  achievements = defaultStudentAchievements,
}: {
  achievements?: StudentAchievement[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredAchievements = achievements.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Safe bounds check
  const totalItems = filteredAchievements.length;
  const safeIndex = totalItems > 0 ? currentIndex % totalItems : 0;
  const currentItem = filteredAchievements[safeIndex] || filteredAchievements[0];

  // Navigation handlers with smooth transition trigger
  const goToIndex = useCallback(
    (index: number) => {
      if (totalItems <= 1 || isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex((index + totalItems) % totalItems);
      setTimeout(() => setIsAnimating(false), 350);
    },
    [totalItems, isAnimating]
  );

  const handlePrev = useCallback(() => {
    goToIndex(safeIndex - 1);
  }, [goToIndex, safeIndex]);

  const handleNext = useCallback(() => {
    goToIndex(safeIndex + 1);
  }, [goToIndex, safeIndex]);

  // Reset slider index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, totalItems, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      handleNext(); // swipe left
    } else if (diff < -swipeThreshold) {
      handlePrev(); // swipe right
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24 border-y border-border/60">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-hover mb-3">
            <Trophy className="h-3.5 w-3.5" />
            <span>Record of Excellence</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14] tracking-tight text-foreground">
            PROUD OF WHAT <br className="hidden sm:inline" />
            <span className="text-primary">
              WE&apos;VE{" "}
              <span className="relative inline-block">
                ACHIEVED
                <HandDrawnUnderline className="text-primary" />
              </span>
              .
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            From world-topping Cambridge examination results to national Olympiads and sports championships, our students consistently excel on every stage.
          </p>
        </div>

        {/* 01 — Cambridge Official Examination Results Showcase */}
        <div className="mt-10 sm:mt-14">
          <CambridgeResultsShowcase />
        </div>

        {/* 02 — Large Statistical Metrics Bar */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-border/80 bg-white p-4 sm:p-5 lg:p-6 text-center shadow-xs transition duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 ${
                idx === 0 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm font-bold text-foreground leading-tight">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 03 — Category Filters */}
        <div className="mt-12 sm:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.03]"
                      : "bg-white text-muted-foreground border border-border/80 hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 04 — Interactive Slider Showcase: Fixed Size Card for 100% Stability */}
        {currentItem ? (
          <div
            className="mt-8 sm:mt-10 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Achievements Showcase Slider"
          >
            {/* Main Active Card with Locked Dimensions */}
            <article
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.25rem] border border-border/80 bg-white shadow-lg lg:shadow-xl transition-shadow duration-300"
            >
              {/* Responsive Fixed-Height Grid Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[500px] xl:h-[520px]">
                
                {/* LEFT SIDE: Picture Container with Locked Proportions */}
                <div className="relative lg:col-span-7 h-[260px] sm:h-[340px] lg:h-full w-full bg-slate-900 overflow-hidden shrink-0">
                  <Image
                    key={currentItem.id}
                    src={
                      currentItem.image ||
                      "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/590052840_1335298195064957_3588772396145097072_n.webp"
                    }
                    alt={currentItem.title}
                    fill
                    className={`object-cover object-center transition-all duration-500 ease-out ${
                      isAnimating ? "opacity-75 scale-102" : "opacity-100 scale-100"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />

                  {/* Gradient Overlays for High Contrast Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Left: Category Pill */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm border border-black/5">
                      <Award className="h-3.5 w-3.5 text-accent" />
                      <span>{currentItem.category ?? "Achievement"}</span>
                    </span>
                  </div>

                  {/* Top Right: Autoplay Progress / Pause Indicator */}
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
                    <button
                      type="button"
                      onClick={() => setIsPaused((prev) => !prev)}
                      aria-label={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md transition hover:bg-black/80 hover:text-white"
                      title={isPaused ? "Play" : "Pause"}
                    >
                      {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Bottom Bar on Image: Venue and Slide Counter */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex items-center justify-between text-white text-xs font-semibold">
                    <div className="flex items-center gap-1.5 drop-shadow-md text-white/90">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span className="truncate max-w-[200px] sm:max-w-[300px]">
                        {currentItem.venue ? currentItem.venue : "Dhaka, Bangladesh"}
                      </span>
                    </div>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-xs shrink-0">
                      {safeIndex + 1} / {totalItems}
                    </span>
                  </div>
                </div>

                {/* RIGHT SIDE: Descriptions & Distinction Breakdown with Strict Content Bounding */}
                <div className="lg:col-span-5 h-[340px] sm:h-[320px] lg:h-full p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-white overflow-hidden shrink-0">
                  
                  {/* Top Section */}
                  <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-border/60 text-xs shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="font-bold uppercase tracking-wider text-primary text-[11px] sm:text-xs">
                          Record of Excellence
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-semibold text-muted-foreground text-[11px] sm:text-xs">
                        <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {currentItem.year ?? currentItem.date ?? "2024–2025"}
                      </span>
                    </div>

                    {/* Title & Organizer with Clean Line Clamping */}
                    <div className="mt-3 shrink-0">
                      <h3
                        title={currentItem.title}
                        className="font-extrabold text-lg sm:text-xl lg:text-[1.35rem] text-foreground leading-snug line-clamp-2"
                      >
                        {currentItem.title}
                      </h3>

                      {currentItem.organizer ? (
                        <p className="mt-1 text-xs text-muted-foreground truncate">
                          Organized by:{" "}
                          <span className="font-semibold text-foreground/85">{currentItem.organizer}</span>
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-muted-foreground/60">
                          Playpen Student Accomplishment
                        </p>
                      )}
                    </div>

                    {/* Distinction Checklist (Clean internal scroll for variable item counts so card never changes height) */}
                    <div className="mt-3 flex-1 min-h-0 flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground block mb-2 shrink-0">
                        Key Honors &amp; Distinction Breakdown
                      </span>
                      
                      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 [scrollbar-width:thin] [scrollbar-color:#d4d4d8_transparent]">
                        {currentItem.results.map((res, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/90 leading-snug"
                          >
                            <div className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover mt-0.5">
                              <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            </div>
                            <span className="font-medium">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Controls & Archive Link (Strictly Fixed at Bottom) */}
                  <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between shrink-0">
                    <Link
                      href="/academics/student-achievements"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-primary hover:underline hover:text-primary-dark transition-colors"
                    >
                      <span>View full archive</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {/* Arrow Navigation Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Achievement"
                        className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary shadow-xs active:scale-95 cursor-pointer"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Achievement"
                        className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary shadow-xs active:scale-95 cursor-pointer"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Slider Dots Pagination */}
            {totalItems > 1 && (
              <div className="mt-5 flex items-center justify-center gap-1.5 sm:gap-2">
                {filteredAchievements.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === safeIndex
                        ? "w-7 sm:w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8 text-center p-8 rounded-2xl bg-white border border-border/60">
            <p className="text-muted-foreground text-sm">
              No achievements found in this category.
            </p>
          </div>
        )}

        {/* View All CTA Strip */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/academics/student-achievements"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-primary shadow-xs transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md"
          >
            <span>Explore All Student Achievements</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
