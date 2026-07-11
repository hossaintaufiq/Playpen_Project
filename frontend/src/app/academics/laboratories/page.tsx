import { FlaskConical, Microscope, Monitor, Atom } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import {
  laboratoriesIntro,
  laboratoriesSafetyNote,
  laboratorySubjects,
} from "@/lib/laboratories";
import { getSectionPreview } from "@/lib/school-images";

const subjectIcons = [Atom, FlaskConical, Microscope, Monitor] as const;

export default async function LaboratoriesPage() {
  const photoPreview = await getSectionPreview(
    "academics/laboratories",
    "Laboratories Photo Highlights",
    "laboratories",
  );

  return (
    <AcademicsPageShell
      section="/academics/laboratories"
      title="Laboratories"
      subtitle="State-of-the-art science and computer facilities approved by Cambridge and The British Council."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {laboratoriesIntro}
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

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {laboratorySubjects.map((lab, index) => {
            const Icon = subjectIcons[index];
            return (
              <article
                key={lab.title}
                className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {lab.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lab.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Facilities & Safety">
            <p>{laboratoriesSafetyNote}</p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
