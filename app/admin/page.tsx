import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { revalidatePath } from "next/cache"

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

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Feedback Moderation</h1>
        <Card>
          <CardContent className="pt-6 space-y-4">
            {feedbacks.length === 0 && <p className="text-muted-foreground">No feedback yet.</p>}
            {feedbacks.map((f) => (
              <div key={f.id} className="border rounded p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{f.name}</p>
                    <p className="text-sm text-muted-foreground">{f.email}</p>
                  </div>
                  <div className="text-sm">⭐ {f.rating}</div>
                </div>
                <p className="text-sm italic">“{f.message}”</p>
                <div className="flex gap-2 justify-end">
                  {!f.approved && (
                    <form action={approve}>
                      <input type="hidden" name="id" value={f.id} />
                      <Button size="sm" type="submit">Approve</Button>
                    </form>
                  )}
                  <form action={remove}>
                    <input type="hidden" name="id" value={f.id} />
                    <Button variant="outline" size="sm" type="submit">Delete</Button>
                  </form>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
