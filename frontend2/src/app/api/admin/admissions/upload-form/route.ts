import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const formId = formData.get("formId") as string;
    const file = formData.get("file") as File | null;

    if (!formId || !["pg-class-ix", "a-level"].includes(formId)) {
      return NextResponse.json({ error: "Invalid form ID" }, { status: 400 });
    }

    if (!file) {
      return NextResponse.json({ error: "No file was uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/forms directory
    const targetFilename =
      formId === "pg-class-ix"
        ? "playpen-pg-class-x-admission-form.pdf"
        : "playpen-a-level-admission-form.pdf";

    const targetDir = path.join(process.cwd(), "public", "forms");
    await fs.mkdir(targetDir, { recursive: true });
    
    const targetPath = path.join(targetDir, targetFilename);
    await fs.writeFile(targetPath, buffer);

    return NextResponse.json({ ok: true, filename: targetFilename });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 });
  }
}
