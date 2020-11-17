import { selector, selectorFamily } from 'recoil'
import axios from 'axios'

import apiConfig from '../../config/api'

export const pokemonListQuery = selector({
  key: 'pokemonListQuery',
  get: async () => {
    // retrive pokemon list
    const { data: pokemonList } = await axios.get(`${apiConfig.coreUrl}/pokemon`)
    // map pokemon list to have full resolution image url
    return pokemonList.map(pokemon => ({
      ...pokemon,
      _image: `${apiConfig.imageUrl}/images/pokemon/${pokemon.id}.png`
    }))
  }
})

export const pokemonQuery = selectorFamily({
  key: 'pokemonQuery',
  get: pokemonId => async () => {
    // retrive pokemon data by specific id
    const { data: pokemon } = await axios.get(`${apiConfig.coreUrl}/pokemon/${pokemonId}`)
    return {
      ...pokemon,
      _image: `${apiConfig.imageUrl}/images/pokemon/${pokemon.id}.png`
    }
  }
})
