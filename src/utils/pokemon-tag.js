/**
 * Get pokemon tage by pokemon id
 * Example 10 -> #010
 * 
 * @param {String|Number} pokemonId - Pokemon id to be map
 * @param {Number} length 
 * @returns pokemon tag
 */
export default function getPokemonTag(pokemonId, length = 3) {
  const strId = typeof pokemonId !== 'string'
    ? pokemonId.toString()
    : pokemonId
  return `#${strId.padStart(length, '0')}`
}
