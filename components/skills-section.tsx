"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users, Wrench } from "lucide-react"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Translation } from "@/lib/translations"
import { useEffect, useState } from "react"

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
        const [skillsResponse, toolsResponse] = await Promise.all([
          fetch('/api/skills'),
          fetch('/api/tools')
        ])
        
        if (!skillsResponse.ok || !toolsResponse.ok) {
          throw new Error(`Failed to fetch: skills ${skillsResponse.status}, tools ${toolsResponse.status}`)
        }
        
        const categoriesData = await skillsResponse.json()
        const toolsData = await toolsResponse.json()
        
        console.log("Skills data fetched:", { categoriesData, toolsData })
        setSkillCategories(categoriesData || [])
        setTools(toolsData || [])
      } catch (error) {
        console.error("Error fetching skills data:", error)
        console.log("Using fallback empty data for skills")
        setSkillCategories([])
        setTools([])
      } finally {
        console.log("Setting loading to false")
        setLoading(false)
      }
    }

    fetchSkillsData()
  }, [])

  const levelToProficiency = (level: number): { label: "Beginner" | "Intermediate" | "Proficient" | "Expert"; badgeClass: string } => {
    if (level >= 85) return { label: "Expert", badgeClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30" }
    if (level >= 70) return { label: "Proficient", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-300 dark:border-blue-500/30" }
    if (level >= 40) return { label: "Intermediate", badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 border-amber-300 dark:border-amber-500/30" }
    return { label: "Beginner", badgeClass: "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 border-gray-300 dark:border-white/20" }
  }

  const skillDescriptions: Record<string, string> = {
    // Frontend
    "HTML": "Created semantic, accessible web pages for projects like Portfolio and CineTracker.",
    "HTML5": "Built modern responsive layouts in projects like Portfolio and Health Connect.",
    "CSS": "Styled multi-project UIs, including Dog Care and Travel Management.",
    "CSS3": "Applied animations and responsive design in SafeSpace and FitMindAI.",
    "Tailwind CSS": "Rapidly prototyped UI in CineTracker, Portfolio, and Health Connect.",
    "JavaScript": "Built interactive features across web and mobile apps.",
    "TypeScript": "Developed type-safe apps (SafeSpace, CineTracker, Next.js projects).",
    "React": "Created component-driven UIs for web apps (CineTracker, Portfolio).",
    "Next.js": "Implemented SSR/SSG and App Router for Portfolio and CineTracker.",
    "React Native": "Delivered cross-platform apps (SafeSpace, FitMindAI, Health Connect Mobile).",
    "Expo": "Bootstrapped mobile apps with rapid iteration (FitMindAI, Health Connect).",
    // Backend/Database
    "Node.js": "Built REST APIs for SafeSpace backend and project integrations.",
    "Express": "Created server routes in SafeSpace and backend services.",
    "Python": "Developed Library Management CLI and automation scripts.",
    "C#": ".NET MAUI apps (Traveless, Utility Management) and backend logic.",
    "MySQL": "Designed schemas for multi-project databases.",
    "PostgreSQL": "Used Prisma with Supabase for Portfolio and SafeSpace data.",
    "Firebase": "Integrated Auth and Firestore in CineTracker and FitMindAI.",
    "Prisma": "ORM for type-safe DB queries in Portfolio and SafeSpace.",
    // Testing/QA
    "Cypress": "Used at Convoso for automated UI/E2E testing as Software QA Engineer.",
    "Selenium": "Ran morning regression tests at Convoso as Technical Support Analyst.",
    "TestRail": "Managed test cases and execution cycles at Convoso (QA role).",
    "Postman": "Validated APIs and created test suites at Convoso and for personal projects.",
    "Manual Testing": "Executed comprehensive test plans as QA Engineer at Convoso.",
    "Automated Testing": "Transitioned to automation team, contributed Cypress scripts at Convoso.",
    "Regression Testing": "Conducted daily regression with Selenium at Convoso (Technical Support).",
    "Smoke Testing": "Verified builds and critical paths at Convoso.",
    "Sanity Testing": "Quick validation of fixes and features at Convoso.",
    "Performance Testing": "Load tested critical user flows at Convoso.",
    // Tools/DevOps
    "Jenkins": "Set up CI pipelines for automated test runs at Convoso.",
    "Jira": "Tracked bugs, stories, and releases across Convoso and personal projects.",
    "Confluence": "Documented test plans and technical runbooks at Convoso.",
    "Git": "Version control for all projects; branching/PR workflows.",
    "GitHub": "Hosted repos and collaborated on open-source (SafeSpace, Portfolio).",
    // Design/Collaboration
    "Figma": "Designed wireframes and prototypes (SafeSpace, FitMindAI, Health Connect).",
    "Zendesk": "Provided customer support and documented issues at Ascent Solutions and Emerson.",
    "Zoho Desk": "Managed support tickets at Ascent Solutions.",
    "Communication": "Led cross-functional collaboration at Convoso and team projects.",
    "Team Leadership": "Mentored support analysts and contributed to team onboarding at Convoso.",
    "Knowledge Management": "Built knowledge base articles at Convoso.",
    "Technical Documentation": "Wrote system integration docs and user guides at Convoso and Emerson.",
    "Technical Training": "Conducted training sessions for new hires at Emerson.",
  }

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      Code,
      Database,
      Palette,
      Users,
      Wrench,
    }
    return iconMap[iconName] || Code
  }

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.skills.title}</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">Loading skills...</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.skills.title}</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.skills.title}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.skills.subtitle}</p>
        </div>

        {/* Skills Categories */}
        <TooltipProvider>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getIconComponent(category.icon)
            return (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-sans text-lg">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => {
                    const prof = levelToProficiency(skill.level)
                    const desc = skillDescriptions[skill.name] || `Hands-on experience with ${skill.name}.`
                    return (
                      <div key={skill.id} className="flex items-center justify-between gap-3">
                        <span className="font-serif text-sm font-medium truncate">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={`border ${prof.badgeClass}`}>{prof.label}</Badge>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex items-center justify-center rounded-md p-1 hover:bg-muted/60" aria-label={`About ${skill.name}`}>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs text-sm font-serif">
                              <p><span className="font-semibold">{skill.name}</span> — {desc}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )
          })}
        </div>
        </TooltipProvider>

        {/* Tools & Technologies */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans flex items-center justify-center gap-2">
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
