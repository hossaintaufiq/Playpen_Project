"use client";

import { Shield, TrendingUp, Users, Sparkles, GraduationCap, Award, HeartHandshake } from "lucide-react";
import { CareerVacanciesSection } from "@/components/about/CareerVacanciesSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { JobVacancy } from "@/lib/cms/types";
import { careerHighlights, careerIntro } from "@/lib/career-at-playpen";

const highlightIcons = [Shield, Users, TrendingUp] as const;

export function CareerAtPlaypenContent({ vacancies }: { vacancies: JobVacancy[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 w-full min-w-0">
      <div className="space-y-14 sm:space-y-18">
        {/* 01 — Section Header */}
        <SectionHeader
          eyebrow="Careers at Playpen"
          title="Build an Inspiring, Lasting Career in Education"
          description={careerIntro}
        />

        {/* 02 — Faculty Culture & Value Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerHighlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center gap-1.5 text-xs font-bold text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Playpen Faculty Culture</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* 03 — Vacancies & Application Portal */}
        <CareerVacanciesSection vacancies={vacancies} />
      </div>
    </section>
  );
}
