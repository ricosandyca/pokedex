import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import withAnimation from '../hoc/withAnimation'
import appConfig from '../config/app'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'absolute',
    width: '100%',
    overflowX: 'hidden'
  },
  verticalDivider: {
    height: 40,
    width: 1,
    background: theme.palette.text.hint
  }
}))

function Exception({ code = 404, message = 'Page Not Found' }) {
  const classes = useStyles()
  document.title = `${message} | ${appConfig.name}`

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
        <Grid item><Typography variant='h6'>{code}</Typography></Grid>
        <Grid item><div className={classes.verticalDivider} /></Grid>
        <Grid item><Typography variant='body2'>{message}</Typography></Grid>
      </Grid>
    </div>
  )
}

export default withAnimation(Exception, 'fadeIn')
