import { atom } from 'recoil'

export const pokemonState = atom({
  key: 'pokemonState',
  default: {
    page: 1,
    limit: 12,
    pokemons: []
  }
})
