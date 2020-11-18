import Chip from '@material-ui/core/Chip'

export default function PokemonTypeChip({ type, background, color }) {
  return (
    <Chip
      label={type}
      size='small'
      style={{ background, color, marginRight: '5px', marginTop: '7.5px' }}
    />
  )
}
