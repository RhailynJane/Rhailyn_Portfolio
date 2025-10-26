"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { FeedbackSection } from "@/components/feedback-section"
import { useTranslation } from "@/hooks/use-translation"

function SectionFromQuery({ onInit }: { onInit: (section: string) => void }) {
  const searchParams = useSearchParams()
  useEffect(() => {
    const section = searchParams.get("section")
    if (section) onInit(section)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])
  return null
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { t, currentLanguage, changeLanguage } = useTranslation("en")

  // Initialize from URL query in a Suspense-safe child
  const InitFromQuery = (
    <Suspense fallback={null}>
      <SectionFromQuery onInit={setActiveSection} />
    </Suspense>
  )

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  const handleLanguageChange = (language: string) => {
    changeLanguage(language)
  }

  const handleScrollToAbout = () => {
    setActiveSection("about")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      {InitFromQuery}
      <SidebarNavigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        translations={t}
      />

      {/* Main Content */}
      <main className="w-full">
        <div className="min-h-screen">
          {activeSection === "home" && <HeroSection onScrollToAbout={handleScrollToAbout} translations={t} />}

          {activeSection === "about" && <AboutSection translations={t} />}

          {activeSection === "skills" && <SkillsSection translations={t} />}

          {activeSection === "projects" && <ProjectsSection translations={t} />}

          {activeSection === "contact" && <ContactSection translations={t} />}

          {activeSection === "feedbacks" && <FeedbackSection translations={t} />}
        </div>
      </main>
    </div>
  )
}
