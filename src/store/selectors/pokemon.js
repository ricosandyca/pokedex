import { selector, selectorFamily } from 'recoil'
import axios from 'axios'

import apiConfig from '../../config/api'

export const pokemonListQuery = selector({
  key: 'pokemonListQuery',
  get: async () => {
    let pokemonList = []
    // retrive pokemon list
    const { data } = await axios.get(`${apiConfig.coreUrl}/pokemon?limit=12`)
    // retrive detail each pokemon
    for (const pokemon of data.results) {
      const { data: pokemonDetail } = await axios.get(pokemon.url)
      pokemonList.push({
        ...pokemonDetail,
        _image: `${apiConfig.imageUrl}/images/pokemon/${pokemonDetail.id}.png`
      })
    }
    return pokemonList
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
