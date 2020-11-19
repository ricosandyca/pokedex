import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { selectPokemonById } from '../store/selectors/pokemon'
import useImageColor from '../hooks/useImageColor'
import PokemonTypeChip from '../components/PokemonTypeChip'
import PokemonStatList from '../components/PokemonStatList'
import Exception from './Exception'
import getPokemonTag from '../utils/pokemon-tag'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    padding: '5% 10%'
  },
  pokemonImage: {
    width: '75%',
    maxHeight: '65vh',
    minWidth: 300,
    padding: '50px 0'
  },
  pokemonId: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: 18,
    opacity: .5
  },
  pokemonName: {
    fontFamily: '"Playfair Display", sans-serif',
    fontWeight: 500,
    fontSize: 40,
    textTransform: 'capitalize',
    position: 'relative',
    marginBottom: '10px',
    '&::before': {
      content: '""',
      transition: '.3s',
      borderRadius: '100px',
      background: 'currentColor',
      height: '5px',
      width: '30px',
      position: 'absolute',
      bottom: '-5px',
    }
  },
  pokemonTypes: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: 0
    }
  },
  mainInfo: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

export default function PokemonDetail() {
  const classes = useStyles()
  const { pokemonId } = useParams()
  const pokemon = useRecoilValue(selectPokemonById(pokemonId))
  const { colors, ImageComponent } = useImageColor(pokemon._image)

  // pokemon is not found
  if (!pokemon) return <Exception message='Pokemon Not Found' />

  return (
    <Grid
      container
      className={classes.container}
      style={{
        color: colors.contrastText,
        background: `linear-gradient(135deg, ${colors.dominant}, ${colors.dominantLighten})`
      }}
    >

      {/* Pokemon image */}
      <Grid item xs={12} md={7} style={{ alignSelf: 'center' }}>
        <Box display='flex' justifyContent='center'>
          <ImageComponent className={classes.pokemonImage} />
        </Box>
      </Grid>

      {/* Main pokemon info */}
      <Grid item xs={12} md={5}>
        <Box className={classes.mainInfo}>

          {/* Pokemon name and tag */}
          <div className={classes.pokemonId}>{getPokemonTag(pokemon.id)}</div>
          <div className={classes.pokemonName}>{pokemon._name}</div>

          {/* Pokemon type chips */}
          <div className={classes.pokemonTypes}>
            {pokemon.types.map(({ type, slot }) => (
              <PokemonTypeChip
                key={slot}
                type={type.name}
                size='large'
                withIcon={true}
                background={colors.dominantLighten}
                color={colors.contrastText}
              />
            ))}
          </div>

          {/* Pokemon stats */}
          <div>
            <PokemonStatList
              pokemonStats={pokemon.stats}
              color={colors.contrastText}
            />
          </div>

        </Box>
      </Grid>

    </Grid>
  )
}
