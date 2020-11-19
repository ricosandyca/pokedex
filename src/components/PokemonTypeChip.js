import makeStyles from '@material-ui/core/styles/makeStyles'
import withLink from '../hoc/withLink'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none'
  },
  root: props => ({
    height: props.height,
    fontSize: props.fontSize,
    padding: 5,
    background: 'white',
    borderRadius: '100px',
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    transition: '.3s',
    top: 0,
    '&:hover': props.link && {
      top: '-5px'
    }
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

function PokemonTypeChip({
  type,
  background,
  color,
  size = 'small',
  withIcon = false,
  link = false
}) {

  // styles by size
  let styles = { height: '18px', fontSize: '12px', link }
  switch (size) {
    // medium size chip style
    case 'medium':
      styles = { height: '24px', fontSize: '13px', link }
      break
    // large size chip style
    case 'large':
      styles = { height: '30px', fontSize: '14px', link }
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

export default withLink(PokemonTypeChip)
