"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Trophy, Medal, Star, ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
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

export function AchievementsSection({
  achievements = defaultStudentAchievements,
}: {
  achievements?: StudentAchievement[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Highlights" },
    { id: "academic", label: "Cambridge & Academics" },
    { id: "science", label: "Science & Tech" },
    { id: "sports", label: "Sports & Athletics" },
    { id: "arts", label: "Arts & Culture" },
  ];

  const filteredAchievements = achievements
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28 border-y border-border/60">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.04] blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Cambridge Official Examination Results Showcase */}
        <div className="mt-12 sm:mt-16">
          <CambridgeResultsShowcase />
        </div>

        {/* Large Statistical Metrics Bar */}
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

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-muted-foreground border border-border hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Achievements Showcase Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Award className="h-3 w-3" />
                    {item.category ?? "Achievement"}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.year ?? item.date ?? "2024–2025"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-lg sm:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {item.organizer && (
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Organized by: <span className="text-foreground/80">{item.organizer}</span>
                  </p>
                )}

                {/* Key Results / Honors */}
                <div className="mt-4 space-y-2">
                  {item.results.slice(0, 3).map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-foreground/85 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                  {item.results.length > 3 && (
                    <p className="text-xs font-semibold text-primary pl-6">
                      +{item.results.length - 3} more awardees
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary">
                <span>View details in archive</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/academics/student-achievements"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-sm transition hover:bg-primary hover:text-white"
          >
            <span>Explore All Student Achievements</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
