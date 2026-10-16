'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { NavigationLoader } from '@/components/navigation-loader'

export default function AdminShell({ children }) {
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
    <div className="h-screen w-screen overflow-hidden bg-gray-50 flex flex-col">
      <NavigationLoader />
      <div className="flex-1 flex min-w-0 h-full overflow-hidden relative">
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <div
          className={`flex-1 flex flex-col min-w-0 h-full overflow-hidden transition-all duration-300 ${
            isCollapsed ? 'ml-[70px]' : 'ml-[260px]'
          }`}
        >
          <Header onToggle={toggleSidebar} isCollapsed={isCollapsed} />
          <main ref={mainRef} className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-5 custom-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
