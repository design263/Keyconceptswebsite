'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react'
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
  Ear,
  Coins,
  PhoneCall,
  Compass,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const coreValues = [
  {
    icon: Award,
    title: 'Integrity',
    description: "We say what we'll do, and we do what we say. No hidden costs, no scope that quietly grows, no timelines padded to make us look good. When something is delayed, we tell you before you have to ask. When something is harder than we thought, we say so - and then we solve it together.",
    footnote: "In 16 years, our most common source of new clients is referrals from existing ones. That only happens when trust is real."
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "We stay genuinely curious. Our team reads, builds side projects, follows what's emerging in AI, cloud, and product design - not because it looks good on a website, but because it means our clients get better solutions than they would have got from us two years ago. We bring new thinking to old problems. Every time.",
    footnote: "From Odoo ERP to AI automation to LegalTech - we've built in categories that didn't exist in Gujarat before we built them."
  },
  {
    icon: Target,
    title: 'Impact',
    description: "Code is just code until it changes something. We measure our success by the real outcomes our clients experience - the operations manager who finishes work on time, the brand that reaches customers it never could before, the founder who raises funding because the product works. If the technology isn't creating impact, we haven't done our job.",
    footnote: "Every case study we publish starts with a real problem and ends with a measurable result. That's the standard we hold ourselves to."
  }
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

const journeyTimeline = [
  {
    year: '2008',
    title: 'Founded in Surat',
    description: "Punit Gajera and Rahul Prajapati start Key Concepts as a two-person development studio. First clients are local Surat businesses who need websites and custom software."
  },
  {
    year: '2010 – 2012',
    title: 'First Enterprise Clients',
    description: "Word of mouth brings in the first enterprise-scale projects. Team grows. First ERP implementation delivered. Client retention rate proves the model works."
  },
  {
    year: '2013 – 2015',
    title: 'Going Beyond Surat',
    description: "First clients from Mumbai, Delhi, and Ahmedabad. Mobile app development added as a core service. Team expands to include dedicated designers and QA engineers."
  },
  {
    year: '2016 – 2018',
    title: 'First International Projects',
    description: "First projects delivered for UK and USA clients. Odoo partnership formalised. Key Concepts becomes a recognised name in Gujarat's IT industry. CII membership established."
  },
  {
    year: '2019 – 2021',
    title: 'Product Engineering Focus',
    description: "Transition from project delivery to product partnership model. Full lifecycle involvement - build, launch, maintain, grow. 300+ projects milestone crossed. COVID-era surge in digital transformation projects."
  },
  {
    year: '2022 – 2024',
    title: 'AI, Automation & Global Scale',
    description: "AI automation added as a core capability. LegalTech, marketplace, and speciality manufacturing platforms built. Offices in London and New York. 500+ projects. 400+ clients. The same values since day one."
  }
]

const ourPromises = [
  {
    icon: Ear,
    title: 'We Listen Before We Build',
    description: "Every engagement starts with a real conversation about your business - not a requirements form. We ask questions most agencies don't think to ask. We push back when something doesn't make sense. We want to understand the problem before we propose the solution."
  },
  {
    icon: Coins,
    title: 'We Respect Your Budget',
    description: "We scope honestly from day one. No low-ball estimates that grow later. If your budget won't cover everything you want, we'll tell you - and help you decide what to build first. We'd rather scope it right than start it wrong."
  },
  {
    icon: HandshakeIcon,
    title: 'We Stay After Launch',
    description: "Most agencies disappear when the invoice is paid. We don't. We stay involved - supporting, improving, and growing your product as your business evolves. Our longest client relationships are over a decade old. That's not an accident."
  },
  {
    icon: PhoneCall,
    title: "We're Reachable When It Matters",
    description: "You won't be passed to an account manager or a support ticket queue. When something important comes up, you talk to the people who built it. Fast response times aren't a premium feature - they're how we work."
  },
  {
    icon: Compass,
    title: 'We Tell You the Truth',
    description: "If your idea has a problem, we'll tell you. If your timeline is unrealistic, we'll tell you. If there's a better way to build what you want, we'll show you. Honest conversation now saves everyone pain later."
  },
  {
    icon: TrendingUp,
    title: 'We Think About Your Next Stage',
    description: "We build for where you're going, not just where you are. Scalable architecture, clean code, proper documentation - the decisions we make today don't hold you back when you're ready to grow."
  }
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
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[#f1592a] w-6' : 'bg-white/30 hover:bg-white/50'
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
                    className={`max-w-full max-h-[70vh] object-contain rounded-lg transition-transform duration-300 ${zoom ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
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



function AnimatedCounter({ value, suffix, delay = 0 }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      motionValue.set(value)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [motionValue, value, delay])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
    return () => unsubscribe()
  }, [springValue])

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref} className="tabular-nums">
        0
      </span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

function OurStoryPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-20 md:pt-32 md:pb-20 pb-10 border-b border-gray-100  bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text & Stats */}
              <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg"
                >
                  <Building2 className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                  <span className="text-xs md:text-sm font-medium text-gray-700">Our Story</span>
                </motion.span>

                <div className="space-y-4">
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
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    <span>Built in Surat. Trusted</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">Worldwide.</span>
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
                    className="text-md md:text-md text-gray-600 leading-relaxed"
                  >
                    Founded in 2008 by two engineers with a belief that technology should solve real problems - not create new ones. Sixteen years later, that belief still drives every decision we make, every product we build, and every client we serve.
                  </motion.p>
                </div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-8 border-t border-gray-200"
                >
                  {[
                    { value: 2008, suffix: '', label: 'Year founded in Surat' },
                    { value: 16, suffix: '+', label: 'Years of delivery' },
                    { value: 500, suffix: '+', label: 'Projects completed' },
                    { value: 400, suffix: '+', label: 'Clients worldwide' },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-center lg:items-start">
                      <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={0.7} />
                      </span>
                      <span className="text-xs md:text-sm font-semibold text-gray-500 mt-2 text-center lg:text-left">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: Image Bento Grid */}
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
                  delay: 0.7,
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
              >
                {/* Image 1: Main Story */}
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[300px] md:min-h-[400px] group">
                  <ImageWithFallback
                    src="/assets/ourStory/Our-Story.jpg"
                    alt="Key Concepts Office Workspace"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Column 2: Stacked vertical cards */}
                <div className="flex flex-col gap-6">
                  {/* Image 2 */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex-1 min-h-[140px] md:min-h-[190px] group">
                    <ImageWithFallback
                      src="/images/20159685-22.jpg"
                      alt="Team Collaboration"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex-1 min-h-[140px] md:min-h-[190px] group">
                    <ImageWithFallback
                      src="/images/20181881.jpg"
                      alt="Legacy and Reliability"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                {' '}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
                >
                  About Key Concepts
                </motion.span>{' '}
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  We Started Small.<br></br>
                  {' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    We Stayed Honest.
                  </span>
                </h2>
                <div className="text-md md:text-md text-gray-600 leading-relaxed space-y-4">
                  <p>Key Concepts was founded in 2008 by <span className="text-[#f1592a] font-semibold">Punit Gajera</span> and <span className="text-[#f1592a] font-semibold">Rahul Prajapati</span> - two engineers in Surat who believed that businesses deserved technology partners who actually understood their problems, not just their project briefs.</p>
                  <p>We started as a small development studio. No investors, no shortcuts - just a small team, strong values, and a commitment to delivering work we were proud of. That approach earned us our first long-term clients. Their referrals earned us the next ones. And that's still how most of our business comes to us today.</p>
                  <p>Over sixteen years we've grown into a full-service technology partner - delivering web platforms, mobile apps, ERP systems, AI automation, SaaS products, and product engineering for clients across India, the UK, the USA, Australia, the UAE, and Europe. <span className="text-[#f1592a] font-semibold">The size has changed. The way we work hasn't.</span></p>
                </div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 mt-8 border-t border-gray-100"
                >
                  {[
                    { value: 500, suffix: '+', label: 'Projects Delivered' },
                    { value: 400, suffix: '+', label: 'Clients Worldwide' },
                    { value: 25, suffix: '+', label: 'Expert Team Members' },
                    { value: 6, suffix: '+', label: 'Countries Served' },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-start text-left">
                      <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={0.1 * index} />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side: Co-founders Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-6">
                    Co-Founders
                  </span>

                  <div className="space-y-6">
                    {/* Founder 1 */}
                    <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                        PG
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">Punit Gajera</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Director & CEO - Vision, strategy & client partnerships
                        </p>
                      </div>
                    </div>

                    {/* Founder 2 */}
                    <div className="flex items-center space-x-4 pb-6 border-b border-gray-150">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                        RP
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">Rahul Prajapati</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          CTO & Co-Founder - Engineering, architecture & delivery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    {"\"We started Key Concepts because we'd seen too many businesses left frustrated by technology partners who over-promised and under-delivered. We wanted to build something different - a company built on honest conversation, genuine understanding, and technology that actually works.\""}
                  </p>
                  <span className="text-sm font-semibold text-[#f1592a] block mt-4">
                    - Punit Gajera, CEO
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-24"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-[#f1592a]/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                The Journey
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                Sixteen Years of Showing Up
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                No overnight success. Just consistent delivery, one project at a time, building a reputation that still brings most of our clients to us through referrals.
              </p>
            </motion.div>

            {/* Timeline container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Vertical line - hidden on small mobile, visible on tablet and desktop */}
              <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gray-200 pointer-events-none" />

              <div className="space-y-8 lg:space-y-10">
                {journeyTimeline.map((item, index) => {
                  const isEven = index % 2 !== 0
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`relative flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''
                        } items-start lg:items-center`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-4 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-[#f1592a] shadow-md z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#f1592a]" />
                      </div>

                      {/* Content Column */}
                      <div className={`w-full lg:w-[calc(50%-3rem)] pl-12 lg:pl-0 ${isEven ? 'lg:text-left lg:pr-8' : 'lg:text-right lg:pl-8'
                        }`}>
                        <span className="text-xs font-bold text-[#f1592a] uppercase tracking-widest block mb-1">
                          {item.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Spacer for desktop column layout */}
                      <div className="hidden lg:block w-[calc(50%-3rem)]" />
                    </motion.div>
                  )
                })}
              </div>
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
              className="text-center mb-16"
            >
              {' '}
              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                Mission & Vision
              </motion.span>{' '}
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                What We're Here {' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  to Do
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Two simple ideas that have guided every project, every hire, and every decision since 2008.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group p-8 bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:border-[#f1592a]/20 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform mb-6 bg-white">
                  <div className="w-full h-full bg-[#f1592a]/5 rounded-xl flex items-center justify-center border border-[#f1592a]/10">
                    <Target className="text-[#f1592a]" size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mission</h3>
                <h4 className="text-lg font-semibold text-[#f1592a] mb-4">Build Technology That Solves Real Business Problems</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  We exist to help businesses turn ideas and requirements into digital products that actually work - and to keep improving those products as the business grows. Not just the first version. Every version. We measure our success by the results our clients see, not by the features we shipped.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group p-8 bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:border-[#f1592a]/20 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >

                <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform mb-6 bg-white">
                  <div className="w-full h-full bg-[#f1592a]/5 rounded-xl flex items-center justify-center border border-[#f1592a]/10">
                    <Lightbulb className="text-[#f1592a]" size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vision</h3>
                <h4 className="text-lg font-semibold text-[#f1592a] mb-4">To Be the Technology Partner Businesses Never Have to Leave</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  We want to be the partner businesses come to for their first product - and stay with for their tenth. As products grow, markets expand, and requirements evolve, we want to be the team that grows alongside them. Technology is a long game. We're here for all of it.
                </p>

              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Split Header Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-24 max-w-6xl mx-auto">
              {/* Left Column: Title & Badge */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-[#f1592a]/10 border border-[#f1592a]/20 rounded-full text-xs md:text-sm font-semibold text-[#f1592a]"
                >
                  Core Values
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center lg:text-left">
                  Three I's.<br />
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">One Promise.</span>
                </h2>
              </div>

              {/* Right Column: Explanatory text */}
              <div className="lg:col-span-7 text-left space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  {"These aren't words we put on a wall. They're the principles we go back to when decisions get hard - when a deadline is tight, a budget is stretched, or a client is frustrated. They're what we've built our reputation on, and what our clients come back for."}
                </p>
                <p>
                  {"Every person who joins Key Concepts learns these not from an induction document, but from watching how we work - in how we scope projects, how we handle problems, and how we treat the people we build for."}
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:border-[#f1592a]/20 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top highlight bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45]" />

                  <div className="p-8 pt-10 flex flex-col justify-between h-full flex-1">
                    <div>
                      {/* Icon */}
                      <div className="relative w-12 h-12 flex-shrink-0 mb-6 bg-white">
                        <div className="w-full h-full bg-[#f1592a]/5 rounded-xl flex items-center justify-center border border-[#f1592a]/10">
                          <value.icon className="text-[#f1592a]" size={24} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title & Body */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{value.description}</p>
                    </div>

                    {/* Footnote */}
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        <span className="text-[#f1592a] mr-1">{"→"}</span> {value.footnote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise to You Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Subtle background glow - CTA Theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-24"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-white/20 border border-white/40 rounded-full text-xs md:text-sm font-semibold text-white mb-4"
              >
                Our Promise to You
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight text-center">
                What Working With Us Actually Looks Like
              </h2>
              <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
                Values are only meaningful if they show up in the day-to-day. Here's what our clients experience when they work with us.
              </p>
            </motion.div>

            {/* Promises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {ourPromises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8 hover:border-white/40 hover:bg-white/15 hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 mb-6 shrink-0">
                    <promise.icon className="text-white" size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {promise.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {promise.description}
                  </p>
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
                Life at{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Key Concepts
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

        {/* Global Presence Section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-[#f1592a]/10 border border-[#f1592a]/20 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                Global Presence
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight text-center">
                Local Roots. Global Reach.
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                Headquartered in Surat - but our clients and our work span continents.
              </p>
            </motion.div>

            {/* Global Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { img: '/assets/india.png', title: 'India', desc: 'Headquarters - Surat, Gujarat. Primary delivery centre.' },
                { img: '/assets/uk.png', title: 'United Kingdom', desc: 'London office. UK client partnerships and delivery.' },
                { img: '/assets/USA.png', title: 'United States', desc: 'New York presence. US market clients and partnerships.' },
                { img: '/assets/world.png', title: 'Australia & UAE', desc: 'Project delivery across Australia, UAE, and Europe.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full justify-start"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4 shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain drop-shadow-sm" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Associations & Partnerships Section */}
        <section className="py-16 md:py-20 bg-gray-50/50 border-t border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 max-w-6xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-[#f1592a]/10 border border-[#f1592a]/20 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                Associations & Partnerships
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                Connected to the Ecosystem
              </h2>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {"Recognised by and connected with India's leading industry bodies and technology partners."}
              </p>
            </motion.div>

            {/* Association Tags Flex Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 max-w-4xl mx-auto justify-center"
            >
              {[
                { text: 'CII - Confederation of Indian Industry', img: '/assets/Confederation_of_Indian_Industry_(CII)-logo.svg' },
                { text: 'Certified Odoo Partner', img: '/assets/Odoo-partner-logo.png' },
                { text: 'SGCCI Member', img: '/assets/SGCCI-Member.png' },
                { text: 'SICO', icon: Heart },
                { text: 'SITA', img: '/assets/Sita-logo.svg' },
                { text: 'SGITC', img: '/assets/SGITC-logo.png' }
              ].map((tag, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/60 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-4 text-center text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:border-[#f1592a]/30 hover:shadow-md hover:bg-white transition-all duration-300 w-40 md:w-48 aspect-square"
                >
                  {tag.img ? (
                    <div className="h-12 md:h-16 flex items-center justify-center shrink-0">
                      <img src={tag.img} alt={tag.text} className="h-full w-auto object-contain block" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f1592a]/10 flex items-center justify-center border border-[#f1592a]/20 text-[#f1592a] shrink-0">
                      <tag.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="leading-tight">{tag.text}</span>
                </div>
              ))}
            </motion.div>
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
                Ready to Build Something That Lasts?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Sixteen years of delivery. Hundreds of clients who came back. A team that stays after launch. Let's see what we can build together.
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
                  <span className="text-sm md:text-md">Start a Conversation</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>

              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-6 md:mt-10 flex flex-wrap justify-center  gap-4 md:gap-8 text-white/80"
            >
              {' '}

              <div className="flex items-center space-x-2">
                {' '}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  {' '}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                <span className="text-sm">Free initial consultation</span>
              </div>{' '}
              <div className="flex items-center space-x-2">
                {' '}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  {' '}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                <span className="text-sm">No obligation, no pressure</span>
              </div>
              <div className="flex items-center space-x-2">
                {' '}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  {' '}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                <span className="text-sm">Response within 24 hours</span>
              </div>


            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default OurStoryPage
