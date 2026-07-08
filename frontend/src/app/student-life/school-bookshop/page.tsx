import { SchoolBookshopContent } from "@/components/student-life/SchoolBookshopContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function SchoolBookshopPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/school-bookshop"
      title="School Bookshop"
      subtitle="Books, exercise copies, and supplies — open 8:30 AM to 1:00 PM on campus."
    >
      <SchoolBookshopContent />
    </StudentLifeSubPage>
  );
}
