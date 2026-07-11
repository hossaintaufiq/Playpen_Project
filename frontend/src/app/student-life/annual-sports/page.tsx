import { AnnualSportsContent } from "@/components/student-life/AnnualSportsContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function AnnualSportsPage() {
  const photoPreview = await getSectionPreview(
    "student-life/annual-sports",
    "Annual Sports Photo Highlights",
    "annual sports",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/annual-sports"
      title="Annual Sports"
      subtitle="Indoor and outdoor sports, tournaments, and school teams across every division."
      photoPreview={photoPreview}
    >
      <AnnualSportsContent />
    </StudentLifeSubPage>
  );
}
