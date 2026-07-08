import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { StudentAchievementsContent } from "@/components/academics/StudentAchievementsContent";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export default async function StudentAchievementsPage() {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <AcademicsPageShell
      section="/academics/student-achievements"
      title="Achievements of Playpen Students"
      subtitle="Celebrating excellence in competitions, sports, academics, and the arts."
    >
      <StudentAchievementsContent achievements={cms.studentAchievements} />
    </AcademicsPageShell>
  );
}
