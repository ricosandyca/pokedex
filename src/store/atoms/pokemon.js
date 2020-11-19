import { atomFamily } from 'recoil'
import { pokemonListQuery, pokemonTypeQuery, pokemonQueryByIds } from '../actions/pokemon'

export const pokemonState = atomFamily({
  key: 'pokemonState',
  default: async (state) => {
    // retrive default pokemon list data as default value
    if (state === 'init') return await pokemonListQuery()
    return { results: [] }
  }
})

export const filterPokemonState = atomFamily({
  key: 'filterPokemonState',
  default: async ({ state, limit, type }) => {
    // retrive pokemon type data
    const { pokemon: metadata = [] } = await pokemonTypeQuery(type)

    // init default value
    let results = []
    if (state === 'init') {
      const pokemonIds = metadata
        .slice(0, limit)
        .map(({ pokemon }) => pokemon.name)
      results = await pokemonQueryByIds(pokemonIds)
    }

    return {
      metadata,
      results
    }
  }
})
