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
        required: "Artist is required",
        string: "Artist must be a text string",
        min: "Artist must be at least 3 characters long",
        max: "Artist must be at most 60 characters long"
      },
      song: {
        required: "Song is required",
        text: "Song must be a valid text",
        min: "Song must be at least 3 characters long",
        max: "Song must be at most 60 characters long"
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