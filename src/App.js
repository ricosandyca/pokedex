import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'

import Routes from './Routes'
import withTheme from './hoc/withTheme'
import LoadingPage from './components/LoadingPage'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <Routes />
      </Suspense>
    </RecoilRoot>
  )
}

export default withTheme(App)
