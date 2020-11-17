import { RecoilRoot } from 'recoil'

import Routes from './Routes'
import withTheme from './hoc/withTheme'

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  )
}

export default withTheme(App)
