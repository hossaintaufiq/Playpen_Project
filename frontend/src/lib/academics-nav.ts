export const academicsNavItems = [
  {
    label: "Overview",
    href: "/academics",
    description: "Cambridge curriculum at every level",
    heroImage: "/images/schools/elementary.webp",
  },
  {
    label: "School Structure",
    href: "/academics/school-structure",
    description: "Divisions from playgroup to A-Level",
    heroImage: "/images/schools/junior.webp",
  },
  {
    label: "Library",
    href: "/academics/library",
    description: "Resources for reading and research",
    heroImage: "/school-images/academics/library/library-1.webp",
  },
  {
    label: "Laboratories",
    href: "/academics/laboratories",
    description: "Science and ICT facilities",
    heroImage: "/school-images/academics/laboratories/labs-1.webp",
  },
  {
    label: "Student Support",
    href: "/academics/student-support",
    description: "Guidance for every learner",
    heroImage: "/school-images/academics/student-support/support-1.webp",
  },
  {
    label: "Examinations",
    href: "/academics/examinations",
    description: "Assessment and Cambridge exams",
    heroImage: "/images/schools/senior.webp",
  },
  {
    label: "Student Achievements",
    href: "/academics/student-achievements",
    description: "Excellence across the school",
    heroImage:
      "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/590052840_1335298195064957_3588772396145097072_n.webp",
  },
  {
    label: "Disciplinary Committee",
    href: "/academics/disciplinary-committee",
    description: "Fair standards and conduct",
    heroImage: "/school-images/academics/disciplinary-committee/discipline-1.webp",
  },
  {
    label: "Identity Card",
    href: "/academics/identity-card",
    description: "Pupil identification policy",
    heroImage: "/school-images/academics/identity-card/idcard-1.webp",
  },
  {
    label: "Counsellor",
    href: "/academics/counsellor",
    description: "Pastoral and wellbeing support",
    heroImage: "/school-images/academics/counsellor/counsellor-1.webp",
  },
] as const;

export type AcademicsNavHref = (typeof academicsNavItems)[number]["href"];
