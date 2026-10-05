import Image from "next/image";
import Link from "next/link";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getSectionPreview } from "@/lib/school-images";

const divisions = [
  {
    name: "Early Childhood",
    grades: "Playgroup – KG II",
    focus: "Foundational literacy, numeracy, and social skills in a nurturing early-years setting.",
    image: "/images/schools/elementary.webp",
    href: "/academics/early-childhood",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    focus: "Building core Cambridge competencies through engaging, age-appropriate learning.",
    image: "/images/schools/junior.webp",
    href: "/academics/junior-school",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    focus: "Developing independence, subject depth, and critical thinking across the curriculum.",
    image: "/images/schools/middle.webp",
    href: "/academics/middle-school",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII",
    focus: "Cambridge O and A Level preparation for university and global opportunities.",
    image: "/images/schools/senior.webp",
    href: "/academics/senior-school",
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
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition hover:shadow-md sm:rounded-3xl"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={division.image}
                    alt={division.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                      {division.grades}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold">{division.name}</h3>
                  </div>
                </div>
                <p className="p-5 text-sm leading-relaxed text-muted-foreground sm:p-6 pb-2">
                  {division.focus}
                </p>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={division.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white"
                >
                  <span>Explore Curriculum</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
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
