import { galleryEvents } from "@/lib/gallery-data";
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
    { id: "notice-1", title: "First Semester Examination", href: "/about", published: true, createdAt: "2024-08-01" },
    { id: "notice-2", title: "About Mobile Phones", href: "/about", published: true, createdAt: "2024-08-15" },
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
  alumniRequests: [],
  updatedAt: new Date().toISOString(),
};
