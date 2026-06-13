'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

function PageLoader({ fullScreen = false, label, className = '' }) {
  const spinner = (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="relative h-12 w-12 shrink-0">
        <div className="absolute inset-0 rounded-full border-4 border-[#f1592a]/15" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-r-[#f1592a]/40 border-t-[#f1592a]" />
      </div>
      {label ? <p className="text-sm text-gray-600">{label}</p> : null}
    </div>
  )

  if (!fullScreen) {
    return spinner
  }

  return (
    <div
      className="fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center bg-white/90 backdrop-blur-[2px]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {spinner}
    </div>
  )
}

function PageLoaderPortal({ label }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(<PageLoader fullScreen label={label} />, document.body)
}

export { PageLoader, PageLoaderPortal }
