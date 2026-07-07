export const studentLifeNavItems = [
  {
    label: "Overview",
    href: "/student-life",
    description: "Life beyond the classroom",
    heroImage: "/images/marquee/eca.jpg",
  },
  {
    label: "Annual Sports",
    href: "/student-life/annual-sports",
    description: "Athletics and school sports day",
    heroImage: "/images/schools/middle.jpg",
  },
  {
    label: "Extra Curricular Activities",
    href: "/student-life/extra-curricular-activities",
    description: "Clubs, hobbies, and enrichment",
    heroImage: "/images/marquee/eca.jpg",
  },
  {
    label: "Community Service",
    href: "/student-life/community-service",
    description: "Giving back to society",
    heroImage: "/images/marquee/alumni.jpg",
  },
  {
    label: "Cultural Programme",
    href: "/student-life/cultural-programme",
    description: "Arts, music, and celebrations",
    heroImage: "/images/marquee/achievements.jpg",
  },
  {
    label: "Science Fair",
    href: "/student-life/science-fair",
    description: "Innovation and discovery",
    heroImage: "/images/schools/senior.jpg",
  },
  {
    label: "Online Facility & Payment",
    href: "/student-life/online-facility-and-payment",
    description: "Digital services for families",
    heroImage: "/images/marquee/student-services.jpg",
  },
  {
    label: "Workshop for Students",
    href: "/student-life/workshop-for-students",
    description: "Skills and career guidance",
    heroImage: "/images/marquee/faculty.jpg",
  },
  {
    label: "Health Center",
    href: "/student-life/health-center",
    description: "On-campus medical support",
    heroImage: "/images/schools/elementary.jpg",
  },
  {
    label: "School Bookshop",
    href: "/student-life/school-bookshop",
    description: "Books and learning materials",
    heroImage: "/images/schools/junior.jpg",
  },
  {
    label: "School Transportation",
    href: "/student-life/school-transportation",
    description: "Safe travel to and from school",
    heroImage: "/images/schools/middle.jpg",
  },
] as const;

export type StudentLifeNavHref = (typeof studentLifeNavItems)[number]["href"];

export const studentLifeHeroImages = Object.fromEntries(
  studentLifeNavItems.map((item) => [item.href, item.heroImage])
) as Record<StudentLifeNavHref, string>;
