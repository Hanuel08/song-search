import { useState } from "react"

import { validateFormField } from "../utils/validateFormField.js"

const emptyForm = {
  artist: "",
  song: "",
}

export function SongForm({ handleSearch }) {
  const [form, setForm] = useState(emptyForm)
  const [formErrors, setFormErrors] = useState({
    artist: null,
    song: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })

    const error = validateFormField({ [name]: value })
    if (Object.hasOwn(error, name)) {
      setFormErrors({
        ...formErrors,
        [name]: error[name],
      })
    } else {
      setFormErrors({
        ...formErrors,
        [name]: null,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const artistErrors = validateFormField({ artist: form.artist })
    const songErrors = validateFormField({ song: form.song })
    const nextErrors = {
      artist: artistErrors.artist ?? null,
      song: songErrors.song ?? null,
    }
    setFormErrors(nextErrors)
    if (nextErrors.artist || nextErrors.song) return

    handleSearch(form)
    setForm(emptyForm)
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold uppercase tracking-wide text-zinc-800 dark:text-zinc-200"
              htmlFor="artist"
            >
              Artista
            </label>
            <input
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 transition focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
              type="text"
              name="artist"
              id="artist"
              placeholder="Nombre del artista"
              value={form.artist}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.artist && (
              <p className="m-0 text-xs font-semibold text-red-600 dark:text-red-400">
                {formErrors.artist}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-bold uppercase tracking-wide text-zinc-800 dark:text-zinc-200"
              htmlFor="song"
            >
              Canción
            </label>
            <input
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 transition focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
              type="text"
              name="song"
              id="song"
              placeholder="Título de la canción"
              value={form.song}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.song && (
              <p className="m-0 text-xs font-semibold text-red-600 dark:text-red-400">
                {formErrors.song}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 px-5 py-2.5 text-sm font-bold tracking-wide text-white shadow-md shadow-emerald-600/30 transition hover:brightness-110 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:from-emerald-400 dark:to-emerald-600 dark:text-zinc-950 dark:shadow-emerald-400/25"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  )
}
