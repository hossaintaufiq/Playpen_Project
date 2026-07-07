import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const divisions = [
  {
    name: "Elementary School",
    grades: "Playgroup – KG II",
    focus: "Foundational literacy, numeracy, and social skills in a nurturing early-years setting.",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    focus: "Building core Cambridge competencies through engaging, age-appropriate learning.",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    focus: "Developing independence, subject depth, and critical thinking across the curriculum.",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII",
    focus: "Cambridge O and A Level preparation for university and global opportunities.",
  },
];

export default function SchoolStructurePage() {
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
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
                {division.grades}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                {division.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {division.focus}
              </p>
            </article>
          ))}
        </div>

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
