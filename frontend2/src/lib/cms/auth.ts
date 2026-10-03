import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "playpen_admin_session";

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "playpen-dev-session-secret";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "playpen123";
}

export function createAdminSessionToken() {
  return createHmac("sha256", getSecret()).update(getAdminPassword()).digest("hex");
}

export function verifyAdminSessionToken(token: string | undefined | null) {
  if (!token) return false;
  const expected = createAdminSessionToken();
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function verifyAdminPassword(password: string) {
  return password === getAdminPassword();
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}
