import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const res = NextResponse.redirect(new URL("/admin/signin", request.url))
  // Clear admin_session cookie
  res.cookies.set("admin_session", "", { path: "/", httpOnly: true, sameSite: "lax", maxAge: 0 })
  return res
}
