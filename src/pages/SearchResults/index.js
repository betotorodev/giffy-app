import React, { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const ref = useRef()
  const externalRef = loading ? null : ref
  const { isNearScreen } = useNearScreen({
    externalRef: externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [])

  useEffect(() => {
    console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}