"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Mail, CheckCircle2, Sparkles } from "lucide-react";
import type { JobVacancy } from "@/lib/cms/types";
import { CareerApplicationForm } from "@/components/about/CareerApplicationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerApplyNote, careerEmail, careerMailNote } from "@/lib/career-at-playpen";

export function CareerVacanciesSection({ vacancies }: { vacancies: JobVacancy[] }) {
  const [selectedVacancyId, setSelectedVacancyId] = useState(vacancies[0]?.id ?? "");

  const selectedVacancy = vacancies.find((vacancy) => vacancy.id === selectedVacancyId);

  return (
    <div className="space-y-12">
      <div>
        <div className="mb-6 flex items-center gap-2.5 border-b border-border/70 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent block">
              Opportunities
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground">
              Current Open Vacancies ({vacancies.length})
            </h3>
          </div>
        </div>

        {vacancies.length === 0 ? (
          <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 sm:p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="font-extrabold text-xl text-foreground">No open positions right now</h4>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Please check back later or email your resume directly to{" "}
              <a href={`mailto:${careerEmail}`} className="font-bold text-primary hover:underline">
                {careerEmail}
              </a>{" "}
              to express your interest.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {vacancies.map((vacancy) => {
              const selected = vacancy.id === selectedVacancyId;
              return (
                <article
                  key={vacancy.id}
                  className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-7 shadow-xs transition-all duration-300 ${
                    selected
                      ? "border-primary/50 bg-white ring-2 ring-primary/20 shadow-md"
                      : "border-border/80 bg-white hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-accent-hover">
                        Active Opening
                      </span>
                      {selected && (
                        <span className="flex items-center gap-1 text-xs font-bold text-primary">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span>Selected</span>
                        </span>
                      )}
                    </div>
                    <h4 className="font-extrabold text-xl text-foreground">{vacancy.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{vacancy.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedVacancyId(vacancy.id);
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        selected
                          ? "bg-primary text-white shadow-xs"
                          : "border border-primary/30 text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      <span>{selected ? "Selected for Application" : "Apply for this Role"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {vacancies.length > 0 && (
        <div id="apply" className="scroll-mt-24 rounded-3xl border border-border/80 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <SectionHeader
            align="left"
            eyebrow="Apply Now"
            title="Submit Your Curriculum Vitae (CV)"
            description={careerApplyNote}
            className="max-w-3xl"
          />

          {selectedVacancy && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary/8 px-4 py-2 text-xs font-bold text-primary border border-primary/15">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Selected Position: {selectedVacancy.title}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>{careerMailNote}</span>
            <a
              href={`mailto:${careerEmail}`}
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{careerEmail}</span>
            </a>
          </div>

          <div className="mt-8 w-full min-w-0 max-w-3xl">
            <CareerApplicationForm
              vacancies={vacancies}
              selectedVacancyId={selectedVacancyId}
              onVacancyChange={setSelectedVacancyId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
