import { NextRequest, NextResponse } from "next/server"

// Routes to protect with app-level session auth
const protectedMatchers = [/^\/admin(\/.*)?$/, /^\/api\/feedback\/moderation(\/.*)?$/]

function redirectToSignin(req: NextRequest) {
  const url = new URL("/admin/signin", req.url)
  return NextResponse.redirect(url)
}

// Timing-safe string compare that works in the middleware (Edge) runtime
function safeEqual(a: string, b: string) {
  const enc = new TextEncoder()
  const aBytes = enc.encode(a)
  const bBytes = enc.encode(b)
  const len = Math.max(aBytes.length, bBytes.length)
  let result = 0
  for (let i = 0; i < len; i++) {
    const x = aBytes[i] ?? 0
    const y = bBytes[i] ?? 0
    result |= x ^ y
  }
  return result === 0 && aBytes.length === bBytes.length
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow the signin page and login/logout APIs without auth
  const publicPaths = ["/admin/signin", "/api/admin/login", "/api/logout"]
  if (publicPaths.includes(pathname)) return NextResponse.next()

  const needsAuth = protectedMatchers.some((rx) => rx.test(pathname))
  if (!needsAuth) return NextResponse.next()

  // Verify session cookie matches expected token derived from env
  const session = req.cookies.get("admin_session")?.value || ""
  const expectedUser = (process.env.ADMIN_USER || "").trim()
  const expectedPass = (process.env.ADMIN_PASSWORD || "").trim()
  const secret = (process.env.ADMIN_SECRET || "default-secret").trim()

  const data = new TextEncoder().encode(`${expectedUser}:${expectedPass}:${secret}`)
  const digest = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(digest))
  const expectedToken = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

  if (!safeEqual(session, expectedToken)) {
    return redirectToSignin(req)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/feedback/moderation/:path*"],
}
