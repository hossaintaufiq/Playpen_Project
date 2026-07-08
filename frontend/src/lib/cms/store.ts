import { promises as fs } from "fs";
import path from "path";
import { defaultCMSData } from "./defaults";
import type { CMSData } from "./types";

const DATA_PATH = path.join(process.cwd(), "data", "cms.json");

function normalizeCMSData(raw: Partial<CMSData>): CMSData {
  return {
    ...defaultCMSData,
    ...raw,
    heroSlides: raw.heroSlides ?? defaultCMSData.heroSlides,
    newsTicker: raw.newsTicker ?? defaultCMSData.newsTicker,
    notices: raw.notices ?? defaultCMSData.notices,
    schoolEvents: raw.schoolEvents ?? defaultCMSData.schoolEvents,
    galleryEvents: raw.galleryEvents ?? defaultCMSData.galleryEvents,
    teachers: raw.teachers ?? defaultCMSData.teachers,
    vacancies: raw.vacancies ?? defaultCMSData.vacancies,
    alumniRequests: (raw.alumniRequests ?? defaultCMSData.alumniRequests).map((request) => ({
      ...request,
      status: request.status ?? "pending",
    })),
    updatedAt: raw.updatedAt ?? defaultCMSData.updatedAt,
  };
}

export async function getCMSData(): Promise<CMSData> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return normalizeCMSData(JSON.parse(raw) as Partial<CMSData>);
  } catch {
    await saveCMSData(defaultCMSData);
    return defaultCMSData;
  }
}

export async function saveCMSData(data: CMSData) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  const payload: CMSData = { ...data, updatedAt: new Date().toISOString() };
  await fs.writeFile(DATA_PATH, JSON.stringify(payload, null, 2), "utf-8");
  return payload;
}

export function getPublishedCMS(data: CMSData): CMSData {
  return {
    ...data,
    heroSlides: data.heroSlides.filter((slide) => slide.active).sort((a, b) => a.order - b.order),
    notices: data.notices.filter((notice) => notice.published),
    schoolEvents: data.schoolEvents.filter((event) => event.published),
    teachers: data.teachers.filter((teacher) => teacher.published),
    vacancies: data.vacancies.filter((vacancy) => vacancy.published),
    alumniRequests: data.alumniRequests,
  };
}
