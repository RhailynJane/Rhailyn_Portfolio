import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")

    let projects

    if (id) {
      const project = await prisma.project.findUnique({
        where: { id },
      })
      if (!project) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 })
      }
      return NextResponse.json({
        id: project.id,
        title: project.title,
        description: project.description,
        long_description: project.longDescription || undefined,
        technologies: project.technologies,
        category: project.category,
        github_url: project.githubUrl,
        demo_url: project.demoUrl,
        video_url: project.videoUrl,
        image_url: project.imageUrl,
        figma_url: project.figmaUrl,
        featured: project.featured,
        status: project.status,
        created_at: project.createdAt.toISOString(),
        updated_at: project.updatedAt.toISOString(),
        role: project.role || undefined,
        team: project.team || undefined,
        duration: project.duration || undefined,
        timeline: project.timeline || undefined,
        features: project.features || undefined,
        challenges: project.challenges || undefined,
        outcome: project.outcome || undefined,
      })
    }

    if (category) {
      projects = await prisma.project.findMany({
        where: { category },
        orderBy: { createdAt: "desc" },
      })
    } else if (featured === "true") {
      projects = await prisma.project.findMany({
        where: { featured: true },
        orderBy: { createdAt: "desc" },
      })
    } else {
      projects = await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
      })
    }

    const formattedProjects = projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      long_description: p.longDescription || undefined,
      technologies: p.technologies,
      category: p.category,
      github_url: p.githubUrl,
      demo_url: p.demoUrl,
      video_url: p.videoUrl,
      image_url: p.imageUrl,
      figma_url: p.figmaUrl,
      featured: p.featured,
      status: p.status,
      created_at: p.createdAt.toISOString(),
      updated_at: p.updatedAt.toISOString(),
      role: p.role || undefined,
      team: p.team || undefined,
      duration: p.duration || undefined,
      timeline: p.timeline || undefined,
      features: p.features || undefined,
      challenges: p.challenges || undefined,
      outcome: p.outcome || undefined,
    }))

    return NextResponse.json(formattedProjects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
