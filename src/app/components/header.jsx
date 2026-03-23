import { Link, useLocation } from 'react-router'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Knowledge Hub',
      path: '/blog',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]
  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      {' '}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        <div className="flex items-center justify-between h-20">
          {' '}
          <Link to="/" className="flex items-center space-x-2">
            {' '}
            <div className="w-10 h-10 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-lg flex items-center justify-center">
              {' '}
              <span className="text-white text-xl font-bold">KC</span>
            </div>{' '}
            <span className="text-2xl font-bold bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
              Key Concepts
            </span>
          </Link>{' '}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                to={item.path}
                className={`relative px-2 py-1 transition-colors ${location.pathname === item.path ? 'text-[#f1592a]' : 'text-gray-700 hover:text-[#f1592a]'}`}
                key={item.path}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f1592a]"
                  />
                )}
              </Link>
            ))}
          </nav>{' '}
          <div className="hidden md:block">
            {' '}
            <Link to="/contact">
              {' '}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Started
              </motion.button>
            </Link>
          </div>{' '}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
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
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
        >
          {' '}
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-[#f1592a] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                key={item.path}
              >
                {item.name}
              </Link>
            ))}{' '}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              {' '}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg">
                Get Started
              </button>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
export { Header }
