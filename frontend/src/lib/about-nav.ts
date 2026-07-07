export const aboutNavItems = [
  {
    label: "Overview",
    href: "/about",
    description: "Our story and mission",
    heroImage: "/images/schools/elementary.jpg",
  },
  {
    label: "Our Campus",
    href: "/about/our-campus",
    description: "Facilities and learning environment",
    heroImage: "/images/schools/middle.jpg",
  },
  {
    label: "School Administration",
    href: "/about/school-administration",
    description: "Leadership and governance",
    heroImage: "/images/marquee/faculty.jpg",
  },
  {
    label: "Child Protection Policy",
    href: "/about/child-protection-policy",
    description: "Safeguarding every pupil",
    heroImage: "/images/marquee/student-services.jpg",
  },
  {
    label: "Playpen Alumni Association",
    href: "/about/playpen-alumni-association",
    description: "Our graduate community",
    heroImage: "/images/marquee/alumni.jpg",
  },
  {
    label: "Career at Playpen",
    href: "/about/career-at-playpen",
    description: "Join our team",
    heroImage: "/images/marquee/achievements.jpg",
  },
] as const;

export type AboutNavHref = (typeof aboutNavItems)[number]["href"];
