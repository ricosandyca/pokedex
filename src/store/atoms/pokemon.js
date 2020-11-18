import { atomFamily } from 'recoil'
import { pokemonListQuery } from '../actions/pokemon'

export const pokemonState = atomFamily({
  key: 'pokemonState',
  default: async () => {
    // retrive default pokemon list data
    return await pokemonListQuery()
  }
})
