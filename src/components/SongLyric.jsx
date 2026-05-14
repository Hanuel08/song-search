export function SongLyric({ title, lyrics }) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
      <h2 className="m-0 border-b border-zinc-200 px-5 pb-3.5 pt-5 text-xl font-extrabold tracking-tight text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
        {title}
      </h2>
      <blockquote className="m-0 max-h-[min(70vh,520px)] overflow-y-auto scroll-py-2 px-5 py-5 pr-3 font-serif text-[1.05rem] leading-[1.75] tracking-wide text-zinc-700 [scrollbar-gutter:stable] whitespace-pre-wrap dark:text-zinc-300">
        {lyrics}
      </blockquote>
    </article>
  )
}
