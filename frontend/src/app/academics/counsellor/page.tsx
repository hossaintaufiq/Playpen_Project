import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { CounsellorContent } from "@/components/academics/CounsellorContent";

export default function CounsellorPage() {
  return (
    <AcademicsPageShell
      section="/academics/counsellor"
      title="Counsellor"
      subtitle="Student and career counselling — guidance, support, and pathways for every pupil."
    >
      <CounsellorContent />
    </AcademicsPageShell>
  );
}
