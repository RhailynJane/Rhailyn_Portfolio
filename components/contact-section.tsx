"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MapPin, Linkedin, Github, Copy } from "lucide-react"
import type { Translation } from "@/lib/translations"

interface ContactSectionProps {
  translations: Translation
}

export function ContactSection({ translations }: ContactSectionProps) {
  // Contact form removed per request; only contact info and social links remain.
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: "Personal Email",
      value: "crhailynjane@gmail.com",
      href: "mailto:crhailynjane@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Calgary, AB, Canada",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rhailyn-cona",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/RhailynJane",
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:crhailynjane@gmail.com",
      color: "text-red-600",
    },
  ]

  const copyToClipboard = async (text: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied",
        description: `${label ?? "Text"} copied to clipboard`,
      })
    } catch {
      // Fallback
      const ta = document.createElement("textarea")
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      toast({ title: "Copied", description: `${label ?? "Text"} copied to clipboard` })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.contact.title}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.contact.subtitle}</p>
          <div className="flex justify-center">
            <Badge className="bg-green-600/15 text-green-600 dark:text-green-400 border border-green-600/20">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </Badge>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Information */}
            {/* Contact Details */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-sans">{translations.contact.contactInformation}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold font-sans">{info.label}</p>
                        {info.href !== "#" ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground font-serif hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-serif">{info.value}</p>
                        )}
                      </div>
                      {String(info.href).startsWith("mailto:") && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="shrink-0 hover:bg-primary/5 hover:border-primary"
                          onClick={() => copyToClipboard(info.value, info.label)}
                          aria-label={`Copy ${info.label}`}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-sans">{translations.contact.connectWithMe}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className="flex-1 transition-all bg-transparent hover:scale-[1.03] hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/25"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Icon className={`h-5 w-5 ${social.color}`} />
                          <span className="font-serif">{social.label}</span>
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
    </section>
  )
}
