import axios from 'axios'
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
      pokemons.push({
        ...data,
        _name: data.name.replace(/[-]/g, ' '),
        _image: data.sprites.other['dream_world'].front_default
          || data.sprites.other['official-artwork'].front_default
      })
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
    return {
      ...data,
      _name: data.name.replace(/[-]/g, ' '),
      _image: data.sprites.other['dream_world'].front_default
        || data.sprites.other['official-artwork'].front_default
    }
  } catch {
    return undefined
  }
}

/**
 * 
 * @param {String} pokemonId - Id of pokemon to retrive
 * @returns {Object} Pokemon species data
 */
export const pokemonSpeciesQuery = async (pokemonId) => {
  try {
    // retrive pokemon species data
    return await axios.get(`${apiConfig.coreUrl}/pokemon-species/${pokemonId}`)
  } catch {
    return undefined
  }
}
