import { capitalize } from './text'

/**
 * Map pokemon data
 * By adding custom sttributes
 * 
 * @param {Object} pokemon data
 * @returns map pokemon data
 */
export function mapPokemonData(pokemon) {
  return {
    ...pokemon,
    _name: capitalize(pokemon.name),
    _image: pokemon.sprites.other['dream_world'].front_default
      || pokemon.sprites.other['official-artwork'].front_default
      || '/assets/pokemon/pokemon-default.svg'
  }
}
