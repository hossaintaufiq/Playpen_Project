import { OnlineFacilityPaymentContent } from "@/components/student-life/OnlineFacilityPaymentContent";
import { StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function OnlineFacilityAndPaymentPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/online-facility-and-payment"
      title="Online Facility & Payment"
      subtitle="School Management System access, parent portal features, and secure online fee payment."
    >
      <OnlineFacilityPaymentContent />
    </StudentLifeSubPage>
  );
}
