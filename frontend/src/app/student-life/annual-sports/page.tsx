import { AnnualSportsContent } from "@/components/student-life/AnnualSportsContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function AnnualSportsPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/annual-sports"
      title="Annual Sports"
      subtitle="Indoor and outdoor sports, tournaments, and school teams across every division."
    >
      <AnnualSportsContent />
    </StudentLifeSubPage>
  );
}
