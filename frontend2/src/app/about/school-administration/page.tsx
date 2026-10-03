import { AboutPageShell } from "@/components/about/AboutPageShell";
import { SchoolAdministrationContent } from "@/components/about/SchoolAdministrationContent";
import { getSectionPreview } from "@/lib/school-images";

export default async function SchoolAdministrationPage() {
  const photoPreview = await getSectionPreview(
    "about/school-administration",
    "School Administration Highlights",
    "teachers training",
  );

  return (
    <AboutPageShell
      section="/about/school-administration"
      title="School Administration"
      subtitle="Committed leadership and professional coordination across every level of Playpen."
    >
      <SchoolAdministrationContent photoPreview={photoPreview} />
    </AboutPageShell>
  );
}
