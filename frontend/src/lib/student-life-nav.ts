export const studentLifeNavItems = [
  {
    label: "Overview",
    href: "/student-life",
    description: "Life beyond the classroom",
    heroImage: "/school-images/student-life/overview/overview-1.webp",
  },
  {
    label: "Annual Sports",
    href: "/student-life/annual-sports",
    description: "Athletics and school sports day",
    heroImage:
      "/school-images/student-life/annual-sports/Annual Sports Day 2026  IV - IX/622733392_1384304576830985_3789226675376536432_n.webp",
  },
  {
    label: "Extra Curricular Activities",
    href: "/student-life/extra-curricular-activities",
    description: "Clubs, hobbies, and enrichment",
    heroImage: "/school-images/student-life/extra-curricular-activities/Music/DSC05743.webp",
  },
  {
    label: "Community Service",
    href: "/student-life/community-service",
    description: "Giving back to society",
    heroImage: "/school-images/student-life/community-service/community-1.webp",
  },
  {
    label: "Cultural Programme",
    href: "/student-life/cultural-programme",
    description: "Arts, music, and celebrations",
    heroImage:
      "/school-images/student-life/cultural-programme/Annual Cultural Programme 2025/PXL_20251204_031051597.webp",
  },
  {
    label: "Science Fair",
    href: "/student-life/science-fair",
    description: "Innovation and discovery",
    // No matching Science Fair folder/photos provided yet
    heroImage: "",
  },
  {
    label: "Online Facility & Payment",
    href: "/student-life/online-facility-and-payment",
    description: "Digital services for families",
    // No matching folder photos provided yet
    heroImage: "",
  },
  {
    label: "Workshop for Students",
    href: "/student-life/workshop-for-students",
    description: "Skills and career guidance",
    heroImage: "/school-images/student-life/workshop-for-students/workshop-1.webp",
  },
  {
    label: "Health Center",
    href: "/student-life/health-center",
    description: "On-campus medical support",
    heroImage:
      "/school-images/student-life/health-center/Typhoid Vaccination Programme/DSC02503.webp",
  },
  {
    label: "School Bookshop",
    href: "/student-life/school-bookshop",
    description: "Books and learning materials",
    // No matching folder photos provided yet
    heroImage: "",
  },
  {
    label: "School Transportation",
    href: "/student-life/school-transportation",
    description: "Safe travel to and from school",
    // No matching folder photos provided yet
    heroImage: "",
  },
] as const;

export type StudentLifeNavHref = (typeof studentLifeNavItems)[number]["href"];

export const studentLifeHeroImages = Object.fromEntries(
  studentLifeNavItems.map((item) => [item.href, item.heroImage])
) as Record<StudentLifeNavHref, string>;
