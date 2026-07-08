import { CulturalProgrammeContent } from "@/components/student-life/CulturalProgrammeContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function CulturalProgrammePage() {
  return (
    <StudentLifeSubPage
      section="/student-life/cultural-programme"
      title="Cultural Programme"
      subtitle="Performing arts, national celebrations, and a full calendar of school life."
    >
      <CulturalProgrammeContent />
    </StudentLifeSubPage>
  );
}
