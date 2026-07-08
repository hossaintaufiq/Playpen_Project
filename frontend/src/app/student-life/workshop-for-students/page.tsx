import { WorkshopForStudentsContent } from "@/components/student-life/WorkshopForStudentsContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function WorkshopForStudentsPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/workshop-for-students"
      title="Workshop for Students"
      subtitle="Regular seminars on digital skills, university guidance, MUN, UWC, and D.E.A. programmes."
    >
      <WorkshopForStudentsContent />
    </StudentLifeSubPage>
  );
}
