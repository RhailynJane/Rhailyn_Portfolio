import { cookies } from "next/headers"

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false
  let out = 0
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return out === 0
}

export async function isAdminRequestAuthorized(): Promise<boolean> {
  try {
    const jar = await cookies()
    const cookie = jar.get("admin_session")?.value || ""
    const expectedUser = (process.env.ADMIN_USER || "").trim()
    const expectedPass = (process.env.ADMIN_PASSWORD || "").trim()
    const secret = (process.env.ADMIN_SECRET || "default-secret").trim()

    const data = new TextEncoder().encode(`${expectedUser}:${expectedPass}:${secret}`)
    const digest = await crypto.subtle.digest("SHA-256", data)
    const token = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("")

    return safeEqual(cookie, token)
  } catch {
    return false
  }
}
