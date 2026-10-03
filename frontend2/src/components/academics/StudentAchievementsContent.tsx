"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Award,
  Calendar,
  MapPin,
  Medal,
  Microscope,
  Palette,
  Trophy,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { AchievementCategory, StudentAchievement } from "@/lib/cms/types";

const categoryFilters: { value: "all" | AchievementCategory; label: string; code: string }[] = [
  { value: "all", label: "All Honors", code: "00" },
  { value: "academic", label: "Academic & Cambridge", code: "01" },
  { value: "science", label: "Science & Tech", code: "02" },
  { value: "sports", label: "Sports & Athletics", code: "03" },
  { value: "arts", label: "Arts & Culture", code: "04" },
  { value: "other", label: "Leadership & Honors", code: "05" },
];

const categoryMeta: Record<
  AchievementCategory,
  { label: string; icon: typeof Trophy }
> = {
  academic: { label: "Academic", icon: Award },
  science: { label: "Science & Tech", icon: Microscope },
  sports: { label: "Sports", icon: Trophy },
  arts: { label: "Arts & Culture", icon: Palette },
  other: { label: "Honors", icon: Medal },
};

function displayDate(achievement: StudentAchievement) {
  return achievement.date || achievement.year || "";
}

export function StudentAchievementsContent({
  achievements,
}: {
  achievements: StudentAchievement[];
}) {
  const [filter, setFilter] = useState<"all" | AchievementCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return achievements;
    return achievements.filter((achievement) => achievement.category === filter);
  }, [achievements, filter]);

  const stats = useMemo(() => {
    const events = achievements.length;
    const awards = achievements.reduce((sum, item) => sum + item.results.length, 0);
    const sports = achievements.filter((item) => item.category === "sports").length;
    const academic = achievements.filter(
      (item) => item.category === "academic" || item.category === "science"
    ).length;
    return { events, awards, sports, academic };
  }, [achievements]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Hall of Achievement"
        title="Celebrating Student Excellence Across Academics, Sports &amp; the Arts"
        description="Playpen students regularly excel in Cambridge international rankings, national science olympiads, inter-school sports, and cultural festivals."
      />

      {/* Metrics Banner */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {[
          { label: "Competition Events", value: `${stats.events}+`, code: "01" },
          { label: "Individual Honors", value: `${stats.awards}+`, code: "02" },
          { label: "Academic Laurels", value: `${stats.academic}+`, code: "03" },
          { label: "Sports Championships", value: `${stats.sports}+`, code: "04" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border-2 border-[#121212] bg-[#ffffff] p-6 text-center shadow-[4px_4px_0px_#121212]"
          >
            <span className="font-mono text-[10px] font-bold text-[#6b0c26] block mb-1">// {stat.code}</span>
            <p className="font-mono font-black text-3xl sm:text-4xl text-[#6b0c26] leading-none">{stat.value}</p>
            <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wider text-[#524d46]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b-2 border-[#121212] pb-6">
        {categoryFilters.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setFilter(cat.value)}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-[#121212] transition-all cursor-pointer ${
              filter === cat.value
                ? "bg-[#6b0c26] text-white shadow-[3px_3px_0px_#121212] -translate-y-0.5"
                : "bg-[#ffffff] text-[#121212] hover:bg-[#faf7f2] shadow-[2px_2px_0px_#121212]"
            }`}
          >
            <span className="text-[#d97706] mr-1">{cat.code}.</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((achievement, idx) => {
          const meta = categoryMeta[achievement.category || "other"] ?? categoryMeta.other;
          const Icon = meta.icon;
          const dateStr = displayDate(achievement);

          return (
            <article
              key={achievement.id}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo if available */}
                {achievement.image ? (
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden bg-[#121212] border-b-2 border-[#121212]">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#121212] text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase border border-white/30">
                        {meta.label}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3 mb-4 font-mono text-xs font-bold">
                    <span className="bg-[#f4efe6] text-[#6b0c26] px-2 py-0.5 border border-[#121212]">
                      0{idx + 1} // {meta.label.toUpperCase()}
                    </span>
                    {dateStr && (
                      <span className="text-[#524d46] flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {dateStr}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="font-serif font-bold text-xl text-[#121212] uppercase leading-snug">
                  {achievement.title}
                </h3>

                {achievement.organizer && (
                  <p className="mt-2 font-mono text-xs text-[#524d46]">
                    ORGANIZER: <span className="font-bold text-[#121212]">{achievement.organizer}</span>
                  </p>
                )}

                {achievement.venue && (
                  <p className="mt-1 font-mono text-xs text-[#524d46] flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#d97706]" />
                    <span>{achievement.venue}</span>
                  </p>
                )}

                {/* Results List */}
                <div className="mt-4 border-t border-[#121212]/15 pt-3 space-y-2">
                  {achievement.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 font-sans text-xs sm:text-[13px] text-[#333333] leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#6b0c26] mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {achievement.participatedBy && (
                <div className="mt-6 pt-3 border-t-2 border-[#121212] font-mono text-xs text-[#524d46] font-bold flex items-center gap-1.5 uppercase">
                  <Users className="h-3.5 w-3.5 text-[#6b0c26]" />
                  <span>{achievement.participatedBy}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
