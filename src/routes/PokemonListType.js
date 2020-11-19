import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Exception from './Exception'
import PokemonListItem from '../components/PokemonListItem'
import withAnimation from '../hoc/withAnimation'
import useImageColor from '../hooks/useImageColor'
import { filterPokemonState } from '../store/atoms/pokemon'
import { pokemonQueryByIds } from '../store/actions/pokemon'
import appConfig from '../config/app'

const useStyles = makeStyles((theme) => ({
  scroller: {
    overflow: 'hidden !important',
    padding: '10%'
  },
  container: {
    minHeight: '100vh'
  },
  typeInfoWrapper: {
    width: '100%',
    height: '100vh',
    position: 'sticky',
    left: 0,
    top: 0
  },
  typeLogo: {
    width: 64,
    padding: '10px',
    borderRadius: '100%'
  },
  typeName: {
    fontFamily: '"Playfair Display", sans-serif',
    textTransform: 'capitalize',
    fontWeight: 500,
    margin: `${theme.spacing(2)}px 0`
  },
  title: {
    fontFamily: '"Playfair Display", sans-serif',
    fontWeight: 700,
    paddingBottom: '5px',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: '"Poppins", sans-serif'
  }
}))

function PokemonListType() {
  const classes = useStyles()
  const { typeId } = useParams()
  const { colors, ImageComponent } = useImageColor(`/assets/pokemon/types/${typeId}.png`)
  const limit = 12
  const [page, setPage] = useState(1)
  const [pokemon, setPokemon] = useRecoilState(filterPokemonState({
    state: 'init',
    limit,
    type: typeId
  }))

  const fetchNextPage = () => {
    const offset = page * limit
    const pokemonIds = pokemon.metadata
      .slice(offset, offset + limit)
      .map(({ pokemon }) => pokemon.name)
    pokemonQueryByIds(pokemonIds)
      .then(newPokemons => {
        setPage(page + 1)
        setPokemon(curr => ({
          ...curr,
          results: [...curr.results, ...newPokemons]
        }))
      })
  }

  if (pokemon.metadata.length <= 0) return <Exception message='Pokemon Type Not Found' />

  document.title = `${typeId} | ${appConfig.name}`

  return (
    <Grid container className={classes.container}>

      {/* Type info */}
      <Hidden smDown>
        <Grid
          item
          xs={12}
          md={4}
          className={classes.typeInfoWrapper}
          style={{
            background: `linear-gradient(135deg, ${colors.dominant}, ${colors.dominantLighten})`,
          }}>

          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100%'
          >
            <ImageComponent
              className={classes.typeLogo}
              style={{
                background: colors.dominantLighten
              }}
            />
            <Typography
              variant='h4'
              className={classes.typeName}
              style={{
                color: colors.contrastText
              }}
            >
              {typeId}
            </Typography>
          </Box>

        </Grid>
      </Hidden>

      {/* Filter pokemon list */}
      <Grid item xs={12} md={8}>
        <InfiniteScroll
          dataLength={pokemon.results.length}
          next={fetchNextPage}
          hasMore={pokemon.results.length < pokemon.metadata.length}
          className={classes.scroller}
        >

          {/* Pokemon grid list header */}
          <Box className={classes.header}>
            <Typography variant='h3' className={classes.title}>{typeId}</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              {pokemon.metadata.length} Pokemons Found
            </Typography>
          </Box>

          {/* Pokemon grid list */}
          {pokemon.results.map(pokemon => (
            <PokemonListItem key={pokemon.id} pokemon={pokemon} />
          ))}

        </InfiniteScroll>
      </Grid>

    </Grid>
  )
}

export default withAnimation(PokemonListType, 'fadeIn')
