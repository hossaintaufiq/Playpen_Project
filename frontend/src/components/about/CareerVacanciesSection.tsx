"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import type { JobVacancy } from "@/lib/cms/types";
import { CareerApplicationForm } from "@/components/about/CareerApplicationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerApplyNote, careerEmail, careerMailNote } from "@/lib/career-at-playpen";

export function CareerVacanciesSection({ vacancies }: { vacancies: JobVacancy[] }) {
  const [selectedVacancyId, setSelectedVacancyId] = useState(vacancies[0]?.id ?? "");

  const selectedVacancy = vacancies.find((vacancy) => vacancy.id === selectedVacancyId);

  return (
    <>
      <div className="mt-12 sm:mt-14">
        <div className="mb-6 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            See All Vacancies
          </h2>
        </div>

        {vacancies.length === 0 ? (
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-8 text-center">
            <p className="font-serif text-lg font-semibold text-foreground">No open positions right now</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Please check back later or email{" "}
              <a href={`mailto:${careerEmail}`} className="break-all font-semibold text-primary hover:underline">
                {careerEmail}
              </a>{" "}
              to express your interest.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {vacancies.map((vacancy) => {
              const selected = vacancy.id === selectedVacancyId;
              return (
                <article
                  key={vacancy.id}
                  className={`rounded-2xl border bg-white p-5 shadow-sm transition ${
                    selected
                      ? "border-primary/40 ring-2 ring-primary/15"
                      : "border-border/60 hover:border-primary/20"
                  }`}
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground">{vacancy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{vacancy.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedVacancyId(vacancy.id)}
                    className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-primary text-white"
                        : "border border-primary/25 text-primary hover:bg-primary/5"
                    }`}
                  >
                    {selected ? "Selected" : "Apply for this role"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {vacancies.length > 0 && (
        <div id="apply" className="mt-12 scroll-mt-24 sm:mt-14">
          <SectionHeader
            align="left"
            eyebrow="Apply Now"
            title="Drop your CV"
            description={careerApplyNote}
            className="max-w-3xl"
          />

          {selectedVacancy && (
            <p className="mt-4 text-sm font-medium text-primary">
              Applying for: {selectedVacancy.title}
            </p>
          )}

          <p className="mt-4 text-sm font-medium text-foreground">{careerMailNote}</p>
          <a
            href={`mailto:${careerEmail}`}
            className="mt-3 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {careerEmail}
          </a>

          <div className="mt-8 w-full min-w-0 max-w-3xl">
            <CareerApplicationForm
              vacancies={vacancies}
              selectedVacancyId={selectedVacancyId}
              onVacancyChange={setSelectedVacancyId}
            />
          </div>
        </div>
      )}
    </>
  );
}
