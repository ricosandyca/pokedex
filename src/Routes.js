import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import PokemonListRoute from './routes/PokemonList'
import PokemonDetailRoute from './routes/PokemonDetail'
import PokemonListTypeRoute from './routes/PokemonListType'
import ExceptionRoute from './routes/Exception'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' children={<Redirect to='/pokemon' />} exact />
        <Route path='/pokemon' component={PokemonListRoute} exact />
        <Route path='/pokemon/type/:pokemonId' component={PokemonListTypeRoute} exact />
        <Route path='/pokemon/:pokemonId' component={PokemonDetailRoute} exact />
        <Route component={ExceptionRoute} />
      </Switch>
    </Router>
  )
}
