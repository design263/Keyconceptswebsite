'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import {
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Activity,
  Bug,
  TrendingUp,
  Lock,
  Database,
  RefreshCw,
  Target,
  Bell,
  Sparkles,
  Eye,
  Wrench,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { useState, useEffect, useRef } from 'react'

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
      {prefix}0{suffix}
    </span>
  )
}

const heroStats = [
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime Guarantee',
    prefix: '',
    icon: Activity,
    decimals: 1,
  },
  {
    value: 2,
    suffix: 'hrs',
    label: 'Avg Response Time',
    prefix: '<',
    icon: Clock,
    decimals: 0,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Issues Resolved',
    prefix: '',
    icon: CheckCircle,
    decimals: 0,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Monitoring',
    prefix: '',
    icon: Eye,
    decimals: 0,
  },
]

const supportServices = [
  {
    id: 'monitoring',
    icon: Activity,
    title: '24/7 Monitoring & Alerts',
    description: 'Real-time system monitoring and proactive alerts',
    longDescription:
      "We monitor your application's health 24/7 with advanced tools that detect issues before your users do. Real-time dashboards, automated alerts, and proactive monitoring ensure maximum uptime and performance.",
    features: [
      'Server & application health monitoring',
      'Performance metrics tracking',
      'Automated alert notifications',
      'Real-time error logging & tracking',
      'Uptime monitoring & reporting',
      'Custom dashboard & analytics',
    ],
    image: '/assets/supportMaintenance/monitoring-alerts.jpg',
  },
  {
    id: 'bugfixes',
    icon: Bug,
    title: 'Bug Fixes & Hot Patches',
    description: 'Fast resolution of issues and critical bugs',
    longDescription:
      'When bugs emerge, we respond fast. Our team identifies, tests, and deploys fixes quickly to minimize disruption. From minor UI glitches to critical backend issues, we handle it all with precision and speed.',
    features: [
      'Priority-based bug resolution',
      'Root cause analysis & documentation',
      'Automated testing before deployment',
      'Hot patch deployment for critical issues',
      'Regression testing & quality checks',
      'Post-fix monitoring & validation',
    ],
    image: '/assets/supportMaintenance/Bug-Fixes.jpg',
  },
  {
    id: 'enhancements',
    icon: TrendingUp,
    title: 'Feature Enhancements',
    description: 'Continuous improvement and new feature development',
    longDescription:
      'Your product should evolve with your business. We help you add new features, improve existing functionality, and optimize user experiences based on real-world feedback and analytics.',
    features: [
      'Feature planning & scoping',
      'UI/UX improvements',
      'Performance optimization',
      'Third-party integrations',
      'User feedback implementation',
      'A/B testing & analytics',
    ],
    image: '/assets/supportMaintenance/UI.png',
  },
  {
    id: 'roadmap',
    icon: Target,
    title: 'Roadmap Execution',
    description: 'Strategic feature delivery aligned with business goals',
    longDescription:
      'Turn your product vision into reality with structured roadmap execution. We prioritize features, plan sprints, and deliver updates that align with your business objectives and user needs.',
    features: [
      'Quarterly roadmap planning',
      'Feature prioritization (RICE, MoSCoW)',
      'Sprint planning & execution',
      'Stakeholder communication',
      'Release management',
      'ROI tracking & analytics',
    ],
    image:
      'https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcm9hZG1hcCUyMHBsYW5uaW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxODUxNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Protect your application and user data',
    longDescription:
      'Security is non-negotiable. We implement industry-standard security practices, perform regular audits, and ensure your application stays compliant with data protection regulations.',
    features: [
      'Security vulnerability scanning',
      'SSL/TLS certificate management',
      'Data encryption & compliance',
      'Regular security audits',
      'Penetration testing',
      'GDPR/HIPAA compliance support',
    ],
    image: '/assets/supportMaintenance/Security-Compliance.jpg',
  },
  {
    id: 'backups',
    icon: Database,
    title: 'Backups & Disaster Recovery',
    description: 'Automated backups and recovery plans',
    longDescription:
      'Protect your data with automated backup systems and comprehensive disaster recovery plans. We ensure your business can recover quickly from any unexpected incident.',
    features: [
      'Automated daily backups',
      'Multi-region backup storage',
      'Point-in-time recovery',
      'Disaster recovery planning',
      'Regular backup testing',
      'Data retention policies',
    ],
    image: '/assets/supportMaintenance/Backups-Disaster-Recovery.jpg',
  },
]

