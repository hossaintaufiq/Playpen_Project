import { AlertTriangle, Scale, Users, UserCheck } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import {
  disciplinaryCommitteeNote,
  disciplinaryExpulsionRules,
  disciplinaryHighlights,
  disciplinaryIntro,
  disciplinaryParentNote,
} from "@/lib/disciplinary-committee";
import { getSectionPreview } from "@/lib/school-images";

const icons = [AlertTriangle, Scale, Users, UserCheck] as const;

export default async function DisciplinaryCommitteePage() {
  const photoPreview = await getSectionPreview(
    "academics/disciplinary-committee",
    "Disciplinary Committee Photo Highlights",
    "disciplinary",
  );

  return (
    <AcademicsPageShell
      section="/academics/disciplinary-committee"
      title="Disciplinary Committee"
      subtitle="Clear standards of conduct, fair review, and accountability across the Playpen community."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {disciplinaryIntro}
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
          {disciplinaryHighlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
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

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Suspension & Expulsion Policy">
            <ul className="list-disc space-y-2 pl-5">
              {disciplinaryExpulsionRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </AboutContentSection>

          <AboutContentSection title="The Disciplinary Committee">
            <p>{disciplinaryCommitteeNote}</p>
          </AboutContentSection>

          <AboutContentSection title="A Note for Parents">
            <p>{disciplinaryParentNote}</p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
