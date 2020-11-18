import { useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { pokemonId } = useParams()

  return (
    <div>
      Show the defail pokemon of id: {pokemonId}
    </div>
  )
}
