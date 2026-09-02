'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import {
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  BarChart3,
  Bell,
  Settings,
  FileCheck,
  Zap,
  TrendingUp,
  Eye,
  MessageSquare,
  Database,
  GitBranch,
  Sparkles,
  Building2,
  Briefcase,
  Heart,
  Clock,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { useState, useEffect, useRef } from 'react'
import { useEnquiryModal } from '@/context/enquiry-modal-context'

function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  decimals = 0
}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1e3,
  })
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])
  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest)
        ref.current.textContent = `${prefix}${formatted}${suffix}`
      }
    })
  }, [springValue, prefix, suffix, decimals])
  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}

const heroStats = [
  {
    value: 1e4,
    suffix: '+',
    label: 'Active Members',
    prefix: '',
    icon: Users,
    decimals: 0,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Events Managed',
    prefix: '',
    icon: Calendar,
    decimals: 0,
  },
  {
    value: 95,
    suffix: '%',
    label: 'Approval Speed',
    prefix: '',
    icon: CheckCircle,
    decimals: 0,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Platform Access',
    prefix: '',
    icon: Eye,
    decimals: 0,
  },
]

const coreFeatures = [
  {
    icon: Users,
    dotBg: 'bg-[#f1592a]',
    title: 'Member Management',
    description:
      'Manage detailed member profiles, roles, permissions, and membership status in one centralised platform. Search and organise member records by area, location, and business details, while tracking member activity.',
  },
  {
    icon: Briefcase,
    dotBg: 'bg-[#f1592a]',
    title: 'Business Network',
    description:
      'Help members promote their businesses, discover relevant services, and build stronger B2B connections within the community. Search businesses by name, category, or location, and access recommendations and ratings.',
  },
  {
    icon: Shield,
    dotBg: 'bg-[#f1592a]',
    title: 'Committee',
    description:
      'Manage committees, members, roles, and responsibilities in one place. Maintain a clear hierarchy and keep office bearer information organized for smoother decision-making.',
  },
  {
    icon: Calendar,
    dotBg: 'bg-[#f1592a]',
    title: 'Event Management',
    description:
      'Create and manage community events, from publishing event details to registrations and attendance. Send reminders, track participation, manage recurring events, and collect post-event feedback.',
  },
  {
    icon: BarChart3,
    dotBg: 'bg-[#f1592a]',
    title: 'Polls and Surveys',
    description:
      'Collect opinions and feedback directly from community members. Create polls, share options, track responses, and understand member preferences.',
  },
  {
    icon: Clock,
    dotBg: 'bg-[#f1592a]',
    title: 'Meeting Management',
    description:
      'Organize meetings without relying on manual calls or attendance registers. Send invitations, track responses and attendance, and maintain complete meeting records.',
  },
]

const keyBenefits = [
  {
    icon: Database,
    title: 'Centralized Control',
    description:
      'Manage everything from a single, unified dashboard with complete visibility across all community operations.',
  },
  {
    icon: Zap,
    title: 'Reduced Manual Work',
    description:
      'Automate repetitive tasks, workflows, and notifications to save time and eliminate human errors.',
  },
  {
    icon: Eye,
    title: 'Transparent Processes',
    description:
      'Full visibility into member activities, event participation, and approval statuses with detailed audit logs.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable for Growth',
    description:
      'Built to scale seamlessly as your community grows - from hundreds to thousands of members without performance loss.',
  },
]

const additionalCapabilities = [
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Multi-channel notifications (email, SMS, in-app) for events, approvals, and announcements.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description:
      'Internal messaging, discussion forums, and announcement boards for seamless community interaction.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description:
      'Comprehensive insights into member engagement, event participation, and community health metrics.',
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description:
      'Enterprise-grade security with role-based permissions, data encryption, and GDPR compliance.',
  },
  {
    icon: Settings,
    title: 'Custom Branding',
    description: 'White-label solution with custom branding, colors, logos, and domain mapping.',
  },
  {
    icon: GitBranch,
    title: 'Integration Ready',
    description:
      'RESTful APIs and webhooks for seamless integration with payment gateways, CRMs, and third-party tools.',
  },
]

