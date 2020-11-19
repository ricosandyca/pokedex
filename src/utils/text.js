/**
 * Capitalize text each words
 * 
 * @param {String} text - Text to be capitalized
 * @returns capitalized text
 */
export function capitalize(text) {
  // split text by space or dash
  const chars = text.split(/[ -]/g)
  return chars.reduce((acc, curr) => (
    acc + curr.charAt(0).toUpperCase() + curr.slice(1) + ' '
  ), '')
}
