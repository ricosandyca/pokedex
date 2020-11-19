import { useRecoilState } from 'recoil'
import InfiniteScroll from 'react-infinite-scroll-component'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
  header: {
    marginTop: '100px',
    textAlign: 'center'
  },
  container: {
    marginTop: '50px',
    paddingBottom: '50px'
  },
  title: {
    fontFamily: '"Playfair Display", sans-serif',
    fontWeight: 700,
    paddingBottom: '10px'
  },
  subtitle: {
    fontFamily: '"Poppins", sans-serif'
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
    <Box display='flex' flexDirection='column' alignItems='center'>

      <Box className={classes.header}>
        <Typography variant='h3' className={classes.title}>{appConfig.name}</Typography>
        <Typography variant='subtitle1' className={classes.subtitle}>{appConfig.slogan}</Typography>
      </Box>

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

    </Box>
  )
}

export default withAnimation(PokemonList, 'fadeIn')
