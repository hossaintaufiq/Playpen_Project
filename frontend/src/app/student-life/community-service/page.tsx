import { CommunityServiceContent } from "@/components/student-life/CommunityServiceContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { getSectionPreview } from "@/lib/school-images";

export default async function CommunityServicePage() {
  const photoPreview = await getSectionPreview(
    "student-life/community-service",
    "Community Service Photo Highlights",
    "community service",
  );

  return (
    <StudentLifeSubPage
      section="/student-life/community-service"
      title="Community Service"
      subtitle="An ongoing tradition of compassion, volunteering, and service to society."
      photoPreview={photoPreview}
    >
      <CommunityServiceContent />
    </StudentLifeSubPage>
  );
}
