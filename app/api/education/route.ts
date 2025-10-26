import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const education = await prisma.education.findMany({
      orderBy: { displayOrder: "asc" },
    })

    const formattedEducation = education.map((edu: any) => ({
      id: edu.id,
      degree: edu.degree,
      field_of_study: edu.fieldOfStudy,
      school: edu.school,
      location: edu.location,
      start_date: edu.startDate.toISOString().split("T")[0],
      end_date: edu.endDate ? edu.endDate.toISOString().split("T")[0] : null,
      is_current: edu.isCurrent,
      description: edu.description,
      achievements: edu.achievements,
    }))

    return NextResponse.json(formattedEducation)
  } catch (error) {
    console.error("Error fetching education:", error)
    return NextResponse.json({ error: "Failed to fetch education" }, { status: 500 })
  }
}
