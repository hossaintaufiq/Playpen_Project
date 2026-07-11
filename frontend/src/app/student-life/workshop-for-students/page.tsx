import { WorkshopForStudentsContent } from "@/components/student-life/WorkshopForStudentsContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function WorkshopForStudentsPage() {
  const photoPreview = await getSectionPreview(
    "student-life/workshop-for-students",
    "Workshop Photo Highlights",
    "workshop",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/workshop-for-students"
      title="Workshop for Students"
      subtitle="Regular seminars on digital skills, university guidance, MUN, UWC, and D.E.A. programmes."
      photoPreview={photoPreview}
    >
      <WorkshopForStudentsContent />
    </StudentLifeSubPage>
  );
}
