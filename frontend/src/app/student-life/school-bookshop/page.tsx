import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function SchoolBookshopPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/school-bookshop"
      title="School Bookshop"
      subtitle="Textbooks, stationery, and learning materials in one convenient location."
    >
      <StudentLifeContent title="Books & Supplies">
        <p>
          The Playpen bookshop supplies textbooks, workbooks, stationery, and uniform items
          required for each division. Lists are shared at the start of the academic year
          and updated as needed.
        </p>
        <p>
          Parents are encouraged to purchase approved materials through the bookshop to
          ensure pupils have the correct editions and resources for their classes.
        </p>
        <p>
          Bookshop hours and payment methods are announced by the Admin Office at the
          beginning of each term.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
