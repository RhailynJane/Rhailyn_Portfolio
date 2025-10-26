"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Translation } from "../lib/translations"

export function useTranslation(initialLanguage = "en") {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage)
  const [t, setT] = useState<Translation>(getTranslation(initialLanguage))
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      // Version check: reset preferences if version mismatch (force new defaults)
      const version = "1.0.0"
      const savedVersion = localStorage.getItem("appVersion")
      if (savedVersion !== version) {
        localStorage.setItem("appVersion", version)
        localStorage.setItem("preferredLanguage", initialLanguage)
        localStorage.setItem("theme", "dark")
        return
      }

      const savedLanguage = localStorage.getItem("preferredLanguage")
      if (savedLanguage && savedLanguage !== currentLanguage) {
        setCurrentLanguage(savedLanguage)
      }
    }
  }, [])

  useEffect(() => {
    setT(getTranslation(currentLanguage))
    // Save to localStorage whenever language changes (only after mount)
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", currentLanguage)
    }
  }, [currentLanguage, mounted])

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language)
  }

  return {
    t,
    currentLanguage,
    changeLanguage,
  }
}
