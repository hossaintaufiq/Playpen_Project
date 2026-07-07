import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function WorkshopForStudentsPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/workshop-for-students"
      title="Workshop for Students"
      subtitle="Skills sessions, career guidance, and enrichment beyond the syllabus."
    >
      <StudentLifeContent title="Learning Through Workshops">
        <p>
          Playpen organises workshops on study skills, career planning, leadership, and
          specialised topics led by teachers, alumni, and guest speakers. These sessions help
          pupils prepare for examinations, university applications, and future careers.
        </p>
        <p>
          Workshop schedules are announced through school notices and division heads.
          Participation is encouraged for senior pupils especially.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
