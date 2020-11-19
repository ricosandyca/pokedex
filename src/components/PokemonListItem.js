import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'

import useImageColor from '../hooks/useImageColor'
import getPokemonTag from '../utils/pokemon-tag'
import pokeball from '../assets/images/pokeball.png'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    top: 0,
    margin: `${theme.spacing(5)}px 0`,
    height: 100,
    borderRadius: '10px',
    position: 'relative',
    zIndex: 0,
    transition: '.3s',
    '&:hover': {
      top: '10px'
    },
    '&:hover::before': {
      filter: 'blur(4px)',
      left: 0,
      bottom: 0
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      margin: 'auto',
      left: 0,
      right: 0,
      zIndex: -1,
      opacity: .8,
      background: 'inherit',
      WebkitFilter: 'blur(10px)',
      filter: 'blur(10px)',
      WebkitTransition: 'all .2s',
      transition: 'all .2s',
      height: '75%',
      width: '90%',
      top: 'auto',
      bottom: -5,
      borderRadius: '0 0 10px 10px'
    }
  },
  pokeballWrapper: {
    borderRadius: '10px',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  pokeball: {
    position: 'absolute',
    height: '110%',
    top: '-20%',
    opacity: .2,
    right: '-2.5%',
    zIndex: 1
  },
  pokemonImage: {
    height: '100%',
    width: 'auto',
    zIndex: 2,
    position: 'absolute',
    right: '-.5%',
    top: '-25%'
  },
  pokemonName: {
    fontFamily: '"Playfair Display", sans-serif',
    fontWeight: 500,
    fontSize: 25
  },
  pokemonId: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: 14,
    opacity: .5
  },
  pokemonInfo: {
    padding: '20px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    textTransform: 'capitalize'
  }
}))

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
  const { colors, ImageComponent } = useImageColor(pokemon._image)

  return (
    <Link to={`/pokemon/${pokemon.name}`} className={classes.link}>
      <Paper
        classes={{ root: classes.paper }}
        elevation={0}
        style={{
          color: colors.contrastText,
          background: `linear-gradient(135deg, ${colors.dominant}, ${colors.dominantLighten})`
        }}
      >

        {/* Pokemon images */}
        <div className={classes.pokeballWrapper}>
          <img
            src={pokeball}
            alt={pokemon.name}
            className={classes.pokeball}
            style={{
              filter: `brightness(0) invert(${colors.isLight ? 0 : 1})`
            }}
          />
        </div>
        <ImageComponent className={classes.pokemonImage} />

        {/* Pokemon info */}
        <div className={classes.pokemonInfo}>
          <div className={classes.pokemonId}>{getPokemonTag(pokemon.id)}</div>
          <div className={classes.pokemonName}>{pokemon._name}</div>
        </div>

      </Paper>
    </Link>
  )
}
