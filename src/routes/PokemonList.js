import { useRecoilState } from 'recoil'
import InfiniteScroll from 'react-infinite-scroll-component'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

import withAnimation from '../hoc/withAnimation'
import { pokemonState } from '../store/atoms/pokemon'
import { pokemonListQuery } from '../store/actions/pokemon'
import PokemonCard from '../components/PokemonCard'
import appConfig from '../config/app'

const useStyles = makeStyles({
  scroller: {
    overflow: 'hidden !important'
  },
  container: {
    padding: '100px 5%'
  }
})

function PokemonList() {
  const classes = useStyles()
  const [pokemonValue, setPokemonValue] = useRecoilState(pokemonState('init'))

  const { results: pokemons, count, next } = pokemonValue
  
  /**
   * Fetch next pokemon list
   * By pushing new retrived list
   */
  const fetchNextPokemonList = () => {
    pokemonListQuery(next)
      .then(newPokemonList => setPokemonValue(curr => ({
        ...curr,
        ...newPokemonList,
        results: [...curr.results, ...newPokemonList.results]
      })))
  }

  document.title = appConfig.name

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchNextPokemonList}
      hasMore={pokemons.length < count}
      className={classes.scroller}
    >

      {/* Pokemon grid list */}
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

export default withAnimation(PokemonList, 'fadeIn')
