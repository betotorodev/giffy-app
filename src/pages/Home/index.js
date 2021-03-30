import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import SearchForm from '../../components/SearchForm/index'
import {useGifs} from 'hooks/useGifs'
import LazyTrading from 'components/TrendingSearcher'

export default function Home() {
  const [path, pushLocation] = useLocation()
  const {gifs} = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])
  console.log(path)

  return (
    <>
      <SearchForm onSubmit={handleSubmit}/>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <LazyTrading />
        </div>
      </div>
    </>
  )
}