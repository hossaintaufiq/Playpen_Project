import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

const steps = [
  "Collect the admission form from the Admin Office or download it from the website.",
  "Complete the form with accurate pupil and family information.",
  "Submit the form with required documents to the admissions office.",
  "Attend the assessment or interview as scheduled by the school.",
  "Receive admission decision and complete enrolment formalities if accepted.",
];

export default function AdmissionProcedurePage() {
  return (
    <SectionPageShell
      section="/admissions/admission-procedure"
      title="Admission Procedure"
      subtitle="A clear, step-by-step guide to applying for a place at Playpen."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <AboutContentSection title="How to Apply">
          <ol className="list-decimal space-y-3 pl-5">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            For A&apos; Level and other enquiries, kindly contact the admissions office during
            9.00 AM–1.00 PM. Forms are available in the Admin Office and on the website.
          </p>
        </AboutContentSection>
      </section>
    </SectionPageShell>
  );
}
