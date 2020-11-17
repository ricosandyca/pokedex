import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import MainRoute from './routes/Main'
import NotFoundRoute from './routes/NotFound'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainRoute} exact />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  )
}
