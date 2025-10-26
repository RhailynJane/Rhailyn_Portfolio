import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function parseDb(urlStr?: string) {
  try {
    if (!urlStr) return { present: false }
    const u = new URL(urlStr)
    const host = u.hostname
    const port = u.port || (u.protocol === "postgresql:" ? "5432" : "")
    const params = Object.fromEntries(u.searchParams.entries()) as Record<string, string>
    const sslmode = params["sslmode"] || ""
    const pooled = params["pgbouncer"] === "true" || port === "6543"
    return { present: true, host, port, sslmode, pooled }
  } catch {
    return { present: false }
  }
}

export async function GET() {
  const dbInfo = parseDb(process.env.DATABASE_URL)

  try {
    // Simple connectivity check
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await prisma.$queryRaw`SELECT 1 AS ok`
    return NextResponse.json({ ok: true, db: dbInfo, result })
  } catch (error: any) {
    const message = error?.message || String(error)
    return NextResponse.json({ ok: false, db: dbInfo, error: message }, { status: 503 })
  }
}
