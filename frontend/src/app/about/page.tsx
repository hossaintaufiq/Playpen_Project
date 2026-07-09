import { AboutOverviewContent } from "@/components/about/AboutOverviewContent";
import { AboutPageShell } from "@/components/about/AboutPageShell";
import { getSectionPreview } from "@/lib/school-images";

export default async function AboutPage() {
  const photoPreview = await getSectionPreview(
    "about/our-campus",
    "Campus Photo Highlights",
    "our campus",
  );

  return (
    <AboutPageShell
      section="/about"
      title="About Playpen"
      subtitle="48 years of excellence in education — shaping future leaders since 1977."
    >
      <AboutOverviewContent photoPreview={photoPreview} />
    </AboutPageShell>
  );
}
