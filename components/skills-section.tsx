"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users, Wrench } from "lucide-react"
import type { Translation } from "@/lib/translations"
import { useEffect, useState } from "react"
import { dataService } from "@/lib/data-service"

interface SkillsSectionProps {
  translations: Translation
}

interface Skill {
  id: number
  name: string
  level: number
  display_order: number
}

interface SkillCategory {
  id: number
  title: string
  icon: string
  color: string
  display_order: number
  skills: Skill[]
}

export function SkillsSection({ translations }: SkillsSectionProps) {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([])
  const [tools, setTools] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        console.log("Starting to fetch skills data...")
        const [categoriesData, toolsData] = await Promise.all([
          dataService.getAllSkillsWithCategories(),
          dataService.getTools(),
        ])
        console.log("Skills data fetched:", { categoriesData, toolsData })
        setSkillCategories(categoriesData)
        setTools(toolsData)
      } catch (error) {
        console.error("Error fetching skills data:", error)
        console.log("Using fallback mock data for skills")
        setSkillCategories([])
        setTools([])
      } finally {
        console.log("Setting loading to false")
        setLoading(false)
      }
    }

    fetchSkillsData()
  }, [])

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      Code,
      Database,
      Palette,
      Users,
    }
    return iconMap[iconName] || Code
  }

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white  font-sans">{translations.skills.title}</h2>
            <p className="text-xl text-muted-white  font-serif max-w-3xl mx-auto">Loading skills...</p>
          </div>
        </div>
      </section>
    )
  }

  if (skillCategories.length === 0 && tools.length === 0) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white  font-sans">{translations.skills.title}</h2>
            <p className="text-xl text-muted-white  font-serif max-w-3xl mx-auto">
              Skills data is currently unavailable. Please check back later.
            </p>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-sans">{translations.skills.title}</h2>
          <p className="text-xl text-white font-serif max-w-3xl mx-auto">{translations.skills.subtitle}</p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = getIconComponent(category.icon)
            return (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-sans">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-serif text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-white  font-mono">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        style={{
                          background: `linear-gradient(to right, hsl(var(--primary)) ${skill.level}%, hsl(var(--muted)) ${skill.level}%)`,
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white  font-sans flex items-center justify-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              {translations.skills.toolsTechnologies}
            </h3>
          </div>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-serif hover:scale-105 transition-transform duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
