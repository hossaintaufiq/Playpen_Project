import type { StudentAchievement } from "@/lib/cms/types";

const achievementImages = [
  "/images/marquee/achievements.jpg",
  "/images/marquee/eca.jpg",
  "/images/marquee/faculty.jpg",
  "/images/marquee/alumni.jpg",
  "/images/marquee/student-services.jpg",
  "/images/schools/senior.jpg",
  "/images/schools/middle.jpg",
  "/images/schools/junior.jpg",
] as const;

function achievement(
  index: number,
  data: Omit<StudentAchievement, "id" | "image" | "published" | "order" | "createdAt">
): StudentAchievement {
  return {
    id: `achievement-${index + 1}`,
    image: achievementImages[index % achievementImages.length],
    published: true,
    order: index + 1,
    createdAt: data.year ?? data.date ?? "2024-01-01",
    ...data,
  };
}

export const defaultStudentAchievements: StudentAchievement[] = [
  achievement(0, {
    title: "International Spell Bee Competition",
    organizer: "International Spell Bee Foundation, Powered By GEMA",
    year: "2023",
    category: "academic",
    results: [
      "Areebah Saifee Siddiqui, Class I – Appreciation Medal",
      "Yasarah Dewan, Class I – Appreciation Medal",
      "Raj Lawrence, Class VI – Participation Certificate",
      "Nailah Haque, Class V – Participation Certificate",
      "Mohammad Saifullah, Class I – Participation Certificate",
      "Naushaba Nusha, Class V – Participation Certificate",
    ],
  }),
  achievement(1, {
    title: "1st Space Exploration Olympiad",
    organizer: "Bangladesh Innovation Forum",
    venue: "AIUB",
    date: "27 April 2024",
    category: "science",
    results: [
      "Quazi Jorjis Nivaan – 2nd Runner Up (Age-14 Category)",
      "Adyan Omair Islam – 2nd Runner Up (Age-12 Category)",
      "Ayesha Ahmed – Participant (Age-11 Category)",
    ],
  }),
  achievement(2, {
    title: "16th National Abacus and Mental Arithmetic Competition 2024",
    venue: "International Convention City Bashundhara (ICCB)",
    date: "23rd February, 2024",
    category: "academic",
    results: ["Sameeha Binte Firoz – 3rd Runner-up"],
  }),
  achievement(3, {
    title: "Math and Tech Fest",
    venue: "Sunnydale School",
    date: "January, 2024",
    category: "science",
    results: [
      "1st Position in Crypto Craft Chronicles – Razika Khan, Insiya Ali, Zadeed Anis Khan, Zain Aziz (Class VIII)",
      "3rd Position in Mechano Craft (Junior Category) – Lutfur Rahman, Tahamid Islam Sheikh, Abdur Noor Mahi, Muhsee Uddin Shafee (Class IX)",
      "2nd Position in Crypto Craft Chronicles & 1st Position in Crisis Computerized (Senior Category) – Rawfoon Taswin Khan and Mujtoba Siraj (Class XII)",
      "1st Position in Rube Goldberg (Senior Category) & Best Campus Ambassador Award – Mujtoba Siraj (Class XII)",
    ],
  }),
  achievement(4, {
    title: "13th Bangla Olympiad",
    venue: "International Hope School",
    date: "February 24, 2024",
    category: "arts",
    results: [
      "Samah Fathiyah, Class V – 2nd Position for Signing",
      "Riddho Hasan, Class V – 3rd Position for Poem Recitation",
      "Fahmiah Fahreen, Class VII – 1st Position in Essay Writing",
      "Tanika Sameer, Class VIII – 3rd Position in Essay Writing",
      "1st Position in Group Dance – Nashita Rahman, Sarina Hamid, Swastika Dutta, Faraza Nazmin, Zunairah Safree",
    ],
  }),
  achievement(5, {
    title: "Regional Physics Olympiad",
    venue: "Independent University",
    date: "February 9, 2024",
    category: "science",
    results: [
      "Category A – Adyan Omair Islam, Class VI – 6th Position",
      "Category B – Aung Naing Thun, Class VI – 8th Position",
    ],
  }),
  achievement(6, {
    title: "Bakeman's 3rd International Language League",
    organizer: "Topic: Folk Art and Handicrafts of Bangladesh",
    venue: "North South University",
    date: "February 24, 2024",
    participatedBy: "Students of Class IX",
    category: "academic",
    results: [
      "Runners Up – Arnavaz Hayat Chowdhury",
      "Runners Up – Zahiyah Afroz Mojumder",
      "Runners Up – Umaiza Nazia Zaman",
    ],
  }),
  achievement(7, {
    title: "Scholastica Inter School Football Tournament",
    date: "January 19 & 20, 2024",
    participatedBy: "Under-15 Boys Football Team",
    category: "sports",
    results: [
      "Best Player – Azmayin Aziz Andalib (Class VIII)",
      "Best Defender – M Jawad Ramin Khan (Class VIII)",
    ],
  }),
  achievement(8, {
    title: "Hurdco Inter School Football Tournament",
    venue: "Hurdco International School",
    date: "17th – 19th August, 2023",
    participatedBy: "Under-17 Boys Football Team",
    category: "sports",
    results: ["Runners Up", "Best Goal Keeper – Shuvro Shaha"],
  }),
  achievement(9, {
    title: "Inter House Basketball Tournament",
    venue: "Playpen",
    date: "August 26, 2023",
    participatedBy: "Class VIII – XII Basketball Boys and Girls Team",
    category: "sports",
    results: [
      "Boys Champion – House Earth Boys",
      "Girls Champion – House Jupiter Girls",
      "Best Player Boys – Khandakar Faiyaz Hossain, Class XI",
      "Best Player Girls – Aamaal Ayesha Hamid, Class X",
    ],
  }),
  achievement(10, {
    title: "International Best Practices Sharing Session — Eco-Schools Programme",
    organizer: "Probha Aurora",
    date: "October 14, 2023",
    participatedBy: "Class IX Students",
    category: "academic",
    results: [
      "Zareefa Mariha Habib, Labiba Andaleeb & Rahmin Bari Risana – 1st Runner Up for Best Presentation",
      "Zareefa Mariha Habib, Labiba Andaleeb & Rahmin Bari Risana – 2nd Runner Up for Best Slides",
    ],
  }),
  achievement(11, {
    title: "Playpen Inter Class Football Tournament",
    date: "5–7 October 2023",
    category: "sports",
    results: [
      "Champion Boys (U-19)",
      "Champion Girls",
      "Runner Up Boys (U-15)",
      "Best Player – Rishad Uzzaman (U-19)",
      "Best Goal Keeper – Zawad Islam (U-19)",
      "Best Player – Towhid Rahman (U-15)",
      "Best Goal Keeper (Girls) – Zunaira Zakir",
      "Best Player (Girls) – Zainab Rabbani Chowdhuri",
    ],
  }),
];
