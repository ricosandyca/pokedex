import Routes from './Routes'
import withTheme from './hoc/withTheme'

export default function App() {
  const ThemedRoute = withTheme(Routes)

  return (
    <ThemedRoute />
  )
}
