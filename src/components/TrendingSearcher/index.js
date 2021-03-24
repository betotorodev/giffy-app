import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'
const TrendingSearcher = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrading() {
  const {isNearScreen, fromRef }= useNearScreen()

  return <div ref={fromRef}>
    {
      isNearScreen
      ? <Suspense fallback={<Spinner />}>
          <TrendingSearcher /> 
        </Suspense>
      : <Spinner />
    }
  </div>
}