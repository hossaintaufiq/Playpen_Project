import { AcademicsOverviewContent } from "@/components/academics/AcademicsOverviewContent";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import { getSectionPreview } from "@/lib/school-images";

export default async function AcademicsPage() {
  const cms = getPublishedCMS(await getCMSData());
  const photoPreview = await getSectionPreview(
    "academics/overview",
    "Academic Photo Highlights",
    "academics",
  );

  return (
    <AcademicsPageShell
      section="/academics"
      title="Academics"
      subtitle="Cambridge curriculum designed to inspire excellence at every level."
    >
      <AcademicsOverviewContent
        achievementCount={cms.studentAchievements.length}
        photoPreview={photoPreview}
      />
    </AcademicsPageShell>
  );
}
