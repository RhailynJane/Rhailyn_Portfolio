// Data service layer using Prisma for database operations
// This file replaces the mock data with actual database queries

import { prisma } from "./prisma"

export type Project = {
  id: string
  title: string
  description: string
  long_description?: string
  technologies: string[]
  category: string
  github_url?: string | null
  demo_url?: string | null
  video_url?: string | null
  image_url?: string | null
  figma_url?: string | null
  featured: boolean
  status: string
  created_at: string
  updated_at: string
}

export const dataService = {
  // Projects
  async getProjects() {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return projects.map((p) => ({
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
  // status removed from schema
      created_at: p.createdAt.toISOString(),
      updated_at: p.updatedAt.toISOString(),
    }))
  },

  async getFeaturedProjects() {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
    })
    return projects.map((p) => ({
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
  // status removed from schema
      created_at: p.createdAt.toISOString(),
      updated_at: p.updatedAt.toISOString(),
    }))
  },

  async getProjectById(id: string) {
    const project = await prisma.project.findUnique({
      where: { id },
    })
    if (!project) return undefined
    return {
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
  // status removed from schema
      created_at: project.createdAt.toISOString(),
      updated_at: project.updatedAt.toISOString(),
    }
  },

  async getProjectsByCategory(category: string) {
    const projects = await prisma.project.findMany({
      where: { category },
      orderBy: { createdAt: "desc" },
    })
    return projects.map((p) => ({
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
  // status removed from schema
      created_at: p.createdAt.toISOString(),
      updated_at: p.updatedAt.toISOString(),
    }))
  },

  // Feedback via API endpoints
  async getApprovedFeedback() {
    try {
      const res = await fetch("/api/feedback", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch feedback")
      return (await res.json()) as any[]
    } catch (e) {
      console.error("Error fetching approved feedback:", e)
      return []
    }
  },

  async submitFeedback(feedback: {
    name: string
    email: string
    company?: string
    position?: string
    message: string
    rating: number
  }) {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      })
      if (!res.ok) throw new Error("Failed to submit feedback")
      const data = await res.json()
      return { success: true, message: "Feedback submitted successfully!", id: data.id }
    } catch (e) {
      console.error("Error submitting feedback:", e)
      return { success: false, message: "Failed to submit feedback. Please try again." }
    }
  },

  // Skills
  async getSkillCategories() {
    return await prisma.skillCategory.findMany({
      orderBy: { displayOrder: "asc" },
    })
  },

  async getSkillsByCategory(categoryId: number) {
    return await prisma.skill.findMany({
      where: { categoryId },
      orderBy: { displayOrder: "asc" },
    })
  },

  async getAllSkillsWithCategories() {
    const categories = await prisma.skillCategory.findMany({
      include: {
        skills: {
          orderBy: { displayOrder: "asc" },
        },
      },
      orderBy: { displayOrder: "asc" },
    })
    
    return categories.map((category) => ({
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
  },

  async getTools() {
    const tools = await prisma.tool.findMany({
      orderBy: { order: "asc" },
    })
    return tools.map((t) => t.name)
  },

  // Experience
  async getExperience() {
    const experiences = await prisma.experience.findMany({
      orderBy: { displayOrder: "asc" },
    })
    return experiences.map((exp) => ({
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
  },

  async getCurrentExperience() {
    const experiences = await prisma.experience.findMany({
      where: { isCurrent: true },
      orderBy: { displayOrder: "asc" },
    })
    return experiences.map((exp) => ({
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
  },

  // Education
  async getEducation() {
    const education = await prisma.education.findMany({
      orderBy: { displayOrder: "asc" },
    })
    return education.map((edu) => ({
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
  },

  // Certifications
  async getCertifications() {
    const certifications = await prisma.certification.findMany({
      orderBy: { displayOrder: "asc" },
    })
    return certifications.map((cert) => ({
      id: cert.id,
      name: cert.name,
      issuing_organization: cert.issuingOrganization,
      issue_date: cert.issueDate.toISOString().split("T")[0],
      expiry_date: cert.expiryDate ? cert.expiryDate.toISOString().split("T")[0] : null,
      credential_id: cert.credentialId,
      credential_url: cert.credentialUrl,
      description: cert.description,
    }))
  },

  async getActiveCertifications() {
    const certifications = await prisma.certification.findMany({
      where: {
        OR: [{ expiryDate: null }, { expiryDate: { gt: new Date() } }],
      },
      orderBy: { displayOrder: "asc" },
    })
    return certifications.map((cert) => ({
      id: cert.id,
      name: cert.name,
      issuing_organization: cert.issuingOrganization,
      issue_date: cert.issueDate.toISOString().split("T")[0],
      expiry_date: cert.expiryDate ? cert.expiryDate.toISOString().split("T")[0] : null,
      credential_id: cert.credentialId,
      credential_url: cert.credentialUrl,
      description: cert.description,
    }))
  },
}
