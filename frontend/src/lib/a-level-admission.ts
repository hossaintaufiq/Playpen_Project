export const A_LEVEL_SESSION = "2025 – 2026";

export type ALevelSubjectId =
  | "englishLanguage"
  | "physics"
  | "economics"
  | "chemistry"
  | "business"
  | "computerScience"
  | "furtherMathematics"
  | "psychology"
  | "biology"
  | "accounting"
  | "pureMathMechanics"
  | "environmentalManagement";

export type ALevelSubjectOption = {
  id: ALevelSubjectId;
  label: string;
  orGroup?: string;
};

export const A_LEVEL_SUBJECTS: ALevelSubjectOption[] = [
  { id: "englishLanguage", label: "English Language" },
  { id: "physics", label: "Physics" },
  { id: "economics", label: "Economics" },
  { id: "chemistry", label: "Chemistry", orGroup: "chem-business" },
  { id: "business", label: "Business", orGroup: "chem-business" },
  { id: "computerScience", label: "Computer Science" },
  { id: "furtherMathematics", label: "Further Mathematics", orGroup: "fm-psych" },
  { id: "psychology", label: "Psychology", orGroup: "fm-psych" },
  { id: "biology", label: "Biology", orGroup: "bio-accounting" },
  { id: "accounting", label: "Accounting", orGroup: "bio-accounting" },
  { id: "pureMathMechanics", label: "Pure Mathematics (P1) and Mechanics M" },
  { id: "environmentalManagement", label: "Environmental Management" },
];

export const A_LEVEL_SUBJECT_NOTES = [
  "At A2 Level, students will be required to take both P3 and S1 together.",
  "The subjects chosen cannot be dropped or changed after one month.",
  "A minimum of 10 students must opt for a subject for classes to be conducted.",
  "All subjects selected for A' Levels must have been appeared for at O' Levels too.",
];

export const A_LEVEL_REQUIRED_DOCUMENTS = [
  "2 copies of recent passport size photographs of the student in school uniform.",
  "Copy of passport.",
  "Copy of last report card and mock results from previous school (in case of new student).",
  "Copy of O Level statement of result, when it is published.",
];

export function getALevelInitialValues(): Record<string, string> {
  const values: Record<string, string> = {
    studentName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    landPhone: "",
    mobilePhone: "",
    nationality: "",
    religion: "",
    fatherName: "",
    fatherEducation: "",
    fatherOccupation: "",
    fatherDesignation: "",
    fatherOfficeAddress: "",
    fatherEmail: "",
    fatherContact: "",
    motherName: "",
    motherEducation: "",
    motherOccupation: "",
    motherDesignation: "",
    motherOfficeAddress: "",
    motherEmail: "",
    motherContact: "",
    residenceAddress: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyAddress: "",
    emergencyContact: "",
    singleParent: "",
    healthIssues: "",
    siblingsNone: "false",
    brothersCount: "",
    sistersCount: "",
    playpenRelative1Name: "",
    playpenRelative1Relationship: "",
    playpenRelative1Class: "",
    playpenRelative2Name: "",
    playpenRelative2Relationship: "",
    playpenRelative2Class: "",
    lastInstitution: "",
    oLevelYear: "",
    totalSubjects: "",
    hobbies: "",
    achievements: "",
    fatherNameUndertaking: "",
    motherNameUndertaking: "",
    studentNameUndertaking: "",
    selectedSubjects: "[]",
  };

  for (let i = 1; i <= 10; i++) {
    values[`oLevelSubject${i}`] = "";
    values[`oLevelGrade${i}`] = "";
  }

  return values;
}

const requiredTextFields: Array<{ key: string; label: string }> = [
  { key: "studentName", label: "Student's name (as in passport)" },
  { key: "dateOfBirth", label: "Date of birth (as in passport)" },
  { key: "gender", label: "Gender" },
  { key: "email", label: "E-mail address" },
  { key: "mobilePhone", label: "Mobile phone" },
  { key: "nationality", label: "Nationality" },
  { key: "religion", label: "Religion" },
  { key: "fatherName", label: "Father's name" },
  { key: "motherName", label: "Mother's name" },
  { key: "residenceAddress", label: "Residence address" },
  { key: "emergencyName", label: "Emergency contact name" },
  { key: "emergencyRelationship", label: "Emergency contact relationship" },
  { key: "emergencyAddress", label: "Emergency contact address" },
  { key: "emergencyContact", label: "Emergency contact number" },
  { key: "singleParent", label: "Single parent" },
  { key: "lastInstitution", label: "Last educational institution attended" },
  { key: "oLevelYear", label: "Year of O' Level exam" },
  { key: "fatherNameUndertaking", label: "Father's full name (undertaking)" },
  { key: "motherNameUndertaking", label: "Mother's full name (undertaking)" },
  { key: "studentNameUndertaking", label: "Student's full name (undertaking)" },
];

export function parseSelectedSubjects(raw: string | undefined): ALevelSubjectId[] {
  try {
    const parsed = JSON.parse(raw || "[]") as string[];
    return parsed.filter((id): id is ALevelSubjectId =>
      A_LEVEL_SUBJECTS.some((subject) => subject.id === id)
    );
  } catch {
    return [];
  }
}

export function validateALevelApplication(values: Record<string, string>) {
  const missing = requiredTextFields
    .filter((field) => !values[field.key]?.trim())
    .map((field) => field.label);

  const selected = parseSelectedSubjects(values.selectedSubjects);

  if (selected.length < 3) {
    missing.push("At least 3 A' Level subject choices");
  }

  const orGroups = new Map<string, string[]>();
  for (const subject of A_LEVEL_SUBJECTS) {
    if (!subject.orGroup || !selected.includes(subject.id)) continue;
    const group = orGroups.get(subject.orGroup) ?? [];
    group.push(subject.id);
    orGroups.set(subject.orGroup, group);
  }

  for (const [, group] of orGroups) {
    if (group.length > 1) {
      missing.push("Only one subject may be selected from each OR group");
      break;
    }
  }

  return missing;
}
