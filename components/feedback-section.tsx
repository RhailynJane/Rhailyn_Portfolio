"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MessageSquare, Send } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { dataService } from "@/lib/data-service"
import type { Translation } from "@/lib/translations"

interface Feedback {
  id: string
  name: string
  email: string
  company?: string
  position?: string
  message: string
  rating: number
  approved: boolean
  // Support both API shapes (Prisma camelCase vs legacy snake_case)
  createdAt?: string
  created_at?: string
  updatedAt?: string
  updated_at?: string
}

interface FeedbackSectionProps {
  translations: Translation
}

export function FeedbackSection({ translations }: FeedbackSectionProps) {
  const [approvedFeedbacks, setApprovedFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const [newFeedback, setNewFeedback] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    message: "",
    rating: 5,
  })

  const { toast } = useToast()

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const approved = await dataService.getApprovedFeedback()
        setApprovedFeedbacks(approved)
      } catch (error) {
        console.error("Failed to load feedbacks:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFeedbacks()
  }, [])

  // Carousel dots: track selected slide
  useEffect(() => {
    if (!carouselApi) return
    const update = () => {
      setCurrent(carouselApi.selectedScrollSnap())
      setCount(carouselApi.scrollSnapList().length)
    }
    update()
    carouselApi.on("select", update)
    carouselApi.on("reInit", update)
    return () => {
      carouselApi.off("select", update)
      carouselApi.off("reInit", update)
    }
  }, [carouselApi])

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await dataService.submitFeedback(newFeedback)
      if (result.success) {
        setNewFeedback({ name: "", email: "", company: "", position: "", message: "", rating: 5 })
        toast({
          title: translations.feedback.feedbackSubmitted,
          description: result.message,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-900 dark:text-white">Loading feedback...</p>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">{translations.feedback.title}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-serif max-w-3xl mx-auto">{translations.feedback.subtitle}</p>
        </div>

        {/* Testimonials as Carousel */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans text-center">
            {translations.feedback.testimonials}
          </h3>
          {approvedFeedbacks.length > 0 ? (
            <div className="relative max-w-2xl mx-auto">
              <Carousel className="w-full" setApi={setCarouselApi}>
                <CarouselContent>
                  {approvedFeedbacks.map((feedback) => (
                    <CarouselItem key={feedback.id}>
                      <div className="px-2">
                        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/25 via-transparent to-blue-500/25">
                        <Card className="relative rounded-3xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-lg">
                          <CardHeader className="pt-6 pb-0 text-center space-y-2">
                            {/* Centered avatar with initials (fully inside card, no overlap) */}
                            <div className="mx-auto mb-2">
                              <Avatar className="h-14 w-14 ring-2 ring-white/70 dark:ring-white/10 shadow">
                                <AvatarFallback className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 font-semibold">
                                  {feedback.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{feedback.name}</h4>
                            {(feedback.position || feedback.company) && (
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {[feedback.position, feedback.company].filter(Boolean).join(" · ")}
                              </p>
                            )}
                            <div className="mx-auto flex items-center justify-center gap-1 text-yellow-500" aria-label={`Rating ${feedback.rating} out of 5`}>
                              {renderStars(feedback.rating)}
                            </div>
                          </CardHeader>
                          <CardContent className="pt-4">
                            {/* Quote-style message, no chatbox icon */}
                            <blockquote className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg italic text-center">
                              “{feedback.message}”
                            </blockquote>
                            {(() => {
                              const dateValue = feedback.createdAt ?? feedback.created_at ?? feedback.updatedAt ?? feedback.updated_at
                              let formatted = ""
                              if (dateValue) {
                                const d = new Date(dateValue)
                                if (!Number.isNaN(d.getTime())) {
                                  formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                                }
                              }
                              return (
                                <div className="mt-6 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                  <span>{formatted}</span>
                                  <span className="font-medium text-gray-600 dark:text-gray-300">{feedback.rating}/5</span>
                                </div>
                              )
                            })()}
                          </CardContent>
                        </Card>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-10 bg-white/80 dark:bg-white/10 border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-white/15" />
                <CarouselNext className="-right-10 bg-white/80 dark:bg-white/10 border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-white/15" />
              </Carousel>
              {count > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => carouselApi?.scrollTo(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        i === current ? "bg-purple-500" : "bg-gray-300 dark:bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="relative inline-grid place-items-center mb-6 h-16 w-16 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm">
                <MessageSquare className="h-7 w-7 text-gray-500 dark:text-gray-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
                {translations.feedback.noTestimonials}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Be the first to share your experience!
              </p>
            </div>
          )}
        </div>

        {/* Submit Feedback Form */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-sans text-center">
            {translations.feedback.submitFeedback}
          </h3>
          <Card className="max-w-2xl mx-auto border-purple-500/20 bg-white/5 dark:bg-white/5 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-purple-500/10">
              <CardTitle className="flex items-center gap-2 font-sans text-gray-900 dark:text-white text-xl">
                <MessageSquare className="h-5 w-5 text-purple-400" />
                {translations.feedback.shareExperience}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-name" className="font-serif">
                      {translations.contact.name} *
                    </Label>
                    <Input
                      id="feedback-name"
                      value={newFeedback.name}
                      onChange={(e) => setNewFeedback((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      placeholder={translations.feedback.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback-email" className="font-serif">
                      {translations.contact.email} *
                    </Label>
                    <Input
                      id="feedback-email"
                      type="email"
                      value={newFeedback.email}
                      onChange={(e) => setNewFeedback((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      placeholder={translations.feedback.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-company" className="font-serif">
                      {translations.feedback.company}
                    </Label>
                    <Input
                      id="feedback-company"
                      value={newFeedback.company}
                      onChange={(e) => setNewFeedback((prev) => ({ ...prev, company: e.target.value }))}
                      placeholder={translations.feedback.companyPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback-role" className="font-serif">
                      {translations.feedback.role}
                    </Label>
                    <Input
                      id="feedback-role"
                      value={newFeedback.position}
                      onChange={(e) => setNewFeedback((prev) => ({ ...prev, position: e.target.value }))}
                      placeholder={translations.feedback.rolePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-serif">{translations.feedback.rating} *</Label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewFeedback((prev) => ({ ...prev, rating: i + 1 }))}
                        className="p-1"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            i < newFeedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback-message" className="font-serif">
                    {translations.feedback.yourFeedback} *
                  </Label>
                  <Textarea
                    id="feedback-message"
                    value={newFeedback.message}
                    onChange={(e) => setNewFeedback((prev) => ({ ...prev, message: e.target.value }))}
                    required
                    placeholder={translations.feedback.messagePlaceholder}
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-serif shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]">
                  <Send className="h-4 w-4 mr-2" />
                  {translations.feedback.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
