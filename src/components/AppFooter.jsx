export function AppFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 bg-white px-5 py-5 text-center dark:border-zinc-800 dark:bg-zinc-900">
      <p className="mb-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
        Datos de letras vía{" "}
        <a
          href="https://lyricsovh.docs.apiary.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:underline"
        >
          lyrics.ovh
        </a>
        {" · "}
        Artistas vía{" "}
        <a
          href="https://www.theaudiodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:underline"
        >
          TheAudioDB
        </a>
      </p>
      <p className="text-[0.75rem] text-zinc-500 opacity-90 dark:text-zinc-500">
        © {year} Song Search
      </p>
    </footer>
  )
}
