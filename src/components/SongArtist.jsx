function buildWebsiteHref(raw) {
  if (!raw || typeof raw !== "string") return null
  const trimmed = raw.trim()
  if (!trimmed) return null
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed.replace(/^\/+/, "")}`
}

export function SongArtist({ artist }) {
  const {
    strArtist,
    strArtistThumb,
    intBornYear,
    intDiedYear,
    strCountry,
    strGenre,
    strStyle,
    strWebsite,
    strBiography,
  } = artist

  const websiteHref = buildWebsiteHref(strWebsite)
  const lifeSpan = [intBornYear, intDiedYear || "actualidad"]
    .filter(Boolean)
    .join(" — ")

  return (
    <section
      className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
      aria-labelledby="artist-name"
    >
      <div className="flex flex-col gap-4 p-5 min-[480px]:flex-row min-[480px]:items-start">
        {strArtistThumb ? (
          <div className="mx-auto aspect-square w-full max-w-[160px] shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 min-[480px]:mx-0 dark:border-zinc-700 dark:bg-zinc-800">
            <img
              className="block size-full object-cover"
              src={strArtistThumb}
              alt=""
              width={320}
              height={320}
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2
            className="mb-2 text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
            id="artist-name"
          >
            {strArtist}
          </h2>
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {lifeSpan ? (
              <span className="inline-block rounded-md bg-violet-100 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-950/80 dark:text-violet-300">
                {lifeSpan}
              </span>
            ) : null}
            {strCountry ? (
              <span className="inline-block rounded-md bg-violet-100 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-950/80 dark:text-violet-300">
                {strCountry}
              </span>
            ) : null}
            {strGenre ? (
              <span className="inline-block rounded-md bg-violet-100 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-950/80 dark:text-violet-300">
                {strGenre}
              </span>
            ) : null}
            {strStyle ? (
              <span className="inline-block rounded-md bg-violet-100 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-950/80 dark:text-violet-300">
                {strStyle}
              </span>
            ) : null}
          </div>
          {websiteHref ? (
            <a
              className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold no-underline hover:underline"
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitio oficial
            </a>
          ) : null}
        </div>
      </div>
      {strBiography ? (
        <p className="m-0 max-h-[min(50vh,360px)] overflow-y-auto border-t border-zinc-200 bg-zinc-50/90 px-5 py-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300">
          {strBiography}
        </p>
      ) : null}
    </section>
  )
}
