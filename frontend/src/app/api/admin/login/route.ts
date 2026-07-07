import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  isAdminAuthenticated,
  verifyAdminPassword,
} from "@/lib/cms/auth";
import { getCMSData } from "@/lib/cms/store";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  if (!body.password || !verifyAdminPassword(body.password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  const data = await getCMSData();
  return NextResponse.json({ authenticated: true, data });
}
