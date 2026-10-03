export const examinationsIntro =
  "The school academic year is divided into two semesters. A formal written examination is taken at the end of each semester.";

export const examinationsPromotionNote =
  "Students in the Junior and Senior section have to attain certain passing marks in the core subjects to be considered for promotion to the next class. Students scoring less than the minimum as an aggregate for the year may not be promoted to the next class.";

export const examinationSemesters = [
  {
    title: "Semester 1 Examination",
    text: "A formal written examination is held at the end of the first semester.",
  },
  {
    title: "Semester 2 Examination",
    text: "A formal written examination is held at the end of the second semester.",
  },
] as const;

export const promotionRequirements = [
  {
    title: "Core Subject Passing Marks",
    text: "Junior and Senior section students must attain the required passing marks in core subjects.",
  },
  {
    title: "Promotion Consideration",
    text: "Meeting the minimum standards in core subjects is required for promotion to the next class.",
  },
  {
    title: "Year-End Aggregate",
    text: "Students scoring below the minimum aggregate for the year may not be promoted.",
  },
] as const;
