import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'

/**
 * Init Material UI theme library
 */
export default function initTheme() {
  const generateTextColor = (opacity = 1) => `rgba(80,80,80,${opacity})`

  return createMuiTheme({
    palette: {
      background: {
        default: '#FDFDFD',
        paper: '#FFFFFF'
      },
      text: {
        primary: generateTextColor(1),
        secondary: generateTextColor(.7),
        disabled: generateTextColor(.5),
        hint: generateTextColor(.5)
      },
      primary: {
        main: blue[500],
        light: blue[300],
        dark: blue[700],
        contrastText: '#FFF'
      }
    }
  })
}
