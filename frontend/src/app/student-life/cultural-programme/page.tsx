import { CulturalProgrammeContent } from "@/components/student-life/CulturalProgrammeContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function CulturalProgrammePage() {
  const photoPreview = await getSectionPreview(
    "student-life/cultural-programme",
    "Cultural Programme Photo Highlights",
    "cultural",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/cultural-programme"
      title="Cultural Programme"
      subtitle="Performing arts, national celebrations, and a full calendar of school life."
      photoPreview={photoPreview}
    >
      <CulturalProgrammeContent />
    </StudentLifeSubPage>
  );
}
