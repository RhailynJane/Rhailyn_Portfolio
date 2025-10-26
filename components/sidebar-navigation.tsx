"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Home, User, Code, FolderOpen, Mail, MessageSquare, Menu, Sun, Moon, Languages } from "lucide-react"
import { useThemeContext } from "@/components/theme-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Translation } from "@/lib/translations"

const navigationItems = [
  { id: "home", label: "home", icon: Home },
  { id: "about", label: "about", icon: User },
  { id: "skills", label: "skills", icon: Code },
  { id: "projects", label: "projects", icon: FolderOpen },
  { id: "contact", label: "contact", icon: Mail },
  { id: "feedbacks", label: "feedbacks", icon: MessageSquare },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fil", name: "Filipino", flag: "🇵🇭" },
  { code: "fr", name: "French", flag: "🇫🇷" },
]

interface SidebarNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  currentLanguage: string
  onLanguageChange: (language: string) => void
  translations: Translation
}

export function SidebarNavigation({
  activeSection,
  onSectionChange,
  currentLanguage,
  onLanguageChange,
  translations,
}: SidebarNavigationProps) {
  const { theme, toggleTheme } = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  const NavigationContent = () => (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      {/* Header */}
      <div className="p-6 border-b border-purple-500/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-sans">Rhailyn Jane Cona</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 font-serif">Software Developer</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => {
                onSectionChange(item.id)
                setIsOpen(false)
              }}
            >
              <Icon className="h-4 w-4" />
              <span className="font-serif">
                {translations.navigation[item.label as keyof typeof translations.navigation]}
              </span>
            </Button>
          )
        })}
      </nav>

      {/* Footer Controls */}
      <div className="p-4 border-t border-purple-500/20 space-y-3">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="font-serif">
            {theme === "dark" ? translations.navigation.lightMode : translations.navigation.darkMode}
          </span>
        </Button>

        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
            >
              <Languages className="h-4 w-4" />
              <span className="font-serif">
                {languages.find((lang) => lang.code === currentLanguage)?.name || "English"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gray-100 dark:bg-gray-900 border-purple-500/20">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => onLanguageChange(language.code)}
                className="gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile/All Screen Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="fixed top-4 left-4 z-40 bg-gray-200/80 dark:bg-black/50 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-300/80 dark:hover:bg-black/70 border border-purple-500/30"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 border-purple-500/20">
          <NavigationContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
