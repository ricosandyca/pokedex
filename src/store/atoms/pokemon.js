import { atomFamily } from 'recoil'
import { pokemonListQuery } from '../actions/pokemon'

export const pokemonState = atomFamily({
  key: 'pokemonState',
  default: async (state) => {
    // retrive default pokemon list data as default value
    if (state === 'init') return await pokemonListQuery()
    return { results: [] }
  }
})
