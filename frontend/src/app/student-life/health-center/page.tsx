import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { schoolContact } from "@/lib/contact";

export default function HealthCenterPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/health-center"
      title="Health Center"
      subtitle="On-campus care and first aid for pupil wellbeing during the school day."
    >
      <StudentLifeContent title="Pupil Health & Safety">
        <p>
          Playpen maintains a health center staffed during school hours to attend to minor
          injuries, illness, and medical needs. Staff coordinate with parents when further
          care or collection is required.
        </p>
        <p>
          Parents should inform the school of any allergies, medications, or ongoing health
          conditions. Emergency contact details must be kept up to date with the Admin Office.
        </p>
        <p>
          For health-related enquiries, contact the school at{" "}
          <a href={schoolContact.phoneHref} className="playpen-text hover:underline">
            {schoolContact.phone}
          </a>
          .
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
