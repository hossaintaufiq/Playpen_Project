import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";
import { schoolContact } from "@/lib/contact";

export default function SchoolTransportationPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/school-transportation"
      title="School Transportation"
      subtitle="Safe, reliable travel options for pupils to and from campus."
    >
      <StudentLifeContent title="Transport Services">
        <p>
          Playpen offers school transportation on selected routes to help families manage
          daily commutes safely. Buses are supervised and operate according to schedules
          set at the start of the academic year.
        </p>
        <p>
          Route availability, fees, and registration procedures are communicated through the
          Admin Office. Parents should ensure pupils follow bus rules and arrive at pickup
          points on time.
        </p>
        <p>
          For transport enquiries, please contact the school administration at{" "}
          <a href={schoolContact.emailHref} className="playpen-text hover:underline">
            {schoolContact.email}
          </a>
          .
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
