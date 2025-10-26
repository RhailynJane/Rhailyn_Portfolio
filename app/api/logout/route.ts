import { NextResponse } from "next/server"

export async function GET() {
  // Return 401 with WWW-Authenticate to clear Basic Auth session/prompt re-auth
  return new NextResponse("Logged out", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Logged out", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  })
}
