'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import {
  Shield,
  Zap,
  Bell,
  Scan,
  UserX,
  Clock,
  CheckCircle,
  Smartphone,
  Calendar,
  Package,
  Car,
  ClipboardCheck,
  DoorOpen,
  TrendingUp,
  Leaf,
  UserCog,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Bell,
    title: 'Instant Host Alerts',
    description:
      'Real-time notifications sent to hosts the moment their visitor arrives, ensuring seamless communication.',
  },
  {
    icon: Scan,
    title: 'Touchless Entry',
    description:
      'QR code-based contactless check-in system for a safe, hygienic, and modern visitor experience.',
  },
  {
    icon: UserX,
    title: 'Blacklist Management',
    description:
      'Automated screening against blacklisted individuals with instant alerts for enhanced security.',
  },
  {
    icon: Clock,
    title: 'Pre-Registration',
    description:
      'Allow visitors to pre-register online, reducing wait times and streamlining the check-in process.',
  },
  {
    icon: Shield,
    title: 'Visitor Badges',
    description:
      'Automatically generate and print professional visitor badges with photos and access permissions.',
  },
  {
    icon: CheckCircle,
    title: 'Audit Trail',
    description:
      'Complete visitor history and analytics for compliance, security audits, and reporting.',
  },
  {
    icon: TrendingUp,
    title: 'Operational Efficiency',
    description:
      'Streamline reception workflows with automated processes, reducing manual tasks and improving staff productivity.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Go paperless with digital check-ins, e-badges, and cloud storage, reducing environmental impact.',
  },
  {
    icon: UserCog,
    title: 'Personalization',
    description:
      'Customize visitor experiences with personalized greetings, host preferences, and tailored access levels.',
  },
]

const inbuiltProducts = [
  {
    icon: DoorOpen,
    title: 'Meeting Room Management',
    description:
      'Smart booking system with real-time availability, automated scheduling, and resource allocation for all meeting spaces.',
    features: [
      'Real-time room availability',
      'Calendar integration',
      'Automated check-in/out',
      'Capacity management',
    ],
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'group-hover:border-blue-500/30',
    iconBg: 'group-hover:bg-blue-500',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description:
      'Comprehensive event planning and coordination with attendee tracking, registration, and access control for seamless events.',
    features: [
      'Attendee registration',
      'Batch invitations',
      'Access control',
      'Real-time analytics',
    ],
    color: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'group-hover:border-purple-500/30',
    iconBg: 'group-hover:bg-purple-500',
  },
  {
    icon: Package,
    title: 'Parcel Management',
    description:
      'Track and manage all incoming and outgoing parcels with automatic notifications and secure handover verification.',
    features: [
      'Parcel tracking',
      'Delivery notifications',
      'Photo verification',
      'Digital signatures',
    ],
    color: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'group-hover:border-green-500/30',
    iconBg: 'group-hover:bg-green-500',
  },
  {
    icon: Car,
    title: 'Parking Management',
    description:
      'Optimize parking space utilization with smart allocation, automated gate control, and violation monitoring.',
    features: [
      'Slot allocation',
      'License plate recognition',
      'Automated gates',
      'Violation alerts',
    ],
    color: 'from-orange-500/10 to-amber-500/10',
    borderColor: 'group-hover:border-orange-500/30',
    iconBg: 'group-hover:bg-orange-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Material Gate Pass',
    description:
      'Streamline material movement with digital gate passes, approval workflows, and complete audit trails for compliance.',
    features: [
      'Digital gate passes',
      'Approval workflows',
      'Material tracking',
      'Compliance reporting',
    ],
    color: 'from-red-500/10 to-rose-500/10',
    borderColor: 'group-hover:border-red-500/30',
    iconBg: 'group-hover:bg-red-500',
  },
]

const benefits = [
  {
    metric: '80%',
    label: 'Faster Check-In',
  },
  {
    metric: '100%',
    label: 'Contactless',
  },
  {
    metric: '24/7',
    label: 'Monitoring',
  },
]

function VisitorManagementPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <section className="pt-32 pb-20 relative overflow-hidden">
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
                  <Shield className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    Enterprise-Grade Security
                  </span>
                </motion.div>
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
                  className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                >
                  Visitor Management{' '}
                  <span className="block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Built for Safety & Speed
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
                  className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
                >
                  Transform your reception area with a modern, touchless visitor management system
                  that prioritizes security without compromising user experience.
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
                  className="flex justify-center lg:justify-start flex-wrap gap-6 mb-8"
                >
                  {benefits.map((benefit, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <div className="w-2 h-2 bg-[#f1592a] rounded-full" />
                      <span className="font-bold text-2xl text-[#f1592a]">{benefit.metric}</span>
                      <span className="text-gray-600">{benefit.label}</span>
                    </div>
                  ))}
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
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                    >
                      <span className="text-sm md:text-md font-semibold">Request Demo</span>
                      <Zap
                        className="group-hover:scale-110 transition-transform w-4 h-4 md:w-5 md:h-5"
                        strokeWidth={1.5}
                      />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
                  >
                    <span className="text-sm md:text-md font-semibold">View Pricing</span>
                  </motion.button>
                </motion.div>
              </motion.div>
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
                className="relative flex justify-center lg:justify-end"
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
                      <div className="text-center mb-8">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                          <div className="w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center">
                            <Smartphone className="text-white" size={32} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Visitor Check-In</h2>
                        <p className="text-sm text-gray-600">Scan QR code to enter</p>
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 mb-6"
                      >
                        <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                          <div className="grid grid-cols-8 gap-1 p-4">
                            {Array.from({
                              length: 64,
                            }).map((_, i) => (
                              <div
                                className={`w-full aspect-square rounded-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-900'}`}
                                key={i}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-lg border-2 border-[#f1592a] flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#f1592a] rounded-lg" />
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              y: [-100, 100],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-[#f1592a] to-transparent"
                          />
                        </div>
                      </motion.div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-[#f1592a]/10 to-orange-100/50 rounded-2xl p-4 border border-[#f1592a]/20">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                              <Shield className="text-[#f1592a]" size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Status</p>
                              <p className="text-sm font-bold text-gray-900">Verified & Secure</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Clock className="text-gray-700" size={20} strokeWidth={1.5} />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 font-medium">Time</p>
                                <p className="text-sm font-bold text-gray-900">Instant Access</p>
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
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-10 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#f1592a] rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-white" size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Check-in Complete</p>
                      <p className="text-xs text-gray-600">Host notified</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute bottom-20 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#f1592a] rounded-lg flex items-center justify-center">
                      <Shield className="text-white" size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Secure Entry</p>
                      <p className="text-xs text-gray-600">Badge printed</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Features for{' '}
                <span className="block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Modern Reception Areas
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage visitors efficiently while maintaining the highest
                security standards.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
                  <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#f1592a]/20 transition-all">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 mb-6">
                      <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all">
                        <feature.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gray-50">
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
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Inbuilt Products for{' '}
                <span className="block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Complete Facility Management
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover a suite of integrated solutions designed to streamline your operations and
                ensure the safety of your premises.
              </p>
            </motion.div>
            {inbuiltProducts.map((product, index) => (
              <motion.div
                key={product.title}
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16  ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}
              >
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}>
                  <div
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}
                  >
                    <product.icon
                      className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs md:text-sm font-semibold text-[#f1592a]">
                      {product.title === 'Meeting Room Management' && 'Smart Spaces'}
                      {product.title === 'Event Management' && 'Event Platform'}
                      {product.title === 'Parcel Management' && 'Delivery Tracking'}
                      {product.title === 'Parking Management' && 'Smart Parking'}
                      {product.title === 'Material Gate Pass' && 'Material Control'}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {product.features.map((feature, i) => (
                      <li className="flex items-start space-x-3" key={i}>
                        <div className="w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle
                            className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-gray-700 text-sm md:text-md">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2">
                    <span className="text-sm md:text-md">Learn More</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </motion.span>
                  </button>
                </div>
                <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl lg:p-8 p-4 border border-gray-200">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
                          <product.icon className="text-white" size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {product.title === 'Meeting Room Management' && 'Available Rooms'}
                            {product.title === 'Event Management' && 'Tech Summit 2026'}
                            {product.title === 'Parcel Management' && "Today's Deliveries"}
                            {product.title === 'Parking Management' && 'Parking Overview'}
                            {product.title === 'Material Gate Pass' && 'Active Gate Passes'}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {product.title === 'Meeting Room Management' && 'Today, Feb 10'}
                            {product.title === 'Event Management' && 'Feb 15 \u2022 500 Attendees'}
                            {product.title === 'Parcel Management' && 'Real-time tracking'}
                            {product.title === 'Parking Management' && 'Live occupancy'}
                            {product.title === 'Material Gate Pass' && 'Current status'}
                          </p>
                        </div>
                      </div>
                      {/* Product-specific content */}
                      {product.title === 'Meeting Room Management' && (
                        <div className="space-y-4">
                          {[
                            {
                              name: 'Conference Room A',
                              status: 'Available',
                              time: '10:00 AM - 2:00 PM',
                            },
                            {
                              name: 'Meeting Room 3',
                              status: 'Occupied',
                              time: 'Until 11:30 AM',
                            },
                            {
                              name: 'Board Room',
                              status: 'Available',
                              time: '2:00 PM - 5:00 PM',
                            },
                          ].map((room, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 flex-shrink-0">
                                <DoorOpen className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              {/* name + time stack on mobile, badge moves below */}
                              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                                <div className="min-w-0">
                                  <h5 className="font-semibold text-gray-900 truncate">
                                    {room.name}
                                  </h5>
                                  <p className="text-xs text-gray-500">{room.time}</p>
                                </div>
                                <div
                                  className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                    room.status === 'Available'
                                      ? 'bg-[#f1592a]/10 text-[#f1592a]'
                                      : 'bg-gray-200 text-gray-700'
                                  }`}
                                >
                                  {room.status}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {product.title === 'Event Management' && (
                        <div>
                          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                            {[
                              { label: 'Registered', value: '487' },
                              { label: 'Checked In', value: '312' },
                              { label: 'Pending', value: '175' },
                            ].map((stat, i) => (
                              <div
                                key={i}
                                className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center border border-gray-100"
                              >
                                <div className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
                                  {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap mt-0.5">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            {['VIP Lounge Access', 'Lunch Voucher', 'Workshop Pass'].map(
                              (item, i) => (
                                <div
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
                                  key={i}
                                >
                                  <span className="text-sm text-gray-700">{item}</span>
                                  <div className="w-2 h-2 bg-[#f1592a] rounded-full" />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {product.title === 'Parcel Management' && (
                        <div className="space-y-4">
                          {[
                            {
                              id: '#PKG-1247',
                              recipient: 'Marketing Dept',
                              status: 'Delivered',
                              time: '10:30 AM',
                            },
                            {
                              id: '#PKG-1248',
                              recipient: 'John Smith',
                              status: 'In Transit',
                              time: 'Est. 2:00 PM',
                            },
                            {
                              id: '#PKG-1249',
                              recipient: 'HR Department',
                              status: 'Pending',
                              time: 'Est. 4:30 PM',
                            },
                          ].map((parcel, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 flex-shrink-0">
                                <Package className="text-gray-700" size={24} strokeWidth={1.5} />
                              </div>
                              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                                <div className="min-w-0">
                                  <h5 className="font-semibold text-gray-900 truncate">
                                    {parcel.id}
                                  </h5>
                                  <p className="text-xs text-gray-500">
                                    {parcel.recipient} • {parcel.time}
                                  </p>
                                </div>
                                <div
                                  className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                    parcel.status === 'Delivered'
                                      ? 'bg-[#f1592a]/10 text-[#f1592a]'
                                      : parcel.status === 'In Transit'
                                        ? 'bg-gray-300 text-gray-700'
                                        : 'bg-gray-200 text-gray-600'
                                  }`}
                                >
                                  {parcel.status}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {product.title === 'Parking Management' && (
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-gray-900">Parking Overview</h4>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-[#f1592a] rounded-full" />
                              <span className="text-xs text-gray-600">Available</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-5 gap-2 mb-6">
                            {Array.from({
                              length: 20,
                            }).map((_, i) => (
                              <div
                                className={`aspect-square rounded-lg flex items-center justify-center border ${i % 3 === 0 ? 'bg-gray-200 border-gray-300' : 'bg-[#f1592a]/10 border-[#f1592a]/20'}`}
                                key={i}
                              >
                                <Car
                                  className={i % 3 === 0 ? 'text-gray-600' : 'text-[#f1592a]'}
                                  size={16}
                                  strokeWidth={1.5}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#f1592a]/5 rounded-xl p-3 text-center border border-[#f1592a]/20">
                              <div className="text-2xl font-bold text-[#f1592a]">14</div>
                              <div className="text-xs text-gray-600">Available</div>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-3 text-center border border-gray-200">
                              <div className="text-2xl font-bold text-gray-700">6</div>
                              <div className="text-xs text-gray-600">Occupied</div>
                            </div>
                          </div>
                        </div>
                      )}
                      {product.title === 'Material Gate Pass' && (
                        <div className="space-y-4">
                          {[
                            {
                              id: 'GP-2401',
                              material: 'Office Supplies',
                              status: 'Approved',
                              approver: 'Manager',
                            },
                            {
                              id: 'GP-2402',
                              material: 'IT Equipment',
                              status: 'Pending',
                              approver: 'IT Head',
                            },
                            {
                              id: 'GP-2403',
                              material: 'Raw Materials',
                              status: 'In Transit',
                              approver: 'Operations',
                            },
                          ].map((pass, i) => (
                            <motion.div
                              key={i}
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
                                delay: i * 0.1,
                              }}
                              className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                <div>
                                  <h5 className="font-semibold text-gray-900">{pass.id}</h5>
                                  <p className="text-sm text-gray-600">{pass.material}</p>
                                </div>
                                <div
                                  className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                    pass.status === 'Approved'
                                      ? 'bg-[#f1592a]/10 text-[#f1592a]'
                                      : pass.status === 'Pending'
                                        ? 'bg-gray-300 text-gray-700'
                                        : 'bg-gray-200 text-gray-600'
                                  }`}
                                >
                                  {pass.status}
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                  <UserCog className="text-gray-600" size={12} />
                                </div>
                                <span className="text-xs text-gray-500">{pass.approver}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Floating stat badges */}
                  {product.title === 'Meeting Room Management' && (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#f1592a]">95%</div>
                        <div className="text-xs text-gray-600">Utilization</div>
                      </div>
                    </motion.div>
                  )}
                  {product.title === 'Event Management' && (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <Bell className="text-[#f1592a]" size={20} />
                        <div>
                          <p className="text-xs font-bold text-gray-900">New Check-in</p>
                          <p className="text-xs text-gray-600">John Doe</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {product.title === 'Parcel Management' && (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#f1592a]">127</div>
                        <div className="text-xs text-gray-600">This Month</div>
                      </div>
                    </motion.div>
                  )}
                  {product.title === 'Parking Management' && (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <Car className="text-[#f1592a]" size={20} />
                        <div>
                          <p className="text-xs font-bold text-gray-900">Slot A-12</p>
                          <p className="text-xs text-gray-600">Just Freed</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {product.title === 'Material Gate Pass' && (
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#f1592a]">98%</div>
                        <div className="text-xs text-gray-600">Compliance</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
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
              className="bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
              </div>
              <div className="relative z-10">
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                >
                  <Shield className="text-white w-8 h-8 md:w-10 md:h-10"  strokeWidth={1.5} />
                </motion.div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Modernize Your Reception?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that trust our visitor management system for safety,
                  speed, and seamless operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                    >
                      <span className="text-sm md:text-md">Schedule a Demo</span>
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold"
                  >
                    <span className="text-sm md:text-md">Download Brochure</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default VisitorManagementPage
