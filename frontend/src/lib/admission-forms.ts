export type AdmissionFormType = "pg-class-ix" | "a-level";

export type AdmissionFormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea" | "number";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  colSpan?: 1 | 2;
};

export type AdmissionFormConfig = {
  id: AdmissionFormType;
  title: string;
  subtitle: string;
  description: string;
  pdfFileName: string;
  pdfPath: string;
  fields: AdmissionFormField[];
};

export const admissionFormConfigs: Record<AdmissionFormType, AdmissionFormConfig> = {
  "pg-class-ix": {
    id: "pg-class-ix",
    title: "PG – Class IX",
    subtitle: "Admission application",
    description:
      "For Playgroup through Class IX applicants. Complete the form online or download the PDF to submit at the admissions office.",
    pdfFileName: "playpen-pg-class-ix-admission-form.pdf",
    pdfPath: "/forms/playpen-pg-class-ix-admission-form.pdf",
    fields: [
      { name: "pupilName", label: "Pupil's full name", type: "text", required: true, colSpan: 2 },
      { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
      { name: "gender", label: "Gender", type: "select", required: true, options: ["Male", "Female", "Other"] },
      {
        name: "classApplying",
        label: "Class applying for",
        type: "select",
        required: true,
        options: ["Playgroup", "Nursery", "KG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX"],
      },
      { name: "previousSchool", label: "Previous school (if any)", type: "text", colSpan: 2 },
      { name: "guardianName", label: "Parent / guardian name", type: "text", required: true, colSpan: 2 },
      { name: "relationship", label: "Relationship to pupil", type: "text", required: true },
      { name: "phone", label: "Contact phone", type: "tel", required: true },
      { name: "email", label: "Email address", type: "email", required: true, colSpan: 2 },
      { name: "address", label: "Residential address", type: "textarea", required: true, colSpan: 2 },
      { name: "notes", label: "Additional information", type: "textarea", colSpan: 2 },
    ],
  },
  "a-level": {
    id: "a-level",
    title: "A' Level",
    subtitle: "Admission application",
    description:
      "For A' Level applicants. Complete the form online or download the PDF to submit with required academic documents.",
    pdfFileName: "playpen-a-level-admission-form.pdf",
    pdfPath: "/forms/playpen-a-level-admission-form.pdf",
    fields: [
      { name: "pupilName", label: "Applicant's full name", type: "text", required: true, colSpan: 2 },
      { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
      { name: "gender", label: "Gender", type: "select", required: true, options: ["Male", "Female", "Other"] },
      { name: "oLevelSchool", label: "O' Level school", type: "text", required: true, colSpan: 2 },
      { name: "oLevelYear", label: "O' Level completion year", type: "number", required: true },
      {
        name: "subjects",
        label: "O' Level subjects & grades",
        type: "textarea",
        required: true,
        placeholder: "e.g. Mathematics – A, Physics – B, ...",
        colSpan: 2,
      },
      {
        name: "aLevelSubjects",
        label: "Preferred A' Level subjects",
        type: "textarea",
        required: true,
        placeholder: "e.g. Mathematics, Physics, Chemistry",
        colSpan: 2,
      },
      { name: "guardianName", label: "Parent / guardian name", type: "text", required: true, colSpan: 2 },
      { name: "phone", label: "Contact phone", type: "tel", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "address", label: "Residential address", type: "textarea", required: true, colSpan: 2 },
      { name: "notes", label: "Additional information", type: "textarea", colSpan: 2 },
    ],
  },
};

export const admissionFormList = Object.values(admissionFormConfigs);
