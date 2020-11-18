import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PokemonListRoute from './routes/PokemonList'
import PokemonDetailRoute from './routes/PokemonDetail'
import NotFoundRoute from './routes/NotFound'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={PokemonListRoute} exact />
        <Route path='/pokemon/:pokemonId' component={PokemonDetailRoute} exact />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  )
}
