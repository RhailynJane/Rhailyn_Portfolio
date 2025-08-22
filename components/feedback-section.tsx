"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MessageSquare, Send } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "../components/ui/use-toast"
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
            <p className="text-muted-foreground">Loading feedback...</p>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-sans">{translations.feedback.title}</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">{translations.feedback.subtitle}</p>
        </div>

        <Tabs defaultValue="testimonials" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="testimonials">{translations.feedback.testimonials}</TabsTrigger>
            <TabsTrigger value="submit">{translations.feedback.submitFeedback}</TabsTrigger>
          </TabsList>

          {/* Approved Testimonials */}
          <TabsContent value="testimonials" className="space-y-8">
            {approvedFeedbacks.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {approvedFeedbacks.map((feedback) => (
                  <Card key={feedback.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {feedback.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold font-sans">{feedback.name}</h4>
                            {feedback.position && (
                              <p className="text-sm text-muted-foreground font-serif">
                                {feedback.position}
                                {feedback.company && ` at ${feedback.company}`}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">{renderStars(feedback.rating)}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-serif italic">"{feedback.message}"</p>
                      <p className="text-xs text-muted-foreground mt-4">
                        {new Date(feedback.created_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-serif">{translations.feedback.noTestimonials}</p>
              </div>
            )}
          </TabsContent>

          {/* Submit Feedback Form */}
          <TabsContent value="submit">
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <MessageSquare className="h-5 w-5 text-primary" />
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

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    {translations.feedback.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