const useCases = [
  {
    type: 'Professional Associations',
    icon: Briefcase,
    title: 'Business Network Management',
    description:
      'Connect members, businesses, and professional opportunities through one platform built for stronger association networks. ',
    highlightedFeature: {
      icon: FileCheck,
      title: 'Certification Management',
      description:
        'Track member certifications, CPD credits, and professional development milestones',
    },
    features: [
      'Business Directory',
      'Map & Discovery',
      'Business Ratings & Recommendations',
      'Events, Exhibitions & CPD Trackings',
      'Member, Membership & Committee Management',
      'Meetings & Approvals',
      'AI-Powered Assistance',
      'Committee & board management',
      'Certification management',
      'Professional resource library',
      'Birthday Wishes',
    ],
    image:
      'https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGFzc29jaWF0aW9uJTIwY29uZmVyZW5jZSUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcxOTEzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    contentAlign: 'left',
  },
  {
    type: 'Social Communities (Samaj)',
    icon: Users,
    title: 'Connect & Celebrate Together',
    description:
      'Build stronger bonds within your community with comprehensive member management, cultural event coordination, and networking tools designed specifically for Samaj organizations.',
    highlightedFeature: {
      icon: Users,
      title: 'Member Directory',
      description:
        'Maintain detailed family networks with searchable member profiles and relationship mapping',
    },
    features: [
      'Member directory & family networks',
      'Cultural event management',
      'Matrimonial',
      'Business networking',
      'Community welfare programs',
      'Festival & celebration planning',
      'Donation & fundraising tracking',
      'Community Announcements',
      'Smart Notifications & Birthday Wishes',
    ],
    image:
      'https://images.unsplash.com/photo-1759738102510-ec524f666274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1haiUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMGN1bHR1cmFsJTIwZXZlbnR8ZW58MXx8fHwxNzcxOTEzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    contentAlign: 'right',
  },
]

