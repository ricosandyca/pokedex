import { useRecoilState } from 'recoil'
import InfiniteScroll from 'react-infinite-scroll-component'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { pokemonState } from '../store/atoms/pokemon'
import { pokemonListQuery } from '../store/actions/pokemon'
import PokemonCard from '../components/PokemonCard'

const useStyles = makeStyles({
  scroller: {
    overflow: 'hidden !important'
  },
  container: {
    alignSelf: 'center',
    padding: '100px 5%'
  }
})

export default function PokemonList() {
  const classes = useStyles()
  const [pokemonValue, setPokemonValue] = useRecoilState(pokemonState())

  const fetchNextPokemonList = () => {
    const { limit, page, pokemons } = pokemonValue
    pokemonListQuery(limit, page * pokemons.length)
      .then(({ pokemons: newPokemons, count }) => setPokemonValue(curr => ({
        ...curr,
        page: curr.page + 1,
        count,
        pokemons: [...curr.pokemons, ...newPokemons]
      })))
  }

  const { pokemons, count } = pokemonValue

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchNextPokemonList}
      hasMore={pokemons.length < count}
      className={classes.scroller}
    >
      <Grid container spacing={5} justify='center' className={classes.container}>
        {pokemons.map(pokemon => (
          <Grid item key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}
