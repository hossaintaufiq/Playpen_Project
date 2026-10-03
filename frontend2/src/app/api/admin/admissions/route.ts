import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { promises as fs } from "fs";
import path from "path";
import { getDataFilePath } from "@/lib/data-path";

const DATA_PATH = getDataFilePath("admission-applications.json");

type ApplicationRecord = {
  id: string;
  formType: string;
  values: Record<string, string>;
  status?: "pending" | "approved" | "rejected";
  createdAt: string;
};

async function readApplications(): Promise<ApplicationRecord[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw) as ApplicationRecord[];
    // Ensure all records have a status field
    return parsed.map(record => ({
      ...record,
      status: record.status || "pending",
    }));
  } catch {
    return [];
  }
}

async function saveApplications(applications: ApplicationRecord[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(applications, null, 2), "utf-8");
}

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const applications = await readApplications();
  return NextResponse.json(applications);
}

export async function POST(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    action: "update-status" | "delete";
    id: string;
    status?: "pending" | "approved" | "rejected";
  };

  const { action, id, status } = body;
  if (!id) {
    return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
  }

  let applications = await readApplications();
  const index = applications.findIndex((app) => app.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Application not found" }, { status: 404 });
  }

  if (action === "update-status") {
    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }
    applications[index].status = status;
  } else if (action === "delete") {
    applications = applications.filter((app) => app.id !== id);
  } else {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  await saveApplications(applications);
  return NextResponse.json({ ok: true });
}
