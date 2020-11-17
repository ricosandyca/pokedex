import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route children='Hello World' />
      </Switch>
    </Router>
  )
}
