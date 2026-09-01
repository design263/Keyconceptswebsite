'use client'

import React from 'react'
// import logo from '/images/logo.png'
import { Link } from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Target,
  Package,
  Vote,
  Sparkles,
  Building2,
  Layers,
  Rocket,
  Settings,
  Shield,
  Heart,
  Briefcase,
  Lightbulb,
  FolderOpen,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useEnquiryModal } from '../context/enquiry-modal-context'
import { useCareerModal } from '../context/career-modal-context'
const products = [
  {
    name: 'Visitorz Management System',
    description: 'Visitors & gate management system',
    icon: Users,
    link: '/visitor-management',
  },
  {
    name: 'Younited Communities',
    description: 'Community & association management',
    icon: Building2,
    link: '/younited-communities',
  },
]
const services = [
  {
    name: 'Product Development',
    description: 'Crafting Scalable Product Experiences',
    icon: Layers,
    link: '/product-development',
  },
  {
    name: 'MVP Development',
    description: 'Build, Test, Launch, Scale.',
    icon: Rocket,
    link: '/mvp-studio',
  },
  {
    name: 'Custom ERP Solutions',
    description: 'Implement, customize, integrate, support',
    icon: Settings,
    link: '/custom-erp-solutions',
  },
  {
    name: 'Support Maintenance',
    description: 'Performance Optimized, Always Secure',
    icon: Shield,
    link: '/support-maintenance',
  },
]
const company = [
  {
    name: 'Our Story',
    description: 'Learn about our journey',
    icon: Heart,
    link: '/our-story',
  },
  {
    name: 'Process',
    description: 'How we deliver exceptional results',
    icon: Target,
    link: '/process',
  },
  // {
  //   name: 'Team',
  //   description: 'Meet the people behind us',
  //   icon: Users,
  //   link: '/about#team',
  // },
  {
    name: 'Careers',
    description: 'Join our growing team',
    icon: Briefcase,
    link: '/careers',
  },
]
const insights = [
  {
    name: 'Industry Trends',
    description: 'Stay ahead with the latest industry insights',
    icon: Lightbulb,
    link: '/insights/trends',
  },
  {
    name: 'Case Studies',
    description: 'Explore our success stories',
    icon: FolderOpen,
    link: '/insights/case-studies',
  },
]
function MegaMenuHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
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
    setActiveDropdown(null)
  }
  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 100)
  }
  const handleDropdownEnter = (dropdown) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
    setActiveMegaMenu(null)
  }
  const handleDropdownLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
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
      {' '}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        <div className="flex items-center justify-between h-20">
          {' '}
          <Link href="/" className="flex items-center group">
            {' '}
            <img
              src="/images/logo.png"
              alt="Key Concepts"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>{' '}
          <nav className="hidden lg:flex items-center space-x-1">
            {' '}
            <Link
              href="/"
              className="group relative px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium"
            >
              Home{' '}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
            </Link>{' '}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              {' '}
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                {' '}
                <span>Services</span>{' '}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`}
                />{' '}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>{' '}
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
                    {' '}
                    <div className="p-8">
                      {' '}
                      <div className="grid grid-cols-4 gap-6">
                        {services.map((service, index) => (
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
                              delay: index * 0.05,
                            }}
                            className="group/item"
                            key={service.name}
                          >
                            {' '}
                            <Link
                              href={service.link || '/services'}
                              className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                            >
                              {' '}
                              <div className="relative w-12 h-12 mb-4">
                                {' '}
                                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                  {' '}
                                  {(() => {
                                    const IconComponent = service.icon;
                                    return <IconComponent className="text-gray-700" size={24} strokeWidth={1.5} />;
                                  })()}
                                </div>{' '}
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                              </div>{' '}
                              <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                                {service.name}
                              </h3>{' '}
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {service.description}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>{' '}
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
                        {' '}
                        <div className="flex items-center space-x-3">
                          {' '}
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            {' '}
                            <Sparkles className="text-[#f1592a]" size={20} />
                          </div>{' '}
                          <p className="text-gray-900 font-semibold">
                            Need a custom solution? Talk to our experts.
                          </p>
                        </div>{' '}
                        <button
                          onClick={openModal}
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors cursor-pointer"
                        >
                          Get Started
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>{' '}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              {' '}
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                {' '}
                <span>Our Platforms</span>{' '}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'products' ? 'rotate-180' : ''}`}
                />{' '}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>{' '}
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {' '}
                    <div className="p-8">
                      {' '}
                      <div className="mb-6">
                        {' '}
                        <h3 className="font-bold text-gray-900 text-lg flex items-center space-x-2">
                          {' '}
                          <div className="w-1 h-6 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] rounded-full" />{' '}
                          <span>Specialized Platforms</span>
                        </h3>
                      </div>{' '}
                      <div className="grid grid-cols-3 gap-6">
                        {products.map((product, index) => (
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
                              delay: index * 0.05,
                            }}
                            className="group/item"
                            key={product.name}
                          >
                            {' '}
                            <Link
                              href={product.link || '/services'}
                              className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                            >
                              {' '}
                              <div className="relative w-12 h-12 mb-4">
                                {' '}
                                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                  {' '}
                                  {(() => {
                                    const IconComponent = product.icon;
                                    return <IconComponent className="text-gray-700" size={24} strokeWidth={1.5} />;
                                  })()}
                                </div>{' '}
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                              </div>{' '}
                              <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                                {product.name}
                              </h3>{' '}
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {product.description}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>{' '}
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
                        {' '}
                        <div className="flex items-center space-x-3">
                          {' '}
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            {' '}
                            <Package className="text-[#f1592a]" size={20} />
                          </div>{' '}
                          <p className="text-gray-900 font-semibold">
                            Looking for a custom platform? Let's build it together.
                          </p>
                        </div>{' '}
                        <button
                          onClick={openModal}
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors cursor-pointer"
                        >
                          Get Started
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>{' '}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              {' '}
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                {' '}
                <span>Company</span>{' '}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'company' ? 'rotate-180' : ''}`}
                />{' '}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>{' '}
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
                    {' '}
                    <div className="p-8">
                      {' '}
                      <div className="grid grid-cols-4 gap-6">
                        {company.map((item, index) => (
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
                              delay: index * 0.05,
                            }}
                            className="group/item"
                            key={item.name}
                          >
                            {' '}
                            <Link
                              href={item.link}
                              className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                            >
                              {' '}
                              <div className="relative w-12 h-12 mb-4">
                                {' '}
                                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                  {' '}
                                  {(() => {
                                    const IconComponent = item.icon;
                                    return <IconComponent className="text-gray-700" size={24} strokeWidth={1.5} />;
                                  })()}
                                </div>{' '}
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                              </div>{' '}
                              <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                                {item.name}
                              </h3>{' '}
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>{' '}
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
                        {' '}
                        <div className="flex items-center space-x-3">
                          {' '}
                          <div className="w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center">
                            {' '}
                            <Sparkles className="text-[#f1592a]" size={20} />
                          </div>{' '}
                          <p className="text-gray-900 font-semibold">
                            Want to build your career with Key Concepts?
                          </p>
                        </div>{' '}
                        <button
                          onClick={openCareerModal}
                          className="px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors"
                        >
                          Join Our Team
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>{' '}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('insights')}
              onMouseLeave={handleMouseLeave}
            >
              {' '}
              <button className="group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium">
                {' '}
                <span>Insights</span>{' '}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMegaMenu === 'insights' ? 'rotate-180' : ''}`}
                />{' '}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" />
              </button>{' '}
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
                    {' '}
                    <div className="p-8">
                      {' '}
                      <div className="grid grid-cols-2 gap-6">
                        {insights.map((item, index) => (
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
                              delay: index * 0.05,
                            }}
                            className="group/item"
                            key={item.name}
                          >
                            {' '}
                            <Link
                              href={item.link}
                              className="block h-full p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all"
                            >
                              {' '}
                              <div className="relative w-12 h-12 mb-4">
                                {' '}
                                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all">
                                  {' '}
                                  {(() => {
                                    const IconComponent = item.icon;
                                    return <IconComponent className="text-gray-700" size={24} strokeWidth={1.5} />;
                                  })()}
                                </div>{' '}
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                              </div>{' '}
                              <h3 className="font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors">
                                {item.name}
                              </h3>{' '}
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>{' '}
          <div className="hidden lg:block">
            {' '}
            <Link href="/contact">
              {' '}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-7 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>{' '}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f1592a] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>{' '}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            {' '}
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {' '}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Home
              </Link>{' '}
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Services
              </Link>{' '}
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Our Platforms
              </Link>{' '}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Company
              </Link>{' '}
              <Link
                href="/insights/trends"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium"
              >
                Insights
              </Link>{' '}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {' '}
                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg font-semibold">
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
