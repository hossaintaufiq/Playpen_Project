export const PG_CLASS_SESSION = "2025 – 2026";

export const PG_CLASS_LEVELS = [
  "Playgroup",
  "Nursery",
  "KG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
] as const;

export const PG_CLASS_SUBMISSION_NOTE =
  "Please submit the completed form at the school along with Tk. 1000.";

export function getPGClassInitialValues(): Record<string, string> {
  return {
    moneyReceiptNo: "",
    applicationDate: "",
    studentName: "",
    classApplying: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    religion: "",
    fatherName: "",
    fatherEducation: "",
    fatherProfession: "",
    fatherDesignation: "",
    fatherOfficeAddress: "",
    fatherOfficeContact: "",
    fatherEmail: "",
    motherName: "",
    motherEducation: "",
    motherOccupation: "",
    motherOfficeAddress: "",
    motherOfficeContact: "",
    motherEmail: "",
    residenceAddress: "",
    residenceContact: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyAddress: "",
    emergencyContact: "",
    previousSchool: "",
    singleParent: "",
    siblingsNone: "false",
    brothersCount: "",
    sistersCount: "",
    playpenRelative1Name: "",
    playpenRelative1Relationship: "",
    playpenRelative1Class: "",
    playpenRelative2Name: "",
    playpenRelative2Relationship: "",
    playpenRelative2Class: "",
    referredBy: "",
  };
}

const requiredFields: Array<{ key: string; label: string }> = [
  { key: "studentName", label: "Student's name" },
  { key: "classApplying", label: "Class applying for" },
  { key: "dateOfBirth", label: "Date of birth" },
  { key: "gender", label: "Gender" },
  { key: "nationality", label: "Nationality" },
  { key: "religion", label: "Religion" },
  { key: "fatherName", label: "Father's full name" },
  { key: "motherName", label: "Mother's full name" },
  { key: "residenceAddress", label: "Residential address" },
  { key: "residenceContact", label: "Residential contact number" },
  { key: "emergencyName", label: "Emergency contact name" },
  { key: "emergencyRelationship", label: "Emergency contact relationship" },
  { key: "emergencyAddress", label: "Emergency contact address" },
  { key: "emergencyContact", label: "Emergency contact number" },
  { key: "singleParent", label: "Single parent" },
];

export function validatePGClassApplication(values: Record<string, string>) {
  return requiredFields
    .filter((field) => !values[field.key]?.trim())
    .map((field) => field.label);
}
