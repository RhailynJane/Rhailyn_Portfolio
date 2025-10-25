"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import type { Translation } from "@/lib/translations"

interface HeroSectionProps {
  onScrollToAbout: () => void
  translations: Translation
}

export function HeroSection({ onScrollToAbout, translations }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Python",
    "C#",
    "HTML5",
    "CSS3",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Jenkins",
    "Cypress",
    "TestRail",
    "Jira",
    "Confluence",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        {/* Large orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-8 left-8 w-80 h-80 border border-purple-400/15 rounded-full animate-reverse-spin"></div>
          <div className="absolute top-16 left-16 w-64 h-64 border border-purple-300/10 rounded-full animate-spin-slow"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-float-delayed"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600/10 rounded-full blur-xl animate-pulse-slow delay-1000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      <div
        className={`relative z-10 text-center space-y-8 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-8 animate-float shadow-2xl shadow-purple-500/25">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-white font-sans">RC</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-sans">
            <span className="text-gray-900 dark:text-white">{translations.hero.title.split(" ").slice(0, 2).join(" ")}</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {translations.hero.title.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.hero.subtitle}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-serif max-w-2xl mx-auto">{translations.hero.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-purple-400" />
            <span>Calgary, AB</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm">
            <Mail className="h-4 w-4 text-purple-400" />
            <span>crhailynjane@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm">
            <Mail className="h-4 w-4 text-purple-400" />
            <span>+(1403)-540-9188</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-serif">{translations.hero.techStack}</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                className={`bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-white border-purple-300 dark:border-purple-400/30 hover:bg-purple-200 dark:hover:bg-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-serif px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            onClick={onScrollToAbout}
          >
            {translations.hero.learnMore}
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-purple-400/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 bg-gray-200/50 dark:bg-white/5 backdrop-blur-sm"
              onClick={() => window.open('https://github.com/RhailynJane', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-purple-400/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 bg-gray-200/50 dark:bg-white/5 backdrop-blur-sm"
              onClick={() => window.open('https://linkedin.com/in/rhailyn-cona/', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-purple-400/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 bg-gray-200/50 dark:bg-white/5 backdrop-blur-sm"
              onClick={() => window.location.href = 'mailto:contact@rhailyncona.dev'}
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-6 w-6 text-purple-400" />
          <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
