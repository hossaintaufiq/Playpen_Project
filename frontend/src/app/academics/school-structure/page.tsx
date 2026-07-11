import Image from "next/image";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getSectionPreview } from "@/lib/school-images";

const divisions = [
  {
    name: "Elementary School",
    grades: "Playgroup – KG II",
    focus: "Foundational literacy, numeracy, and social skills in a nurturing early-years setting.",
    image: "/images/schools/elementary.webp",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    focus: "Building core Cambridge competencies through engaging, age-appropriate learning.",
    image: "/images/schools/junior.webp",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    focus: "Developing independence, subject depth, and critical thinking across the curriculum.",
    image: "/images/schools/middle.webp",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII",
    focus: "Cambridge O and A Level preparation for university and global opportunities.",
    image: "/images/schools/senior.webp",
  },
];

export default async function SchoolStructurePage() {
  const photoPreview = await getSectionPreview(
    "academics/school-structure",
    "School Structure Photo Highlights",
    "school structure",
  );

  return (
    <AcademicsPageShell
      section="/academics/school-structure"
      title="School Structure"
      subtitle="A clear academic pathway from early years through Cambridge O and A Levels."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen is organised into four divisions, each led by experienced educators who
            understand the developmental needs of pupils at every stage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.name}
              className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={division.image}
                  alt={division.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/75">
                    {division.grades}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold">{division.name}</h3>
                </div>
              </div>
              <p className="p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
                {division.focus}
              </p>
            </article>
          ))}
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

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="Coordinated Learning">
            <p>
              Division heads work closely with faculty and administration to ensure smooth
              transitions between stages, consistent academic standards, and holistic support
              for every pupil throughout their Playpen journey.
            </p>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
