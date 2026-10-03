import { NextResponse } from "next/server";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export async function GET() {
  const data = getPublishedCMS(await getCMSData());
  const { alumniRequests: _alumni, ...publicData } = data;
  return NextResponse.json(publicData);
}
