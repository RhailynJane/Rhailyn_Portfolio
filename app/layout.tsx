import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeContextProvider } from "@/components/theme-context"
import { Toaster } from "@/components/toaster"
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Rhailyn Jane Cona - Portfolio",
  description: "Software Developer Portfolio - Showcasing projects, skills, and experience in full-stack development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`} suppressHydrationWarning={true}>
      <body>
        <ThemeContextProvider>
          {children}
          <Toaster />
          {/* Vercel Web Analytics */}
          <Analytics />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
