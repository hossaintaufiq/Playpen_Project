import type { StudentAchievement } from "@/lib/cms/types";

function achievement(
  index: number,
  data: Omit<StudentAchievement, "id" | "published" | "order" | "createdAt">
): StudentAchievement {
  return {
    id: `achievement-${index + 1}`,
    published: true,
    order: index + 1,
    createdAt: data.year ?? data.date ?? "2024-01-01",
    ...data,
  };
}

export const defaultStudentAchievements: StudentAchievement[] = [
  achievement(0, {
    title: "Outstanding Cambridge Learner Awards",
    organizer: "Cambridge Assessment International Education & British Council",
    year: "2025",
    venue: "Dhaka, Bangladesh",
    category: "academic",
    image: "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/590052840_1335298195064957_3588772396145097072_n.webp",
    results: [
      "Top in Country — Cambridge International A Level Mathematics",
      "Top in Country — Cambridge IGCSE / O Level Computer Science",
      "High Achievement Awards across Multiple Science & Humanities Subjects",
      "Official Recognition Ceremony by British Council Bangladesh",
    ],
  }),
  achievement(1, {
    title: "Country Winner — British Council 'Your World' Video Competition",
    organizer: "The British Council Global Network",
    year: "2024–2025",
    category: "arts",
    image: "/school-images/academics/student-achievements/Country Winner - The British Council “Your World Video Competition 2024–2025/624685943_1383542003573909_8748851750303772648_n.webp",
    results: [
      "National Country Winner — Representing Bangladesh Globally",
      "Playpen Delegation — Outstanding Filmmaking, Research & Storytelling",
      "Special Commendation for Climate & Community Impact Focus",
    ],
  }),
  achievement(2, {
    title: "1st Space Exploration Olympiad",
    organizer: "Bangladesh Innovation Forum",
    venue: "AIUB",
    date: "27 April 2024",
    year: "2024",
    category: "science",
    image: "/school-images/site-wide/marquee/achievements.webp",
    results: [
      "Quazi Jorjis Nivaan – 2nd Runner Up (Age-14 Category)",
      "Adyan Omair Islam – 2nd Runner Up (Age-12 Category)",
      "Ayesha Ahmed – Participant (Age-11 Category)",
    ],
  }),
  achievement(3, {
    title: "Math and Tech Fest Championship",
    venue: "Sunnydale School",
    date: "January, 2024",
    year: "2024",
    category: "science",
    image: "/school-images/about/our-campus/DSC01235.webp",
    results: [
      "1st Position in Crypto Craft Chronicles – Razika Khan, Insiya Ali, Zadeed Anis Khan, Zain Aziz (Class VIII)",
      "1st Position in Crisis Computerized & 2nd Position in Crypto Craft – Rawfoon Taswin Khan & Mujtoba Siraj (Class XII)",
      "1st Position in Rube Goldberg & Best Campus Ambassador Award – Mujtoba Siraj (Class XII)",
      "3rd Position in Mechano Craft (Junior Category) – Lutfur Rahman, Tahamid Islam, Abdur Noor, Muhsee Uddin (Class IX)",
    ],
  }),
  achievement(4, {
    title: "13th National Bangla Olympiad",
    venue: "International Hope School",
    date: "February 24, 2024",
    year: "2024",
    category: "arts",
    image: "/school-images/academics/student-achievements/Poem Recitation Competition – KG II/DSC05045.webp",
    results: [
      "1st Position in Essay Writing – Fahmiah Fahreen (Class VII)",
      "1st Position in Essay Writing – Tanika Sameer (Class VIII)",
      "1st Position in Group Dance – Nashita Rahman, Sarina Hamid, Swastika Dutta, Faraza Nazmin, Zunairah Safree",
      "2nd Position in Singing – Samah Fathiyah (Class V)",
      "3rd Position in Poem Recitation – Riddho Hasan (Class V)",
    ],
  }),
  achievement(5, {
    title: "National & Regional Physics Olympiad",
    venue: "Independent University Bangladesh (IUB)",
    date: "February 9, 2024",
    year: "2024",
    category: "science",
    image: "/school-images/academics/student-achievements/Outstanding Cambridge Learner Awards 2025/592646911_1335298515064925_3934264704535732687_n.webp",
    results: [
      "Category A – Adyan Omair Islam, Class VI – 6th Position",
      "Category B – Aung Naing Thun, Class VI – 8th Position",
    ],
  }),
  achievement(6, {
    title: "National Debate Championship & MUN Delegations",
    venue: "Dhaka Inter-School Circuit",
    date: "2024",
    year: "2024",
    category: "academic",
    image: "/school-images/academics/student-achievements/Debate Competition/DSC02538.webp",
    results: [
      "Champions — Inter-School Parliamentary Debate Trophy",
      "Best Speaker Award — Senior Division Debaters",
      "Outstanding Diplomacy Delegations at Premier Youth Summits",
    ],
  }),
  achievement(7, {
    title: "Scholastica & Hurdco Inter-School Football Tournaments",
    date: "2023–2024",
    year: "2024",
    participatedBy: "Under-15 & Under-17 Boys Football Teams",
    category: "sports",
    image: "/school-images/student-life/annual-sports/sports-8.webp",
    results: [
      "Runners Up Trophy — Hurdco Inter-School Championship",
      "Best Player Award – Azmayin Aziz Andalib (Class VIII)",
      "Best Defender Award – M Jawad Ramin Khan (Class VIII)",
      "Best Goalkeeper – Shuvro Shaha",
    ],
  }),
  achievement(8, {
    title: "Inter-House & Regional Basketball Championships",
    venue: "Playpen Sports Arena",
    date: "2023–2024",
    year: "2024",
    category: "sports",
    image: "/school-images/student-life/annual-sports/sports-4.webp",
    results: [
      "Boys Champions — House Earth Boys",
      "Girls Champions — House Jupiter Girls",
      "Best Player Boys – Khandakar Faiyaz Hossain (Class XI)",
      "Best Player Girls – Aamaal Ayesha Hamid (Class X)",
    ],
  }),
  achievement(9, {
    title: "Prefect Council & Student Leadership Investiture",
    venue: "Playpen Main Auditorium",
    date: "2024–2025",
    year: "2025",
    category: "academic",
    image: "/school-images/academics/student-achievements/Prefect Badge Giving Ceremony 2025/1.webp",
    results: [
      "Official Badge Giving & Leadership Investiture Ceremony",
      "Student Council Prefect Body sworn in for Academic Session",
      "Community Service & Green Campus Leadership Initiatives",
    ],
  }),
];
