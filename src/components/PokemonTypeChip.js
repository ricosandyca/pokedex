import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: props => ({
    height: props.height,
    fontSize: props.fontSize,
    padding: 5,
    background: 'white',
    borderRadius: '100px',
    display: 'inline-flex',
    alignItems: 'center'
  }),
  typeIcon: {
    height: '100%'
  },
  typeName: {
    padding: '0 5px',
    textTransform: 'capitalize',
    fontFamily: '"Poppins", sans-serif'
  }
})

export default function PokemonTypeChip({
  type,
  background,
  color,
  size = 'small',
  withIcon = false
}) {

  console.log(size)

  let styles = { height: '18px', fontSize: '12px' }
  switch (size) {

    // medium size chip style
    case 'medium':
      styles = { height: '24px', fontSize: '13px' }
      break

    // large size chip style
    case 'large':
      styles = { height: '30px', fontSize: '14px' }
      break
      
    // small size chip or default styles
    case 'small':
    default:
      break

  }

  const classes = useStyles(styles)
  return (
    <div className={classes.root} style={{ background, color }}>
      {withIcon && (
        <img alt={type} src={`/assets/pokemon/types/${type}.png`} className={classes.typeIcon} />
      )}
      <div className={classes.typeName}>{type}</div>
    </div>
  )
}
