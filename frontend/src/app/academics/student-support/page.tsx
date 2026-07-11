import { FileText, GraduationCap, ScrollText } from "lucide-react";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import {
  studentSupportIntro,
  universityApplicationDocuments,
} from "@/lib/student-support";
import { getSectionPreview } from "@/lib/school-images";

const documentIcons = [FileText, ScrollText, GraduationCap] as const;

export default async function StudentSupportPage() {
  const photoPreview = await getSectionPreview(
    "academics/student-support",
    "Student Support Photo Highlights",
    "student support",
  );

  return (
    <AcademicsPageShell
      section="/academics/student-support"
      title="Student Support"
      subtitle="Guidance and documentation for senior students applying to local and international colleges and universities."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {studentSupportIntro}
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

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {universityApplicationDocuments.map((item, index) => {
            const Icon = documentIcons[index];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm sm:rounded-3xl"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold uppercase tracking-wide text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </AcademicsPageShell>
  );
}
