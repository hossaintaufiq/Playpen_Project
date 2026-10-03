export const aboutNavItems = [
  {
    label: "Overview",
    href: "/about",
    description: "Our story and mission",
    heroImage: "/images/schools/elementary.webp",
  },
  {
    label: "Our Campus",
    href: "/about/our-campus",
    description: "Facilities and learning environment",
    heroImage: "/images/schools/middle.webp",
  },
  {
    label: "School Administration",
    href: "/about/school-administration",
    description: "Leadership and governance",
    heroImage: "/images/schools/senior.webp",
  },
  {
    label: "Child Protection Policy",
    href: "/about/child-protection-policy",
    description: "Safeguarding every pupil",
    heroImage: "/images/schools/junior.webp",
  },
  {
    label: "Playpen Alumni Association",
    href: "/about/playpen-alumni-association",
    description: "Our graduate community",
    heroImage: "/images/schools/elementary.webp",
  },
  {
    label: "Career at Playpen",
    href: "/about/career-at-playpen",
    description: "Join our team",
    heroImage: "/images/schools/middle.webp",
  },
] as const;

export type AboutNavHref = (typeof aboutNavItems)[number]["href"];
