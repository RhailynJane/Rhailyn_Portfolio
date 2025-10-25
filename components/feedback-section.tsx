"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MessageSquare, Send } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
  created_at: string
  updated_at: string
}

interface FeedbackSectionProps {
  translations: Translation
}

export function FeedbackSection({ translations }: FeedbackSectionProps) {
  const [approvedFeedbacks, setApprovedFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

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
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {approvedFeedbacks.map((feedback) => (
                    <CarouselItem key={feedback.id}>
                      <Card className="border-purple-500/20 bg-white/5 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                        <CardHeader className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-14 w-14 border-2 border-purple-400/30">
                                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-lg">
                                  {feedback.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white font-sans">{feedback.name}</h4>
                                {feedback.position && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400 font-serif">
                                    {feedback.position}
                                    {feedback.company && (
                                      <>
                                        {" "}
                                        <span className="text-purple-400">at</span>{" "}
                                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                                          {feedback.company}
                                        </span>
                                      </>
                                    )}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">{renderStars(feedback.rating)}</div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="relative">
                            <MessageSquare className="absolute -top-2 -left-2 h-8 w-8 text-purple-400/20" />
                            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed text-base pl-6">
                              "{feedback.message}"
                            </p>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-serif">
                              {new Date(feedback.created_at).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                              <Star className="h-3 w-3 fill-current" />
                              <span className="font-semibold">{feedback.rating}/5</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 bg-purple-100 dark:bg-purple-900/50 border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50" />
                <CarouselNext className="-right-12 bg-purple-100 dark:bg-purple-900/50 border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50" />
              </Carousel>
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="relative inline-block mb-6">
                <MessageSquare className="h-20 w-20 text-purple-400/30 mx-auto" />
                <div className="absolute inset-0 bg-purple-400/10 blur-2xl rounded-full"></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-serif text-lg mb-2">
                {translations.feedback.noTestimonials}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 font-serif">
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
                      placeholder="Your full name"
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
                      placeholder="your.email@example.com"
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
                      placeholder="Your company"
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
                      placeholder="Your job title"
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
                    placeholder="Share your experience working with me..."
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
