import { useState } from "react"

import { validateFormField } from "../utils/validateFormField.js"

const emptyForm = {
  artist: "",
  song: ""
}

export function SongForm ({ handleSearch }) {
  const [form, setForm] = useState(emptyForm)
  const [formErrors, setFormErrors] = useState({
    artist: null,
    song: null
  })

  const handleChange = (e)=> {
    console.log("HOLA AMIGOOO")
    const { name, value } = e.target
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    let error = validateFormField({ [name]: value })
    if (Object.hasOwn(error, name)) {
      setFormErrors({
        ...formErrors,
        [name]: error[name]
      })
    } else {
      setFormErrors({
        ...formErrors,
        [name]: null
      })
    }
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    setFormErrors({ ...validateFormField(form) })
    if (Object.keys(formErrors).find(error => formErrors[error] !== null)) return

    handleSearch(form)
    setForm(emptyForm)
  }


  return (
    <div>
      {/* <h2>Song Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="artist">Artist</label>
          <input 
            className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
            type="text" name="artist" id="artist" placeholder="Type a artist" value={form.artist} onChange={(e)=> handleChange(e)} />
            {formErrors.artist && <p className="text-red-500 text-sm">{formErrors.artist}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="mr-4 text-gray-600 text-base font-bold" htmlFor="song">Song</label>
          <input 
            className="border-2 border-gray-300 text-gray-600 rounded-lg p-2 px-4 text-sm w-lg outline-none focus:border-blue-300 hover:border-blue-300" 
            type="text" name="song" id="song" placeholder="Type a song name" value={form.song} onChange={(e)=> handleChange(e)} />
            {formErrors.lyric && <p className="text-red-500 text-sm">{formErrors.lyric}</p>}
        </div>
        <input 
        type="submit"
        value="SEARCH"
        className="py-2 px-4 w-sm rounded-md font-bold text-sm text-white bg-green-500 hover:bg-green-600 cursor-pointer transition-all duration-300" />
      </form>
    </div>
  )
}