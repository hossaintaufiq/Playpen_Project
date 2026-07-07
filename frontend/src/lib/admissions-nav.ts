export const admissionsNavItems = [
  {
    label: "Overview",
    href: "/admissions",
    description: "Join the Playpen family",
    heroImage: "/images/schools/elementary.jpg",
  },
  {
    label: "Admission Procedure",
    href: "/admissions/admission-procedure",
    description: "How to apply step by step",
    heroImage: "/images/marquee/student-services.jpg",
  },
  {
    label: "School Uniform",
    href: "/admissions/school-uniform",
    description: "Dress code and uniform policy",
    heroImage: "/images/schools/junior.jpg",
  },
  {
    label: "Code of Conduct",
    href: "/admissions/code-of-conduct",
    description: "Standards for every pupil",
    heroImage: "/images/marquee/faculty.jpg",
  },
] as const;

export type AdmissionsNavHref = (typeof admissionsNavItems)[number]["href"];

export const admissionsHeroImages = Object.fromEntries(
  admissionsNavItems.map((item) => [item.href, item.heroImage])
) as Record<AdmissionsNavHref, string>;
