import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const tools = await prisma.tool.findMany({
      orderBy: { order: "asc" },
    })

    const toolNames = tools.map((t: any) => t.name)

    return NextResponse.json(toolNames)
  } catch (error) {
    console.error("Error fetching tools:", error)
    return NextResponse.json({ error: "Failed to fetch tools" }, { status: 500 })
  }
}
