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
  customForm?: boolean;
  fields: AdmissionFormField[];
};

export const admissionFormConfigs: Record<AdmissionFormType, AdmissionFormConfig> = {
  "pg-class-ix": {
    id: "pg-class-ix",
    title: "Playgroup – Class X",
    subtitle: "Early years to senior school",
    description:
      "Official Playpen admission form for Playgroup through Class X. Includes personal, family, emergency, and sibling details.",
    pdfFileName: "playpen-pg-class-x-admission-form.pdf",
    pdfPath: "/forms/playpen-pg-class-x-admission-form.pdf",
    customForm: true,
    fields: [],
  },
  "a-level": {
    id: "a-level",
    title: "A' Level",
    subtitle: "Advanced Subsidiary (AS) Level",
    description:
      "Official Playpen A' Level admission form for Session 2025–2026. Complete online or download the printable PDF with all sections matching the school form.",
    pdfFileName: "playpen-a-level-admission-form.pdf",
    pdfPath: "/forms/playpen-a-level-admission-form.pdf",
    customForm: true,
    fields: [],
  },
};

export const admissionFormList = Object.values(admissionFormConfigs);
