"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useToast } from "../components/ui/use-toast"
import type { Translation } from "@/lib/translations"

interface ContactSectionProps {
  translations: Translation
}

export function ContactSection({ translations }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: translations.contact.messageSent,
      description: translations.contact.messageSentDescription,
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: translations.contact.email,
      value: "crhailynjane@gmail.com",
      href: "mailto:crhailynjane@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+(1403)-540-9188",
      href: "tel:+14035409188",
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
      label: translations.contact.email,
      href: "mailto:crhailynjane@gmail.com",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-sans">{translations.contact.title}</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">{translations.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-sans">
                <MessageSquare className="h-5 w-5 text-primary" />
                {translations.contact.sendMessage}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-serif">
                      {translations.contact.name} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-serif">
                      {translations.contact.email} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-serif">
                    {translations.contact.subject} *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-serif">
                    {translations.contact.message} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    translations.contact.sending
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {translations.contact.sendButton}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
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
                      <div>
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
                        className="flex-1 hover:scale-105 transition-transform bg-transparent"
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

            {/* Availability */}
            <Card className="border-primary/20 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <h3 className="font-semibold font-sans">{translations.contact.currentlyAvailable}</h3>
                  <p className="text-sm text-muted-foreground font-serif">
                    {translations.contact.availabilityDescription}
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      {translations.contact.viewResume}
                    </Button>
                    <Button size="sm">{translations.contact.scheduleCall}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
