import { CalendarRange, ClipboardCheck, TrendingUp } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import {
  examinationSemesters,
  examinationsIntro,
  examinationsPromotionNote,
  promotionRequirements,
} from "@/lib/examinations";
import { getSectionPreview } from "@/lib/school-images";

const promotionIcons = [ClipboardCheck, TrendingUp, CalendarRange] as const;

export default async function ExaminationsPage() {
  const photoPreview = await getSectionPreview(
    "academics/examinations",
    "Examinations Photo Highlights",
    "examinations",
  );

  return (
    <AcademicsPageShell
      section="/academics/examinations"
      title="Examinations"
      subtitle="Two-semester formal assessments with clear promotion standards for Junior and Senior students."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {examinationsIntro}
          </p>
        </div>

        {photoPreview ? (
          <div className="mt-10 sm:mt-12">
            <SectionPhotoPreview
              title={photoPreview.title}
              href={photoPreview.href}
              images={photoPreview.images}
            />
          </div>
        ) : null}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
          {examinationSemesters.map((semester, index) => (
            <article
              key={semester.title}
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Examination {index + 1}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                {semester.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{semester.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {promotionRequirements.map((item, index) => {
            const Icon = promotionIcons[index];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Promotion Policy">
            <p>{examinationsPromotionNote}</p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
