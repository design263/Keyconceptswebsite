'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  LayoutGrid, ListTodo, Mail,
  Settings, ShieldCheck, FileSpreadsheet,
  BriefcaseBusiness, ChevronDown,
  Users, Building2, Award, LogOut,
  ChevronLeft, ChevronRight
} from 'lucide-react'

const NavItems = [
  { href: "/admin/jobs", label: "Job Openings", icon: BriefcaseBusiness },
  { href: "/admin/applications", label: "Applications", icon: FileSpreadsheet },
  { href: "/admin/leads", label: "Contact Leads", icon: Mail },
]

export function Sidebar({ isCollapsed, onToggle }) {

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("admin_token")
        window.location.href = "/admin-login"
    }
  }

  const pathname = usePathname()

  return (
    <>
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onToggle}
        />
      )}

<aside
  className={`
    fixed top-0 left-0 z-40
    h-screen
    overflow-y-auto
      overflow-x-hidden
    border-r border-gray-200 bg-white
    flex flex-col 
    transition-all duration-300 ease-in-out
    ${isCollapsed ? 'w-[70px]' : 'w-[260px]'}
  `}
>
        {/* Logo Section */}
        <div className="relative flex items-center  px-4 h-[70px] border-b border-gray-200">
          <div className={`flex items-center ${isCollapsed ? ' w-full' : ''}`}>
            <Image
              src="/86d73f4575e82c2f8cca971638d48b77628092fb.png"
              alt="logo"
              width={isCollapsed ? 48 : 80}
              height={isCollapsed ? 48 : 64}
              className={`object-contain transition-all duration-300`}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-between h-[calc(100vh-70px)]">
          <div className="space-y-1 px-3 pt-3 flex-1">
            {NavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm my-2
                    transition-all duration-200 group relative
                    font-medium
                    ${isActive
                      ? "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white shadow-sm"
                      : "text-gray-600 hover:bg-orange-50 hover:text-[#f1592a]"
                    }
                    ${isCollapsed ? ' px-2' : ''}
                  `}
                  title={isCollapsed ? item.label : ""}
                >
                  <item.icon size={20} strokeWidth={1.5} />
                  {!isCollapsed && <span>{item.label}</span>}

                  {/* Tooltip for collapsed mode */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                                             opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity 
                                             whitespace-nowrap z-50">
                      {item.label}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Logout Section */}
          <div className="border-t border-gray-200 mt-4">
            <button
              onClick={logout}
              className={`
                w-full flex items-center gap-3 px-3 py-3 text-sm font-medium
                transition-all duration-200
                text-red-600 bg-orange-50 cursor-pointer
                ${isCollapsed ? 'justify-center' : 'justify-start'}
              `}
              title={isCollapsed ? "Logout" : ""}
            >
              <LogOut size={18} />
              {!isCollapsed && <span>Logout</span>}

              {isCollapsed && (
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                                         opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity 
                                         whitespace-nowrap z-50">
                  Logout
                </span>
              )}
            </button>
          </div>
        </nav>
      </aside>
    </>
  )
}
