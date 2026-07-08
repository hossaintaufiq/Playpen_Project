import {
  Award,
  BookOpen,
  CreditCard,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Scale,
  School,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { examinationsIntro } from "@/lib/examinations";
import { identityCardIntro } from "@/lib/identity-card";
import { laboratoriesIntro } from "@/lib/laboratories";
import { libraryIntro } from "@/lib/library";
import { schoolDivisions } from "@/lib/our-campus";
import { studentSupportIntro } from "@/lib/student-support";
import { disciplinaryIntro } from "@/lib/disciplinary-committee";

export const academicsMission = {
  eyebrow: "Academic Excellence",
  title: "A Cambridge pathway supported by resources, care, and high standards",
  description:
    "From playgroup through A-Level, Playpen combines rigorous academics with libraries, laboratories, counselling, examinations, and pupil support — everything students need to learn with confidence and aim high.",
};

export const academicsStats = [
  { value: "4", label: "School divisions" },
  { value: "2", label: "Semester exams" },
  { value: "4", label: "Science & ICT labs" },
  { value: "2", label: "Counselling services" },
] as const;

export const academicsPillars = [
  {
    title: "Structured Learning",
    text: "Four divisions from Playgroup to A-Level with a clear Cambridge academic pathway.",
  },
  {
    title: "Modern Facilities",
    text: "Library, laboratories, and campus resources that enrich classroom learning.",
  },
  {
    title: "Guidance & Support",
    text: "Student support, counselling, and career guidance for every stage of school life.",
  },
  {
    title: "Standards & Recognition",
    text: "Examinations, conduct policies, ID security, and celebrated student achievements.",
  },
] as const;

export type AcademicsSectionPreview = {
  href: string;
  label: string;
  description: string;
  excerpt: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
  featured?: boolean;
};

export const academicsSectionPreviews: AcademicsSectionPreview[] = [
  {
    href: "/academics/school-structure",
    label: "School Structure",
    description: "Divisions from playgroup to A-Level",
    excerpt:
      "Playpen is organised into four divisions, each led by experienced educators who understand the developmental needs of pupils at every stage.",
    image: "/images/schools/junior.jpg",
    icon: School,
    highlights: schoolDivisions.map((division) => `${division.name} (${division.grades})`),
    featured: true,
  },
  {
    href: "/academics/library",
    label: "Library",
    description: "Reading, research, and library classes",
    excerpt: libraryIntro,
    image: "/images/schools/middle.jpg",
    icon: Library,
    highlights: [
      "Reader's Digest, books, magazines, and newspapers",
      "Library classes for all levels",
      "Borrowing policy with parent communication",
    ],
  },
  {
    href: "/academics/laboratories",
    label: "Laboratories",
    description: "Cambridge-approved science & ICT",
    excerpt: laboratoriesIntro,
    image: "/images/marquee/eca.jpg",
    icon: FlaskConical,
    highlights: [
      "Physics, Chemistry, Biology & Computer Science",
      "Approved by Cambridge and The British Council",
      "Spacious, equipped, and safe facilities",
    ],
  },
  {
    href: "/academics/student-support",
    label: "Student Support",
    description: "University application documents",
    excerpt: studentSupportIntro,
    image: "/images/marquee/student-services.jpg",
    icon: HeartHandshake,
    highlights: ["Recommendation letters", "Transcripts", "Testimonials"],
  },
  {
    href: "/academics/examinations",
    label: "Examinations",
    description: "Two-semester assessment cycle",
    excerpt: examinationsIntro,
    image: "/images/schools/senior.jpg",
    icon: BookOpen,
    highlights: [
      "Formal exams at the end of each semester",
      "Core subject passing marks for promotion",
      "Minimum aggregate requirements",
    ],
  },
  {
    href: "/academics/student-achievements",
    label: "Student Achievements",
    description: "Competitions, sports, and awards",
    excerpt:
      "Playpen students excel in national and international academic competitions, sports tournaments, science olympiads, and cultural events.",
    image: "/images/marquee/achievements.jpg",
    icon: Trophy,
    highlights: [
      "Spell Bee, Olympiads & science fairs",
      "Football, basketball & inter-house events",
      "Bangla Olympiad & language leagues",
    ],
  },
  {
    href: "/academics/disciplinary-committee",
    label: "Disciplinary Committee",
    description: "Conduct, fairness, and accountability",
    excerpt: disciplinaryIntro,
    image: "/images/marquee/faculty.jpg",
    icon: Scale,
    highlights: [
      "Suspension and expulsion policy",
      "Senior Management & Teacher review",
      "Parents urged to uphold school rules",
    ],
  },
  {
    href: "/academics/identity-card",
    label: "Identity Card",
    description: "Campus identification policy",
    excerpt: identityCardIntro,
    image: "/images/schools/elementary.jpg",
    icon: CreditCard,
    highlights: [
      "Issued on admission",
      "Required daily on campus",
      "Lost or damaged cards must be replaced",
    ],
  },
  {
    href: "/academics/counsellor",
    label: "Counsellor",
    description: "Student and career guidance",
    excerpt:
      "Faculty counsellors support pupils with academic, non-academic, and behavioural concerns; senior staff guide university and career pathways.",
    image: "/images/marquee/alumni.jpg",
    icon: Users,
    highlights: [
      "Student Counsellor on standby",
      "Career Counsellor for higher studies",
      "Guidance for home and abroad applications",
    ],
  },
];

export const academicsSummary = [
  "School Structure — four divisions from Playgroup to A-Level",
  "Library — reading resources, library classes, and borrowing policy",
  "Laboratories — Physics, Chemistry, Biology & Computer Science",
  "Student Support — recommendation letters, transcripts, and testimonials",
  "Examinations — two-semester exams and promotion standards",
  "Student Achievements — awards across academics, sports, and the arts",
  "Disciplinary Committee — conduct policy and fair review",
  "Identity Card — issued on admission and worn on campus",
  "Counsellor — student wellbeing and career guidance",
] as const;

export { schoolDivisions };
