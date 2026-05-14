import { useEffect, useState } from "react"
import { AppHeader } from "./components/AppHeader.jsx"
import { AppFooter } from "./components/AppFooter.jsx"
import { SongSearch } from "./components/SongSearch.jsx"

const THEME_STORAGE_KEY = "song-search-theme"

function readInitialTheme() {
  if (typeof window === "undefined") return "light"
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function App() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }

  return (
    <div className="flex min-h-dvh flex-col font-sans">
      <AppHeader theme={theme} onToggleTheme={toggleTheme} />
      <main
        className="mx-auto w-full max-w-5xl flex-1 px-5 py-5 pb-10"
        id="contenido-principal"
      >
        <SongSearch />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
