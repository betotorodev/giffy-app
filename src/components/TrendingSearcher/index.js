import React, { Suspense, useRef } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'
const TrendingSearcher = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrading() {
  const ref = useRef()
  const {isNearScreen }= useNearScreen({
    externalRef: ref,
    once: false
  })

  return <div ref={ref}>
    {
      isNearScreen
      ? <Suspense fallback={<Spinner />}>
          <TrendingSearcher /> 
        </Suspense>
      : <Spinner />
    }
  </div>
}