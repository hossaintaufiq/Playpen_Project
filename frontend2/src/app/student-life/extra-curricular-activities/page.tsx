import { ExtraCurricularContent } from "@/components/student-life/ExtraCurricularContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function ExtraCurricularActivitiesPage() {
  const photoPreview = await getSectionPreview(
    "student-life/extra-curricular-activities",
    "ECA Photo Highlights",
    "extra curricular",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/extra-curricular-activities"
      title="Extra Curricular Activities"
      subtitle="Clubs, arts, sports, olympiads, and programmes for well-rounded student development."
      photoPreview={photoPreview}
    >
      <ExtraCurricularContent />
    </StudentLifeSubPage>
  );
}
