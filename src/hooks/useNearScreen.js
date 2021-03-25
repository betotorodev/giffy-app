import { useState, useRef, useEffect } from 'react'

export function useNearScreen({ externalRef, once = true }) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const elementRef = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const element = entries[0]
      if(element.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
      ? IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })
  
      if (elementRef) observer.observe(elementRef)
    })


    return () =>  observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}