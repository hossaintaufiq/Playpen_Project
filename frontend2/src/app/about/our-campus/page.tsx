import { AboutPageShell } from "@/components/about/AboutPageShell";
import { OurCampusContent } from "@/components/about/OurCampusContent";
import { getSectionPreview } from "@/lib/school-images";

export default async function OurCampusPage() {
  const photoPreview = await getSectionPreview(
    "about/our-campus",
    "Our Campus Photo Highlights",
    "campus",
  );

  return (
    <AboutPageShell
      section="/about/our-campus"
      title="Our Campus"
      subtitle="A custom-built Bashundhara campus from Play Group to Class XII — designed for learning, safety, and student wellbeing."
    >
      <OurCampusContent photoPreview={photoPreview} />
    </AboutPageShell>
  );
}
