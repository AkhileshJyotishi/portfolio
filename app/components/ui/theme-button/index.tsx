"use client"
import { useEffect, useState } from "react"

import { useTheme } from "next-themes"
import { CiDark, CiLight } from "react-icons/ci"

import ThemeToggleLoader from "../../skeleton-loaders/theme-toggle"

export default function Theme() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light")
  }
  useEffect(() => setHasMounted(true), [])

  if (!hasMounted) return <ThemeToggleLoader />

  return (
    <button
      onClick={toggleTheme}
      className={`group: rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-500 transition-transform duration-300 dark:border-zinc-800 dark:bg-primary-bg dark:text-primary-color ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <CiLight /> : <CiDark />}
    </button>
  )
}
