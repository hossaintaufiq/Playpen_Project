import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { createId } from "@/lib/cms/id";
import { getCMSData, saveCMSData } from "@/lib/cms/store";
import type { AlumniRequest } from "@/lib/cms/types";

const UPLOAD_DIR = path.join(process.cwd(), "data", "alumni-photos");
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = text(formData.get("name"));
  const homeAddress = text(formData.get("homeAddress"));
  const email = text(formData.get("email"));
  const phone = text(formData.get("phone"));
  const oLevelYear = text(formData.get("oLevelYear"));
  const aLevelYear = text(formData.get("aLevelYear"));
  const occupation = text(formData.get("occupation"));
  const graduationInfo = text(formData.get("graduationInfo"));
  const photo = formData.get("photo");

  if (!name || !homeAddress || !phone || !occupation) {
    return NextResponse.json(
      { error: "Full name, home address, contact number, and present occupation are required." },
      { status: 400 }
    );
  }

  const id = createId("alumni");
  let photoPath: string | undefined;

  if (photo instanceof File && photo.size > 0) {
    if (photo.size > MAX_PHOTO_BYTES) {
      return NextResponse.json({ error: "Photograph must be 5 MB or smaller." }, { status: 400 });
    }

    const ext = path.extname(photo.name) || ".jpg";
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const filename = `${id}${ext}`;
    const buffer = Buffer.from(await photo.arrayBuffer());
    await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);
    photoPath = filename;
  }

  const requestEntry: AlumniRequest = {
    id,
    name,
    homeAddress,
    email: email || undefined,
    phone,
    oLevelYear: oLevelYear || undefined,
    aLevelYear: aLevelYear || undefined,
    occupation,
    graduationInfo: graduationInfo || undefined,
    photoPath,
    batch: aLevelYear || oLevelYear || undefined,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const current = await getCMSData();
  const saved = await saveCMSData({
    ...current,
    alumniRequests: [requestEntry, ...current.alumniRequests],
  });

  return NextResponse.json({
    ok: true,
    id: requestEntry.id,
    updatedAt: saved.updatedAt,
  });
}
