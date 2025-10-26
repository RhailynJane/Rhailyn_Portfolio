"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Play, Calendar, Users, Code } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"
import { dataService } from "@/lib/data-service"
import { useEffect, useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  github: string
  demo: string
  videoUrl: string
  figmaUrl: string
  features: string[]
  duration: string
  timeline?: string
  team: string
  role?: string
  date: string
}

export default function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { t } = useTranslation()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const projectData = await dataService.getProjectById(params.id as string)
        if (projectData) {
          // Transform the data to match the expected interface
            const transformedProject: Project = {
            id: projectData.id,
            title: projectData.title,
            description: projectData.description,
            longDescription: projectData.long_description || projectData.description,
            image: projectData.image_url || "",
            technologies: projectData.technologies || [],
            category: projectData.category,
            github: projectData.github_url || "",
            demo: projectData.demo_url || "",
            videoUrl: projectData.video_url || "",
            figmaUrl: projectData.figma_url || "",
            features: projectData.features || [],
            duration: projectData.duration || "Not specified",
            timeline: projectData.timeline || "",
            team: projectData.team || "Solo Project",
            role: projectData.role || "",
            date:
              new Date(projectData.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" }) ||
              "Not specified",
          }
          setProject(transformedProject)
        }
      } catch (error) {
        console.error("Error fetching project:", error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProject()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={() => router.push("/#projects")} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>

          <div className="space-y-4">
            <Badge variant="secondary" className="mb-2">
              {project.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-sans">{project.title}</h1>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl">{project.description}</p>
          </div>
        </div>

        {/* Project Image/Video */}
        {(project.image || project.videoUrl) && (
          <Card className="mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="lg" className="bg-primary/90 hover:bg-primary">
                      <Play className="h-6 w-6 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-serif leading-relaxed">{project.longDescription}</p>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground font-serif">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Removed Challenges & Solutions and Outcome sections as requested */}
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.role && (
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-muted-foreground">Role:</span>
                    <p className="text-sm leading-relaxed">{project.role}</p>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Team:</span>
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{project.duration}</span>
                </div>
                {project.timeline && (
                  <div className="space-y-1 pt-2 border-t">
                    <span className="text-sm font-semibold text-muted-foreground">Timeline:</span>
                    <p className="text-sm leading-relaxed">{project.timeline}</p>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Completed:</span>
                  <span>{project.date}</span>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.github && (
                  <Button asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.figmaUrl && (
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View in Figma
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
