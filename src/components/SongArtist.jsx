
export function SongArtist ({ artist }) {
  const { strArtist, strArtistThumb, intBornYear, intDiedYear, strCountry, strGenre, strStyle, strWebsite, strBiography } = artist
  return (
    <section>
      <h3>{strArtist}</h3>
      <img src={strArtistThumb} alt={strArtist} />
      <p>{intBornYear} - {intDiedYear || "Present"}</p>
      <p>{strCountry}</p>
      <p>{strGenre} - {strStyle}</p>
      <p>{}</p>
      <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">Oficial Website</a>
      <p>{strBiography}</p>
    </section>
  )
}