const slaTiers = [
  {
    tier: 'Standard',
    responseTime: '4 hours',
    resolutionTime: '24-48 hours',
    availability: '99.5% uptime',
    support: 'Business hours (9-5)',
    features: [
      'Bug fixes & patches',
      'Monthly health reports',
      'Email support',
      'Scheduled maintenance',
      'Basic monitoring',
    ],
    price: 'Starting at $1,500/mo',
    highlight: false,
  },
  {
    tier: 'Professional',
    responseTime: '2 hours',
    resolutionTime: '8-16 hours',
    availability: '99.9% uptime',
    support: 'Extended hours (8am-8pm)',
    features: [
      'Priority bug fixes',
      'Weekly performance reports',
      'Email & phone support',
      'Proactive monitoring',
      'Security updates',
      'Minor enhancements',
    ],
    price: 'Starting at $3,500/mo',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    responseTime: '30 minutes',
    resolutionTime: '2-4 hours',
    availability: '99.99% uptime',
    support: '24/7 dedicated support',
    features: [
      'Critical issue hot patches',
      'Real-time monitoring dashboard',
      'Dedicated account manager',
      '24/7 phone & Slack support',
      'Custom SLA terms',
      'Feature development hours included',
    ],
    price: 'Custom pricing',
    highlight: false,
  },
]

const uptimeApproach = [
  {
    icon: Eye,
    title: 'Proactive Monitoring',
    description:
      'We monitor system health, performance, and errors 24/7 to detect issues before they impact users.',
  },
  {
    icon: Bell,
    title: 'Automated Alerts',
    description:
      'Instant notifications for downtime, performance degradation, or security threats trigger immediate response.',
  },
  {
    icon: Wrench,
    title: 'Rapid Response',
    description:
      'Our on-call engineers respond within SLA timeframes to diagnose and resolve critical issues quickly.',
  },
  {
    icon: Shield,
    title: 'Redundancy & Failover',
    description:
      'We implement load balancing, redundant servers, and automatic failover to ensure continuous availability.',
  },
]

