import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

const activities = [
  "Arts, music, and drama clubs",
  "Debate, quiz, and public speaking",
  "Scouts, guides, and leadership programmes",
  "Subject enrichment and hobby clubs",
];

export default function ExtraCurricularActivitiesPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/extra-curricular-activities"
      title="Extra Curricular Activities"
      subtitle="Clubs and programmes that nurture talent, confidence, and creativity."
    >
      <StudentLifeContent title="Beyond the Classroom">
        <p>
          Playpen offers a wide range of extra curricular activities so pupils can explore
          interests, develop new skills, and build friendships outside regular lessons.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {activities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
