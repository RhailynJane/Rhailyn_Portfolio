import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function isAuthorized(req: Request) {
  const header = req.headers.get("authorization") || ""
  if (!header.startsWith("Basic ")) return false
  const creds = Buffer.from(header.replace("Basic ", ""), "base64").toString()
  const [user, pass] = creds.split(":")
  return user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASSWORD
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const feedback = await prisma.feedback.findMany({ orderBy: { createdAt: "desc" } })
    return NextResponse.json(feedback)
  } catch (e) {
    console.error("Database error in moderation GET:", e)
    return NextResponse.json([])
  }
}

export async function PATCH(req: Request) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const body = await req.json()
    await prisma.feedback.update({ where: { id: body.id }, data: { approved: true } })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Database error in moderation PATCH:", e)
    return NextResponse.json({ success: false, error: "Database unavailable" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 })
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id") as string
    await prisma.feedback.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Database error in moderation DELETE:", e)
    return NextResponse.json({ success: false, error: "Database unavailable" }, { status: 500 })
  }
}
