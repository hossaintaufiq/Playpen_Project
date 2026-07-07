import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const examTypes = [
  "Continuous assessment and class tests throughout the academic year",
  "Mid-year and end-of-year school examinations",
  "Cambridge Checkpoint (where applicable)",
  "Cambridge IGCSE / O Level examinations",
  "Cambridge AS and A Level examinations",
];

const guidelines = [
  "Examination schedules are published in advance through school notices.",
  "Pupils must adhere to examination rules and conduct expectations.",
  "Absence from examinations requires prior approval and documentation where applicable.",
  "Results are communicated to parents through official school channels.",
  "Academic support is available for pupils preparing for major Cambridge examinations.",
];

export default function ExaminationsPage() {
  return (
    <AcademicsPageShell
      section="/academics/examinations"
      title="Examinations"
      subtitle="Rigorous assessment that measures progress and prepares pupils for Cambridge qualifications."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen maintains high standards in assessment, combining regular school examinations
            with Cambridge external examinations at the appropriate stages of the academic journey.
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Examination Pathway">
            <ul className="list-disc space-y-2 pl-5">
              {examTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutContentSection>

          <AboutContentSection title="Important Information">
            <ul className="list-disc space-y-2 pl-5">
              {guidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
