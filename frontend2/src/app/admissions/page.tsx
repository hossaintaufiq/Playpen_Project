import { AdmissionsOverviewContent } from "@/components/admissions/AdmissionsOverviewContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { admissionsHeroImages, admissionsNavItems } from "@/lib/admissions-nav";
import { getSectionPreview } from "@/lib/school-images";

export default async function AdmissionsPage() {
  const photoPreview = await getSectionPreview(
    "admissions/overview",
    "Admissions Photo Highlights",
    "admissions",
  );

  return (
    <SectionPageShell
      section="/admissions"
      title="Admissions"
      subtitle="Join the Playpen family — applications open for the upcoming academic year."
      navItems={admissionsNavItems}
      rootHref="/admissions"
      ariaLabel="Admissions sections"
      heroImages={admissionsHeroImages}
    >
      <AdmissionsOverviewContent photoPreview={photoPreview} />
    </SectionPageShell>
  );
}
