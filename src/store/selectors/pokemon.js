import { selector, selectorFamily } from 'recoil'
import axios from 'axios'

import apiConfig from '../../config/api'

export const pokemonListQuery = selector({
  key: 'pokemonListQuery',
  get: async () => {
    const pokemonList = await axios.get(`${apiConfig.coreUrl}/pokemon`)
    return pokemonList.data
  }
})

export const pokemonQuery = selectorFamily({
  key: 'pokemonQuery',
  get: pokemonId => async () => {
    const pokemon = await axios.get(`${apiConfig.coreUrl}/pokemon/${pokemonId}`)
    return pokemon.data
  }
})
