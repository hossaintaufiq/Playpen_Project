import { AboutPageShell } from "@/components/about/AboutPageShell";
import { ChildProtectionPolicyContent } from "@/components/about/ChildProtectionPolicyContent";

export default function ChildProtectionPolicyPage() {
  return (
    <AboutPageShell
      section="/about/child-protection-policy"
      title="Child Protection Policy"
      subtitle="Safeguarding pupil wellbeing through local and Cambridge Board guidelines on safety, security, health, and hygiene."
    >
      <ChildProtectionPolicyContent />
    </AboutPageShell>
  );
}
