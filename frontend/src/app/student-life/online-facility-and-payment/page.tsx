import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function OnlineFacilityAndPaymentPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/online-facility-and-payment"
      title="Online Facility & Payment"
      subtitle="Convenient digital access for families to manage school-related services."
    >
      <StudentLifeContent title="Digital Services">
        <p>
          Playpen provides online facilities to help parents and students access information
          and complete payments securely. Services may include fee payment, notices, and
          portal access for academic updates.
        </p>
        <p>
          Families will receive login credentials and instructions from the school
          administration. For assistance with online payments or portal access, please
          contact the Admin Office during school hours.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
