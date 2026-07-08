import { CommunityServiceContent } from "@/components/student-life/CommunityServiceContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function CommunityServicePage() {
  return (
    <StudentLifeSubPage
      section="/student-life/community-service"
      title="Community Service"
      subtitle="An ongoing tradition of compassion, volunteering, and service to society."
    >
      <CommunityServiceContent />
    </StudentLifeSubPage>
  );
}
