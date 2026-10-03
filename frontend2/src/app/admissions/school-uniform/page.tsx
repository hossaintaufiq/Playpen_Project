import { SchoolUniformContent } from "@/components/admissions/SchoolUniformContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

export default function SchoolUniformPage() {
  return (
    <SectionPageShell
      section="/admissions/school-uniform"
      title="School Uniform"
      subtitle="Dress code, sportswear, tailoring houses, and seasonal uniform guidelines."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <SchoolUniformContent />
    </SectionPageShell>
  );
}