function YounitedCommunitiesPage() {
  const { openModal } = useEnquiryModal()

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            />
          </div>
          <div className="container text-center lg:text-left mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
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
                className="relative"
              >
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8"
                >
                  <Building2 className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    Community Management Platform
                  </span>
                </motion.div>
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
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  Younited Communities{' '}
                  <span className="block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Simplify. Engage. Scale.
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
                  className="text-md lg:text-lg text-gray-600 leading-relaxed font-medium mb-8"
                >
                  A complete community and association management platform designed to streamline member
                  management, event coordination, and approval workflows - so you can focus on building
                  stronger, more engaged communities.
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
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start lg:items-start gap-4 mb-8"
                >
                  <motion.button
                    onClick={() => openModal('Younited Communities')}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-[80%] sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold">Schedule a Demo</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                  <motion.a
                    href="#features"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-[80%] sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span className="text-sm md:text-base font-semibold">Explore Features</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5 text-gray-800"
                    />
                  </motion.a>
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
                    delay: 0.6,
                  }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full pt-8 border-t border-gray-200"
                >
                  {heroStats.map((stat, index) => (
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left" key={index}>
                      <span className="font-bold text-2xl md:text-3xl text-[#f1592a] leading-none">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
                      </span>
                      <span className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-2 font-medium">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - App Showcase */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="relative mx-auto flex justify-center lg:justify-end"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/20 to-gray-300/20 blur-3xl scale-75" />
                <div className="relative z-10 w-[320px] h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />
                  <div className="w-full h-full bg-white overflow-hidden">
                    <div className="h-12 bg-white flex items-center justify-between px-8 pt-2">
                      <span className="text-xs font-semibold text-gray-900">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 border border-gray-900 rounded-sm" />
                      </div>
                    </div>
                    <div className="px-6 pt-4 pb-6 h-full bg-gradient-to-br from-gray-50 to-white">
                      <div className="text-center mb-6">
                        <div className="relative w-16 h-16 mx-auto mb-3">
                          <div className="w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center shadow-lg shadow-[#f1592a]/30">
                            <Users className="text-white" size={32} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Community Hub</h2>
                        <p className="text-sm text-gray-600">Unified Portal & Directory</p>
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 mb-4"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            YC
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">Younited Portal</p>
                            <p className="text-xs text-green-600 font-medium">● 10,000+ Active Members</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                            <motion.div
                              animate={{ width: ['20%', '85%', '85%'] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="h-full bg-[#f1592a] rounded-full"
                            />
                          </div>
                          <p className="text-[11px] text-gray-500 font-medium text-right">85% Engagement</p>
                        </div>
                      </motion.div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-[#f1592a]/10 to-orange-100/50 rounded-2xl p-3.5 border border-[#f1592a]/20">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
                              <Calendar className="text-[#f1592a]" size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Events & Scheduling</p>
                              <p className="text-sm font-bold text-gray-900">Seamless Coordination</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
                                <CheckCircle className="text-gray-700" size={18} strokeWidth={1.5} />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 font-medium">Approval Workflow</p>
                                <p className="text-sm font-bold text-gray-900">Automated Approvals</p>
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              className="w-2 h-2 bg-[#f1592a] rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-center mb-16"
            >
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
                Core Features
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Core{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your community efficiently, from member profiles to event coordination and meeting management.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
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
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                  key={feature.title}
                >
                  <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                          <feature.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${feature.dotBg}`} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Perfect For{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Every Community
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're managing a Samaj, professional association, or non-profit
                organization - Younited Communities adapts to your unique needs.
              </p>
            </motion.div>
            <div className="space-y-32">
              {useCases.map((useCase, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px',
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${useCase.contentAlign === 'right' ? 'lg:grid-flow-dense' : ''}`}
                  key={useCase.type}
                >
                  <div className={useCase.contentAlign === 'right' ? 'lg:col-start-2' : ''}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
                    >
                      <useCase.icon className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                      <span className="text-xs md:text-sm font-semibold text-[#f1592a]">
                        {useCase.type}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    >
                      {useCase.title}
                    </motion.h3>
                    <motion.p
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.4,
                      }}
                      className="text-gray-600 leading-relaxed mb-8"
                    >
                      {useCase.description}
                    </motion.p>
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
                        delay: 0.5,
                      }}
                      className="bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-2xl p-4 lg:p-6 mb-8 border border-[#f1592a]/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#f1592a]/30 shadow-sm">
                          <useCase.highlightedFeature.icon
                            className="text-[#f1592a]"
                            size={22}
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {useCase.highlightedFeature.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {useCase.highlightedFeature.description}
                          </p>
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
                        delay: 0.6,
                      }}
                      className="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                    >
                      {useCase.features.map((feature, idx) => (
                        <div className="flex items-center space-x-3" key={idx}>
                          <CheckCircle
                            className="text-[#f1592a] flex-shrink-0"
                            size={16}
                            strokeWidth={2}
                          />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  <div
                    className={
                      useCase.contentAlign === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                    }
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/5 rounded-[3rem] blur-3xl scale-105 -z-10" />
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                        <ImageWithFallback
                          src={useCase.image}
                          alt={useCase.type}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
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
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Younited Communities
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Built for modern communities that demand efficiency, transparency, and scalability.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
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
                  className="group p-4 lg:p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                  key={benefit.title}
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14 mb-6">
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#f1592a]/10 transition-all">
                      <benefit.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg md:text-lg md:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-md leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Additional{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive toolkit designed to address every aspect of community management.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalCapabilities.map((capability, index) => (
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
                    delay: index * 0.05,
                  }}
                  className="group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:bg-white hover:shadow-lg transition-all"
                  key={capability.title}
                >
                  <div className="flex items-start lg:flex-row flex-col gap-4 lg:gap-0 space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all">
                      <capability.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8">
                <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium text-white">
                  Ready to Transform Your Community?
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Start Your Free Demo Today
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                See how Younited Communities can streamline your operations, boost engagement, and help your community thrive. Schedule a personalized demo with our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => openModal('Younited Communities')}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold cursor-pointer"
                >
                  <span className="text-sm md:text-md">Schedule a Demo</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm md:text-md">Contact Sales</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
                className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/80"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Centralized Member Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Simplified Community Operations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Stronger Member Connections</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default YounitedCommunitiesPage
