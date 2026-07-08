import { ExtraCurricularContent } from "@/components/student-life/ExtraCurricularContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function ExtraCurricularActivitiesPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/extra-curricular-activities"
      title="Extra Curricular Activities"
      subtitle="Clubs, arts, sports, olympiads, and programmes for well-rounded student development."
    >
      <ExtraCurricularContent />
    </StudentLifeSubPage>
  );
}
