'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export default function AdminLayout({
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()
  const mainRef = useRef(null)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <div className={`flex-1 transition-all duration-300`}>
          <Header onToggle={toggleSidebar} isCollapsed={isCollapsed} />
          <main ref={mainRef} className="p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
