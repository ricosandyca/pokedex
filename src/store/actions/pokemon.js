import axios from 'axios'
import apiConfig from '../../config/api'

/**
 * Retrive pokemon list
 * 
 * @param {String} next - Next pagination url
 * @returns {Object} Pokemon list
 */
export const pokemonListQuery = async (next = `${apiConfig.coreUrl}/pokemon?limit=12`) => {
  // retrive pokemon list from API
  const { data } = await axios.get(next)
  
  // retrive details of each pokemon list
  let pokemons = []
  for (const pokemon of data.results) {
    // get pokemon detail
    const { data } = await axios.get(pokemon.url)
    // push _image attribute to pokemon detail
    pokemons.push({
      ...data,
      _image: `${apiConfig.imageUrl}/images/pokemon/${data.id}.png`
    })
  }

  return {
    ...data,
    results: pokemons
  }
}

/**
 * Retrive pokemon detail by specific id
 * 
 * @param {String} pokemonId - Pokemon id to retrive
 * @returns {Object} Pokemon detail
 */
export const pokemonQuery = async (pokemonId) => {
  // retrive pokemon detail by id
  const { data: pokemon } = await axios.get(`${apiConfig.coreUrl}/pokemon/${pokemonId}`)
  return pokemon
}
