import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FeedbackManager from "@/components/admin/FeedbackManager"

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic'
export const revalidate = 0

type FeedbackWithDeleted = {
  id: string
  name: string
  email: string
  message: string
  rating: number
  approved: boolean
  deleted?: boolean
  createdAt: Date
  updatedAt: Date
  company: string | null
  position: string | null
}

export default async function DeletedFeedbackPage() {
  // This page is protected by middleware (HTTP Basic Auth)
  const allFeedbacks = await prisma.feedback.findMany({ 
    orderBy: { createdAt: "desc" } 
  }) as FeedbackWithDeleted[]
  
  // Debug: log all feedback to see structure
  console.log("All feedbacks:", allFeedbacks.map((f: FeedbackWithDeleted) => ({ id: f.id, name: f.name, deleted: f.deleted })))
  
  // Filter deleted on server side
  const feedbacks = allFeedbacks.filter((f: FeedbackWithDeleted) => f.deleted === true)
  const total = feedbacks.length
  
  console.log("Filtered deleted:", feedbacks.length)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="/admin">
              <Button variant="ghost" className="mb-2">← Back to Admin</Button>
            </a>
            <h1 className="text-3xl font-bold">Deleted Feedback</h1>
          </div>
          <a href="/api/logout">
            <Button variant="ghost">Logout</Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
          <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Total Deleted</p><p className="text-2xl font-semibold">{total}</p></CardContent></Card>
        </div>

        {/* Manager - only show deleted items */}
        <FeedbackManager
          items={feedbacks.map((f: FeedbackWithDeleted) => ({
            id: f.id,
            name: f.name,
            email: f.email,
            message: f.message,
            rating: f.rating,
            approved: f.approved,
            deleted: true,
            createdAt: f.createdAt.toISOString(),
          }))}
        />
      </div>
    </section>
  )
}
