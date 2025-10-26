"use client"

import { useEffect, useMemo, useState, useTransition } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { cn } from "@/lib/utils"

export type FeedbackItem = {
  id: string
  name: string
  email: string
  message: string
  rating: number
  approved: boolean
  deleted?: boolean
  createdAt: string // ISO string
}

type Props = {
  items: FeedbackItem[]
}

export default function FeedbackManager({ items }: Props) {
  const [query, setQuery] = useState("")
  // Default to "deleted" when every incoming item is deleted (e.g., /admin/deleted page)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "deleted">(
    () => (items.every((i) => i.deleted) ? "deleted" : "all")
  )
  const [sort, setSort] = useState<"newest" | "oldest" | "rating-desc" | "rating-asc">("newest")
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [page, setPage] = useState(1)
  const pageSize = 10
  const [isPending, startTransition] = useTransition()

  // If the source items change and now all are deleted (or not), sync the filter for clarity
  useEffect(() => {
    const allDeleted = items.length > 0 && items.every((i) => i.deleted)
    if (allDeleted && filter !== "deleted") setFilter("deleted")
  }, [items])

  const toggleAll = (checked: boolean) => {
    const map: Record<string, boolean> = {}
    filteredSorted.forEach((f) => (map[f.id] = checked))
    setSelected(map)
  }

  const selectedIds = useMemo(() => Object.keys(selected).filter((id) => selected[id]), [selected])

  const filteredSorted = useMemo(() => {
    let res = items
    if (query.trim()) {
      const q = query.toLowerCase()
      res = res.filter((i) =>
        i.name.toLowerCase().includes(q) ||
        i.email.toLowerCase().includes(q) ||
        i.message.toLowerCase().includes(q)
      )
    }
    if (filter !== "all") {
      if (filter === "deleted") res = res.filter((i) => i.deleted)
      else res = res.filter((i) => !i.deleted && (filter === "approved" ? i.approved : !i.approved))
    } else {
      // Hide deleted by default from "all"
      res = res.filter((i) => !i.deleted)
    }
    res = [...res].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case "rating-desc":
          return b.rating - a.rating
        case "rating-asc":
          return a.rating - b.rating
        case "newest":
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })
    return res
  }, [items, query, filter, sort])

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / pageSize))
  const currentPageItems = filteredSorted.slice((page - 1) * pageSize, page * pageSize)

  const approveOne = async (id: string) => {
    await fetch("/api/feedback/moderation", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    // Trigger full page refresh to get updated data from server
    window.location.reload()
  }

  const deleteOne = async (id: string) => {
    await fetch(`/api/feedback/moderation?id=${encodeURIComponent(id)}` , {
      method: "DELETE",
    })
    // Redirect to deleted page after deletion
    window.location.href = "/admin/deleted"
  }

  const restoreOne = async (id: string) => {
    await fetch("/api/feedback/moderation/restore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    // Trigger full page refresh to get updated data from server
    window.location.reload()
  }

  const bulkApprove = async () => {
    await Promise.all(
      selectedIds.map((id) =>
        fetch("/api/feedback/moderation", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
      )
    )
    window.location.reload()
  }

  const bulkDelete = async () => {
    await Promise.all(
      selectedIds.map((id) =>
        fetch(`/api/feedback/moderation?id=${encodeURIComponent(id)}`, { method: "DELETE" })
      )
    )
    // Redirect to deleted page after bulk deletion
    window.location.href = "/admin/deleted"
  }

  const bulkRestore = async () => {
    await Promise.all(
      selectedIds.map((id) =>
        fetch("/api/feedback/moderation/restore", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
      )
    )
    window.location.reload()
  }

  const exportCSV = () => {
    const cols = ["id","name","email","message","rating","approved","createdAt"]
    const lines = [cols.join(",")] as string[]
    filteredSorted.forEach((i) => {
      const row = [i.id, i.name, i.email, i.message.replaceAll('\n',' ').replaceAll('"','\"'), String(i.rating), String(i.approved), i.createdAt]
      lines.push(row.map((v) => `"${v}"`).join(","))
    })
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `feedback_export_${new Date().toISOString().slice(0,10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            <Select value={sort} onValueChange={(v: any) => { setPage(1); setSort(v) }}>
              <SelectTrigger className="w-40"><SelectValue placeholder="Sort" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="rating-desc">Rating ↓</SelectItem>
                <SelectItem value="rating-asc">Rating ↑</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search name, email, message" value={query} onChange={(e) => { setPage(1); setQuery(e.target.value) }} className="w-72" />
            {/* Only show filter if not all items are deleted */}
            {!items.every(i => i.deleted) && (
              <Select value={filter} onValueChange={(v: any) => { setPage(1); setFilter(v) }}>
                <SelectTrigger className="w-36"><SelectValue placeholder="Filter" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="deleted">Deleted</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            {filter === "deleted" || items.every(i => i.deleted) ? (
              <Button className="shrink-0" variant="secondary" disabled={selectedIds.length === 0 || isPending} onClick={() => startTransition(bulkRestore)}>Restore Selected</Button>
            ) : (
              <>
                <Button className="shrink-0" variant="secondary" disabled={selectedIds.length === 0 || isPending} onClick={() => startTransition(bulkApprove)}>Approve Selected</Button>
                <Button className="shrink-0" variant="destructive" disabled={selectedIds.length === 0 || isPending} onClick={() => startTransition(bulkDelete)}>Delete Selected</Button>
              </>
            )}
            <Button className="shrink-0" variant="outline" onClick={exportCSV}>Export CSV</Button>
          </div>
        </div>

        <div className="border rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox checked={selectedIds.length>0 && selectedIds.length===filteredSorted.length} onCheckedChange={(v: any) => toggleAll(Boolean(v))} aria-label="Select all" />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="min-w-[240px]">Message</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[160px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageItems.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground">No results.</TableCell>
                </TableRow>
              )}
              {currentPageItems.map((f) => (
                <TableRow key={f.id} className={cn(f.approved ? "" : "bg-muted/30") }>
                  <TableCell>
                    <Checkbox checked={!!selected[f.id]} onCheckedChange={(v: any) => setSelected((prev) => ({ ...prev, [f.id]: Boolean(v) }))} aria-label={`Select ${f.name}`} />
                  </TableCell>
                  <TableCell className="font-medium">{f.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{f.email}</TableCell>
                  <TableCell className="text-sm max-w-[420px] truncate" title={f.message}>{f.message}</TableCell>
                  <TableCell>⭐ {f.rating}</TableCell>
                  <TableCell>{f.deleted ? "Deleted" : f.approved ? "Approved" : "Pending"}</TableCell>
                  <TableCell className="text-sm">{new Date(f.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Feedback Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Name</p>
                                <p className="text-sm font-semibold">{f.name}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <p className="text-sm">{f.email}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Rating</p>
                                <p className="text-sm">⭐ {f.rating}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Status</p>
                                <p className="text-sm">{f.deleted ? "Deleted" : f.approved ? "Approved" : "Pending"}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Date</p>
                                <p className="text-sm">{new Date(f.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-2">Message</p>
                              <div className="bg-muted/50 p-4 rounded-md">
                                <p className="text-sm whitespace-pre-wrap">{f.message}</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {f.deleted ? (
                        <Button size="sm" onClick={() => restoreOne(f.id)} disabled={isPending}>Restore</Button>
                      ) : (
                        <>
                          {!f.approved && (
                            <Button size="sm" onClick={() => approveOne(f.id)} disabled={isPending}>Approve</Button>
                          )}
                          <Button variant="outline" size="sm" onClick={() => deleteOne(f.id)} disabled={isPending}>Delete</Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Page {page} / {totalPages} · {filteredSorted.length} items</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={page<=1} onClick={() => setPage((p) => Math.max(1, p-1))}>Previous</Button>
            <Button variant="outline" size="sm" disabled={page>=totalPages} onClick={() => setPage((p) => Math.min(totalPages, p+1))}>Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
