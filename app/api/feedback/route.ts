import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sanitizeString, isEmail, clampNumber } from "@/lib/validation"

export async function GET() {
  try {
    const feedback = await prisma.feedback.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    })
    // Exclude soft-deleted on the server side
    const filtered = feedback.filter((f: any) => !f.deleted)
    return NextResponse.json(filtered)
  } catch (e) {
    console.error("Database error:", e)
    // Return empty array when database is unavailable
    return NextResponse.json([])
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = sanitizeString(body?.name, 100)
    const email = sanitizeString(body?.email, 254)
    const company = sanitizeString(body?.company, 120) || null
    const position = sanitizeString(body?.position, 120) || null
    const message = sanitizeString(body?.message, 5000)
    const rating = clampNumber(body?.rating, 1, 5, 5)

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 })
    }
    if (email && !isEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const created = await prisma.feedback.create({
      data: { name, email, company, position, message, rating, approved: false },
    })
    return NextResponse.json({ id: created.id })
  } catch (e) {
    console.error("Database error:", e)
    // Return success even if database is unavailable (for development)
    return NextResponse.json({ id: Date.now(), message: "Feedback received (mock mode)" })
  }
}
