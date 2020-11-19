import PokemonStat from './PokemonStat'
import { calculatePokemonStats } from '../utils/pokemon-stats'

export default function PokemonStatList({ pokemonStats, color }) {
  const stats = calculatePokemonStats(pokemonStats)

  return (
    <div style={{ padding: '20px 0' }}>
      {stats.map(stat => (
        <PokemonStat
          key={stat.statKey}
          color={color}
          stat={stat}
        />
      ))}
    </div>
  )
}
