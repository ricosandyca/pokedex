import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    padding: 5,
    background: 'white',
    borderRadius: '100px',
    height: 30,
    marginRight: '10px',
    marginBottom: '10px',
    display: 'inline-flex',
    alignItems: 'center'
  },
  typeIcon: {
    height: '100%'
  },
  typeName: {
    padding: '0 7.5px',
    textTransform: 'capitalize',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '14px'
  }
})

export default function PokemonTypeIcon({ type, background, color }) {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ background, color }}>
      <img
        alt={type}
        src={`/assets/pokemon/types/${type}.png`}
        className={classes.typeIcon}
      />
      <div className={classes.typeName}>{type}</div>
    </div>
  )
}
