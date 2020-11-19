import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import withAnimation from '../hoc/withAnimation'
import useImageColor from '../hooks/useImageColor'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh'
  },
  typeInfoWrapper: {
    width: '100%',
    height: '100%',
    position: 'fixed'
  },
  typeLogo: {
    width: 50,
    padding: '10px',
    borderRadius: '100%'
  },
  typeName: {
    fontFamily: '"Playfair Display", sans-serif',
    textTransform: 'capitalize',
    fontWeight: 500,
    margin: `${theme.spacing(1)}px 0`
  },
  typeTextInfo: {
    fontFamily: '"Poppins", sans-serif',
    ontWeight: 300,
    padding: `${theme.spacing(.5)}px ${theme.spacing(1.5)}px`,
    borderRadius: '100px'
  }
}))

function PokemonListType() {
  const classes = useStyles()
  const { typeId } = useParams()
  const { colors, ImageComponent } = useImageColor(`/assets/pokemon/types/${typeId}.png`)

  return (
    <Grid container className={classes.container}>

      {/* Type info */}
      <Hidden smDown>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.typeInfoWrapper}
          style={{
            background: `linear-gradient(135deg, ${colors.dominant}, ${colors.dominantLighten})`
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
            <Typography
              variant='subtitle2'
              className={classes.typeTextInfo}
              style={{
                color: colors.contrastText,
                background: colors.dominantLighten
              }}
            >
              123 Pokemons
            </Typography>
          </Box>
        </Grid>
      </Hidden>

      {/* Filtered pokemon list */}
      <Grid item xs={12} sm={8}>
      </Grid>

    </Grid>
  )
}

export default withAnimation(PokemonListType, 'fadeIn')
