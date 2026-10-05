"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  BookOpen,
  Rocket,
  Palette,
} from "lucide-react";
import type { StudentAchievement } from "@/lib/cms/types";
import { defaultStudentAchievements } from "@/lib/student-achievements-defaults";
import { CambridgeResultsShowcase } from "./CambridgeResultsShowcase";

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

export function AchievementsSection({
  achievements = defaultStudentAchievements,
}: {
  achievements?: StudentAchievement[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const filteredAchievements = achievements.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Reset slider index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused || filteredAchievements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredAchievements.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, filteredAchievements.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredAchievements.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredAchievements.length);
  };

  const currentItem = filteredAchievements[currentIndex] || filteredAchievements[0];

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28 border-y border-border/60">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.04] blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-hover mb-3">
            <Trophy className="h-3.5 w-3.5" />
            <span>Record of Excellence</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-foreground">
            PROUD OF WHAT <br className="hidden sm:inline" />
            <span className="text-primary">WE&apos;VE ACHIEVED.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            From world-topping Cambridge examination results to national Olympiads and sports championships, our students consistently excel on every stage.
          </p>
        </div>

        {/* 01 — Cambridge Official Examination Results Showcase */}
        <div className="mt-12 sm:mt-16">
          <CambridgeResultsShowcase />
        </div>

        {/* 02 — Large Statistical Metrics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-3xl border border-border/80 bg-white p-6 text-center shadow-sm transition duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 ${
                idx === 0 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-foreground leading-tight">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 03 — Category Filters */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-white text-muted-foreground border border-border hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 04 — Interactive Slider Showcase: Picture Left, Descriptions Right */}
        {currentItem && (
          <div
            className="mt-10 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Active Card */}
            <article className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-border/80 bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
                
                {/* LEFT SIDE: Picture */}
                <div className="relative lg:col-span-7 min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-muted overflow-hidden">
                  <Image
                    key={currentItem.id}
                    src={
                      currentItem.image ||
                      "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/590052840_1335298195064957_3588772396145097072_n.webp"
                    }
                    alt={currentItem.title}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/40 lg:via-transparent lg:to-transparent" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm border border-black/5">
                      <Award className="h-3.5 w-3.5 text-accent" />
                      {currentItem.category ?? "Achievement"}
                    </span>
                  </div>

                  {/* Caption & Counter on Image */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="drop-shadow-md">
                      {currentItem.venue ? `${currentItem.venue}` : "Dhaka, Bangladesh"}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold">
                      {currentIndex + 1} / {filteredAchievements.length}
                    </span>
                  </div>
                </div>

                {/* RIGHT SIDE: Descriptions & Distinction Breakdown */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                  <div>
                    {/* Top Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border/60 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="font-bold uppercase tracking-wider text-primary">
                          Record of Excellence
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-semibold text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {currentItem.year ?? currentItem.date ?? "2024–2025"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground leading-tight transition-colors">
                      {currentItem.title}
                    </h3>

                    {currentItem.organizer && (
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                        Organized by: <span className="font-semibold text-foreground/80">{currentItem.organizer}</span>
                      </p>
                    )}

                    {/* Distinction Checklist */}
                    <div className="mt-6 space-y-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground block">
                        Key Honors &amp; Distinction Breakdown
                      </span>
                      {currentItem.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 leading-snug">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover mt-0.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-medium">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Controls & Archive Link */}
                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <Link
                      href="/academics/student-achievements"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline"
                    >
                      <span>View full archive</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {/* Arrow Navigation Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Achievement"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition hover:bg-primary hover:text-white hover:border-primary shadow-xs"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Achievement"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition hover:bg-primary hover:text-white hover:border-primary shadow-xs"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Slider Dots Pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {filteredAchievements.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* View All CTA Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/academics/student-achievements"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-8 py-4 text-xs sm:text-sm font-bold text-primary shadow-sm transition hover:bg-primary hover:text-white"
          >
            <span>Explore All Student Achievements</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
