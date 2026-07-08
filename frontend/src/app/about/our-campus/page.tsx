import { AboutPageShell } from "@/components/about/AboutPageShell";
import { OurCampusContent } from "@/components/about/OurCampusContent";

export default function OurCampusPage() {
  return (
    <AboutPageShell
      section="/about/our-campus"
      title="Our Campus"
      subtitle="A custom-built Bashundhara campus from Play Group to Class XII — designed for learning, safety, and student wellbeing."
    >
      <OurCampusContent />
    </AboutPageShell>
  );
}
