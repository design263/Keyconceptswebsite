'use client'

import { AnimatedH1 } from '@/components/animated-h1'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEnquiryModal } from '@/context/enquiry-modal-context'

function HeroSection() {
  const { openModal } = useEnquiryModal()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Transform Your Business with Next-Gen Technology'
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isActive = true

    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    const initParticles = () => {
      updateCanvasSize()
      const particleCount = 80
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.3
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2
        const distance = radius + (Math.random() - 0.5) * 50
        particlesRef.current.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        })
      }
    }

    const animate = () => {
      if (!isActive || document.visibilityState === 'hidden') {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const centerX2 = canvas.width / 2
      const centerY2 = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.3

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        const dx = centerX2 - particle.x
        const dy = centerY2 - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = 1e-3
        particle.vx += (dx / distance) * force
        particle.vy += (dy / distance) * force
        const angle = Math.atan2(dy, dx)
        particle.vx += Math.cos(angle + Math.PI / 2) * 0.01
        particle.vy += Math.sin(angle + Math.PI / 2) * 0.01
        particle.vx *= 0.99
        particle.vy *= 0.99
        const maxDistance = radius * 1.5
        if (distance > maxDistance) {
          const angle2 = Math.atan2(dy, dx)
          particle.x = centerX2 + Math.cos(angle2) * (radius * 0.5)
          particle.y = centerY2 + Math.sin(angle2) * (radius * 0.5)
        }
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(241, 89, 42, 0.6)'
        ctx.fill()
        particles.forEach((other, j) => {
          if (j <= i) return
          const dx2 = other.x - particle.x
          const dy2 = other.y - particle.y
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (distance2 < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            const opacity2 = (1 - distance2 / 120) * 0.3
            ctx.strokeStyle = `rgba(241, 89, 42, ${opacity2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      initParticles()
      animate()
    }

    const deferredStart =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(startAnimation, { timeout: 500 })
        : setTimeout(startAnimation, 0)

    window.addEventListener('resize', updateCanvasSize)

    return () => {
      isActive = false
      window.removeEventListener('resize', updateCanvasSize)
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(deferredStart)
      } else {
        clearTimeout(deferredStart)
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {' '}
      <div className="absolute inset-0 overflow-hidden">
        {' '}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-gray-200/10 rounded-full blur-3xl"
        />{' '}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-200/10 to-[#f1592a]/10 rounded-full blur-3xl"
        />
      </div>{' '}
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 relative z-10"
      >
        {' '}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {' '}
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg"
            >
              {' '}
              <Sparkles className="text-[#f1592a]" size={18} />{' '}
              <span className="text-xs md:text-sm font-medium text-gray-700">
                End-to-end Product Development Company
              </span>
            </motion.div>{' '}
            <div className="space-y-4">
              {' '}
              <AnimatedH1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight"
              >
                Build Faster. Scale Smarter.{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent block sm:inline">
                  Transform Digitally.
                </span>
              </AnimatedH1>{' '}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="text-md lg:text-lg text-gray-600 leading-relaxed font-medium"
              >
                Empowering businesses with custom software, ERP, CRM, mobile apps, and AI-driven solutions that streamline operations, accelerate growth, and drive digital transformation.
              </motion.p>
            </div>{' '}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center sm:items-start sm:flex-row gap-4 w-full"
            >
              <div onClick={openModal} className="w-[80%] sm:w-auto cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span className="text-sm md:text-base font-semibold">Book a Discovery Call</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </motion.button>
              </div>

              <Link href="/services" className="w-[80%] sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm md:text-base font-semibold">Explore Our Products</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>{' '}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative h-[600px] hidden lg:block"
          >
            {' '}
            <canvas ref={canvasRef} className="w-full h-full" />{' '}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 flex items-center justify-center"
            >
              {' '}
              <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl" />
            </motion.div>{' '}
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-16 left-10 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-xl shadow-xl border border-white/60 flex items-center justify-center"
            >
              {' '}
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg" />
            </motion.div>{' '}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute bottom-32 right-16 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#f1592a]/20"
            >
              {' '}
              <div className="flex items-center space-x-2">
                {' '}
                <div className="w-2 h-2 bg-[#f1592a] rounded-full animate-pulse" />{' '}
                <span className="text-xs font-semibold text-gray-700">Global Network</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>{' '}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        {' '}
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          {' '}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-1.5 h-1.5 bg-[#f1592a] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
export { HeroSection }
