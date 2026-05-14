/**
 * Capitaliza la primera letra de una palabra y deja el resto en minúsculas.
 * @param {string} word
 * @returns {string}
 */
export function capitalizeWord(word) {
  if (word == null || typeof word !== "string") return ""
  const w = word.trim()
  if (!w) return ""
  return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
}
