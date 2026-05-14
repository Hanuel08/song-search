export function AppHeader({ theme, onToggleTheme }) {
  const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/85 shadow-sm shadow-zinc-900/5 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/85 dark:shadow-black/20">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-100 text-lg text-violet-600 dark:bg-violet-950/80 dark:text-violet-400"
            aria-hidden="true"
          >
            ♪
          </span>
          <div className="min-w-0">
            <p className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Song Search
            </p>
            <p className="mt-0.5 text-xs leading-snug text-zinc-500 dark:text-zinc-400">
              Letras y datos del artista
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-violet-50 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-violet-950/50"
          onClick={onToggleTheme}
          aria-pressed={isDark}
          aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
        >
          <span className="text-base leading-none" aria-hidden="true">
            {isDark ? "☀️" : "🌙"}
          </span>
          <span>{isDark ? "Claro" : "Oscuro"}</span>
        </button>
      </div>
    </header>
  )
}
