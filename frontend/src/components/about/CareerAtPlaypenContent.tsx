import { Shield, TrendingUp, Users } from "lucide-react";
import { CareerVacanciesSection } from "@/components/about/CareerVacanciesSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { JobVacancy } from "@/lib/cms/types";
import { careerHighlights, careerIntro } from "@/lib/career-at-playpen";

const highlightIcons = [Shield, Users, TrendingUp] as const;

export function CareerAtPlaypenContent({ vacancies }: { vacancies: JobVacancy[] }) {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="Careers at Playpen"
        title="Build a lasting career in education"
        description={careerIntro}
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {careerHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>

      <CareerVacanciesSection vacancies={vacancies} />
    </section>
  );
}
