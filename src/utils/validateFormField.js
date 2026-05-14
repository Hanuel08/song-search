import { validator } from "../helpers/validator.js"

export const validateFormField = (data) => {
  const { validate } = validator()
  const errors = validate({
    data,
    rules: {
      artist: "required|string|min:3|max:60",
      song: "required|text|min:3|max:60",
    },
    messages: {
      artist: {
        required: "El artista es obligatorio",
        string: "El artista debe ser texto (sin números)",
        min: "El artista debe tener al menos 3 caracteres",
        max: "El artista no puede superar 60 caracteres"
      },
      song: {
        required: "La canción es obligatoria",
        text: "La canción debe ser un texto válido",
        min: "La canción debe tener al menos 3 caracteres",
        max: "La canción no puede superar 60 caracteres"
      }
    }
  })

  let value = Object.keys(data)[0]
  if (Object.hasOwn(errors, value)) {
    return {
      ...errors,
      [value]: errors[value]
    }
  }

  return errors
}