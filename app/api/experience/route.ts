import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const current = searchParams.get("current")

    let experiences

    if (current === "true") {
      experiences = await prisma.experience.findMany({
        where: { isCurrent: true },
        orderBy: { displayOrder: "asc" },
      })
    } else {
      experiences = await prisma.experience.findMany({
        orderBy: { displayOrder: "asc" },
      })
    }

    const formattedExperiences = experiences.map((exp) => ({
      id: exp.id,
      title: exp.title,
      company: exp.company,
      location: exp.location,
      start_date: exp.startDate.toISOString().split("T")[0],
      end_date: exp.endDate ? exp.endDate.toISOString().split("T")[0] : null,
      is_current: exp.isCurrent,
      description: exp.description,
      skills: exp.skills,
    }))

    return NextResponse.json(formattedExperiences)
  } catch (error) {
    console.error("Error fetching experience:", error)
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 })
  }
}
