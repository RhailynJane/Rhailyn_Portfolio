"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Translation } from "../lib/translations"

export function useTranslation(initialLanguage = "en") {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage)
  const [t, setT] = useState<Translation>(getTranslation(initialLanguage))

  useEffect(() => {
    setT(getTranslation(currentLanguage))
  }, [currentLanguage])

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language)
  }

  return {
    t,
    currentLanguage,
    changeLanguage,
  }
}
