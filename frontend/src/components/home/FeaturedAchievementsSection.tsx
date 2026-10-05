"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, CheckCircle2, Calendar, MapPin, Sparkles, Trophy, BookOpen, Rocket, Palette } from "lucide-react";
import type { StudentAchievement } from "@/lib/cms/types";
import { defaultStudentAchievements } from "@/lib/student-achievements-defaults";

const categories = [
  { id: "all", label: "All Highlights", icon: Trophy },
  { id: "academic", label: "Cambridge & Academics", icon: BookOpen },
  { id: "science", label: "Science & Tech", icon: Rocket },
  { id: "sports", label: "Sports & Athletics", icon: Trophy },
  { id: "arts", label: "Arts & Culture", icon: Palette },
] as const;

export function FeaturedAchievementsSection({
  achievements = defaultStudentAchievements,
}: {
  achievements?: StudentAchievement[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = achievements.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const heroItem = filtered[0] || achievements[0];
  const secondaryItems = filtered.slice(1, 5);

  return (
    <section id="achievements" className="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/70">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Record of Excellence
              </span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-foreground">
              They Didn&apos;t Just Participate. <br className="hidden sm:inline" />
              <span className="text-primary">They Excelled.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From global Cambridge Top in Country learners to national science Olympiads, debating laureates, and sports championships, our students consistently excel on every stage.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-foreground text-white shadow-sm"
                      : "bg-white text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 01 — Split Spotlight Feature: Picture Left & Descriptions Right */}
        {heroItem && (
          <div className="mt-12">
            <div className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-border/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              
              {/* Left Column: Authentic High-Resolution Picture (7 Cols) */}
              <div className="relative lg:col-span-7 min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] bg-muted overflow-hidden">
                <Image
                  src={
                    heroItem.image ||
                    "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/590052840_1335298195064957_3588772396145097072_n.webp"
                  }
                  alt={heroItem.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/40 lg:via-transparent lg:to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm border border-black/5">
                    <Trophy className="h-3.5 w-3.5 text-accent" />
                    Featured Spotlight
                  </span>
                </div>

                {/* Bottom Image Caption Tag */}
                <div className="absolute bottom-4 left-5 right-5 text-white/90 text-xs font-medium">
                  <p className="line-clamp-1 drop-shadow-md">
                    {heroItem.venue ? `${heroItem.title} &bull; ${heroItem.venue}` : heroItem.title}
                  </p>
                </div>
              </div>

              {/* Right Column: In-Depth Descriptions & Honors (5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  {/* Metadata Tag Strip */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground pb-4 mb-5 border-b border-border/60">
                    <span className="inline-flex items-center gap-1.5 capitalize text-primary font-bold bg-primary/8 px-3 py-1 rounded-full">
                      <Award className="h-3.5 w-3.5" />
                      {heroItem.category}
                    </span>
                    {heroItem.year && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {heroItem.year}
                      </span>
                    )}
                    {heroItem.venue && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {heroItem.venue}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">
                    {heroItem.title}
                  </h3>

                  {heroItem.organizer && (
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                      Organized by: <span className="font-semibold text-foreground/80">{heroItem.organizer}</span>
                    </p>
                  )}

                  {/* Detailed Description of Honors & Cambridge Distinctions */}
                  <div className="mt-6 space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground block">
                      Key Honors &amp; Distinction Breakdown
                    </span>
                    
                    {heroItem.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90 leading-snug">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                  <Link
                    href="/academics/student-achievements"
                    className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary transition hover:text-primary-dark"
                  >
                    <span>View in Official Record Archive</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 02 — Secondary Editorial Grid of Additional Laureates with Pictures */}
            {secondaryItems.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {secondaryItems.map((item) => (
                  <article
                    key={item.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Photo Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                        <Image
                          src={
                            item.image ||
                            "/school-images/academics/student-achievements/Debate Competition/DSC02538.webp"
                          }
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-3.5 left-3.5">
                          <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary shadow-sm">
                            {item.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-medium">
                          <span>{item.year ?? item.date ?? "2024–2025"}</span>
                          {item.venue && <span className="truncate max-w-[55%] text-right opacity-90">{item.venue}</span>}
                        </div>
                      </div>

                      {/* Card Details */}
                      <div className="p-5">
                        <h4 className="font-extrabold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>

                        <div className="mt-3.5 space-y-1.5">
                          {item.results.slice(0, 2).map((res, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-foreground/85 leading-tight">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span className="line-clamp-2">{res}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0">
                      <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary">
                        <span>Read details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* View All CTA Strip */}
        <div className="mt-14 text-center">
          <Link
            href="/academics/student-achievements"
            className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/20 bg-white px-8 py-4 text-xs sm:text-sm font-bold text-foreground shadow-sm transition-all duration-300 hover:bg-foreground hover:text-white hover:border-foreground"
          >
            <span>Explore All Student Achievements</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
