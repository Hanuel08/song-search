import { useState, useEffect } from "react"
import { Loader } from "./Loader.jsx"
import { SongForm } from "./SongForm.jsx"
import { SongDetails } from "./SongDetails.jsx"
import { helpHttp } from "../helpers/helpHttp.js"

export function SongSearch () {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState("")
  //const [artist, setArtist] = useState("")
  const [bio, setBio] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if (search === null) return

    const fetchData = async ()=> {
      const { artist, song } = search
      const get = helpHttp().get

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist?.trim()}`
      let songUrl = `https://api.lyrics.ovh/v1/${artist?.trim()}/${song?.trim()}`

      console.log(artistUrl)
      console.log(songUrl)

      setLoading(true)

      const [artistRes, songRes] = await Promise.all([
        get(artistUrl),
        get(songUrl)
      ])

      console.log(artistRes, songRes)


      setLoading(false)
      setBio(artistRes)
      setLyric(songRes)
    }

    fetchData()
  }, [search])

  const handleSearch = (data)=> {
    //const { artist, song } = search

    console.log(data)
    setSearch(data)
  }


  return (
    <div>
      {/* <h2>Song Search</h2> */}
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio} error={error} />}
    </div>
  )
}