import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { StudentAchievementsContent } from "@/components/academics/StudentAchievementsContent";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import { getSectionPreview } from "@/lib/school-images";

export default async function StudentAchievementsPage() {
  const cms = getPublishedCMS(await getCMSData());
  const photoPreview = await getSectionPreview(
    "academics/student-achievements",
    "Student Achievements Photo Highlights",
    "achievements",
  );

  return (
    <AcademicsPageShell
      section="/academics/student-achievements"
      title="Achievements of Playpen Students"
      subtitle="Celebrating excellence in competitions, sports, academics, and the arts."
    >
      {photoPreview ? (
        <SectionPhotoPreview
          title={photoPreview.title}
          href={photoPreview.href}
          images={photoPreview.images}
        />
      ) : null}
      <StudentAchievementsContent achievements={cms.studentAchievements} />
    </AcademicsPageShell>
  );
}
