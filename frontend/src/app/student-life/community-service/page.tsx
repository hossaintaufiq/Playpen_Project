import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function CommunityServicePage() {
  return (
    <StudentLifeSubPage
      section="/student-life/community-service"
      title="Community Service"
      subtitle="Learning compassion and responsibility through service to others."
    >
      <StudentLifeContent title="Serving the Community">
        <p>
          Community service is an important part of Playpen&apos;s values education. Pupils
          take part in initiatives that support local communities, charities, and social
          causes — developing empathy and civic awareness.
        </p>
        <p>
          Projects are organised by divisions and student groups with guidance from teachers,
          helping pupils understand the impact of collective action.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
