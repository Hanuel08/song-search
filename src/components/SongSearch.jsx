import { useState, useEffect } from "react"
import { Loader } from "./Loader.jsx"
import { SongForm } from "./SongForm.jsx"
import { SongDetails } from "./SongDetails.jsx"
import { helpHttp } from "../helpers/helpHttp.js"

export function SongSearch() {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState("")
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return

    const fetchData = async () => {
      const { artist, song } = search
      const get = helpHttp().get

      const artistUrl = `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist?.trim()}`
      const songUrl = `https://api.lyrics.ovh/v1/${artist?.trim()}/${song?.trim()}`

      setLoading(true)

      const [artistRes, songRes] = await Promise.all([
        get(artistUrl),
        get(songUrl),
      ])

      setLoading(false)
      setBio(artistRes)
      setLyric(songRes)
    }

    fetchData()
  }, [search])

  const handleSearch = (data) => {
    setSearch(data)
  }

  const handleBack = () => {
    setSearch(null)
    setLyric("")
    setBio(null)
    setLoading(false)
  }

  const isHome = search === null

  return (
    <div className="flex flex-col gap-6">
      {!isHome && (
        <div>
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
          >
            <span aria-hidden="true">←</span>
            Volver al inicio
          </button>
        </div>
      )}

      <p className="m-0 max-w-xl text-[0.95rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
        Escribe un artista y una canción para ver la letra y una ficha breve del
        intérprete.
      </p>
      <SongForm handleSearch={handleSearch} />

      {isHome && (
        <div className="flex justify-center py-2 mt-14">
          <figure className="m-0 max-w-md overflow-hidden transform">
            <img
              src="/img/cute-cat.png"
              alt="Gato decorativo en la página de inicio"
              className=""
              width={200}
              height={200}
              loading="lazy"
            />
          </figure>
        </div>
      )}

      {loading && (
        <div
          className="flex justify-center py-10 text-violet-600 dark:text-violet-400"
          role="status"
          aria-live="polite"
        >
          <span className="sr-only">Cargando resultados…</span>
          <Loader />
        </div>
      )}
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  )
}
