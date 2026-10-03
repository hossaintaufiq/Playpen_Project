import { admissionFormConfigs } from "@/lib/admission-forms";

export const admissionFormIntro =
  "To download the respective admission form please click on the Download button given below and read the instruction carefully before submitting the form.";

export const admissionFormOfficeNote =
  "Parents may also collect the form from our Front Office and submit the same to the Admissions Office. We request Parents to fill up the form carefully and correctly and ensure that all information provided is accurate and complete.";

export const admissionForms = [
  {
    title: "Admission Form of PG – Class IX",
    config: admissionFormConfigs["pg-class-ix"],
    applyPath: "/admissions/apply",
  },
  {
    title: "Admission Form of A' Level",
    config: admissionFormConfigs["a-level"],
    applyPath: "/admissions/apply",
  },
] as const;

export const admissionNoticeIntro =
  "Interested parents enquire about Admission details by visiting the Front Office or approaching through school mail or contacting directly to the Admission Department.";

export const admissionNoticePoints = [
  "In the case of PG and Nursery bulk admission, an SMS is sent to all Parents of Playpen.",
  "Applications for the current year are accepted if there is available space.",
] as const;

export const admissionProcedureSteps = [
  "Parents usually submit the Admission Forms in the Front Office which are then sorted by the Admission Department.",
  "Upon approval of the Principal, Parents are then called up for Assessment (PG and Nursery), Admission Test (KG I onwards).",
  "An assessment is done for Playgroup and Nursery children.",
  "From KG I till Class IX, a written test is conducted in English Language, Bengali Language, and Mathematics.",
  "After selection in the Assessment or Admission Test, Students have to attend an interview with the Principal along with their Parents.",
  "After evaluating the written test result and Interview, the final decision is determined by the Principal.",
] as const;

export const admissionClassXINote =
  "In Class XI, admission is confirmed based on the respective School Mock Exams and O' Level Result of a student.";

export const applicationStatusNote =
  "When the admission process is completed, the status of the Admission is informed to Parents over the telephone.";

export const requiredDocuments = [
  "Completed Admission Form",
  "Birth Certificate of Student",
  "Immunization Record",
  "School Report Card of past two years",
] as const;

export const paymentContactNote =
  "Upon the final selection of the Student, the Parents are briefed about the Admission Formalities, especially the admission fees and monthly tuition fees which they need to pay Online in school authorized bank. These banking formalities are dealt with by the concerned Admission Department.";
