'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { PageLoaderPortal } from './page-loader'

export function NavigationLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const timerRef = useRef(null)
  const isMountedRef = useRef(false)

  const showLoader = () => {
    setVisible(true)
  }

  const hideLoader = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
  }

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true
      showLoader()

      const onReady = () => hideLoader()

      if (document.readyState === 'complete') {
        onReady()
      } else {
        window.addEventListener('load', onReady, { once: true })
        timerRef.current = setTimeout(onReady, 1000)
      }

      return () => {
        window.removeEventListener('load', onReady)
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }

    showLoader()
    timerRef.current = setTimeout(hideLoader, 0)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  if (!visible) return null

  return <PageLoaderPortal />
}
