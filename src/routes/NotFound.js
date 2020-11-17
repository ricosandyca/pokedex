import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'absolute',
    width: '100%',
    left: 0,
    overflowX: 'hidden'
  },
  verticalDivider: {
    height: 40,
    width: 1,
    background: theme.palette.text.hint
  }
}))

export default function NotFoundPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justify='center'
        wrap='nowrap'
        style={{ height: '100%' }}
      >
        <Grid item>
          <Typography variant='h6'>404</Typography>
        </Grid>
        <Grid item>
          <div className={classes.verticalDivider} />
        </Grid>
        <Grid item>
          <Typography variant='body2'>Page Not Found</Typography>
        </Grid>
      </Grid>
    </div>
  )
}
