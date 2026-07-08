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
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { AchievementCategory, StudentAchievement } from "@/lib/cms/types";

const categoryFilters: { value: "all" | AchievementCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "academic", label: "Academic" },
  { value: "science", label: "Science & Tech" },
  { value: "sports", label: "Sports" },
  { value: "arts", label: "Arts & Culture" },
  { value: "other", label: "Other" },
];

const categoryMeta: Record<
  AchievementCategory,
  { label: string; icon: typeof Trophy; className: string }
> = {
  academic: {
    label: "Academic",
    icon: Award,
    className: "bg-primary/10 text-primary",
  },
  science: {
    label: "Science & Tech",
    icon: Microscope,
    className: "bg-blue-50 text-blue-700",
  },
  sports: {
    label: "Sports",
    icon: Trophy,
    className: "bg-amber-50 text-amber-800",
  },
  arts: {
    label: "Arts & Culture",
    icon: Palette,
    className: "bg-purple-50 text-purple-700",
  },
  other: {
    label: "Achievement",
    icon: Medal,
    className: "bg-muted text-foreground",
  },
};

function displayDate(achievement: StudentAchievement) {
  return achievement.date || achievement.year || "";
}

function isHighlightResult(text: string) {
  return /1st|2nd|3rd|champion|runner|best|medal|position/i.test(text);
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
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Student Excellence"
        title="Celebrating achievement across academics, sports, and the arts"
        description="Playpen students regularly excel in national and international competitions. Browse highlights from recent events and award ceremonies."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
        {[
          { label: "Events", value: stats.events },
          { label: "Awards & Results", value: stats.awards },
          { label: "Academic & Science", value: stats.academic },
          { label: "Sports", value: stats.sports },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-primary/10 bg-white px-4 py-5 text-center shadow-sm sm:rounded-3xl"
          >
            <p className="font-serif text-2xl font-semibold text-primary sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categoryFilters.map((item) => {
          const count =
            item.value === "all"
              ? achievements.length
              : achievements.filter((achievement) => achievement.category === item.value).length;
          const active = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-border/70 bg-white text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {item.label}
              <span className="ml-1.5 opacity-80">({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-border/60 bg-muted/30 p-10 text-center">
          <p className="font-serif text-lg font-semibold text-foreground">No achievements to show</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check back soon for the latest student awards and competition results.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filtered.map((achievement) => {
            const meta = categoryMeta[achievement.category];
            const Icon = meta.icon;
            const when = displayDate(achievement);

            return (
              <article
                key={achievement.id}
                className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_-12px_rgba(128,0,0,0.12)] sm:rounded-3xl"
              >
                {achievement.image && (
                  <div className="relative aspect-[21/9] overflow-hidden bg-muted">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/70 via-[#800000]/10 to-transparent" />
                    <span
                      className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${meta.className}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {meta.label}
                    </span>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  {!achievement.image && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${meta.className}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {meta.label}
                    </span>
                  )}

                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                    {achievement.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    {achievement.organizer && (
                      <span className="inline-flex items-start gap-1.5">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        {achievement.organizer}
                      </span>
                    )}
                    {achievement.venue && (
                      <span className="inline-flex items-start gap-1.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        {achievement.venue}
                      </span>
                    )}
                    {when && (
                      <span className="inline-flex items-start gap-1.5">
                        <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        {when}
                      </span>
                    )}
                    {achievement.participatedBy && (
                      <span className="inline-flex items-start gap-1.5">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        {achievement.participatedBy}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/50 bg-muted/20 p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
                      Results
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {achievement.results.map((result) => (
                        <li
                          key={result}
                          className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                            isHighlightResult(result)
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          <Medal
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              isHighlightResult(result) ? "text-accent" : "text-primary/40"
                            }`}
                          />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
