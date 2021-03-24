import { useState, useRef, useEffect } from 'react'

export function useNearScreen() {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const element = entries[0]
      if(element.isIntersecting) {
        setShow(true)
        observer.disconnect()
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
  
      observer.observe(fromRef.current)
    })


    return () => observer.disconnect()
  })

  return {isNearScreen, fromRef}
}