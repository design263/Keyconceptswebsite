'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { PageLoaderPortal } from './page-loader'

const MIN_VISIBLE_MS = 320

export function NavigationLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const timerRef = useRef(null)
  const startedAtRef = useRef(Date.now())
  const isMountedRef = useRef(false)

  const showLoader = () => {
    startedAtRef.current = Date.now()
    setVisible(true)
  }

  const hideLoader = () => {
    const elapsed = Date.now() - startedAtRef.current
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)

    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setVisible(false), remaining)
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
    timerRef.current = setTimeout(hideLoader, 80)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  if (!visible) return null

  return <PageLoaderPortal />
}
