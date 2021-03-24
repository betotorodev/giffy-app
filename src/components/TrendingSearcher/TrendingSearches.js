import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/GetTrendingTermsService'
import Category from 'components/Category'

export default function TrendingSearcher()  {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrends)
  }, [])

  return <Category  name='Tendencias' options={trends} />
}