import { Shield, TrendingUp, Users, Sparkles } from "lucide-react";
import { CareerVacanciesSection } from "@/components/about/CareerVacanciesSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { JobVacancy } from "@/lib/cms/types";
import { careerHighlights, careerIntro } from "@/lib/career-at-playpen";

const highlightIcons = [Shield, Users, TrendingUp] as const;

export function CareerAtPlaypenContent({ vacancies }: { vacancies: JobVacancy[] }) {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Careers at Playpen"
        title="Build a Lasting Pedagogical Career in Education"
        description={careerIntro}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {careerHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="border-2 border-[#121212] bg-[#ffffff] p-6 shadow-[4px_4px_0px_#121212] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26] border-b-2 border-[#121212] pb-2 mb-4">
                  <span>FACULTY PILLAR // 0{index + 1}</span>
                  <Icon className="h-4 w-4 text-[#d97706]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#121212] uppercase leading-tight">{item.title}</h3>
                <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      <CareerVacanciesSection vacancies={vacancies} />
    </section>
  );
}
