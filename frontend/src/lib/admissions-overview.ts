import { ClipboardList, Scale, Shirt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  admissionNoticeIntro,
  admissionProcedureSteps,
  requiredDocuments,
} from "@/lib/admission-procedure";
import { disciplineIntro } from "@/lib/code-of-conduct";
import { compulsoryUniformNote, playgroupUniformNote } from "@/lib/school-uniform";

export const admissionsMission = {
  eyebrow: "Join Playpen",
  title: "A clear, welcoming path from enquiry to enrolment",
  description:
    "Whether you are applying for Playgroup or A' Level, Playpen offers a transparent admission process — with forms online or at the Front Office, assessments, interviews, and full guidance for new families.",
  quote:
    "Every new student joins a school community built on excellence, care, and clear expectations from day one.",
};

export const admissionsStats = [
  { value: "PG – IX", label: "Admission form levels" },
  { value: "A' Level", label: "Senior admission" },
  { value: "4", label: "Required documents" },
  { value: "3", label: "Key policy areas" },
] as const;

export const admissionsPillars = [
  {
    title: "Apply with Confidence",
    text: "Download forms or apply online for PG – Class IX and A' Level, or collect from the Front Office.",
  },
  {
    title: "Fair Assessment",
    text: "Assessments, written tests, and Principal interviews ensure every child is placed appropriately.",
  },
  {
    title: "Dress for Success",
    text: "Clear uniform policy from casual wear in Nursery to full school uniform from KG I onwards.",
  },
  {
    title: "Know the Rules",
    text: "Code of conduct covering discipline, devices, attendance, traffic, and family communication.",
  },
] as const;

export const admissionsJourneySteps = [
  {
    title: "Enquire & Apply",
    text: "Visit the Front Office, contact the Admission Department, or submit forms online.",
  },
  {
    title: "Assessment & Test",
    text: admissionProcedureSteps[1],
  },
  {
    title: "Interview",
    text: admissionProcedureSteps[4],
  },
  {
    title: "Final Decision",
    text: admissionProcedureSteps[5],
  },
] as const;

export type AdmissionsSectionPreview = {
  href: string;
  label: string;
  description: string;
  excerpt: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
  featured?: boolean;
};

export const admissionsSectionPreviews: AdmissionsSectionPreview[] = [
  {
    href: "/admissions/admission-procedure",
    label: "Admission Procedure",
    description: "Forms, tests, and enrolment",
    excerpt: admissionNoticeIntro,
    image: "/images/marquee/student-services.jpg",
    icon: ClipboardList,
    highlights: [
      "Download PG – Class IX or A' Level forms",
      "Assessment for PG/Nursery; written tests from KG I",
      "Principal interview and telephone status update",
      ...requiredDocuments.slice(0, 2),
    ],
    featured: true,
  },
  {
    href: "/admissions/school-uniform",
    label: "School Uniform",
    description: "Dress code by level",
    excerpt: compulsoryUniformNote,
    image: "/images/schools/junior.jpg",
    icon: Shirt,
    highlights: [
      playgroupUniformNote,
      "Uniform compulsory from KG I; sportswear from school",
      "Authorized tailoring houses in Gulshan & Bashundhara",
    ],
  },
  {
    href: "/admissions/code-of-conduct",
    label: "Code of Conduct",
    description: "Rules for every family",
    excerpt: disciplineIntro,
    image: "/images/marquee/faculty.jpg",
    icon: Scale,
    highlights: [
      "Discipline, suspension, and expulsion policy",
      "Prohibited devices and mobile phone rules",
      "Attendance, traffic, and contact updates",
    ],
  },
];

export const admissionsSummary = [
  "Admission Procedure — forms, notices, assessments, interviews, and required documents",
  "Apply Online — PG – Class IX and A' Level applications with downloadable PDFs",
  "School Uniform — dress code, tailoring houses, footwear, and winter wear",
  "Code of Conduct — discipline, prohibited items, attendance, and traffic rules",
  "Admissions Office — Front Office enquiries, school mail, and direct contact",
] as const;
