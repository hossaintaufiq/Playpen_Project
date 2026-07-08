import { Brain, Globe2, Landmark, TrendingUp } from "lucide-react";
import { MissionVideo } from "./MissionVideo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
    <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(128,0,0,0.035),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Values & Culture"
          title="Built on purpose, guided by principle"
          description="Playpen was founded with a clear vision — to nurture thoughtful, capable young people ready for the world ahead."
        />

        <blockquote className="mx-auto mt-10 max-w-3xl border-l-2 border-primary/25 pl-5 sm:mt-12 sm:pl-6">
          <p className="font-serif text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl md:text-2xl md:leading-relaxed">
            Playpen was born with{" "}
            <span className="playpen-text text-primary">this in mind</span> — shaping
            learners who think clearly, act responsibly, and lead with integrity.
          </p>
        </blockquote>

        <div className="mt-12 grid items-stretch gap-6 sm:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="flex h-full min-h-[340px] flex-col rounded-2xl border border-border/50 bg-white p-5 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] sm:min-h-[400px] sm:rounded-3xl sm:p-6 lg:min-h-[440px] lg:p-7">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-border/50 pb-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Our Story
              </p>
              <span className="rounded-full bg-primary/[0.07] px-3 py-1 text-[10px] font-medium text-primary">
                Watch
              </span>
            </div>
            <div className="flex flex-1 items-center">
              <MissionVideo className="w-full" />
            </div>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-5 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:p-6 lg:p-7">
            <div className="mb-5 border-b border-border/50 pb-4 sm:mb-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                What We Stand For
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Four guiding pillars that shape every learner&apos;s journey at Playpen.
              </p>
            </div>

            <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {missionPillars.map((pillar, index) => (
                <li
                  key={pillar.text}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border/40 bg-muted/25 p-4 transition duration-300 hover:border-primary/15 hover:bg-white sm:rounded-2xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                      <pillar.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-foreground/85 sm:text-[13px]">
                    {pillar.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SectionDivider variant="soft" />
    </section>
  );
}
