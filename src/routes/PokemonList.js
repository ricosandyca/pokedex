import { useRecoilValue } from 'recoil'

import { pokemonListQuery, pokemonQuery } from '../store/selectors/pokemon'

export default function PokemonList() {
  const pokemonList = useRecoilValue(pokemonListQuery)
  const pokemon = useRecoilValue(pokemonQuery(1))
  console.log('pokemonList', pokemonList)
  console.log('pokemon', pokemon)

  return (
    <>
      The pokemon list here
    </>
  )
}
