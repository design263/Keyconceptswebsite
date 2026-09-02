'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion } from 'motion/react'
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
  Upload,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api, endpoints } from '@/lib/api'
import { submitJobApplication, validateResumeFile } from '@/lib/submitJobApplication'
import { PageLoader } from '@/components/page-loader'

const whyWorkHere = [
  {
    icon: Rocket,
    title: 'Impactful Work',
    description:
      'Build products that transform businesses and communities. Your code, your designs, your ideas - they all make a real difference.',
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
    status: 'active',
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
    status: 'active',
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
    status: 'active',
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
    status: 'active',
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
    status: 'active',
    icon: Target,
    requirements: 'Product Strategy, Agile, Analytics, Leadership, Communication',
    description: 'Lead product development from concept to launch and drive business growth.',
  },
  {
    id: 6,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Surat, India',
    type: 'Full-Time',
    status: 'active',
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
    url: '/assets/ourStory/womens-Day-7.jpg',
    alt: 'Diverse Team',
  },
  {
    url: '/assets/ourStory/team.jpg',
    alt: 'Team Celebration',
  },
  {
    url: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Coding Together',
  },
  {
    url: 'https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: 'Creative Brainstorming',
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
      className="relative px-2 md:px-8"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <div className="relative h-96">
          {cultureImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImage ? 1 : 0,
                x: index === currentImage ? 0 : index < currentImage ? -100 : 100,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
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

        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {cultureImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImage ? 'bg-[#f1592a]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
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
        className="absolute -bottom-6 -left-2 md:p-3 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200"
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
            <Users className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
          </div>
          <div>
            <div className="md:text-2xl text-xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
        </div>
      </motion.div>


    </motion.div>
  )
}

const getRequirementTags = (requirements) =>
  Array.isArray(requirements)
    ? requirements
    : requirements
      ?.split(',')
      .map((item) => item.trim())
      .filter(Boolean)

const normalizeRole = (job) => ({
  ...job,
  id: job._id || job.id,
  type: job.employmentType || job.type,
})

const getActiveRoles = (jobs) =>
  (Array.isArray(jobs) ? jobs : []).filter((job) => job.status === 'active').map(normalizeRole)

function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [openRoles, setOpenRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [resumeFile, setResumeFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await api.get(endpoints.JOBS)
        const jobsList = data?.data || data || []
        setOpenRoles(getActiveRoles(jobsList))
      } catch (error) {
        console.warn('Error fetching roles, using static fallback:', error)
        setOpenRoles(getActiveRoles(openRolesStatic))
      } finally {
        setLoading(false)
      }
    }

    fetchRoles()
  }, [])
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
  })
  const handleFile = (file) => {
    if (!file) return

    const error = validateResumeFile(file)
    if (error) {
      alert(error)
      return
    }

    setResumeFile(file)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }
  const openModal = (role) => {
    setSelectedRole(role)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedRole(null)
    setIsModalOpen(false)
    setApplicationForm({ fullName: '', email: '', phone: '', coverLetter: '' })
    setResumeFile(null)
  }

  const submitApplication = async (e) => {
    e.preventDefault()
    if (isSubmitting || !selectedRole) return

    const jobId = selectedRole._id || selectedRole.id
    const resumeError = validateResumeFile(resumeFile)
    if (resumeError) {
      alert(resumeError)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await submitJobApplication({
        jobId,
        fullName: applicationForm.fullName,
        email: applicationForm.email,
        phone: applicationForm.phone,
        coverLetter: applicationForm.coverLetter,
        resumeFile,
      })

      alert(response?.message || 'Application submitted successfully!')
      closeModal()
    } catch (error) {
      console.error('Error submitting application:', error)
      alert(error?.message || 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <PageLoader label="Loading job positions..." />
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
          <div className="container text-center md:text-left mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <Briefcase className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    We're Hiring!
                  </span>
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
                  Build Your Career with{' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Key Concepts
                  </span>
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
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                >
                  Join a team of passionate builders, designers, and problem-solvers who are
                  architecting the digital future. We're on a mission to transform businesses
                  through innovative technology - and we want you to be part of it.
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
                    className="w-[80%] sm:w-auto mx-auto sm:mx-0 group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
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
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="relative">
                <CultureImageSlider />
              </div>
            </div>
          </div>
        </section>

        <section id="why-work-here" className="py-12 md:py-16 bg-white">
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
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                We're building more than products - we're building careers, relationships, and a
                culture that celebrates growth, innovation, and collaboration.
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
                  className="group p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                  key={benefit.title}
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14 mb-6">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <benefit.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Culture & Values
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                These aren't just words on a wall - they're the principles that guide how we
                work, collaborate, and deliver value every single day.
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
              className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-12"
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
                          User-centered approach with prototyping, testing, and iterative
                          refinement.
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
                <div className="relative rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/assets/Complete Product Lifecycle Ownership.png"
                    alt="Complete Product Lifecycle Ownership"
                    className="w-full h-auto"
                  />

                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Perks &{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
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

        <section id="open-roles" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
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
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Join our team and help us build the future of digital transformation.
              </p>
            </motion.div>
            <div className="space-y-4 max-w-6xl mx-auto">
              {openRoles?.length > 0 ? (
                openRoles.map((role, index) => (
                  <motion.div
                    key={role._id || role.id || index}
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
                  >
                    <div className="p-4 lg:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
                            {getRequirementTags(role?.requirements)
                              ?.slice(0, 4)
                              ?.map((skill) => (
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
                            <Eye size={18} strokeWidth={2} />
                            <span className="text-sm md:text-md">View</span>
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
                          <FileText size={18} strokeWidth={2} />
                          <span className="text-sm md:text-md">Apply</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No job positions available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="relative py-12 md:py-16 overflow-hidden"
        >
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8">
                <Rocket className="text-white" size={18} />
                <span className="text-sm font-medium text-white">Ready to Join Us?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                Don't see a role that fits? Send us your resume anyway! We're always looking for
                talented people to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="w-full sm:w-auto">
                  <motion.button
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
                  </motion.button>
                </a>
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
                className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/80"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Solve Real Problems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Work With Teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Keep Learning Daily</span>
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
                className="mt-12 pt-12 border-t border-white/10"
              >
                <p className="text-white mb-4">Or reach out to us directly:</p>
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
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50">
            <div className="bg-white w-full sm:w-11/12 sm:max-w-4xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 rounded-t-2xl px-5 sm:px-8 py-4 sm:py-5 z-10">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
                    Apply for <span className="text-[#f1592a]">{selectedRole?.title}</span>
                  </h2>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="px-5 sm:px-8 py-5 sm:py-6">
                <form onSubmit={submitApplication}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={applicationForm.fullName}
                        onChange={(e) =>
                          setApplicationForm((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                        required
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-[#f1592a] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={applicationForm.email}
                        onChange={(e) =>
                          setApplicationForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        required
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-[#f1592a] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>{' '}
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={applicationForm.phone}
                        onChange={(e) =>
                          setApplicationForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        required
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-[#f1592a] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        placeholder="Enter your LinkedIn profile"
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-[#f1592a] text-sm"
                      />
                    </div>

                    {/* Cover Letter — full width on both mobile and desktop */}

                    {/* Resume upload — full width */}
                    <div className="col-span-1 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV <span className="text-red-500">*</span>
                      </label>

                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`
      relative flex flex-col items-center justify-center
      px-6 py-10 border-2 border-dashed rounded-xl
      transition-all duration-300 cursor-pointer
      ${dragActive
                            ? 'border-[#f1592a] bg-orange-50'
                            : 'border-gray-300 hover:border-[#f1592a] hover:bg-gray-50'
                          }
    `}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => handleFile(e.target.files?.[0])}
                        />

                        <Upload
                          className={`h-12 w-12 ${dragActive ? 'text-[#f1592a]' : 'text-gray-400'}`}
                        />

                        <p className="mt-4 text-sm text-gray-700">
                          <span className="font-semibold text-[#f1592a]">Click to upload</span> or
                          drag and drop
                        </p>

                        <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>

                      {resumeFile && (
                        <div className="mt-3 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-800">{resumeFile.name}</p>
                              <p className="text-xs text-gray-500">
                                {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setResumeFile(null)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-[#f1592a] text-sm resize-none"
                        placeholder="Enter your cover letter"
                        value={applicationForm.coverLetter}
                        onChange={(e) =>
                          setApplicationForm((prev) => ({ ...prev, coverLetter: e.target.value }))
                        }
                        required
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Action buttons — stacked on mobile, side-by-side on sm+ */}
                  <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#f1592a] to-[#ff7a45] hover:from-[#ff7a45] hover:to-[#f1592a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a] transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutWrapper>
  )
}

export default CareersPage
