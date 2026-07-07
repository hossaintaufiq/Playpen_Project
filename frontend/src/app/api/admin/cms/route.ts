import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { getCMSData, saveCMSData } from "@/lib/cms/store";
import type { CMSData } from "@/lib/cms/types";

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getCMSData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as Partial<CMSData>;
  const current = await getCMSData();
  const merged: CMSData = {
    ...current,
    ...body,
    updatedAt: current.updatedAt,
  };
  const saved = await saveCMSData(merged);
  return NextResponse.json(saved);
}
