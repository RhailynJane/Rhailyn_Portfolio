"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Feedback = {
  id: string
  name: string
  email: string
  company?: string | null
  position?: string | null
  message: string
  rating: number
  approved: boolean
  createdAt: string
}

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  useEffect(() => {
    if (authed) loadFeedback()
  }, [authed])

  const authHeader = () => `Basic ${btoa(`${username}:${password}`)}`

  const loadFeedback = async () => {
    const res = await fetch("/api/feedback/moderation", { headers: { authorization: authHeader() } })
    if (res.ok) {
      const data = await res.json()
      setFeedbacks(data)
    }
  }

  const handleApprove = async (id: string) => {
    const res = await fetch("/api/feedback/moderation", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", authorization: authHeader() },
      body: JSON.stringify({ id }),
    })
    if (res.ok) loadFeedback()
  }

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/feedback/moderation?id=${id}`, {
      method: "DELETE",
      headers: { authorization: authHeader() },
    })
    if (res.ok) loadFeedback()
  }

  if (!authed) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Username</Label>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button className="w-full" onClick={() => setAuthed(true)}>
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

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
                    <Button size="sm" onClick={() => handleApprove(f.id)}>
                      Approve
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => handleDelete(f.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
