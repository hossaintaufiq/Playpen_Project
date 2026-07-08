import {
  AirVent,
  BookOpen,
  Building2,
  Bus,
  Camera,
  Coffee,
  Droplets,
  Dumbbell,
  Flame,
  FlaskConical,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Library,
  Monitor,
  Phone,
  Shield,
  ShoppingBag,
  Trees,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const campusIntro =
  "The school operates classes from Play Group to Class XII within a purpose-built campus designed for academic excellence, safety, and student wellbeing.";

export const schoolDivisions = [
  {
    name: "Elementary School",
    grades: "Playgroup – KG II",
    image: "/images/schools/elementary.jpg",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    image: "/images/schools/junior.jpg",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    image: "/images/schools/middle.jpg",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII",
    image: "/images/schools/senior.jpg",
  },
] as const;

export const leadershipNote = {
  title: "Academic Leadership & Supervision",
  paragraphs: [
    "Vice Principals and Teacher-In-Charges are appointed to ensure that classes assigned to faculty members function smoothly and effectively. They supervise academics and relevant administrative matters.",
    "The Vice Principals work with the coordination and consent of the Principal, maintaining high standards across every division of the school.",
  ],
};

export const studentCareHighlights = [
  {
    title: "Uninterrupted Learning",
    text: "Generator-supported classrooms maintain a comfortable atmosphere for students during electricity failures.",
    icon: Zap,
  },
  {
    title: "Healthy Hydration",
    text: "Mineral drinking water is provided on each floor of the building.",
    icon: Droplets,
  },
  {
    title: "Dedicated Teaching Support",
    text: "Junior classes have a Class Teacher and Assistant Teacher for individual attention. Senior classes are supported by respective class and subject teachers.",
    icon: Users,
  },
] as const;

export const campusAddress = {
  title: "Campus Location",
  description:
    "The new campus of Playpen is our custom-built facility and compound, located at House # 545/A, Road # 19, Block – J, Bashundhara Residential Area, Dhaka.",
};

export type CampusFacility = {
  label: string;
  icon: LucideIcon;
};

export const campusFacilityGroups: Array<{ title: string; items: CampusFacility[] }> = [
  {
    title: "Campus & Learning Spaces",
    items: [
      { label: "10-storey building with collaborative areas", icon: Building2 },
      { label: "Air-conditioned classrooms for academics & ECA", icon: AirVent },
      { label: "Modernized library", icon: Library },
      { label: "Fully equipped science & IT laboratories", icon: FlaskConical },
      { label: "Teachers' rooms & common rooms", icon: GraduationCap },
      { label: "School bookshop", icon: ShoppingBag },
      { label: "ECA rooms", icon: Monitor },
    ],
  },
  {
    title: "Student Life & Activities",
    items: [
      { label: "Large playground", icon: Trees },
      { label: "Basketball court", icon: Dumbbell },
      { label: "Indoor games facilities", icon: Gamepad2 },
      { label: "Students' gallery & spacious multi-purpose hall", icon: Camera },
      { label: "Cafeteria", icon: Coffee },
      { label: "Sick room facilities", icon: HeartPulse },
      { label: "Transport facility", icon: Bus },
    ],
  },
  {
    title: "Safety, Security & Infrastructure",
    items: [
      { label: "Separate boys' & girls' toilets on every floor", icon: Users },
      { label: "CCTV monitoring across the campus", icon: Camera },
      { label: "PABX communication system", icon: Phone },
      { label: "Fire extinguishers on each floor", icon: Flame },
      { label: "Fresh water filtration", icon: Droplets },
      { label: "Full-time security personnel", icon: Shield },
      { label: "Advanced technology & equipment", icon: Monitor },
    ],
  },
];

export const facultyNote =
  "A faculty of local and foreign qualified, experienced, and caring teachers — supported by a committed Board of Management — guides pupils at every stage.";

export const futureExpansion = {
  title: "Building for the Future",
  text: "The second phase of the Playpen school building is in progress. With a growing student community, the management is planning additional laboratories, a larger cafeteria, an ultra-modern library, expanded students' gallery space, more indoor games, classrooms, and enhanced facilities in the near future.",
};
