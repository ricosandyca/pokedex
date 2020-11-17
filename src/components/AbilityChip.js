import Chip from '@material-ui/core/Chip'

export default function AbilityChip({ ability, background, color }) {
  return (
    <Chip
      label={ability}
      size='small'
      style={{ background, color, marginRight: '5px', marginTop: '5px' }}
    />
  )
}
