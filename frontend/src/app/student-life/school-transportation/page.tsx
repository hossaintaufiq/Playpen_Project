import { SchoolTransportationContent } from "@/components/student-life/SchoolTransportationContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function SchoolTransportationPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/school-transportation"
      title="School Transportation"
      subtitle="Playpen's own bus service — safe, supervised travel for students since March 2014."
    >
      <SchoolTransportationContent />
    </StudentLifeSubPage>
  );
}
