import {
  Dumbbell,
  Medal,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  annualSportsCompetitionNote,
  annualSportsFacilities,
  annualSportsHighlights,
  annualSportsIntro,
  annualSportsTeamsNote,
} from "@/lib/annual-sports";

const highlightIcons = [Medal, Dumbbell, Trophy, Users] as const;

export function AnnualSportsContent() {
  return (
    <>
      <SectionHeader
        eyebrow="Annual Sports"
        title="Competition, teamwork, and school spirit all year round"
        description={annualSportsIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {annualSportsHighlights.map((item, index) => {
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

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-6 sm:mt-12 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
          Sports & Games Facilities
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {annualSportsFacilities.map((sport) => (
            <span
              key={sport}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
            >
              <Target className="h-3.5 w-3.5 text-primary" />
              {sport}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <Trophy className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Tournaments</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {annualSportsCompetitionNote}
          </p>
        </article>

        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <Users className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">School Teams</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {annualSportsTeamsNote}
          </p>
        </article>
      </div>
    </>
  );
}
