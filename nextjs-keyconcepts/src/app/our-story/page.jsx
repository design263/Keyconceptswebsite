'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion, AnimatePresence } from 'motion/react'
import {
  Target,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Clock,
  FileCheck,
  Rocket,
  Globe,
  Lightbulb,
  HandshakeIcon,
  Building2,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const coreValues = [
  {
    icon: Target,
    title: 'Delivery Discipline',
    description:
      'We ship on time, every time. Structured execution with clear milestones, strong QA, and predictable timelines ensure consistent delivery.',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description:
      'Clear communication at every stage. You know where your project stands - risks, progress, and decisions are communicated openly.',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Heart,
    title: 'Long-Term Ownership',
    description:
      'We build systems meant to last. Maintenance, improvements, and ongoing support - we stay invested in your success beyond launch.',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
]

const whatWeCombine = [
  {
    icon: CheckCircle,
    title: 'Structured Execution',
    description: 'Process + Planning',
    details:
      'Agile sprints, detailed roadmaps, and milestone-based delivery ensure predictability.',
  },
  {
    icon: Users,
    title: 'Senior Oversight',
    description: 'Architecture + Risk Control',
    details:
      'Experienced architects review every decision to ensure scalability and maintainability.',
  },
  {
    icon: FileCheck,
    title: 'Strong QA Discipline',
    description: 'Quality First',
    details:
      'Comprehensive testing protocols, automated QA, and manual verification before every release.',
  },
  {
    icon: Globe,
    title: 'Enterprise Communication',
    description: 'Documentation + Clarity',
    details:
      'Clear documentation, stakeholder updates, and enterprise-friendly reporting at every stage.',
  },
]

const hybridApproach = [
  {
    title: 'Modern Stack',
    description: 'Latest technologies with proven stability',
    icon: Zap,
    benefit: 'Speed without compromise',
  },
  {
    title: 'Strong Fundamentals',
    description: 'Engineering discipline built over years',
    icon: Building2,
    benefit: 'Reliability you can trust',
  },
  {
    title: 'Rapid Iterations',
    description: 'Fast feedback cycles + continuous delivery',
    icon: TrendingUp,
    benefit: 'Quick market response',
  },
  {
    title: 'Stability Focus',
    description: 'Never sacrifice system integrity for speed',
    icon: Shield,
    benefit: 'Production-grade quality',
  },
  {
    title: 'Clear Communication',
    description: 'Stakeholder-friendly updates and timelines',
    icon: Globe,
    benefit: 'Predictable outcomes',
  },
  {
    title: 'Long-Term Support',
    description: 'Maintenance + continuous improvements',
    icon: Heart,
    benefit: 'Lasting partnerships',
  },
]

const teamStats = [
  {
    value: '50+',
    label: 'Engineering Professionals',
    icon: Users,
  },
  {
    value: '100+',
    label: 'Projects Delivered',
    icon: Rocket,
  },
  {
    value: '98%',
    label: 'Client Retention Rate',
    icon: Star,
  },
  {
    value: '10+',
    label: 'Years Combined Experience',
    icon: Award,
  },
]

const whyClientsStay = [
  {
    icon: Target,
    title: 'Predictable Delivery',
    description:
      'We commit to timelines and hit them. Clients know they can count on us for consistent, reliable delivery - sprint after sprint.',
  },
  {
    icon: Shield,
    title: 'Proactive Risk Management',
    description:
      'We identify issues before they become problems. Senior oversight and strong architecture reviews prevent costly surprises.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      "We're not just vendors - we're invested in your success. Long-term relationships built on trust, transparency, and shared goals.",
  },
  {
    icon: Lightbulb,
    title: 'Strategic Guidance',
    description:
      'Beyond code, we provide strategic advice on technology decisions, roadmap planning, and business-aligned solutions.',
  },
  {
    icon: Clock,
    title: 'Responsive Support',
    description:
      "Post-launch support that's actually responsive. Bug fixes, improvements, and feature updates handled with the same discipline.",
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description:
      "We don't just maintain - we continuously optimize. Performance improvements, refactoring, and tech debt management included.",
  },
]

const teamImages = [
  {
    src: '/assets/ourStory/birthday celebration.jpeg',
    caption: 'birthday celebration',
  },
  {
    src: '/assets/ourStory/goa-trip.JPG',
    caption: 'goa-trip',
  },
  {
    src: '/assets/ourStory/knowledge session.jpeg',
    caption: 'knowledge session',
  },
  {
    src: '/assets/ourStory/Matheran-trip.jpeg',
    caption: 'Matheran-trip',
  },
  {
    src: '/assets/ourStory/womens Day celebration.jpeg',
    caption: 'womens Day celebration',
  },
]

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(teamImages.length)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [zoom, setZoom] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  const extendedImages = [...teamImages, ...teamImages, ...teamImages]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (currentIndex >= teamImages.length * 2) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex - teamImages.length)
    } else if (currentIndex < teamImages.length) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex + teamImages.length)
    }
  }

  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return
    const timer = setInterval(() => {
      nextSlide()
    }, 3500)
    return () => clearInterval(timer)
  }, [currentIndex, isTransitioning, isHovered, lightboxIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % teamImages.length)
        setZoom(false)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length)
        setZoom(false)
      } else if (e.key === 'Escape') {
        setLightboxIndex(null)
        setZoom(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  const handleDotClick = (index) => {
    setIsTransitioning(true)
    setCurrentIndex(teamImages.length + index)
  }

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
        <button
          onClick={prevSlide}
          className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-[#f1592a] text-white border border-white/20 hover:border-transparent transition-all shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
        <button
          onClick={nextSlide}
          className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-[#f1592a] text-white border border-white/20 hover:border-transparent transition-all shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Sliding Window Track */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="px-3 flex-shrink-0"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#f1592a]/50 transition-all cursor-pointer h-full"
                onClick={() => setLightboxIndex(index % teamImages.length)}
              >
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-4 text-center bg-gray-950/80 border-t border-white/10">
                  <span className="text-sm font-semibold text-gray-300 capitalize">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {teamImages.map((_, index) => {
          const isActive = (currentIndex % teamImages.length) === index
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isActive ? 'bg-[#f1592a] w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>

      {/* Lightbox / Gallery Modal via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => {
                setLightboxIndex(null)
                setZoom(false)
              }}
            >
              <div
                className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-[#f1592a] rounded-full transition-all"
                  onClick={() => {
                    setLightboxIndex(null)
                    setZoom(false)
                  }}
                >
                  <X size={24} />
                </button>

                {/* Zoom Button */}
                <button
                  className="absolute top-4 right-20 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                  onClick={() => setZoom(!zoom)}
                >
                  {zoom ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                </button>

                {/* Prev Button */}
                <button
                  className="absolute left-4 p-3 text-white/85 hover:text-white bg-white/15 hover:bg-[#f1592a] rounded-full transition-all z-10"
                  onClick={() => {
                    setLightboxIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length)
                    setZoom(false)
                  }}
                >
                  <ChevronLeft size={30} />
                </button>

                {/* Image & Caption */}
                <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center select-none overflow-hidden">
                  <motion.img
                    key={lightboxIndex}
                    src={teamImages[lightboxIndex].src}
                    alt={teamImages[lightboxIndex].caption}
                    className={`max-w-full max-h-[70vh] object-contain rounded-lg transition-transform duration-300 ${
                      zoom ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                    }`}
                    onClick={() => setZoom(!zoom)}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  />
                  <div className="mt-6 text-center">
                    <p className="text-white text-lg md:text-xl font-medium capitalize">
                      {teamImages[lightboxIndex].caption}
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      {lightboxIndex + 1} / {teamImages.length}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  className="absolute right-4 p-3 text-white/85 hover:text-white bg-white/15 hover:bg-[#f1592a] rounded-full transition-all z-10"
                  onClick={() => {
                    setLightboxIndex((prev) => (prev + 1) % teamImages.length)
                    setZoom(false)
                  }}
                >
                  <ChevronRight size={30} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}



function OurStoryPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-20 md:pt-32 md:pb-20 pb-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto text-center">
              <motion.span
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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6"
              >
                <Building2 className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                <span className="text-xs md:text-sm font-medium text-gray-700">Our Story</span>
              </motion.span>
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
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  New Generation Company
                </span>
                <br />
                with Legacy
              </AnimatedH1>
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
                  delay: 0.4,
                }}
                className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
              >
                We bring the speed and agility of a modern engineering organization, with the
                reliability and discipline built over years of real-world delivery.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 w-full md:w-1/2 mx-auto"
              >
                <ImageWithFallback
                  src="/assets/ourStory/Our-Story.jpg"
                  alt="Key Concepts Office"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="container mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  About{' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Key Concepts
                  </span>
                </h2>
                <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  <strong>Key Concepts Innovations Pvt. Ltd.</strong> is a global technology partner
                  focused on{' '}
                  <span className="text-[#f1592a] font-semibold">
                    product-grade software engineering
                  </span>
                  . We build systems that run day-to-day operations - where uptime, clarity, and
                  accountability matter.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatWeCombine.map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#f1592a]/30 hover:shadow-lg transition-all"
                    key={item.title}
                  >
                    <div className="flex flex-col items-start">
                      <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform mb-4">
                        <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-200/50">
                          <item.icon className="text-gray-700" size={20} strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                      </div>
                      <div className="w-full text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#f1592a] transition-colors">{item.title}</h3>
                        <p className="text-xs text-[#f1592a] font-semibold mb-2">
                          {item.description}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Hybrid Approach
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Modern stack + strong engineering fundamentals. Rapid iterations without compromising
                stability. Clear stakeholder communication and predictable timelines.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {hybridApproach.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group"
                  key={item.title}
                >
                  <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                          <item.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#f1592a]/5 rounded-full border border-[#f1592a]/20 mt-auto">
                      <CheckCircle className="text-[#f1592a]" size={14} strokeWidth={2} />
                      <span className="text-xs text-[#f1592a] font-semibold">{item.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Core Values
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide every project, every decision, and every line of code we
                write.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative group"
                  key={value.title}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#f1592a]/30 hover:shadow-lg transition-all h-full flex flex-col items-start">
                    <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform mb-4">
                      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-200/50">
                        <value.icon className="text-gray-700" size={20} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <div className="w-full text-left">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#f1592a] transition-colors">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Team{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Snapshot
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A talented team of engineers, designers, and product specialists committed to
                delivering excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-5xl mx-auto"
            >
              <TeamCarousel />
            </motion.div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Clients{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Stay With Us
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Our 98% client retention rate isn't accidental - it's the result of consistent delivery,
                transparent communication, and genuine partnership.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyClientsStay.map((reason, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group"
                  key={reason.title}
                >
                  <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                          <reason.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{reason.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8">
                <HandshakeIcon className="text-white" size={18} />
                <span className="text-sm font-medium text-white">Let's Build Together</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Partner with a team that brings both modern agility and legacy reliability. Let's build something that lasts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm md:text-md">Get In Touch</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm md:text-md">Explore Services</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default OurStoryPage
