import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { promises as fs } from "fs";
import path from "path";

type FormFileInfo = {
  id: string;
  filename: string;
  sizeBytes: number;
  lastModified: string;
  exists: boolean;
};

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const forms = [
    { id: "pg-class-ix", filename: "playpen-pg-class-x-admission-form.pdf" },
    { id: "a-level", filename: "playpen-a-level-admission-form.pdf" },
  ];

  const results: FormFileInfo[] = [];

  for (const form of forms) {
    const filePath = path.join(process.cwd(), "public", "forms", form.filename);
    try {
      const stats = await fs.stat(filePath);
      results.push({
        id: form.id,
        filename: form.filename,
        sizeBytes: stats.size,
        lastModified: stats.mtime.toISOString(),
        exists: true,
      });
    } catch {
      results.push({
        id: form.id,
        filename: form.filename,
        sizeBytes: 0,
        lastModified: new Date(0).toISOString(),
        exists: false,
      });
    }
  }

  return NextResponse.json(results);
}
