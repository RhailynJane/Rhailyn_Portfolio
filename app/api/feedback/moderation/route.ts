import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { isUUID } from "@/lib/validation"
import { isAdminRequestAuthorized } from "@/lib/admin-auth"

// Auth is enforced by middleware; we also validate cookie here for defense-in-depth

export async function GET() {
  if (!(await isAdminRequestAuthorized())) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const feedback = await prisma.feedback.findMany({ orderBy: { createdAt: "desc" } })
    return NextResponse.json(feedback)
  } catch (e) {
    console.error("Database error in moderation GET:", e)
    return NextResponse.json([])
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdminRequestAuthorized())) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const body = await req.json()
    const id = body?.id
    if (!isUUID(id)) return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 })
    await prisma.feedback.update({ where: { id }, data: { approved: true } })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Database error in moderation PATCH:", e)
    return NextResponse.json({ success: false, error: "Database unavailable" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  if (!(await isAdminRequestAuthorized())) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id") as string
    if (!isUUID(id)) return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 })
    await (prisma as any).feedback.update({ where: { id }, data: { deleted: true, approved: false } })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Database error in moderation DELETE:", e)
    return NextResponse.json({ success: false, error: "Database unavailable" }, { status: 500 })
  }
}
