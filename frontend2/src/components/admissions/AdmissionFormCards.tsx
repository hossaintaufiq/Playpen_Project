"use client";

import Image from "next/image";
import { ArrowRight, Download, FileText, GraduationCap, School } from "lucide-react";
import { admissionFormConfigs, admissionFormList, type AdmissionFormType } from "@/lib/admission-forms";

const cardMeta: Record<
  AdmissionFormType,
  {
    icon: typeof School;
    badge: string;
    highlights: string[];
    accent: string;
    image: string;
  }
> = {
  "pg-class-ix": {
    icon: School,
    badge: "Academic Year 2025–2026",
    highlights: [
      "Playgroup through Class X",
      "Family & emergency details",
      "Printable official PDF",
    ],
    accent: "bg-[#6b0c26]",
    image: "/images/schools/elementary.jpg",
  },
  "a-level": {
    icon: GraduationCap,
    badge: "Session 2025–2026",
    highlights: [
      "AS / A' Level admission",
      "O' Level results & subject choice",
      "Printable official PDF",
    ],
    accent: "bg-[#121212]",
    image: "/images/schools/senior.jpg",
  },
};

export function AdmissionFormCards({ onSelect }: { onSelect: (type: AdmissionFormType) => void }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
      {admissionFormList.map((form) => {
        const meta = cardMeta[form.id];
        const Icon = meta.icon;

        return (
          <article
            key={form.id}
            className="group relative overflow-hidden brutal-border bg-white brutal-shadow transition-transform hover:-translate-y-1"
          >
            <div className="relative h-44 overflow-hidden bg-[#121212] border-b-2 border-[#121212]">
              <Image
                src={meta.image}
                alt={form.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6">
                <span className="inline-flex w-fit bg-[#d97706] px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest text-[#121212]">
                  {meta.badge}
                </span>
                <h2 className="mt-2 font-serif text-2xl font-black sm:text-3xl text-white">{form.title}</h2>
                <p className="font-mono text-xs text-white/80">{form.subtitle}</p>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#121212] text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-[#121212]/80">{form.description}</p>
                  <ul className="mt-4 space-y-2 border-t border-[#121212]/15 pt-3">
                    {meta.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#121212] font-medium">
                        <span className="h-1.5 w-1.5 bg-[#6b0c26]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row border-t-2 border-[#121212] pt-4">
                <button
                  type="button"
                  onClick={() => onSelect(form.id)}
                  className="brutal-btn inline-flex flex-1 items-center justify-center gap-2 bg-[#6b0c26] text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#121212]"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open online form</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={form.pdfPath}
                  download={form.pdfFileName}
                  onClick={(e) => e.stopPropagation()}
                  className="brutal-btn inline-flex flex-1 items-center justify-center gap-2 bg-white text-[#121212] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#faf7f2]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

