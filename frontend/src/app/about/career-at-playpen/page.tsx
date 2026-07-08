import { AboutPageShell } from "@/components/about/AboutPageShell";
import { CareerAtPlaypenContent } from "@/components/about/CareerAtPlaypenContent";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export default async function CareerAtPlaypenPage() {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <AboutPageShell
      section="/about/career-at-playpen"
      title="Career at Playpen"
      subtitle="Join a school where dedication, stability, and professional growth define every career."
    >
      <CareerAtPlaypenContent vacancies={cms.vacancies} />
    </AboutPageShell>
  );
}
