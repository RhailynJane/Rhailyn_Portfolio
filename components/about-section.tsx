"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award, Globe } from "lucide-react"
import type { Translation } from "@/lib/translations"
import { dataService } from "@/lib/data-service"
import { useEffect, useState } from "react"

interface AboutSectionProps {
  translations: Translation
}

export function AboutSection({ translations }: AboutSectionProps) {
  const [experiences, setExperiences] = useState<any[]>([])
  const [education, setEducation] = useState<any[]>([])
  const [certifications, setCertifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [experienceData, educationData, certificationsData] = await Promise.all([
          dataService.getExperience(),
          dataService.getEducation(),
          dataService.getCertifications(),
        ])

        setExperiences(experienceData)
        setEducation(educationData)
        setCertifications(certificationsData)
      } catch (error) {
        console.error("Error fetching about data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

const formatPeriod = (startDate: string, endDate: string | null, isCurrent: boolean) => {
    // Parse date string directly to avoid timezone issues
    const parseDate = (dateString: string) => {
      const [year, month, day] = dateString.split("-").map(Number)
      return new Date(year, month - 1, day) // month - 1 because Date constructor expects 0-based months
    }

    const start = parseDate(startDate)
    const startFormatted = `${String(start.getMonth() + 1).padStart(2, "0")}/${start.getFullYear()}`

    if (isCurrent || !endDate) {
      return `${startFormatted} - Present`
    }

    const end = parseDate(endDate)
    const endFormatted = `${String(end.getMonth() + 1).padStart(2, "0")}/${end.getFullYear()}`
    return `${startFormatted} - ${endFormatted}`
  }

  if (loading) {
    return (
  <section className="py-20 px-4 min-h-screen bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="text-gray-900 dark:text-white text-xl">Loading...</div>
        </div>
      </section>
    )
  }

  return (
  <section className="py-20 px-4 min-h-screen bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.about.title}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.about.subtitle}</p>
        </div>

        {/* Profile Image and Enhanced Profile Summary Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-purple-500/30">
                <img
                  src="/rhailyn-cona.jpg"
                  alt="Rhailyn Jane Cona - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Profile Summary */}
          <Card className="lg:col-span-2 border-purple-500/20 shadow-lg bg-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400 font-sans">
                <Globe className="h-5 w-5" />
                {translations.about.profileSummary}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">{translations.about.profileDescription}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30">
                  {translations.about.bilingual}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30">
                  {translations.about.qualityAssurance}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30">
                  {translations.about.technicalSupport}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30">
                  {translations.about.softwareTesting}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-purple-400" />
            {translations.about.experience}
          </h3>
          <div className="grid gap-6">
            {experiences.map((exp: any, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-white/5 backdrop-blur-sm border-purple-500/20"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-purple-400 font-sans">{exp.company}</CardTitle>
                    <Badge variant="outline" className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300">
                      {formatPeriod(exp.start_date, exp.end_date, exp.is_current)}
                    </Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-serif font-semibold">{exp.title}</p>
                  {exp.location && <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>}
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400 font-serif">{exp.description}</p>
                  {/* Removed Key Responsibilities as requested */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills &&
                      exp.skills.map((skill: string) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-400" />
            {translations.about.education}
          </h3>
          <div className="grid gap-6">
            {education.map((edu: any, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-white/5 backdrop-blur-sm border-purple-500/20"
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-lg sm:text-xl text-purple-400 font-sans wrap-break-word">{edu.degree}</CardTitle>
                    <Badge variant="outline" className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 w-fit text-xs">
                      {formatPeriod(edu.start_date, edu.end_date, edu.is_current)}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-serif font-semibold wrap-break-word">{edu.school}</p>
                  {edu.location && <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>}
                  {edu.field_of_study && <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Field of Study: {edu.field_of_study}</p>}
                </CardHeader>
                {(edu.achievements || edu.description) && (
                  <CardContent className="space-y-3">
                    {edu.description && <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-serif">{edu.description}</p>}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.achievements.map((achievement: string) => (
                          <Badge
                            key={achievement}
                            variant="secondary"
                            className="text-[10px] sm:text-xs bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30 inline-block whitespace-normal leading-relaxed py-1"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans flex items-center gap-2">
            <Award className="h-6 w-6 text-purple-400" />
            {translations.about.certifications}
          </h3>
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert: any, index) => (
                  <div key={index} className="flex flex-col gap-2 p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-purple-400 shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300 wrap-break-word">{cert.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{cert.issuing_organization}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {new Date(cert.issue_date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                        {cert.description && <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1.5">{cert.description}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
