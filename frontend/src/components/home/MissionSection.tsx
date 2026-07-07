import { Brain, Globe2, Landmark, TrendingUp } from "lucide-react";
import { MissionVideo } from "./MissionVideo";

const missionPillars = [
  {
    icon: Globe2,
    text: "Developing skills and preparing our Pupils to meet the challenges in order to become Global Citizens of the 21st Century.",
  },
  {
    icon: Landmark,
    text: "Nursing our Pupils to be acquainted with Human Rights and having sound knowledge of Democracy.",
  },
  {
    icon: TrendingUp,
    text: "Enabling our Pupils to advance towards the future and indulge in Economical Activities successfully.",
  },
  {
    icon: Brain,
    text: "Educating our Pupils to establish and be part of a Logical and Analytical Society.",
  },
];

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.04),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-primary/40 sm:block sm:w-16" />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Values &amp; Culture
            </span>
            <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-primary/40 sm:block sm:w-16" />
          </div>

          <h2 className="mt-5 font-serif text-2xl font-bold tracking-wide text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
            VALUES AND CULTURE
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
            To realize the full potential, children need to be given a well-balanced programme
            in a creative learning environment.
          </p>
        </div>

        {/* Mission headline */}
        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 sm:text-xs">
            Our Foundation
          </p>
          <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-tight">
            PLAYPEN WAS BORN WITH{" "}
            <span className="playpen-text text-primary">THIS IN MIND!</span>
          </h3>
        </div>

        {/* Balanced two-column layout */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          {/* Video column */}
          <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-border/80 bg-white p-4 shadow-sm sm:min-h-[320px] sm:rounded-3xl sm:p-5 lg:p-6">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-border/60 pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                Our Story
              </p>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary sm:text-xs">
                Watch
              </span>
            </div>
            <div className="flex flex-1 items-center">
              <MissionVideo className="w-full" />
            </div>
          </div>

          {/* Pillars column */}
          <div className="flex h-full flex-col rounded-2xl border border-border/80 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5 lg:p-6">
            <div className="mb-4 border-b border-border/60 pb-4 sm:mb-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                What We Stand For
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Four guiding pillars that shape every learner&apos;s journey at Playpen.
              </p>
            </div>

            <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {missionPillars.map((pillar, index) => (
                <li
                  key={pillar.text}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border/70 bg-muted/30 p-3.5 transition hover:border-primary/25 hover:bg-white hover:shadow-sm sm:rounded-2xl sm:p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                      <pillar.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/55 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-foreground/90 sm:text-[13px] sm:leading-relaxed">
                    {pillar.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
