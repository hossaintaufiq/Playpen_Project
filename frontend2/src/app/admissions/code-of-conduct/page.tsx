import { CodeOfConductContent } from "@/components/admissions/CodeOfConductContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";

export default function CodeOfConductPage() {
  return (
    <SectionPageShell
      section="/admissions/code-of-conduct"
      title="Code of Conduct"
      subtitle="Discipline, attendance, prohibited items, and school rules for every Playpen family."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <CodeOfConductContent />
    </SectionPageShell>
  );
}
