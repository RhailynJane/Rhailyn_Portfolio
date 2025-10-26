// Lightweight input validation helpers to reduce risk of injection and invalid data

export const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function isUUID(v: unknown): v is string {
  return typeof v === "string" && UUID_REGEX.test(v)
}

export function sanitizeString(v: unknown, maxLen = 256): string {
  if (typeof v !== "string") return ""
  const s = v.trim()
  return s.length > maxLen ? s.slice(0, maxLen) : s
}

export function isEmail(v: unknown): v is string {
  if (typeof v !== "string") return false
  const s = v.trim()
  if (s.length === 0 || s.length > 254) return false
  // RFC 5322 simplified
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export function isSafeCategory(v: unknown, maxLen = 64): v is string {
  if (typeof v !== "string") return false
  const s = v.trim()
  if (s.length === 0 || s.length > maxLen) return false
  // allow letters, numbers, spaces, dashes, underscores, slashes
  return /^[A-Za-z0-9 _\-/]+$/.test(s)
}

export function clampNumber(n: unknown, min: number, max: number, fallback: number): number {
  const num = typeof n === "number" ? n : Number(n)
  if (Number.isNaN(num)) return fallback
  return Math.min(max, Math.max(min, num))
}
