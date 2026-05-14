import { Message } from "./Message.jsx"
import { SongLyric } from "./SongLyric.jsx"
import { SongArtist } from "./SongArtist.jsx"

export function SongDetails ({ search, lyric, bio, error }) {
  if (!lyric || !bio) return null

  return (
    <div>
      {/* <h2>Song Details</h2> */}
      {lyric.err || lyric.error || lyric.name === "AbortError" ? 
      (
        <Message msg={`Error: no existe la cancion <em>"${search.song}"<em/>`} bgColor="#dc3545" />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}


      {bio.artists ? 
      (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message msg={`Error: no existe el interprete <em>"${search.artist}"<em/>`} bgColor="#dc3545" />
      )}
    </div>
  )
}