import axios from 'axios'
import { mapPokemonData } from '../../utils/pokemon-data'
import apiConfig from '../../config/api'

/**
 * Retrive pokemon list
 * 
 * @param {String} next - Next pagination url
 * @returns {Promise<Object>} Pokemon list
 */
export const pokemonListQuery = async (next = `${apiConfig.coreUrl}/pokemon?limit=12`) => {
  try {
    // retrive pokemon list from API
    const { data } = await axios.get(next)

    // retrive details of each pokemon list
    const pokemonIds = data.results.map(pokemon => pokemon.name)
    const promises = []
    for (const pokemonId of pokemonIds) {
      promises.push(pokemonQuery(pokemonId))
    }
    const pokemons = await Promise.all(promises)

    return {
      ...data,
      results: pokemons.map(pokemon => mapPokemonData(pokemon))
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
 * @returns {Promise<Object>} Pokemon detail
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

/**
 * Retrive pokemon detail by multiple ids
 * 
 * @param {Array} pokemonIds - Pokemon ids to retrive
 * @returns {Promise<Array>} pokemon details
 */
export const pokemonQueryByIds = async (pokemonIds) => {
  try {
    const promises = []
    for (const pokemonId of pokemonIds) {
      promises.push(pokemonQuery(pokemonId))
    }
    return await Promise.all(promises)
  } catch {
    return []
  }
}

/**
 * Retrive pokemon type data
 * 
 * @param {String} typeId - Type id to retrive
 * @returns {Promise<Object>} type data
 */
export const pokemonTypeQuery = async (typeId) => {
  try {
    // retrive pokemon type by id
    const { data } = await axios.get(`${apiConfig.coreUrl}/type/${typeId}`)
    return data
  } catch {
    return {}
  }
}
