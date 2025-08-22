"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Play, Calendar, Users, Code } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"

// Mock project data - in a real app, this would come from a database or API
const projects = [
  {
    id: "library-management",
    title: "Library Management Application",
    description:
      "A comprehensive library management system built with Python featuring book search, borrowing, and inventory tracking capabilities.",
    longDescription:
      "This application was developed as part of the SAIT Level Up Project, focusing on core library management functionalities. The system allows users to search for books by title, author, ISBN, or genre, and includes comprehensive borrowing and returning features with real-time availability tracking. The project demonstrates proficiency in object-oriented programming, file handling, and version control workflows.",
    image: "/library-management-system.png",
    technologies: ["Python", "Object-Oriented Programming", "File Handling", "CSV", "Git", "GitHub"],
    category: "Backend Development",
    github: "https://github.com/ConaRhai/library_management_app.git",
    demo: "",
    videoUrl: "/placeholder.mp4?query=library management system demo video",
    features: [
      "Book search by multiple criteria (title, author, ISBN, genre)",
      "Borrowing and returning system with availability tracking",
      "Inventory management and book cataloging",
      "CSV file handling for persistent data storage",
      "User-friendly command-line interface",
    ],
    challenges:
      "Implementing efficient search algorithms and managing data persistence without a traditional database.",
    outcome:
      "Successfully delivered a fully functional library management system that demonstrates core programming principles and effective project management.",
    duration: "2 months",
    team: "Solo Project",
    date: "August 2024",
  },
  {
    id: "dog-care",
    title: "Dog Care Project",
    description:
      "A responsive web application for dog care services with interactive UI elements and cross-device compatibility.",
    longDescription:
      "This project showcases modern web development practices with a focus on responsive design and user experience. Built using HTML, CSS, and JavaScript, the application provides an engaging interface for dog care services with dynamic elements and interactive features.",
    image: "/dog-care-website.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "GitHub"],
    category: "Frontend Development",
    github: "https://github.com/RhailynJane/Project_DogCare.git",
    demo: "",
    videoUrl: "/placeholder.mp4?query=dog care website demo with responsive design",
    features: [
      "Fully responsive design for all device sizes",
      "Interactive UI elements and animations",
      "Modern CSS layouts and styling",
      "Cross-browser compatibility",
      "Optimized performance and loading times",
    ],
    challenges:
      "Ensuring consistent user experience across different devices and browsers while maintaining performance.",
    outcome: "Created an engaging, responsive web application that demonstrates proficiency in frontend technologies.",
    duration: "1 month",
    team: "Solo Project",
    date: "August 2024",
  },
  // Add more projects as needed
]

export default function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { t } = useTranslation()

  const project = projects.find((p) => p.id === params.id)

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
          <Button variant="outline" onClick={() => router.back()} className="mb-6">
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
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
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

                <div>
                  <h4 className="font-semibold mb-2">Challenges & Solutions:</h4>
                  <p className="text-muted-foreground font-serif">{project.challenges}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Outcome:</h4>
                  <p className="text-muted-foreground font-serif">{project.outcome}</p>
                </div>
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
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Team:</span>
                  <span>{project.team}</span>
                </div>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
