import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function CulturalProgrammePage() {
  return (
    <StudentLifeSubPage
      section="/student-life/cultural-programme"
      title="Cultural Programme"
      subtitle="Celebrating heritage, creativity, and the performing arts."
    >
      <StudentLifeContent title="Arts & Culture">
        <p>
          Playpen&apos;s cultural programme includes concerts, drama productions, dance,
          poetry, and national day celebrations. These events give pupils a platform to
          express themselves and share their talents with the school community.
        </p>
        <p>
          Cultural activities complement academic learning and help pupils appreciate diverse
          traditions while building confidence on stage and in front of audiences.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
