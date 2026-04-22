'use client'

import React from 'react'
import { Link } from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'
import { useState, useEffect } from 'react'

function MegaMenuHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="Key Concepts"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="group relative px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium"
            >
              Home{' '}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
            
            <div className="relative">
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Services</span>
                <ChevronDown size={16} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            </div>

            <div className="relative">
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Our Platforms</span>
                <ChevronDown size={16} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            </div>

            <div className="relative">
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Company</span>
                <ChevronDown size={16} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            </div>

            <div className="relative">
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Insights</span>
                <ChevronDown size={16} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            </div>
          </nav>
          
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="px-7 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f1592a] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export { MegaMenuHeader }
