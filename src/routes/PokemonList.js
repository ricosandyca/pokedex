import { useRecoilState } from 'recoil'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { pokemonState } from '../store/atoms/pokemon'
import { pokemonListQuery } from '../store/actions/pokemon'
import PokemonCard from '../components/PokemonCard'

const useStyles = makeStyles({
  container: {
    alignSelf: 'center',
    padding: '5%'
  }
})

export default function PokemonList() {
  const classes = useStyles()
  const [pokemonValue, setPokemonValue] = useRecoilState(pokemonState())

  const fetchNextPokemonList = () => {
    const { limit, page, pokemons } = pokemonValue
    pokemonListQuery(limit, page * pokemons.length)
      .then(newPokemons => setPokemonValue(curr => ({
        ...curr,
        page: curr.page + 1,
        pokemons: [...curr.pokemons, ...newPokemons]
      })))
  }

  return (
    <Grid container spacing={5} justify='center' className={classes.container}>
      {pokemonValue.pokemons.map(pokemon => (
        <Grid item key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
      <button onClick={fetchNextPokemonList}>Next</button>
    </Grid>
  )
}
