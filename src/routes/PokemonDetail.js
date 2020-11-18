import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { selectPokemonById } from '../store/selectors/pokemon'

export default function PokemonDetail() {
  const { pokemonId } = useParams()
  const pokemon = useRecoilValue(selectPokemonById(pokemonId))
  console.log(pokemon)

  return (
    <div>
      Show the defail pokemon of id: {pokemonId}
    </div>
  )
}
