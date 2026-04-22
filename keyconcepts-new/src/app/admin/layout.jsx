'use client'

import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export default function AdminLayout({
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <div className={`flex-1 transition-all duration-300`}>
          <Header onToggle={toggleSidebar} isCollapsed={isCollapsed} />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
