import { atomFamily } from 'recoil'
import { pokemonListQuery, pokemonTypeQuery } from '../actions/pokemon'

export const pokemonState = atomFamily({
  key: 'pokemonState',
  default: async (state) => {
    // retrive default pokemon list data as default value
    if (state === 'init') return await pokemonListQuery()
    return { results: [] }
  }
})

export const filteredPokemonState = atomFamily({
  key: 'filteredPokemonState',
  default: async (type) => {
    // retrive pokemon type data
    const { pokemon: results } = await pokemonTypeQuery(type)
    return {
      results
    }
  }
})
