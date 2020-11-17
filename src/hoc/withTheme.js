import { ThemeProvider } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

import initTheme from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: '100vh',
    width: '100%'
  }
}))

function Body(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>{props.children}</div>
  )
}

/**
 * Theme component by wrapping the component
 * Custom styles is provided by material-ui library
 *
 * @param {Node} Content - React component to be themed
 * @returns {Node} Themed react component
 */
export default function withTheme(Content) {
  return function () {
    const theme = initTheme()

    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Content />
        </Body>
      </ThemeProvider>
    )
  }
}
