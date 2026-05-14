export function Message({ msg }) {
  return (
    <div
      className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-snug text-red-800 [&_em]:font-extrabold [&_em]:not-italic dark:border-red-500/40 dark:bg-red-950/45 dark:text-red-100"
      role="alert"
    >
      <p className="m-0" dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  )
}
