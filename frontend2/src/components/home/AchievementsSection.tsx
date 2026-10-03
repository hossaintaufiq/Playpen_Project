"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Trophy, ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import type { StudentAchievement } from "@/lib/cms/types";
import { defaultStudentAchievements } from "@/lib/student-achievements-defaults";

const stats = [
  { number: "01", value: "49+", label: "Years of Heritage", sub: "Established in 1977" },
  { number: "02", value: "5,000+", label: "Scholars Nurtured", sub: "Since inception" },
  { number: "03", value: "100%", label: "Cambridge Pass Rate", sub: "IGCSE & A-Levels" },
  { number: "04", value: "1,000+", label: "Global Alumni", sub: "Enrolled in Ivy & Russell Group" },
  { number: "05", value: "100+", label: "Olympiad Trophies", sub: "National & global laurels" },
];

export function AchievementsSection({
  achievements = defaultStudentAchievements,
}: {
  achievements?: StudentAchievement[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Highlights", code: "00" },
    { id: "academic", label: "Cambridge & Academics", code: "01" },
    { id: "science", label: "Science & Olympiads", code: "02" },
    { id: "sports", label: "Athletics & Sports", code: "03" },
    { id: "arts", label: "Arts & Culture", code: "04" },
  ];

  const filteredAchievements = achievements
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d97706] text-[#121212] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest border border-[#121212] shadow-[2px_2px_0px_#121212] mb-3">
              <Trophy className="h-3.5 w-3.5" />
              <span>02 // RECORD OF EXCELLENCE</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              PROUD OF WHAT <br />
              <span className="text-[#6b0c26] italic font-serif">WE HAVE ACHIEVED.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // CAMBRIDGE AWARDS • OLYMPIADS <br />
            ATHLETICS • LEADERSHIP
          </div>
        </div>

        {/* Monumental Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-2 border-[#121212] bg-[#ffffff] p-5 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#6b0c26] border-b border-[#121212]/20 pb-2 mb-3">
                <span>METRIC // {stat.number}</span>
                <Sparkles className="h-3 w-3 text-[#d97706]" />
              </div>
              <div>
                <span className="font-mono font-black text-3xl sm:text-4xl text-[#6b0c26] block leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans font-bold text-sm sm:text-base text-[#121212] mt-2 block leading-snug">
                  {stat.label}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#524d46] mt-2 block border-t border-[#121212]/10 pt-2">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Brutalist Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 pb-4 border-b-2 border-[#121212]">
          <span className="font-mono text-xs font-bold uppercase text-[#524d46] mr-2">
            FILTER BY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-xs font-bold uppercase px-3.5 py-2 border-2 border-[#121212] transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212] -translate-y-0.5"
                  : "bg-[#ffffff] text-[#121212] hover:bg-[#f4efe6] shadow-[2px_2px_0px_#121212]"
              }`}
            >
              <span className="text-[#d97706] mr-1.5">{cat.code}.</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Achievements Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => (
            <article
              key={item.id}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <div>
                {/* Header Stamp */}
                <div className="flex items-center justify-between font-mono text-[11px] font-bold border-b-2 border-[#121212] pb-3 mb-4">
                  <span className="bg-[#f4efe6] text-[#6b0c26] px-2 py-0.5 border border-[#121212]">
                    {(idx + 1).toString().padStart(2, "0")} // {item.category?.toUpperCase() ?? "HONOR"}
                  </span>
                  <span className="text-[#524d46]">{item.year ?? item.date ?? "2024–2025"}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-[#121212] leading-snug">
                  {item.title}
                </h3>

                {item.organizer && (
                  <p className="font-mono text-xs text-[#524d46] mt-2">
                    ORGANIZED BY: <span className="font-bold text-[#121212]">{item.organizer}</span>
                  </p>
                )}

                {/* Award Details List */}
                <div className="mt-4 space-y-2 border-t border-[#121212]/15 pt-3">
                  {item.results.slice(0, 3).map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#333333] leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#6b0c26] mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                  {item.results.length > 3 && (
                    <p className="font-mono text-[11px] font-bold text-[#6b0c26] pl-5 mt-1">
                      + {item.results.length - 3} additional awardees
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#121212] flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26]">
                <span className="uppercase">Archive Record</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout & Directory Link */}
        <div className="mt-14 text-center">
          <Link
            href="/academics/student-achievements"
            className="group inline-flex items-center gap-3 bg-[#6b0c26] text-white hover:bg-[#54081e] px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Complete Achievements Archive</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
