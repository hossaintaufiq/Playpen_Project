import { AdmissionProcedureContent } from "@/components/admissions/AdmissionProcedureContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

export default function AdmissionProcedurePage() {
  return (
    <SectionPageShell
      section="/admissions/admission-procedure"
      title="Admission Procedure"
      subtitle="Forms, notices, assessments, and everything families need to apply to Playpen."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <AdmissionProcedureContent />
    </SectionPageShell>
  );
}
