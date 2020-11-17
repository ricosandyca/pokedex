import { useState, useRef, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { pokemonQuery } from '../store/selectors/pokemon'
import extractImageColor from '../utils/image-color-extractor'

import pokeball from '../assets/images/pokeball.png'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 350,
    height: 150,
    borderRadius: '20px',
    position: 'relative',
    zIndex: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: -1,
      marginLeft: 'auto',
      marginRight: 'auto',
      opacity: .8,
      background: 'inherit',
      WebkitFilter: 'blur(10px)',
      filter: 'blur(10px)',
      WebkitTransition: 'all .2s',
      transition: 'all .2s',
      height: '75%',
      width: '90%',
      top: 'auto',
      bottom: -10,
      borderRadius: '0 0 20px 20px'
    }
  },
  pokeballWrapper: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  pokeball: {
    position: 'absolute',
    height: '110%',
    top: '-20%',
    opacity: .1,
    right: '-10%',
    zIndex: 1,
    filter: `brightness(0) invert(1)`
  },
  pokemonImage: {
    height: '90%',
    width: 'auto',
    zIndex: 2,
    position: 'absolute',
    right: '-2.5%',
    top: '-25%'
  }
}))

export default function PokemonCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [colors, setColors] = useState({})
  const pokemonImageRef = useRef(null)
  const classes = useStyles()
  const pokemon = useRecoilValue(pokemonQuery(props.id))

  useEffect(() => {
    try {
      if (pokemonImageRef && imageLoaded)
        setColors(extractImageColor(pokemonImageRef.current))
    } catch { }
  }, [pokemonImageRef, imageLoaded])

  return (
    <Paper
      classes={{ root: classes.paper }}
      elevation={0}
      style={{
        color: colors.contrastText,
        background: `linear-gradient(135deg, ${colors.dominant}, ${colors.dominantLighten})`
      }}
    >
      <div className={classes.pokeballWrapper}>
        <img
          src={pokeball}
          alt={pokemon.name}
          className={classes.pokeball}
        />
      </div>
      <img
        ref={pokemonImageRef}
        src={pokemon._image}
        alt={pokemon.name}
        className={classes.pokemonImage}
        onLoad={() => setImageLoaded(true)}
        crossOrigin='anonymous'
      />
      {pokemon.name}
    </Paper>
  )
}
