import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { isUUID } from "@/lib/validation"
import { isAdminRequestAuthorized } from "@/lib/admin-auth"

export async function POST(req: Request) {
  if (!(await isAdminRequestAuthorized())) return new NextResponse("Unauthorized", { status: 401 })
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
