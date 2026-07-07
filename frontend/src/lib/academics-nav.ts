export const academicsNavItems = [
  {
    label: "Overview",
    href: "/academics",
    description: "Cambridge curriculum at every level",
    heroImage: "/images/schools/elementary.jpg",
  },
  {
    label: "School Structure",
    href: "/academics/school-structure",
    description: "Divisions from playgroup to A-Level",
    heroImage: "/images/schools/junior.jpg",
  },
  {
    label: "Library",
    href: "/academics/library",
    description: "Resources for reading and research",
    heroImage: "/images/schools/middle.jpg",
  },
  {
    label: "Laboratories",
    href: "/academics/laboratories",
    description: "Science and ICT facilities",
    heroImage: "/images/marquee/eca.jpg",
  },
  {
    label: "Student Support",
    href: "/academics/student-support",
    description: "Guidance for every learner",
    heroImage: "/images/marquee/student-services.jpg",
  },
  {
    label: "Examinations",
    href: "/academics/examinations",
    description: "Assessment and Cambridge exams",
    heroImage: "/images/schools/senior.jpg",
  },
  {
    label: "Student Achievements",
    href: "/academics/student-achievements",
    description: "Excellence across the school",
    heroImage: "/images/marquee/achievements.jpg",
  },
  {
    label: "Disciplinary Committee",
    href: "/academics/disciplinary-committee",
    description: "Fair standards and conduct",
    heroImage: "/images/marquee/faculty.jpg",
  },
  {
    label: "Identity Card",
    href: "/academics/identity-card",
    description: "Pupil identification policy",
    heroImage: "/images/schools/elementary.jpg",
  },
  {
    label: "Counsellor",
    href: "/academics/counsellor",
    description: "Pastoral and wellbeing support",
    heroImage: "/images/marquee/alumni.jpg",
  },
] as const;

export type AcademicsNavHref = (typeof academicsNavItems)[number]["href"];
