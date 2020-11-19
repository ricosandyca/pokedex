import axios from 'axios'
import { mapPokemonData } from '../../utils/pokemon-data'
import apiConfig from '../../config/api'

/**
 * Retrive pokemon list
 * 
 * @param {String} next - Next pagination url
 * @returns {Object} Pokemon list
 */
export const pokemonListQuery = async (next = `${apiConfig.coreUrl}/pokemon?limit=12`) => {
  try {
    // retrive pokemon list from API
    const { data } = await axios.get(next)

    // retrive details of each pokemon list
    let pokemons = []
    for (const pokemon of data.results) {
      // get pokemon detail
      const { data } = await axios.get(pokemon.url)
      pokemons.push(mapPokemonData(data))
    }

    return {
      ...data,
      results: pokemons
    }
  } catch {
    return {
      results: []
    }
  }
}

/**
 * Retrive pokemon detail by specific id
 * 
 * @param {String} pokemonId - Pokemon id to retrive
 * @returns {Object} Pokemon detail
 */
export const pokemonQuery = async (pokemonId) => {
  try {
    // retrive pokemon detail by id
    const { data } = await axios.get(`${apiConfig.coreUrl}/pokemon/${pokemonId}`)
    return mapPokemonData(data)
  } catch {
    return undefined
  }
}
