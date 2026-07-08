import { AboutOverviewContent } from "@/components/about/AboutOverviewContent";
import { AboutPageShell } from "@/components/about/AboutPageShell";

export default function AboutPage() {
  return (
    <AboutPageShell
      section="/about"
      title="About Playpen"
      subtitle="48 years of excellence in education — shaping future leaders since 1977."
    >
      <AboutOverviewContent />
    </AboutPageShell>
  );
}
