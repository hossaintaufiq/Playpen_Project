import { StudentLifeOverviewContent } from "@/components/student-life/StudentLifeOverviewContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { studentLifeHeroImages, studentLifeNavItems } from "@/lib/student-life-nav";
import { getSectionPreview } from "@/lib/school-images";

export default async function StudentLifePage() {
  const photoPreview = await getSectionPreview(
    "student-life/overview",
    "Student Life Photo Highlights",
    "student life",
  );

  return (
    <SectionPageShell
      section="/student-life"
      title="Student Life"
      subtitle="A vibrant community where students learn, grow, and thrive beyond the classroom."
      navItems={studentLifeNavItems}
      rootHref="/student-life"
      ariaLabel="Student life sections"
      heroImages={studentLifeHeroImages}
    >
      <StudentLifeOverviewContent photoPreview={photoPreview} />
    </SectionPageShell>
  );
}
