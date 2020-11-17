import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export default function initTheme() {
  const generateTextColor = (opacity = 1) => `rgba(80,80,80,${opacity})`

  return createMuiTheme({
    palette: {
      background: {
        default: '#F5F6FA',
        paper: '#FFFFFF'
      },
      text: {
        primary: generateTextColor(1),
        secondary: generateTextColor(.7),
        disabled: generateTextColor(.5),
        hint: generateTextColor(.5)
      }
    }
  })
}
