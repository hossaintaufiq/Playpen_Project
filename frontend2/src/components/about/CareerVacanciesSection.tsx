"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Mail, CheckCircle2 } from "lucide-react";
import type { JobVacancy } from "@/lib/cms/types";
import { CareerApplicationForm } from "@/components/about/CareerApplicationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerApplyNote, careerEmail, careerMailNote } from "@/lib/career-at-playpen";

export function CareerVacanciesSection({ vacancies }: { vacancies: JobVacancy[] }) {
  const [selectedVacancyId, setSelectedVacancyId] = useState(vacancies[0]?.id ?? "");

  const selectedVacancy = vacancies.find((vacancy) => vacancy.id === selectedVacancyId);

  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="mb-6 flex items-center justify-between border-b-2 border-[#121212] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center border border-[#121212] bg-[#6b0c26] text-white">
              <Briefcase className="h-4 w-4 text-[#d97706]" />
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase">
              Current Openings ({vacancies.length})
            </h2>
          </div>
          <span className="font-mono text-xs text-[#524d46] font-bold uppercase">// ACADEMIC YEAR 2026–27</span>
        </div>

        {vacancies.length === 0 ? (
          <div className="border-3 border-[#121212] bg-[#f4efe6] p-8 text-center shadow-[4px_4px_0px_#121212]">
            <p className="font-serif font-bold text-xl text-[#121212] uppercase">No open positions right now</p>
            <p className="mt-2 font-sans text-sm text-[#524d46]">
              Please check back later or email your resume directly to{" "}
              <a href={`mailto:${careerEmail}`} className="font-mono font-bold text-[#6b0c26] underline">
                {careerEmail}
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {vacancies.map((vacancy, idx) => {
              const selected = vacancy.id === selectedVacancyId;
              return (
                <article
                  key={vacancy.id}
                  className={`border-2 border-[#121212] p-6 shadow-[4px_4px_0px_#121212] transition-all flex flex-col justify-between ${
                    selected
                      ? "bg-[#f4efe6] shadow-[6px_6px_0px_#121212]"
                      : "bg-[#ffffff] hover:shadow-[6px_6px_0px_#121212]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2 mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#6b0c26] uppercase">
                        POSITION // 0{idx + 1}
                      </span>
                      {selected && (
                        <span className="font-mono text-[10px] font-bold bg-[#d97706] text-[#121212] px-2 py-0.5 border border-black">
                          SELECTED
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#121212] uppercase">{vacancy.title}</h3>
                    <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-[#524d46]">{vacancy.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedVacancyId(vacancy.id)}
                    className={`mt-6 inline-flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider py-2.5 px-4 border-2 border-[#121212] transition-all cursor-pointer ${
                      selected
                        ? "bg-[#6b0c26] text-white shadow-[2px_2px_0px_#121212]"
                        : "bg-[#ffffff] text-[#121212] hover:bg-[#faf7f2] shadow-[2px_2px_0px_#121212]"
                    }`}
                  >
                    <span>{selected ? "Selected For Application" : "Select Role"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {vacancies.length > 0 && (
        <div id="apply" className="mt-16 scroll-mt-24 sm:mt-20">
          <SectionHeader
            align="left"
            eyebrow="Application Desk"
            title="Drop Your CV &amp; Application"
            description={careerApplyNote}
            className="max-w-3xl"
          />

          {selectedVacancy && (
            <div className="mt-4 inline-flex items-center gap-2 border-2 border-[#121212] bg-[#f4efe6] px-4 py-2 font-mono text-xs font-bold text-[#6b0c26] shadow-[2px_2px_0px_#121212]">
              <CheckCircle2 className="h-4 w-4 text-[#d97706]" />
              <span>APPLYING FOR: {selectedVacancy.title.toUpperCase()}</span>
            </div>
          )}

          <p className="mt-4 font-sans text-sm font-semibold text-[#121212]">{careerMailNote}</p>
          <a
            href={`mailto:${careerEmail}`}
            className="mt-2 inline-flex max-w-full items-center gap-2 font-mono text-xs font-bold text-[#6b0c26] hover:underline uppercase"
          >
            <Mail className="h-4 w-4 text-[#d97706]" />
            <span>EMAIL CV DIRECTLY: {careerEmail}</span>
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
