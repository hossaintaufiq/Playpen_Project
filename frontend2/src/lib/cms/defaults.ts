import { galleryEvents } from "@/lib/gallery-data";
import { vacancyAreas } from "@/lib/career-at-playpen";
import { defaultStudentAchievements } from "@/lib/student-achievements-defaults";
import type { CMSData } from "./types";

export const defaultCMSData: CMSData = {
  heroSlides: [
    { id: "hero-1", src: "/images/schools/elementary.jpg", alt: "Playpen elementary students learning", order: 1, active: true },
    { id: "hero-2", src: "/images/schools/junior.jpg", alt: "Playpen junior school campus", order: 2, active: true },
    { id: "hero-3", src: "/images/schools/middle.jpg", alt: "Playpen middle school activities", order: 3, active: true },
    { id: "hero-4", src: "/images/schools/senior.jpg", alt: "Playpen senior school students", order: 4, active: true },
    { id: "hero-5", src: "/images/marquee/eca.jpg", alt: "Playpen extra curricular activities", order: 5, active: true },
  ],
  newsTicker: {
    enabled: true,
    academicYear: "JULY 2025 – JUNE 2026",
    level: "A' LEVEL",
    phones: ["+8801755693623", "+8801755515885", "+8809678434241"],
    hours: "9.00 AM–1.00 PM",
    formsNote: "FORMS ARE AVAILABLE IN THE ADMIN OFFICE AND WEBSITE.",
  },
  notices: [
    {
      id: "notice-1",
      title: "First Semester Examination",
      description: "Examination schedules and guidelines for the first semester are now available for all divisions.",
      content:
        "The first semester examination timetable has been published for all divisions. Students should review subject-wise schedules, reporting times, and examination rules shared by their class teachers.\n\nFor full examination policy and promotion requirements, please visit the Academics section.",
      href: "/academics/examinations",
      published: true,
      createdAt: "2024-08-01",
    },
    {
      id: "notice-2",
      title: "About Mobile Phones",
      description: "Please review the updated school policy on mobile phone use on campus and during school hours.",
      content:
        "Playpen maintains a strict policy on mobile phones and prohibited devices to protect learning and student wellbeing. Phones must not be used during school hours unless authorised by staff.\n\nParents are requested to read the full Code of Conduct and ensure children follow school rules.",
      href: "/admissions/code-of-conduct",
      published: true,
      createdAt: "2024-08-15",
    },
  ],
  schoolEvents: [
    { id: "event-1", title: "Parents-Teachers Meeting-1", month: "Sep", day: "20", published: true },
    { id: "event-2", title: "Parents-Teachers Meeting-2", month: "Nov", day: "15", published: true },
  ],
  galleryEvents: galleryEvents,
  teachers: [
    {
      id: "teacher-1",
      name: "School Leadership",
      role: "Principal",
      department: "Administration",
      email: "info@playpen.edu.bd",
      bio: "Provides academic vision and pastoral oversight for the entire school community.",
      published: true,
    },
    {
      id: "teacher-2",
      name: "Academic Affairs",
      role: "Vice Principal",
      department: "Academics",
      bio: "Supports curriculum delivery and faculty development across all divisions.",
      published: true,
    },
  ],
  vacancies: vacancyAreas.map((vacancy, index) => ({
    id: `vacancy-${index + 1}`,
    title: vacancy.title,
    description: vacancy.description,
    published: true,
    createdAt: new Date().toISOString().slice(0, 10),
  })),
  studentAchievements: defaultStudentAchievements,
  alumniRequests: [],
  updatedAt: new Date().toISOString(),
};
