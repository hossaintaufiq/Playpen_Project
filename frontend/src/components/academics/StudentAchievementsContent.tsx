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

const categoryFilters: { value: "all" | AchievementCategory; label: string }[] = [
  { value: "all", label: "All Honors" },
  { value: "academic", label: "Academic & Cambridge" },
  { value: "science", label: "Science & Tech" },
  { value: "sports", label: "Sports & Athletics" },
  { value: "arts", label: "Arts & Culture" },
  { value: "other", label: "Leadership & Other" },
];

const categoryMeta: Record<
  AchievementCategory,
  { label: string; icon: typeof Trophy; badgeClass: string }
> = {
  academic: {
    label: "Academic",
    icon: Award,
    badgeClass: "bg-primary/10 text-primary border border-primary/20",
  },
  science: {
    label: "Science & Tech",
    icon: Microscope,
    badgeClass: "bg-blue-50 text-blue-800 border border-blue-200",
  },
  sports: {
    label: "Sports",
    icon: Trophy,
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200",
  },
  arts: {
    label: "Arts & Culture",
    icon: Palette,
    badgeClass: "bg-purple-50 text-purple-800 border border-purple-200",
  },
  other: {
    label: "Honors",
    icon: Medal,
    badgeClass: "bg-muted text-foreground border border-border",
  },
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
          { label: "Competition Events", value: `${stats.events}+` },
          { label: "Individual Honors", value: `${stats.awards}+` },
          { label: "Academic & Science Laurels", value: `${stats.academic}+` },
          { label: "Sports Championships", value: `${stats.sports}+` },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-border/80 bg-white p-6 text-center shadow-sm"
          >
            <p className="font-extrabold text-3xl sm:text-4xl text-primary">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categoryFilters.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setFilter(cat.value)}
            className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              filter === cat.value
                ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                : "bg-white text-muted-foreground border border-border hover:bg-surface hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((achievement) => {
          const meta = categoryMeta[achievement.category || "other"] ?? categoryMeta.other;
          const Icon = meta.icon;
          const dateStr = displayDate(achievement);

          return (
            <article
              key={achievement.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Photo if available */}
                {achievement.image ? (
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${meta.badgeClass} bg-white/95 backdrop-blur-md`}>
                        <Icon className="h-3 w-3" />
                        {meta.label}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${meta.badgeClass}`}>
                      <Icon className="h-3 w-3" />
                      {meta.label}
                    </span>
                    {dateStr && (
                      <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {dateStr}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="font-extrabold text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                {achievement.organizer && (
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Organized by: <span className="font-semibold text-foreground/80">{achievement.organizer}</span>
                  </p>
                )}

                {achievement.venue && (
                  <p className="mt-0.5 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span>{achievement.venue}</span>
                  </p>
                )}

                {/* Results List */}
                <div className="mt-4 space-y-2">
                  {achievement.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-foreground/85 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {achievement.participatedBy && (
                <div className="mt-6 pt-3 border-t border-border/60 text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-primary" />
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
