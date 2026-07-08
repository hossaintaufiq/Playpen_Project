import { AboutPageShell } from "@/components/about/AboutPageShell";
import { SchoolAdministrationContent } from "@/components/about/SchoolAdministrationContent";

export default function SchoolAdministrationPage() {
  return (
    <AboutPageShell
      section="/about/school-administration"
      title="School Administration"
      subtitle="Committed leadership and professional coordination across every level of Playpen."
    >
      <SchoolAdministrationContent />
    </AboutPageShell>
  );
}
