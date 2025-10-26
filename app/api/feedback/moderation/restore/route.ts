import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { isUUID } from "@/lib/validation"

function isAuthorized(req: Request) {
  const header = req.headers.get("authorization") || ""
  if (!header.startsWith("Basic ")) return false
  const creds = Buffer.from(header.replace("Basic ", ""), "base64").toString()
  const [user, pass] = creds.split(":")
  return user === (process.env.ADMIN_USER || "") && pass === (process.env.ADMIN_PASSWORD || "")
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const { id } = await req.json()
    if (!isUUID(id)) return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 })
    await (prisma as any).feedback.update({ where: { id }, data: { deleted: false, approved: false } })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Database error in moderation RESTORE:", e)
    return NextResponse.json({ success: false, error: "Database unavailable" }, { status: 500 })
  }
}
