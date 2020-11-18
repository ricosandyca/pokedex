import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import PokemonTypeIcon from '../components/PokemonTypeIcon'
import PokemonStatList from '../components/PokemonStatList'
import { selectPokemonById } from '../store/selectors/pokemon'
import extractImageColor from '../utils/image-color-extractor'

const useStyles = makeStyles((theme) => ({
  container: {
    alignSelf: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
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
    padding: '10px 0'
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
  const [imageLoaded, setImageLoaded] = useState(false)
  const [colors, setColors] = useState({})
  const pokemonImageRef = useRef(null)

  useEffect(() => {
    try {
      if (pokemonImageRef && imageLoaded)
        setColors(extractImageColor(pokemonImageRef.current))
    } catch { }
  }, [pokemonImageRef, imageLoaded])

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
          <img
            ref={pokemonImageRef}
            src={pokemon._image}
            alt={pokemon._name}
            className={classes.pokemonImage}
            onLoad={() => setImageLoaded(true)}
            crossOrigin='anonymous'
          />
        </Box>
      </Grid>

      {/* Main pokemon info */}
      <Grid item xs={12} md={5}>
        <Box className={classes.mainInfo}>

          <div className={classes.pokemonId}>
            #{pokemon.id.toString().padStart(3, '0')}
          </div>
          <div className={classes.pokemonName}>{pokemon._name}</div>

          {/* Pokemon type chips */}
          <div className={classes.pokemonTypes}>
            {pokemon.types.map(({ type, slot }) => (
              <PokemonTypeIcon
                key={slot}
                type={type.name}
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
