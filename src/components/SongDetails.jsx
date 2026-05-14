import { Message } from "./Message.jsx"
import { SongLyric } from "./SongLyric.jsx"
import { SongArtist } from "./SongArtist.jsx"

export function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null

  return (
    <div className="grid gap-5 min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] min-[900px]:items-start">
      {lyric.err || lyric.error || lyric.name === "AbortError" ? (
        <Message
          msg={`No se encontró la letra de <em>"${search.song}"</em>.`}
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`No hay datos del intérprete <em>"${search.artist}"</em>.`}
        />
      )}
    </div>
  )
}
