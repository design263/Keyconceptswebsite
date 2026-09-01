'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/images/logo.png'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown, Users, Target, Package, Vote, Sparkles, Building2, Layers, Rocket, Settings, Shield, Heart, Briefcase, Lightbulb, FolderOpen } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useEnquiryModal } from '../context/enquiry-modal-context'
import { useCareerModal } from '../context/career-modal-context'

const mobileNavMenus = [
  {
    id: 'services',
    label: 'Services',
    items: [
      { href: '/product-development', label: 'Product Development', description: 'Crafting Scalable Product Experiences', icon: Layers },
      { href: '/mvp-studio', label: 'MVP Development', description: 'Build, Test, Launch, Scale.', icon: Rocket },
      { href: '/custom-erp-solutions', label: 'Custom ERP Solutions', description: 'Implement, customize, integrate, support', icon: Settings },
      { href: '/support-maintenance', label: 'Support Maintenance', description: 'Performance Optimized, Always Secure', icon: Shield },
    ],
    cta: { href: '/contact', label: 'Get Started' },
  },
  {
    id: 'products',
    label: 'Products',
    items: [
      { href: '/visitor-management', label: 'Visitorz Management System', description: 'Visitors & gate management system', icon: Users },
      { href: '/younited-communities', label: 'Younited Communities', description: 'Community & association management', icon: Building2 },
      { href: '/claim-genie', label: 'Claim Genie', description: 'AI-powered claims automation platform', icon: Sparkles },
    ],
    cta: { href: '/contact', label: 'Get Started' },
  },
  {
    id: 'company',
    label: 'Company',
    items: [
      { href: '/our-story', label: 'Our Story', description: 'Learn about our journey', icon: Heart },
      { href: '/process', label: 'Process', description: 'How we deliver exceptional results', icon: Target },
      // { href: '/about#team', label: 'Team', description: 'Meet the people behind us', icon: Users },
      { href: '/careers', label: 'Careers', description: 'Join our growing team', icon: Briefcase },
    ],
    cta: { href: '/contact', label: 'Join Our Team' },
  },
  {
    id: 'insights',
    label: 'Insights',
    items: [
      { href: '/insights/trends', label: 'Industry Trends', description: 'Stay ahead with the latest industry insights', icon: Lightbulb },
      { href: '/insights/case-studies', label: 'Case Studies', description: 'Explore our success stories', icon: FolderOpen },
    ],
  },
]

function MegaMenuHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const pathname = usePathname()
  const menuTimeoutRef = useRef(null)
  const { openModal } = useEnquiryModal()
  const { openModal: openCareerModal } = useCareerModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (menuType) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveMegaMenu(menuType)
  }

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 100)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (prev) setActiveMobileDropdown(null)
      return !prev
    })
  }

  const toggleMobileDropdown = (menuId) => {
    setActiveMobileDropdown((prev) => (prev === menuId ? null : menuId))
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveMobileDropdown(null)
  }

  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group" title="Key Concepts logo">
            <Image
              src={logo}
              alt="Key Concepts"
              title="Key Concepts logo"
              className="w-auto transition-transform group-hover:scale-105"
              style={{ height: '68px' }}
              priority
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
            
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === 'services' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/product-development"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Layers className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Product Development
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Crafting Scalable Product Experiences
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.05,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/mvp-studio"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Rocket className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              MVP Development
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Build, Test, Launch, Scale.
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.1,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/custom-erp-solutions"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Settings className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Custom ERP Solutions
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Implement, customize, integrate, support
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.15,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/support-maintenance"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Shield className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Support Maintenance
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Performance Optimized, Always Secure
                            </p>
                          </Link>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.2,
                        }}
                        className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            <Sparkles className="text-[#f1592a]" size={20} />
                          </div>
                          <p className="text-gray-900 font-semibold">
                            Need a custom solution? Talk to our experts.
                          </p>
                        </div>
                       <Link
  href="/contact"
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors cursor-pointer"
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Products</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'products' ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === 'products' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[960px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/visitor-management"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Users className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Visitorz Management System
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Visitors & gate management system
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.05,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/younited-communities"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Building2 className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Younited Communities
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Community & association management
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.1,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/claim-genie"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Sparkles className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Claim Genie
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              AI-powered claims automation platform
                            </p>
                          </Link>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.2,
                        }}
                        className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            <Package className="text-[#f1592a]" size={20} />
                          </div>
                          <p className="text-gray-900 font-semibold">
                            Looking for a custom platform? Let's build it together.
                          </p>
                        </div>
                        <Link
  href="/contact"
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors"
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Company</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'company' ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === 'company' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/our-story"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Heart className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Our Story
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Learn about our journey
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.05,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/process"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Target className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Process
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              How we deliver exceptional results
                            </p>
                          </Link>
                        </motion.div>
                        {/* <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.1,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/about#team"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Users className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Team
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Meet the people behind us
                            </p>
                          </Link>
                        </motion.div> */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.15,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/careers"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Briefcase className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Careers
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Join our growing team
                            </p>
                          </Link>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.2,
                        }}
                        className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            <Sparkles className="text-[#f1592a]" size={20} />
                          </div>
                          <p className="text-gray-900 font-semibold">
                            Want to build your career with Key Concepts?
                          </p>
                        </div>
                        <Link
  href="/careers"
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors cursor-pointer"
                        >
                          Join Our Team{' '}
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('insights')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                <span>Insights</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'insights' ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === 'insights' && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/insights/trends"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <Lightbulb className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Industry Trends
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Stay ahead with the latest industry insights
                            </p>
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.05,
                          }}
                          className="group/item"
                        >
                          <Link
                            href="/insights/case-studies"
                            className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                          >
                            <div className="relative w-12 h-12 mb-4">
                              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                <FolderOpen className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                              Case Studies
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Explore our success stories
                            </p>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-7 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold cursor-pointer"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f1592a] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Home
              </Link>

              {mobileNavMenus.map((menu) => (
                <div key={menu.id} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(menu.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium ${
                      activeMobileDropdown === menu.id
                        ? 'bg-gradient-to-r from-[#f1592a]/5 to-[#ff7a45]/5 text-[#f1592a]'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a]'
                    }`}
                    aria-expanded={activeMobileDropdown === menu.id}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${activeMobileDropdown === menu.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeMobileDropdown === menu.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="ml-2 mr-1 mb-2 pl-3 border-l-2 border-[#f1592a]/20 space-y-1">
                          {menu.items.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-start gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#f1592a] transition-all"
                              >
                                <div className="w-9 h-9 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <Icon size={18} strokeWidth={1.5} className="text-gray-600" />
                                </div>
                                <div className="min-w-0 pt-0.5">
                                  <p className="font-semibold text-sm leading-tight">{item.label}</p>
                                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.description}</p>
                                </div>
                              </Link>
                            )
                          })}
                          {/* {menu.cta && (
                            <Link
                              href={menu.cta.href}
                              onClick={closeMobileMenu}
                              className="block mx-3 mt-2 mb-1 px-4 py-2 text-center text-sm bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors"
                            >
                              {menu.cta.label}
                            </Link>
                          )} */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/contact" onClick={closeMobileMenu} className="flex justify-center w-full">
                <button className="w-[80%] md:w-full mt-4 md:px-6 px-4 py-3 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg font-semibold cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export { MegaMenuHeader }
