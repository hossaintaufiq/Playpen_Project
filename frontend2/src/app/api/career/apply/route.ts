import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { createId } from "@/lib/cms/id";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";
import { getAppDataDir } from "@/lib/data-path";

const DATA_PATH = getAppDataDir() + "/career-applications.json";
const UPLOAD_DIR = path.join(getAppDataDir(), "career-uploads");
const MAX_CV_BYTES = 10 * 1024 * 1024;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

type CareerApplication = {
  id: string;
  vacancyId: string;
  vacancyTitle: string;
  name: string;
  email: string;
  phone?: string;
  cvFile: string;
  photoFile: string;
  createdAt: string;
};

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

const allowedCvTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  const formData = await request.formData();

  const vacancyId = text(formData.get("vacancyId"));
  const name = text(formData.get("name"));
  const email = text(formData.get("email"));
  const phone = text(formData.get("phone"));
  const cv = formData.get("cv");
  const photo = formData.get("photo");

  if (!vacancyId) {
    return NextResponse.json({ error: "Please select a vacancy to apply for." }, { status: 400 });
  }

  const publishedVacancies = getPublishedCMS(await getCMSData()).vacancies;
  const vacancy = publishedVacancies.find((item) => item.id === vacancyId);
  if (!vacancy) {
    return NextResponse.json(
      { error: "This vacancy is no longer available. Please choose another open position." },
      { status: 400 }
    );
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Full name and email are required." }, { status: 400 });
  }

  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "CV file is required." }, { status: 400 });
  }

  if (!(photo instanceof File) || photo.size === 0) {
    return NextResponse.json({ error: "Passport-sized JPEG photo is required." }, { status: 400 });
  }

  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: "CV must be 10 MB or smaller." }, { status: 400 });
  }

  if (photo.size > MAX_PHOTO_BYTES) {
    return NextResponse.json({ error: "Photo must be 5 MB or smaller." }, { status: 400 });
  }

  const cvName = cv.name.toLowerCase();
  const isPdf = cv.type === "application/pdf" || cvName.endsWith(".pdf");
  const isDoc = cvName.endsWith(".doc") || cvName.endsWith(".docx") || allowedCvTypes.has(cv.type);
  if (!isPdf && !isDoc) {
    return NextResponse.json({ error: "CV must be MS Word or PDF format." }, { status: 400 });
  }

  const photoName = photo.name.toLowerCase();
  const isJpeg =
    photo.type === "image/jpeg" || photoName.endsWith(".jpg") || photoName.endsWith(".jpeg");
  if (!isJpeg) {
    return NextResponse.json({ error: "Photo must be JPEG format." }, { status: 400 });
  }

  const id = createId("career");
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const cvExt = path.extname(cv.name) || (isPdf ? ".pdf" : ".docx");
  const cvFilename = `${id}-cv${cvExt}`;
  const photoFilename = `${id}-photo.jpg`;

  await fs.writeFile(path.join(UPLOAD_DIR, cvFilename), Buffer.from(await cv.arrayBuffer()));
  await fs.writeFile(path.join(UPLOAD_DIR, photoFilename), Buffer.from(await photo.arrayBuffer()));

  const record: CareerApplication = {
    id,
    vacancyId: vacancy.id,
    vacancyTitle: vacancy.title,
    name,
    email,
    phone: phone || undefined,
    cvFile: cvFilename,
    photoFile: photoFilename,
    createdAt: new Date().toISOString(),
  };

  let applications: CareerApplication[] = [];
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    applications = JSON.parse(raw) as CareerApplication[];
  } catch {
    applications = [];
  }

  applications.unshift(record);
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(applications, null, 2), "utf-8");

  return NextResponse.json({ ok: true, id: record.id });
}
