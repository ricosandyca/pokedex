import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    margin: '15px 0'
  },
  statText: {
    textAlign: 'left',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  statValueText: {
    fontWeight: 500
  },
  progressTrack: {
    height: '20px',
    width: '100%',
    borderRadius: '100px',
    overflow: 'hidden'
  },
  progress: {
    borderRadius: '100px',
    height: '100%',
    background: 'currentColor'
  }
})

export default function PokemonStat({ stat, color }) {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ color }}>
      <div className={classes.statText}>
        <div>{stat.displayName}</div>
        <div className={classes.statValueText}>{Math.floor(stat.percentage)}%</div>
      </div>
      <div className={classes.progressTrack} style={{ background: `${color}15` ,color }}>
        <div className={classes.progress} style={{ width: `${stat.percentage}%` }}/>
      </div>
    </div>
  )
}
