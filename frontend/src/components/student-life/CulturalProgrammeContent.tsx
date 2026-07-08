import {
  CalendarDays,
  Flag,
  GraduationCap,
  Music,
  Palette,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  culturalHighlights,
  culturalProgrammeExperience,
  culturalProgrammeIntro,
  culturalProgrammeMission,
  yearlyActivities,
  yearlyActivityCategories,
  yearlyActivitiesIntro,
} from "@/lib/cultural-programme";

const highlightIcons = [Palette, Flag, Sparkles, Music] as const;
const categoryIcons = [Music, Flag, GraduationCap, Trophy] as const;

export function CulturalProgrammeContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Cultural Programme"
        title="Where creativity, heritage, and school spirit come alive"
        description={culturalProgrammeIntro}
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 sm:rounded-3xl">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {culturalProgrammeMission}
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {culturalProgrammeExperience}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {culturalHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-14 sm:mt-16">
        <SectionHeader
          align="left"
          eyebrow="Yearly Calendar"
          title="A vibrant year of events and celebrations"
          description={yearlyActivitiesIntro}
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {yearlyActivityCategories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <article
                key={category.title}
                className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-3xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-border/50 pt-4">
                  {category.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                    >
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.05] p-6 sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
          All Yearly Activities
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {yearlyActivities.map((activity) => (
            <span
              key={activity}
              className="inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-primary/10 bg-[#5a0000] p-6 text-white sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          The Playpen Difference
        </p>
        <p className="mt-4 font-serif text-xl font-semibold leading-relaxed sm:text-2xl">
          Through music, drama, national days, and shared celebrations, our students grow as
          artists, citizens, and confident young people proud of who they are.
        </p>
      </div>
    </>
  );
}
