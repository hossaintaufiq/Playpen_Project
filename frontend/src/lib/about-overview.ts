import {
  Briefcase,
  Building2,
  GraduationCap,
  Shield,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { campusIntro, schoolDivisions } from "@/lib/our-campus";
import { administrationIntro, schoolManagement } from "@/lib/school-administration";
import { childProtectionStatement } from "@/lib/child-protection-policy";
import { alumniIntro } from "@/lib/alumni-association";
import { careerIntro } from "@/lib/career-at-playpen";

export const aboutStats = [
  { value: "1977", label: "Year founded" },
  { value: "48+", label: "Years of excellence" },
  { value: "PG – XII", label: "Cambridge pathway" },
  { value: "4", label: "School divisions" },
] as const;

export const aboutMission = {
  eyebrow: "Who We Are",
  title: "A school built on trust, tradition, and forward-looking education",
  description:
    "Playpen is one of Bangladesh's leading English medium schools, offering the Cambridge curriculum from playgroup through A-Level. For nearly five decades, we have nurtured well-rounded individuals who excel academically and grow into responsible global citizens.",
  quote:
    "Shaping learners who think clearly, act responsibly, and lead with integrity — from the classroom to the world beyond.",
};

export const aboutPillars = [
  {
    title: "Academic Excellence",
    text: "Cambridge curriculum delivered by qualified, caring faculty across every division.",
  },
  {
    title: "Holistic Development",
    text: "Learning that balances academics with character, creativity, and co-curricular life.",
  },
  {
    title: "Safe Environment",
    text: "Safeguarding, supervision, and campus standards that put pupil wellbeing first.",
  },
  {
    title: "Lasting Community",
    text: "A vibrant network of families, educators, and alumni connected to Playpen.",
  },
] as const;

export type AboutSectionPreview = {
  href: string;
  label: string;
  description: string;
  excerpt: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
  featured?: boolean;
};

export const aboutSectionPreviews: AboutSectionPreview[] = [
  {
    href: "/about/our-campus",
    label: "Our Campus",
    description: "Facilities and learning environment",
    excerpt: campusIntro,
    image: "/images/schools/middle.webp",
    icon: Building2,
    highlights: [
      "Purpose-built 10-storey campus in Bashundhara",
      "Air-conditioned classrooms, labs, library & ECA spaces",
      "Playground, cafeteria, transport & full-time security",
    ],
    featured: true,
  },
  {
    href: "/about/school-administration",
    label: "School Administration",
    description: "Leadership and governance",
    excerpt: administrationIntro,
    image: "/images/schools/senior.webp",
    icon: Users,
    highlights: [
      "Experienced Board of Management",
      "Principal-led academic leadership",
      "Divisional Vice Principals & Teacher-In-Charges",
    ],
  },
  {
    href: "/about/child-protection-policy",
    label: "Child Protection Policy",
    description: "Safeguarding every pupil",
    excerpt: childProtectionStatement,
    image: "/images/schools/junior.webp",
    icon: Shield,
    highlights: [
      "Local and Cambridge safeguarding standards",
      "Safety, security, health & hygiene commitment",
      "Protection integrated across school life",
    ],
  },
  {
    href: "/about/playpen-alumni-association",
    label: "Playpen Alumni Association",
    description: "Our graduate community",
    excerpt: alumniIntro[0],
    image: "/images/schools/elementary.webp",
    icon: GraduationCap,
    highlights: [
      "Reconnect with batch mates worldwide",
      "Celebrate shared Playpen memories",
      "Online registration for alumni",
    ],
  },
  {
    href: "/about/career-at-playpen",
    label: "Career at Playpen",
    description: "Join our team",
    excerpt: careerIntro,
    image: "/images/schools/middle.webp",
    icon: Briefcase,
    highlights: [
      "Long-serving, dedicated faculty community",
      "Teaching, pastoral & administrative roles",
      "Apply online for open vacancies",
    ],
  },
];

export { schoolDivisions, schoolManagement };
