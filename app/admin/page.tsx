import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { revalidatePath } from "next/cache"
import FeedbackManager from "@/components/admin/FeedbackManager"

async function approve(formData: FormData) {
  "use server"
  const id = formData.get("id") as string
  if (!id) return
  await prisma.feedback.update({ where: { id }, data: { approved: true } })
  revalidatePath("/admin")
}

async function remove(formData: FormData) {
  "use server"
  const id = formData.get("id") as string
  if (!id) return
  await prisma.feedback.delete({ where: { id } })
  revalidatePath("/admin")
}

export default async function AdminPage() {
  // This page is protected by middleware (HTTP Basic Auth)
  const feedbacks = await prisma.feedback.findMany({ orderBy: { createdAt: "desc" } })

  const active = feedbacks.filter((f) => !(f as any).deleted)
  const total = active.length
  const approved = active.filter((f) => f.approved).length
  const pending = total - approved
  const avgRating = total ? (active.reduce((s, f) => s + (f.rating || 0), 0) / total).toFixed(2) : "0.00"

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Feedback Moderation</h1>
          <a href="/api/logout">
            <Button variant="ghost">Logout</Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Total</p><p className="text-2xl font-semibold">{total}</p></CardContent></Card>
          <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Approved</p><p className="text-2xl font-semibold">{approved}</p></CardContent></Card>
          <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Pending</p><p className="text-2xl font-semibold">{pending}</p></CardContent></Card>
          <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Avg Rating</p><p className="text-2xl font-semibold">{avgRating}</p></CardContent></Card>
        </div>

        {/* Manager */}
        <FeedbackManager
          items={feedbacks.map((f) => ({
            id: f.id,
            name: f.name,
            email: f.email,
            message: f.message,
            rating: f.rating,
            approved: f.approved,
            deleted: (f as any).deleted ?? false,
            createdAt: f.createdAt.toISOString(),
          }))}
        />
      </div>
    </section>
  )
}
