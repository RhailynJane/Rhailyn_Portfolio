import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const username = (body.username || "").trim()
    const password = (body.password || "").trim()

    const expectedUser = (process.env.ADMIN_USER || "").trim()
    const expectedPass = (process.env.ADMIN_PASSWORD || "").trim()

    if (username !== expectedUser || password !== expectedPass) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    const secret = (process.env.ADMIN_SECRET || "default-secret").trim()
    const enc = new TextEncoder()
    const data = enc.encode(`${expectedUser}:${expectedPass}:${secret}`)
    const digest = await crypto.subtle.digest("SHA-256", data)
    const token = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("")

    const res = NextResponse.redirect(new URL("/admin", req.url))
    res.cookies.set("admin_session", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return res
  } catch (e) {
    return NextResponse.json({ success: false, error: "Bad request" }, { status: 400 })
  }
}
