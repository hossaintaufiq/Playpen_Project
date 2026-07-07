import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/cms/auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
