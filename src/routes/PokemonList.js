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
  const { results: pokemons, count } = pokemonValue

  const fetchNextPokemonList = () => {
    const { next } = pokemonValue
    pokemonListQuery(next)
      .then(newPokemonList => setPokemonValue(curr => ({
        ...curr,
        ...newPokemonList,
        results: [...curr.results, ...newPokemonList.results]
      })))
  }

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
