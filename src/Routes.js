import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NotFoundRoute from './routes/NotFound'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' children='Hello World' exact />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  )
}
