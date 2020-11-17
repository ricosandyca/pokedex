import { atomFamily } from 'recoil'
import { pokemonListQuery } from '../actions/pokemon'

export const pokemonState = atomFamily({
  key: 'pokemonState',
  default: async () => {
    const page = 0
    const limit = 12
    // retrive default pokemon list data
    const pokemons = await pokemonListQuery(12, page * limit)
    return { limit, page: page + 1, pokemons }
  }
})
