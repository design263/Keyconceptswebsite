'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion } from 'motion/react'
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
                <Building2 className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5"  strokeWidth={2} />
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
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
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
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  About{' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Key Concepts
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  <strong>Key Concepts Innovations Pvt. Ltd.</strong> is a global technology partner
                  focused on{' '}
                  <span className="text-[#f1592a] font-semibold">
                    product-grade software engineering
                  </span>
                  . We build systems that run day-to-day operations - where uptime, clarity, and
                  accountability matter.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="group p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                    key={item.title}
                  >
                    <div className="flex items-start lg:flex-row flex-col gap-4 space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-xl flex items-center justify-center border border-[#f1592a]/20">
                        <item.icon className="text-[#f1592a] w-6 h-6 md:w-7 md:h-7"  strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-[#f1592a] font-semibold mb-2">
                          {item.description}
                        </p>
                        <p className="text-gray-600 text-md md:text-lg leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
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
                  className="group p-4 lg:p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                  key={item.title}
                >
                  <div className="relative w-12 h-12 mb-4">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <item.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#f1592a]/5 rounded-full border border-[#f1592a]/20">
                    <CheckCircle className="text-[#f1592a]" size={14} strokeWidth={2} />
                    <span className="text-xs text-[#f1592a] font-semibold">{item.benefit}</span>
                  </div>
                </motion.div>
              ))}
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
                  <div className="relative p-4 lg:p-6 bg-white rounded-3xl border border-gray-200 hover:border-[#f1592a]/30 shadow-lg hover:shadow-2xl transition-all h-full">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <value.icon className="text-white w-8 h-8 md:w-10 md:h-10"  strokeWidth={2} />
                    </div>
                    <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">{value.description}</p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamStats.map((stat, index) => (
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
                  key={stat.label}
                >
                  <div className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#f1592a]/30 hover:bg-white/10 transition-all text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl mb-4 shadow-lg">
                      <stat.icon className="text-white w-6 h-6 md:w-7 md:h-7"  strokeWidth={2} />
                    </div>
                    <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm md:text-md font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="flex items-center justify-center">
                <div
                  className="relative overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    width: '60%',
                    margin: '0 auto',
                    borderRadius: '20px',
                  }}
                >
                  <ImageWithFallback
                    src="/assets/ourStory/team.jpg"
                    alt="Key Concepts Team"
                    className="block h-auto w-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
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
                  className="group p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
                  key={reason.title}
                >
                  <div className="relative w-12 h-12 mb-6">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <reason.icon
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-md md:text-lg leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
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
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f1592a]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f1592a]/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <HandshakeIcon className="text-[#f1592a]" size={18} />
                  <span className="text-sm font-medium text-white">Let's Build Together</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your{' '}
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Next Project?
                  </span>
                </h2>
                <p className="text-md md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Partner with a team that brings both modern agility and legacy reliability. Let's
                  build something that lasts.
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
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                  >
                    <span className="text-sm md:text-md">Get In Touch</span>
                  </motion.a>
                  <motion.a
                    href="/services"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold"
                  >
                    <span className="text-sm md:text-md">Explore Services</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default OurStoryPage
