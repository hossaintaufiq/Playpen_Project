import { HealthCenterContent } from "@/components/student-life/HealthCenterContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function HealthCenterPage() {
  const photoPreview = await getSectionPreview(
    "student-life/health-center",
    "Health Center Photo Highlights",
    "health",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/health-center"
      title="Health Center"
      subtitle="On-campus health care for minor needs, with parents involved in serious cases."
      photoPreview={photoPreview}
    >
      <HealthCenterContent />
    </StudentLifeSubPage>
  );
}
