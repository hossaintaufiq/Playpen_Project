import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";
import { IdentityCardContent } from "@/components/academics/IdentityCardContent";

export default function IdentityCardPage() {
  return (
    <AcademicsPageShell
      section="/academics/identity-card"
      title="The Identity Card"
      subtitle="Official student identification — issued on admission and required on campus every day."
    >
      <IdentityCardContent />
    </AcademicsPageShell>
  );
}
