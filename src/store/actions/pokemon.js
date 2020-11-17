import axios from 'axios'
import apiConfig from '../../config/api'

export const pokemonListQuery = async (limit, offset = 0) => {
  // retrive pokemon list from API
  const { data: { results, count } } = await axios
    .get(`${apiConfig.coreUrl}/pokemon?limit=${limit}&offset=${offset}`)
  
  // retrive details of each pokemon list
  let pokemons = []
  for (const pokemon of results) {
    // get pokemon detail
    const { data } = await axios.get(pokemon.url)
    // push _image attribute to pokemon detail
    pokemons.push({
      ...data,
      _image: `${apiConfig.imageUrl}/images/pokemon/${data.id}.png`
    })
  }

  return { count, pokemons }
}

export const pokemonQuery = async (pokemonId) => {
  // retrive pokemon detail by id
  const { data: pokemon } = await axios.get(`${apiConfig.coreUrl}/pokemon?${pokemonId}`)
  return pokemon
}
