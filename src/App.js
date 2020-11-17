import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'

import Routes from './Routes'
import withTheme from './hoc/withTheme'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<>Please wait...</>}>
        <Routes />
      </Suspense>
    </RecoilRoot>
  )
}

export default withTheme(App)
