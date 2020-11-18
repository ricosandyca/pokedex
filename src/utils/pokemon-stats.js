export const statInfo = {
  hp: {
    max: 300, // @max - 255
    displayName: 'HP'
  },
  attack: {
    max: 200, // @max - 180
    displayName: 'Attack'
  },
  defense: {
    max: 250, // @max - 230
    displayName: 'Attack'
  },
  'special-attack': {
    max: 200, // @max - 180
    displayName: 'Special Attack'
  },
  'special-defense': {
    max: 250, // @max - 230
    displayName: 'Special Attack'
  },
  speed: {
    max: 200, // @max - 180
    displayName: 'Speed'
  }
}

/**
 * Calculate and map pokemon stat
 * 
 * @param {Object} stats - Pokemon stats to calculate
 * @returns calculated stats
 */
export function calculatePokemonStats(stats) {
  let calculatedStats = []
  // remove unknown stats
  for (const stat of stats) {
    const statKey = stat.stat.name
    if (statKey in statInfo)
      calculatedStats.push({
        statKey,
        displayName: statInfo[statKey].displayName,
        baseStat: stat.base_stat,
        percentage: (stat.base_stat / statInfo[statKey].max) * 100,
        stringFormat: `${stat.base_stat}/${statInfo[statKey].max}`
      })
  }
  return calculatedStats
}
