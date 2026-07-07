import { NextResponse } from "next/server";
import { createId } from "@/lib/cms/id";
import { getCMSData, saveCMSData } from "@/lib/cms/store";
import type { AlumniRequest } from "@/lib/cms/types";

type RegisterBody = {
  name?: string;
  email?: string;
  phone?: string;
  batch?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const batch = body.batch?.trim();

  if (!name || !email || !batch) {
    return NextResponse.json(
      { error: "Name, email, and graduation batch are required." },
      { status: 400 }
    );
  }

  const requestEntry: AlumniRequest = {
    id: createId("alumni"),
    name,
    email,
    phone: body.phone?.trim() || undefined,
    batch,
    message: body.message?.trim() || undefined,
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
