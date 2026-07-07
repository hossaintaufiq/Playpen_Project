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
    accent: "from-primary via-primary to-primary-dark",
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
    accent: "from-[#5a0000] via-primary to-[#3d0000]",
    image: "/images/schools/senior.jpg",
  },
};

export function AdmissionFormCards({ onSelect }: { onSelect: (type: AdmissionFormType) => void }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
      {admissionFormList.map((form) => {
        const meta = cardMeta[form.id];
        const Icon = meta.icon;

        return (
          <article
            key={form.id}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
          >
            <div className="relative h-36 overflow-hidden sm:h-40">
              <Image
                src={meta.image}
                alt={form.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${meta.accent} opacity-80`} />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6">
                <span className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                  {meta.badge}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{form.title}</h2>
                <p className="mt-1 text-sm text-white/85">{form.subtitle}</p>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-muted-foreground">{form.description}</p>
                  <ul className="mt-4 space-y-2">
                    {meta.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onSelect(form.id)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  <FileText className="h-4 w-4" />
                  Open online form
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                <a
                  href={form.pdfPath}
                  download={form.pdfFileName}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
