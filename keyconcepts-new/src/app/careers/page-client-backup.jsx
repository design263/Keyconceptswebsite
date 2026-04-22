'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { generatePageMetadata } from '@/lib/seo-helpers'

export const metadata = generatePageMetadata({
  title: 'Careers | Join Our Team | Key Concepts',
  description: 'Explore career opportunities at Key Concepts. Join our team of talented developers, designers, and technology professionals. Grow your career with us.',
  keywords: 'careers, job opportunities, technology jobs, developer jobs, designer careers, IT jobs, software development careers, join our team',
  path: '/careers',
  ogType: 'website'
})
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Heart,
  Users,
  Rocket,
  Award,
  Coffee,
  Zap,
  Target,
  TrendingUp,
  Code,
  Palette,
  Database,
  Smartphone,
  Settings,
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  DollarSign,
  Home,
  Eye,
  X,
  FileText,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api, endpoints } from '@/lib/api'

const whyWorkHere = [
  {
    icon: Rocket,
    title: 'Impactful Work',
    description:
      'Build products that transform businesses and communities. Your code, your designs, your ideas\u2014they all make a real difference.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description:
      'Continuous learning opportunities, mentorship programs, and clear paths for advancement. We invest in your professional development.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Work with talented, passionate people who value teamwork, open communication, and mutual respect. No egos, just great collaboration.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description:
      'Experiment with cutting-edge technologies, contribute to open-source, and bring bold ideas to life. We encourage innovation at every level.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description:
      "Flexible schedules, remote work options, and a culture that values your well-being. We believe great work happens when you're energized.",
  },
  {
    icon: Award,
    title: 'Competitive Benefits',
    description:
      'Competitive salary, health insurance, performance bonuses, and team outings. We take care of our people.',
  },
]

const cultureValues = []

const openRolesStatic = [
  {
    id: 1,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Code,
    requirements: 'React, Node.js, TypeScript, PostgreSQL, AWS',
    description:
      'Build scalable web applications and APIs for our enterprise clients and specialized platforms.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Surat, India / Remote',
    type: 'Full-Time',
    icon: Palette,
    requirements: 'Figma, Adobe XD, Prototyping, User Research, Design Systems',
    description:
      'Craft beautiful, intuitive interfaces that delight users and drive engagement across our product portfolio.',
  },
  {
    id: 3,
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    icon: Database,
    requirements: 'Node.js, Python, MongoDB, Redis, Docker',
    description:
      'Design and implement robust server-side architectures, APIs, and database solutions.',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Settings,
    requirements: 'AWS, Docker, Kubernetes, CI/CD, Terraform',
    description:
      'Automate and optimize our infrastructure for maximum reliability and scalability.',
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Management',
    location: 'Remote',
    type: 'Full-Time',
    icon: Target,
    requirements: 'Product Strategy, Agile, Analytics, Leadership, Communication',
    description:
      'Lead product development from concept to launch and drive business growth.',
  },
  {
    id: 6,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: TrendingUp,
    requirements: 'Digital Marketing, SEO, Content Strategy, Analytics, Social Media',
    description:
      'Develop and execute marketing campaigns that build brand awareness and drive customer acquisition.',
  },
]

const perksAndBenefits = [
  {
    icon: DollarSign,
    text: 'Competitive salary & performance bonuses',
  },
  {
    icon: Heart,
    text: 'Health & wellness insurance',
  },
  {
    icon: Home,
    text: 'Remote work & flexible hours',
  },
  {
    icon: GraduationCap,
    text: 'Learning & development budget',
  },
  {
    icon: Coffee,
    text: 'Free snacks & beverages',
  },
  {
    icon: Users,
    text: 'Team outings & events',
  },
  {
    icon: Briefcase,
    text: 'Modern work equipment',
  },
  {
    icon: Award,
    text: 'Recognition & rewards program',
  },
]

const cultureImages = [
  {
    url: 'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Team Collaboration',
  },
  {
    url: 'https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Creative Brainstorming',
  },
  {
    url: 'https://images.unsplash.com/photo-1693386556810-43d9451bdda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Diverse Team',
  },
  {
    url: 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Team Celebration',
  },
  {
    url: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Coding Together',
  },
]

function CultureImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cultureImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % cultureImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + cultureImages.length) % cultureImages.length)
  }

  return (
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
        duration: 0.6,
      }}
      className="relative px-8"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <div className="relative h-96">
          {cultureImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImage ? 1 : 0,
                x: index === currentImage ? 0 : index < currentImage ? -100 : 100
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </div>
        
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all"
        >
          <ArrowRight size={24} strokeWidth={2} className="rotate-180" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all"
        >
          <ArrowRight size={24} strokeWidth={2} />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {cultureImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage ? 'bg-[#f1592a]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
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
        className="absolute -bottom-6 -left-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
            <Users className="text-white" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
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
          delay: 0.4,
        }}
        className="absolute -top-6 -right-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">4.8/5</div>
            <div className="text-sm text-gray-600">Employee Rating</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const getRequirementTags = (requirements) =>
  Array.isArray(requirements) ? requirements : requirements?.split(",").map((item) => item.trim()).filter(Boolean);

function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [openRoles, setOpenRoles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await api.get(endpoints.JOBS)
        setOpenRoles(data?.data || data || [])
      } catch (error) {
        console.error('Error fetching roles:', error)
        // Fallback to static data if API fails
        setOpenRoles(openRolesStatic)
      } finally {
        setLoading(false)
      }
    }

    fetchRoles()
  }, [])
  const [applicationForm, setApplicationForm] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    coverLetter: "" 
  })
  const [resumeFile, setResumeFile] = useState(null)

  const openModal = (role) => {
    setSelectedRole(role)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedRole(null)
    setIsModalOpen(false)
    setApplicationForm({ fullName: "", email: "", phone: "", coverLetter: "" })
    setResumeFile(null)
  }

  const submitApplication = async (e) => {
    e.preventDefault()
    if (!selectedRole || !resumeFile) return

    // In a real app, you would submit to an API
    console.log('Application submitted:', {
      role: selectedRole,
      form: applicationForm,
      resume: resumeFile
    })
    
    closeModal()
  }

  if (loading) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f1592a] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading job positions...</p>
          </div>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
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
                  <Briefcase className="text-[#f1592a]" size={18} />
                  <span className="text-sm font-medium text-gray-700">We're Hiring!</span>
                </motion.span>
                <motion.h1
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
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  Build Your Career with{' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Key Concepts
                  </span>
                </motion.h1>
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
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                >
                  Join a team of passionate builders, designers, and problem-solvers who are
                  architecting the digital future. We're on a mission to transform businesses through
                  innovative technology\u2014and we want you to be part of it.
                </motion.p>
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
                    delay: 0.5,
                  }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="#open-roles"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                  >
                    <span className="font-semibold">View Open Roles</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </motion.a>
                  <motion.a
                    href="#why-work-here"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
                  >
                    <span className="font-semibold">Learn More</span>
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="relative">
                <CultureImageSlider />
              </div>
            </div>
          </div>
        </section>

        <section id="why-work-here" className="py-24 bg-white">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Work at{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Key Concepts
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're building more than products\u2014we're building careers, relationships, and a culture
                that celebrates growth, innovation, and collaboration.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyWorkHere.map((benefit, index) => (
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
                  className="group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                  key={benefit.title}
                >
                  <div className="relative w-14 h-14 mb-6">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <benefit.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Culture & Values
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These aren't just words on a wall\u2014they're the principles that guide how we work,
                collaborate, and deliver value every single day.
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
              className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-[#f1592a] flex-shrink-0 mt-1"
                        size={20}
                        strokeWidth={2}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Agile Sprints</h4>
                        <p className="text-gray-600">
                          Two-week development cycles with daily standups and continuous delivery.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-[#f1592a] flex-shrink-0 mt-1"
                        size={20}
                        strokeWidth={2}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Code Reviews</h4>
                        <p className="text-gray-600">
                          Peer reviews for quality, knowledge sharing, and continuous improvement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-[#f1592a] flex-shrink-0 mt-1"
                        size={20}
                        strokeWidth={2}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Design Thinking</h4>
                        <p className="text-gray-600">
                          User-centered approach with prototyping, testing, and iterative refinement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-[#f1592a] flex-shrink-0 mt-1"
                        size={20}
                        strokeWidth={2}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Knowledge Sharing</h4>
                        <p className="text-gray-600">
                          Weekly tech talks, documentation culture, and cross-functional learning
                          sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Team Collaboration"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Perks &{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We take care of our team so they can focus on doing their best work.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {perksAndBenefits.map((perk, index) => (
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
                    delay: index * 0.05,
                  }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#f1592a]/30 transition-all"
                  key={perk.text}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <perk.icon className="text-[#f1592a]" size={20} strokeWidth={2} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{perk.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="open-roles" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Open{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Positions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our team and help us build the future of digital transformation.
              </p>
            </motion.div>
            <div className="space-y-4 max-w-6xl mx-auto">
              {openRoles?.length > 0 ? openRoles.map((role, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all overflow-hidden"
                  key={role._id || role.id || index}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                          <span className="flex items-center space-x-1">
                            <Briefcase size={14} strokeWidth={2} /> <span>{role.department}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={14} strokeWidth={2} /> <span>{role.location}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Clock size={14} strokeWidth={2} /> <span>{role.type}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">{role.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {getRequirementTags(role?.requirements)?.slice(0, 4)?.map((skill) => (
                            <span
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                              key={skill}
                            >
                              {skill}
                            </span>
                          ))}
                          {getRequirementTags(role?.requirements)?.length > 4 && (
                            <span className="px-3 py-1 text-gray-500 text-xs font-medium">
                              +{getRequirementTags(role?.requirements)?.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[140px]">
                      <Link href={`/careers/${role._id || role.id}`}>
                        <motion.button
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:border-[#f1592a] hover:text-[#f1592a] transition-all font-semibold shadow-sm hover:shadow-md"
                        >
                          <Eye size={18} strokeWidth={2} /> <span>View</span>
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{
                          scale: 1.03,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={() => openModal(role)}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
                      >
                        <FileText size={18} strokeWidth={2} /> <span>Apply</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No job positions available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Rocket className="text-[#f1592a]" size={18} />
                <span className="text-sm font-medium text-white">Ready to Join Us?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Don't see a role that fits? Send us your resume anyway! We're always looking for
                talented people to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:careers@keyconcepts.co.in?subject=Job Application"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span className="font-semibold">Send Your Resume</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
                <motion.a
                  href="mailto:careers@keyconcepts.co.in?subject=Question About Careers"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all"
                >
                  <span className="font-semibold">Have Questions?</span>
                </motion.a>
              </div>
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
                className="mt-12 pt-12 border-t border-white/10"
              >
                <p className="text-gray-400 mb-4">Or reach out to us directly:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
                  <a
                    href="mailto:careers@keyconcepts.co.in"
                    className="flex items-center space-x-2 hover:text-[#f1592a] transition-colors"
                  >
                    <MapPin size={18} /> <span>careers@keyconcepts.co.in</span>
                  </a>
                  <span className="hidden sm:block text-gray-600">|</span>
                  <a
                    href="tel:+919374356357"
                    className="flex items-center space-x-2 hover:text-[#f1592a] transition-colors"
                  >
                    <MapPin size={18} /> <span>+91 9374 356 357</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {selectedRole?.title}
                </h2>
                <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={submitApplication}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={applicationForm.fullName}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, fullName: e.target.value }))}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover Letter
                    </label>
                    <textarea
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm((prev) => ({ ...prev, coverLetter: e.target.value }))}
                      required
                      rows={4}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Resume/CV
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-[#f1592a] transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-[#f1592a] hover:text-[#ff7a45]">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                    {resumeFile && (
                      <p className="mt-2 text-sm text-gray-600">Selected: {resumeFile.name}</p>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#f1592a] to-[#ff7a45] hover:from-[#ff7a45] hover:to-[#f1592a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </LayoutWrapper>
  )
}

export default CareersPage
