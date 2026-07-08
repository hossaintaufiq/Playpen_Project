import { StudentLifeOverviewContent } from "@/components/student-life/StudentLifeOverviewContent";
import { SectionPageShell } from "@/components/ui/SectionPageShell";
import { studentLifeHeroImages, studentLifeNavItems } from "@/lib/student-life-nav";

export default function StudentLifePage() {
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
      <StudentLifeOverviewContent />
    </SectionPageShell>
  );
}