function SupportMaintenancePage() {
  const [selectedService, setSelectedService] = useState('monitoring')

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gray-300/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-4xl mx-auto text-center"
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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8"
              >
                <Shield className="text-[#f1592a]" size={18} />
                <span className="text-sm font-medium text-gray-700">Support & Maintenance</span>
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
                Keep Your Application{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Secure, Fast, & Always Online
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
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
              >
                From 24/7 monitoring to bug fixes, security updates, and feature enhancements \u2014 we
                ensure your product runs smoothly while you focus on growing your business.
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
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span className="font-semibold">Get Maintenance Quote</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
                <motion.a
                  href="#sla"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
                >
                  <span className="font-semibold">View SLA Plans</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {heroStats.map((stat, index) => (
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
                  className="text-center"
                  key={stat.label}
                >
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <div className="w-full h-full bg-gray-100 text-gray-900 rounded-xl flex items-center justify-center">
                      <stat.icon className="text-gray-900" size={24} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#f1592a] mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              className="text-center mb-12"
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
              >
                What's Included
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Support Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Everything you need to keep your application running at peak performance
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {supportServices.map((service, index) => (
                  <motion.button
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
                      delay: index * 0.1,
                    }}
                    onClick={() => setSelectedService(service.id)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${selectedService === service.id ? 'bg-white border-[#f1592a] text-[#f1592a] shadow-lg' : 'bg-white/60 border-gray-200 text-gray-700 hover:border-[#f1592a]/50 hover:bg-white'}`}
                    key={service.id}
                  >
                    {service.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {selectedService && (
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
                  duration: 0.5,
                }}
                className="max-w-7xl mx-auto"
                key={selectedService}
              >
                {supportServices
                  .filter((service) => service.id === selectedService)
                  .map((service) => (
                    <div
                      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
                      key={service.id}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="relative w-14 h-14 mb-6">
                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                              <service.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {service.longDescription}
                          </p>
                          <ul className="space-y-3 mb-8">
                            {service.features.map((feature, idx) => (
                              <li className="flex items-start space-x-3" key={idx}>
                                <CheckCircle
                                  className="text-[#f1592a] flex-shrink-0 mt-1"
                                  size={20}
                                  strokeWidth={2}
                                />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <motion.a
                            href="/contact"
                            whileHover={{
                              scale: 1.05,
                            }}
                            whileTap={{
                              scale: 0.95,
                            }}
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                          >
                            <span>Get Started</span> <ArrowRight size={20} />
                          </motion.a>
                        </div>
                        <div className="relative">
                          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </div>
        </section>
        <section id="sla" className="py-24 bg-white">
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
              >
                SLA Options
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Support Level</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Flexible SLA tiers with guaranteed response times and uptime commitments
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {slaTiers.map((tier, index) => (
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
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative"
                  key={tier.tier}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white text-sm font-bold rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`relative h-full bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border ${tier.highlight ? 'border-[#f1592a] shadow-2xl scale-105' : 'border-white/60 hover:border-[#f1592a] hover:shadow-2xl'} transition-all duration-300`}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                      <p className="text-3xl font-bold text-[#f1592a] mb-4">{tier.price}</p>
                    </div>
                    <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Response Time</span>
                        <span className="font-semibold text-gray-900">{tier.responseTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Resolution Time</span>
                        <span className="font-semibold text-gray-900">{tier.resolutionTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Uptime SLA</span>
                        <span className="font-semibold text-gray-900">{tier.availability}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Support Hours</span>
                        <span className="font-semibold text-gray-900">{tier.support}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li className="flex items-start space-x-3" key={idx}>
                          <CheckCircle
                            className="text-[#f1592a] flex-shrink-0 mt-0.5"
                            size={18}
                            strokeWidth={2}
                          />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="/contact"
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all ${tier.highlight ? 'bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                    >
                      Get Started
                    </motion.a>
                  </div>
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
              >
                Our Approach
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How We Guarantee{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Maximum Uptime
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proactive, multi-layered approach to keep your application running 24/7
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {uptimeApproach.map((item, index) => (
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
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group"
                  key={item.title}
                >
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center">
                    <div className="relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                        <item.icon className="text-white" size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Security & Reliability
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your data is protected with enterprise-grade security, automated backups, and disaster
                recovery plans.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Lock,
                  title: 'Enterprise Security',
                  features: [
                    'SSL/TLS encryption',
                    'Regular security audits',
                    'Vulnerability scanning',
                    'Compliance management',
                  ],
                },
                {
                  icon: Database,
                  title: 'Automated Backups',
                  features: [
                    'Daily automated backups',
                    'Multi-region storage',
                    'Point-in-time recovery',
                    '30-day retention',
                  ],
                },
                {
                  icon: RefreshCw,
                  title: 'Disaster Recovery',
                  features: [
                    'Recovery time < 4 hours',
                    'Tested recovery plans',
                    'Failover systems',
                    'Business continuity',
                  ],
                },
              ].map((item, index) => (
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
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300"
                  key={item.title}
                >
                  <div className="relative w-12 h-12 mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                      <item.icon className="text-white" size={24} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li className="flex items-start space-x-2 text-sm text-gray-600" key={idx}>
                        <CheckCircle
                          className="text-[#f1592a] flex-shrink-0 mt-0.5"
                          size={16}
                          strokeWidth={2}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
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
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8"
              >
                <Sparkles className="text-white" size={20} />
                <span className="text-white font-medium">Ready to Get Started?</span>
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Custom Maintenance Quote
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Tell us about your application and requirements. We'll create a tailored support plan
                with SLA guarantees, transparent pricing, and a dedicated support team.
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
                  className="group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Get Maintenance Quote</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/40 hover:bg-white/20 transition-all shadow-lg font-semibold"
                >
                  Call: +123 456 7890
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
                className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} /> <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} /> <span>Flexible SLA options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} /> <span>24/7 monitoring included</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default SupportMaintenancePage
