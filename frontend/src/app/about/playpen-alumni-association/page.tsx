import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AlumniAssociationContent } from "@/components/about/AlumniAssociationContent";

export default function PlaypenAlumniAssociationPage() {
  return (
    <AboutPageShell
      section="/about/playpen-alumni-association"
      title="Playpen Alumni Association"
      subtitle="Reconnecting graduates worldwide — celebrating achievement, friendship, and shared Playpen memories."
    >
      <AlumniAssociationContent />
    </AboutPageShell>
  );
}
