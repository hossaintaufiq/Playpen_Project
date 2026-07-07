import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { validateALevelApplication } from "@/lib/a-level-admission";
import { validatePGClassApplication } from "@/lib/pg-class-admission";
import { createId } from "@/lib/cms/id";
import { admissionFormConfigs, type AdmissionFormType } from "@/lib/admission-forms";

const DATA_PATH = path.join(process.cwd(), "data", "admission-applications.json");

type ApplicationRecord = {
  id: string;
  formType: AdmissionFormType;
  values: Record<string, string>;
  createdAt: string;
};

async function readApplications(): Promise<ApplicationRecord[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw) as ApplicationRecord[];
  } catch {
    return [];
  }
}

async function saveApplications(applications: ApplicationRecord[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(applications, null, 2), "utf-8");
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    formType?: AdmissionFormType;
    values?: Record<string, string>;
  };

  const formType = body.formType;
  if (!formType || !admissionFormConfigs[formType]) {
    return NextResponse.json({ error: "Invalid admission form type." }, { status: 400 });
  }

  const config = admissionFormConfigs[formType];
  const values = body.values ?? {};

  let missing: string[] = [];
  if (config.customForm && formType === "a-level") {
    missing = validateALevelApplication(values);
  } else if (config.customForm && formType === "pg-class-ix") {
    missing = validatePGClassApplication(values);
  } else {
    missing = config.fields
      .filter((field) => field.required && !values[field.name]?.trim())
      .map((field) => field.label);
  }

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Please complete required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const record: ApplicationRecord = {
    id: createId("application"),
    formType,
    values,
    createdAt: new Date().toISOString(),
  };

  const applications = await readApplications();
  applications.unshift(record);
  await saveApplications(applications);

  return NextResponse.json({ ok: true, id: record.id });
}
