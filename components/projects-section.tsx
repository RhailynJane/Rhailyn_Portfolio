"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye } from "lucide-react"
import { useState, useEffect } from "react"
import { dataService } from "@/lib/data-service"
import type { Translation } from "@/lib/translations"
import Link from "next/link"

interface Project {
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

interface ProjectsSectionProps {
  translations: Translation
}

export function ProjectsSection({ translations }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await dataService.getProjects()
        setProjects(projectsData)
      } catch (error) {
        console.error("Failed to load projects:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-900 dark:text-white">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.projects.title}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.projects.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 border-primary/20 group">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg font-sans group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground font-serif line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>

                  {project.github_url && project.github_url !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}

                  {project.figma_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.figma_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
