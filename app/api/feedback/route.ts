import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const feedback = await prisma.feedback.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(feedback)
  } catch (e) {
    return NextResponse.json({ error: "Failed to load feedback" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const created = await prisma.feedback.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || null,
        position: body.position || null,
        message: body.message,
        rating: Number(body.rating) || 5,
        approved: false,
      },
    })
    return NextResponse.json({ id: created.id })
  } catch (e) {
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
  }
}
