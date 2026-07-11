import { Bell, BookOpen, BookMarked, GraduationCap } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import {
  libraryBorrowingPolicy,
  libraryClassesNote,
  libraryHighlights,
  libraryIntro,
  libraryReadingNote,
} from "@/lib/library";
import { getSectionPreview } from "@/lib/school-images";

const icons = [BookOpen, GraduationCap, Bell, BookMarked] as const;

export default async function LibraryPage() {
  const photoPreview = await getSectionPreview(
    "academics/library",
    "Library Photo Highlights",
    "library",
  );

  return (
    <AcademicsPageShell
      section="/academics/library"
      title="Library"
      subtitle="A resource-rich space for reading, inquiry, and independent learning across every level."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {libraryIntro}
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
          {libraryHighlights.map((item, index) => {
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
          <AboutContentSection title="Reading & Resources">
            <p>{libraryReadingNote}</p>
          </AboutContentSection>

          <AboutContentSection title="Library Classes">
            <p>{libraryClassesNote}</p>
          </AboutContentSection>

          <AboutContentSection title="Borrowing & Returns">
            {libraryBorrowingPolicy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
