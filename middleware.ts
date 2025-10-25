import { NextRequest, NextResponse } from "next/server"

// Routes to protect with HTTP Basic Auth
const protectedMatchers = [/^\/admin(\/.*)?$/, /^\/api\/feedback\/moderation(\/.*)?$/]

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Restricted"' },
  })
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

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const needsAuth = protectedMatchers.some((rx) => rx.test(pathname))
  if (!needsAuth) return NextResponse.next()

  const header = req.headers.get("authorization") || ""
  if (!header.startsWith("Basic ")) return unauthorized()

  try {
    const decoded = Buffer.from(header.replace("Basic ", ""), "base64").toString()
    const [user, pass] = decoded.split(":")

    // Normalize env values to avoid accidental trailing whitespace/newlines
    const expectedUser = (process.env.ADMIN_USER || "").trim()
    const expectedPass = (process.env.ADMIN_PASSWORD || "").trim()

    if (!safeEqual(user || "", expectedUser) || !safeEqual(pass || "", expectedPass)) {
      return unauthorized()
    }

    return NextResponse.next()
  } catch {
    return unauthorized()
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/feedback/moderation/:path*"],
}
