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

  return (
    <div className="flex flex-col gap-6">
      <p className="m-0 max-w-xl text-[0.95rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
        Escribe un artista y una canción para ver la letra y una ficha breve del
        intérprete.
      </p>
      <SongForm handleSearch={handleSearch} />
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
