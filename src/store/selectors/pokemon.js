import { selectorFamily } from 'recoil'

import { pokemonState } from '../atoms/pokemon'
import { pokemonQuery } from '../actions/pokemon'

export const selectPokemonById = selectorFamily({
  key: 'selectPokemonById',
  get: pokemonId => async ({ get }) => {
    let pokemon
    // try to retrive pokemon detail from current state
    const { pokemons } = get(pokemonState)
    pokemon = pokemons.find(({ id }) => id == pokemonId)
    // if pokemon detail found
    if (pokemon) return pokemon

    // retrive pokemon from API
    pokemon = await pokemonQuery()
    return pokemon
  }
})
