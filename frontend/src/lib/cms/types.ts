import type { GalleryEvent } from "@/lib/gallery-data";

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
  order: number;
  active: boolean;
};

export type NewsTicker = {
  enabled: boolean;
  academicYear: string;
  level: string;
  phones: string[];
  hours: string;
  formsNote: string;
};

export type Notice = {
  id: string;
  title: string;
  href: string;
  published: boolean;
  createdAt: string;
};

export type SchoolEvent = {
  id: string;
  title: string;
  month: string;
  day: string;
  description?: string;
  published: boolean;
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  department: string;
  email?: string;
  phone?: string;
  image?: string;
  bio?: string;
  published: boolean;
};

export type JobVacancy = {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
};

export type AchievementCategory = "academic" | "science" | "sports" | "arts" | "other";

export type StudentAchievement = {
  id: string;
  title: string;
  organizer?: string;
  venue?: string;
  date?: string;
  year?: string;
  participatedBy?: string;
  results: string[];
  image?: string;
  category: AchievementCategory;
  published: boolean;
  order: number;
  createdAt: string;
};

export type AlumniRequest = {
  id: string;
  name: string;
  homeAddress: string;
  email?: string;
  phone: string;
  oLevelYear?: string;
  aLevelYear?: string;
  occupation: string;
  graduationInfo?: string;
  photoPath?: string;
  /** @deprecated Legacy field kept for older submissions */
  batch?: string;
  /** @deprecated Legacy field kept for older submissions */
  message?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export type CMSData = {
  heroSlides: HeroSlide[];
  newsTicker: NewsTicker;
  notices: Notice[];
  schoolEvents: SchoolEvent[];
  galleryEvents: GalleryEvent[];
  teachers: Teacher[];
  vacancies: JobVacancy[];
  studentAchievements: StudentAchievement[];
  alumniRequests: AlumniRequest[];
  updatedAt: string;
};
