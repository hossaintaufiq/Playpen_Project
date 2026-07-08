import {
  Bus,
  CreditCard,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Music,
  Palette,
  Presentation,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { annualSportsFacilities, annualSportsIntro } from "@/lib/annual-sports";
import { communityServiceIntro } from "@/lib/community-service";
import { culturalProgrammeMission, yearlyActivityCategories } from "@/lib/cultural-programme";
import { ecaActivities, ecaIntro } from "@/lib/extra-curricular-activities";
import { healthCenterIntro } from "@/lib/health-center";
import {
  mandatoryOnlinePayment,
  onlineFacilityIntro,
  parentPortalFeatures,
} from "@/lib/online-facility-payment";
import { bookshopIntro, bookshopHours } from "@/lib/school-bookshop";
import { transportationIntro } from "@/lib/school-transportation";
import { workshopIntro, workshopTopics } from "@/lib/workshop-for-students";

export const studentLifeMission = {
  eyebrow: "Beyond the Classroom",
  title: "Where learning meets sport, culture, service, and campus life",
  description:
    "At Playpen, education is not confined to textbooks. Pupils compete on the field, perform on stage, serve their communities, explore science, and enjoy the support of health care, bookshop, transport, and digital services — all on one vibrant campus.",
  quote:
    "From Sports Day to Pohela Boishakh, from Duke of Edinburgh to community outreach — Playpen students grow as whole people, not just exam candidates.",
};

export const studentLifeStats = [
  { value: String(annualSportsFacilities.length), label: "Sports & games" },
  { value: `${ecaActivities.length}+`, label: "Club activities" },
  { value: "12", label: "Yearly celebrations" },
  { value: "10", label: "Life & services" },
] as const;

export const studentLifePillars = [
  {
    title: "Play & Compete",
    text: "Indoor and outdoor sports, inter-school tournaments, and boys' and girls' teams across every format.",
  },
  {
    title: "Create & Celebrate",
    text: "ECA, cultural programmes, and yearly events that honour Bangladeshi heritage and student talent.",
  },
  {
    title: "Serve & Lead",
    text: "Community service, workshops, MUN, and global programmes that build character and confidence.",
  },
  {
    title: "Supported Daily",
    text: "Health centre, bookshop, school buses, and online parent portal — practical care for every family.",
  },
] as const;

export const studentLifeMoments = [
  {
    title: "Sports & Teams",
    text: "Annual sports, inter-class and inter-school tournaments, and school teams in football, basketball, and more.",
  },
  {
    title: "Culture & Arts",
    text: "Annual cultural programme, Milad, Pohela Boishakh, and performances that unite students and families.",
  },
  {
    title: "Discovery & Growth",
    text: "Science Fair, workshops on university pathways, MUN, and Duke of Edinburgh programmes.",
  },
  {
    title: "Care & Convenience",
    text: "On-campus health care, bookshop, supervised bus service, and online fees and parent portal access.",
  },
] as const;

const scienceFairExcerpt =
  "The Playpen Science Fair showcases pupil projects in science, technology, and engineering — encouraging critical thinking, experimentation, and presentation skills.";

export type StudentLifeSectionPreview = {
  href: string;
  label: string;
  description: string;
  excerpt: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
  featured?: boolean;
};

export const studentLifeSectionPreviews: StudentLifeSectionPreview[] = [
  {
    href: "/student-life/extra-curricular-activities",
    label: "Extra Curricular Activities",
    description: "Clubs, hobbies, and enrichment",
    excerpt: ecaIntro,
    image: "/images/marquee/eca.jpg",
    icon: Palette,
    highlights: ecaActivities.slice(0, 4),
    featured: true,
  },
  {
    href: "/student-life/annual-sports",
    label: "Annual Sports",
    description: "Athletics and school sports day",
    excerpt: annualSportsIntro,
    image: "/images/schools/middle.jpg",
    icon: Trophy,
    highlights: [...annualSportsFacilities.slice(0, 4), "Inter School & Inter-Class tournaments"],
  },
  {
    href: "/student-life/cultural-programme",
    label: "Cultural Programme",
    description: "Arts, music, and celebrations",
    excerpt: culturalProgrammeMission,
    image: "/images/marquee/achievements.jpg",
    icon: Music,
    highlights: [
      "Annual Cultural Programme & Milad",
      "Pohela Boishakh & Victory Day",
      "Performing arts and cultural heritage",
    ],
  },
  {
    href: "/student-life/community-service",
    label: "Community Service",
    description: "Giving back to society",
    excerpt: communityServiceIntro,
    image: "/images/marquee/alumni.jpg",
    icon: HeartHandshake,
    highlights: [
      "Helping the poor and needy",
      "Winter clothing drives",
      "Volunteering and building homes for low-income families",
    ],
  },
  {
    href: "/student-life/science-fair",
    label: "Science Fair",
    description: "Innovation and discovery",
    excerpt: scienceFairExcerpt,
    image: "/images/schools/senior.jpg",
    icon: FlaskConical,
    highlights: [
      "Science, technology, and engineering projects",
      "Experiments, models, and presentations",
      "Recognition for creativity and methodology",
    ],
  },
  {
    href: "/student-life/workshop-for-students",
    label: "Workshop for Students",
    description: "Skills and career guidance",
    excerpt: workshopIntro,
    image: "/images/marquee/faculty.jpg",
    icon: Presentation,
    highlights: workshopTopics.slice(0, 3).map((topic) => topic.title),
  },
  {
    href: "/student-life/online-facility-and-payment",
    label: "Online Facility & Payment",
    description: "Digital services for families",
    excerpt: onlineFacilityIntro,
    image: "/images/marquee/student-services.jpg",
    icon: CreditCard,
    highlights: [parentPortalFeatures[0], parentPortalFeatures[4], mandatoryOnlinePayment],
  },
  {
    href: "/student-life/health-center",
    label: "Health Center",
    description: "On-campus medical support",
    excerpt: healthCenterIntro,
    image: "/images/schools/elementary.jpg",
    icon: HeartPulse,
    highlights: [
      "Care for minor health needs during school hours",
      "Sick room facilities on campus",
      "Parents contacted for serious cases",
    ],
  },
  {
    href: "/student-life/school-bookshop",
    label: "School Bookshop",
    description: "Books and learning materials",
    excerpt: bookshopIntro,
    image: "/images/schools/junior.jpg",
    icon: ShoppingBag,
    highlights: [
      "Textbooks and exercise copies on campus",
      `Open ${bookshopHours.time}`,
      "Yearly books collected at session start",
    ],
  },
  {
    href: "/student-life/school-transportation",
    label: "School Transportation",
    description: "Safe travel to and from school",
    excerpt: transportationIntro,
    image: "/images/schools/middle.jpg",
    icon: Bus,
    highlights: [
      "Own school bus service since March 2014",
      "Apply at the Administrative Office",
      "Supervised travel with clear bus guidelines",
    ],
  },
];

export const studentLifeSummary = [
  "Annual Sports — football, basketball, athletics, chess, and inter-school tournaments",
  "Extra Curricular Activities — arts, music, drama, debate, olympiads, and Duke of Edinburgh",
  "Community Service — outreach, volunteering, and support for those in need",
  "Cultural Programme — performing arts and yearly celebrations across the school calendar",
  "Science Fair — pupil-led projects in science, technology, and engineering",
  "Workshops — digital citizenship, university guidance, MUN, and global programmes",
  "Online Facility & Payment — parent portal and mandatory online school fees",
  "Health Center — on-campus care for minor health needs during the school day",
  "School Bookshop — textbooks and exercise copies, 8:30 AM – 1:00 PM",
  "School Transportation — supervised bus service for safe daily travel",
] as const;

export { yearlyActivityCategories };
