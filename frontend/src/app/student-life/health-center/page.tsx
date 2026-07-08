import { HealthCenterContent } from "@/components/student-life/HealthCenterContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function HealthCenterPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/health-center"
      title="Health Center"
      subtitle="On-campus health care for minor needs, with parents involved in serious cases."
    >
      <HealthCenterContent />
    </StudentLifeSubPage>
  );
}
