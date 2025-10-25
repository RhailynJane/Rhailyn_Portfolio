import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const categories = await prisma.skillCategory.findMany({
      include: {
        skills: {
          orderBy: { displayOrder: "asc" },
        },
      },
      orderBy: { displayOrder: "asc" },
    })

    const formattedCategories = categories.map((category) => ({
      id: category.id,
      title: category.title,
      icon: category.icon,
      color: category.color,
      display_order: category.displayOrder,
      skills: category.skills.map((skill) => ({
        id: skill.id,
        category_id: skill.categoryId,
        name: skill.name,
        level: skill.level,
        display_order: skill.displayOrder,
      })),
    }))

    return NextResponse.json(formattedCategories)
  } catch (error) {
    console.error("Error fetching skills:", error)
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}
