import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(0)
  const {gifs, setGifs} = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, keywordToUse])

  useEffect(() => {
    if(page === 0) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then( nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keywordToUse, setGifs])

  return {loading, gifs, loadingNextPage, setPage}
}