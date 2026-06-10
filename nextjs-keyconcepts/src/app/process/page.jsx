'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import {
  CheckCircle,
  Calendar,
  BarChart3,
  MessageSquare,
  GitBranch,
  Rocket,
  Target,
  FileText,
  Users,
  Code,
  TestTube,
  Upload,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Eye,
  RefreshCw,
  Settings,
  Award,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business goals, target audience, and project requirements through detailed workshops and documentation.',
    icon: Target,
    image:
      'https://images.unsplash.com/photo-1728917330520-9456e3f49529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmclMjBkYXNoYm9hcmQlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzcxOTI5Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Project roadmap', 'Technical specifications', 'Timeline & milestones'],
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our design team creates intuitive wireframes and interactive prototypes, ensuring user experience is at the forefront.',
    icon: FileText,
    image:
      'https://images.unsplash.com/photo-1748801583975-720cb5e4985e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm90b3R5cGUlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzcxOTI5Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Wireframes', 'UI/UX designs', 'Interactive prototypes'],
  },
  {
    number: '03',
    title: 'Development Sprint',
    description:
      'Agile development with 2-week sprints, continuous integration, and regular code reviews to maintain quality standards.',
    icon: Code,
    image:
      'https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzE5MjkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Working features', 'Code documentation', 'Sprint demos'],
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description:
      'Rigorous testing including functional, performance, security, and user acceptance testing before any release.',
    icon: TestTube,
    image:
      'https://images.unsplash.com/photo-1621361753831-e972c09ceec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBxdWFsaXR5JTIwYXNzdXJhbmNlfGVufDF8fHx8MTc3MTkyOTM4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Test reports', 'Bug fixes', 'Performance metrics'],
  },
  {
    number: '05',
    title: 'Deployment & Launch',
    description:
      'Smooth deployment with zero-downtime releases, comprehensive monitoring, and immediate post-launch support.',
    icon: Rocket,
    image:
      'https://images.unsplash.com/photo-1762135245629-1e79d4cc30b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBkZXBsb3ltZW50fGVufDF8fHx8MTc3MTkyOTM4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Production release', 'Deployment docs', 'Monitoring setup'],
  },
  {
    number: '06',
    title: 'Support & Optimization',
    description:
      'Ongoing maintenance, performance optimization, feature enhancements, and 24/7 technical support.',
    icon: RefreshCw,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBwZXJmb3JtYW5jZSUyMG1ldHJpY3N8ZW58MXx8fHwxNzcxOTI5Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    deliverables: ['Monthly reports', 'Updates & patches', 'Performance analytics'],
  },
]

const reportingFeatures = [
  {
    icon: Calendar,
    title: 'Weekly Stand-ups',
    description:
      '30-minute video calls every Monday to discuss progress, blockers, and upcoming tasks.',
  },
  {
    icon: BarChart3,
    title: 'Progress Dashboard',
    description:
      'Real-time access to project dashboards showing sprint velocity, burndown charts, and completion rates.',
  },
  {
    icon: MessageSquare,
    title: 'Daily Updates',
    description:
      'End-of-day summaries via Slack/Email highlighting completed tasks and next-day priorities.',
  },
  {
    icon: FileText,
    title: 'Sprint Reports',
    description:
      'Bi-weekly detailed reports including demo videos, completed features, and upcoming sprint planning.',
  },
]

const tools = [
  {
    name: 'Jira',
    category: 'Project Management',
    description: 'Agile project tracking and sprint planning',
    icon: '/assets/techLogo/Jira.png',
  },
  {
    name: 'ClickUp',
    category: 'Task Management',
    description: 'Daily task tracking and team collaboration',
    icon: '/assets/techLogo/clickup.png',
  },
  {
    name: 'Git / GitHub',
    category: 'Version Control',
    description: 'Code repository and version management',
    icon: '/assets/techLogo/GitHub.png',
  },
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Real-time team communication',
    icon: '/assets/techLogo/Slack.png',
  },
  {
    name: 'Figma',
    category: 'Design',
    description: 'UI/UX design and prototyping',
    icon: Eye,
  },
  {
    name: 'Jenkins / CI/CD',
    category: 'Automation',
    description: 'Automated testing and deployment',
    icon: '/assets/techLogo/Jenkins.png',
  },
]

const qaProcess = [
  {
    step: 'Unit Testing',
    description: 'Individual component testing during development',
    coverage: '90%+ code coverage',
    icon: Code,
  },
  {
    step: 'Integration Testing',
    description: 'Testing component interactions and API integrations',
    coverage: 'All critical paths',
    icon: Upload,
  },
  {
    step: 'Security Testing',
    description: 'Vulnerability scanning and penetration testing',
    coverage: 'OWASP Top 10',
    icon: Shield,
  },
  {
    step: 'UAT Testing',
    description: 'Client validation in staging environment',
    coverage: 'All user stories',
    icon: Users,
  },
]

const supportTiers = [
  {
    title: 'First 30 Days',
    subtitle: 'Critical Support',
    features: [
      '24/7 emergency support',
      'Immediate bug fixes',
      'Performance monitoring',
      'Daily health checks',
      'Free bug fixes',
    ],
    icon: Zap,
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    title: 'Months 2-12',
    subtitle: 'Standard Support',
    features: [
      'Business hours support (9-6)',
      'Weekly health reports',
      'Security patches',
      'Minor feature updates',
      'Monthly optimization',
    ],
    icon: Clock,
    color: 'from-gray-600 to-gray-700',
  },
  {
    title: 'Year 2+',
    subtitle: 'Maintenance Plans',
    features: [
      'Flexible support packages',
      'Feature enhancements',
      'Technology upgrades',
      'Quarterly reviews',
      'Strategic consulting',
    ],
    icon: TrendingUp,
    color: 'from-gray-600 to-gray-700',
  },
]

function ProcessPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
            <div className="max-w-4xl mx-auto text-center">
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
                  duration: 0.6,
                }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6">
                  <Award className="text-[#f1592a]" size={20} />
                  <span className="text-[#f1592a] font-semibold">Our Proven Process</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Building Trust Through <br />
                  <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                    Transparency & Excellence
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Our structured, transparent development process ensures you're always in control.
                  From discovery to deployment and beyond, we deliver quality with complete
                  visibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-40 right-20 w-96 h-96 bg-[#f1592a]/3 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#f1592a]/3 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-4">
                <Target className="text-[#f1592a]" size={18} />
                <span className="text-[#f1592a] font-semibold text-sm">HOW WE WORK</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Get Started in <span className="text-[#f1592a]">Six Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No setup headaches. Our process makes it easy to launch, manage and grow your
                business.
              </p>
            </motion.div>
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f1592a]/20 via-[#f1592a]/40 to-[#f1592a]/20 hidden lg:block" />
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0
                return (
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
                      delay: index * 0.15,
                      duration: 0.6,
                    }}
                    className="relative mb-20 lg:mb-32"
                    key={step.number}
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                    >
                      <div
                        className={`${isEven ? 'lg:text-right' : 'lg:col-start-2 lg:text-left'} lg:pr-8`}
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: isEven ? -20 : 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: index * 0.15 + 0.2,
                            duration: 0.5,
                          }}
                        >
                          <div
                            className={`inline-flex items-center space-x-2 mb-4 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}
                          >
                            <span className="text-sm font-bold text-gray-400">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-md md:text-lg text-gray-600 leading-relaxed mb-6">
                            {step.description}
                          </p>
                          <div className="space-y-2">
                            {step.deliverables.map((deliverable, i) => (
                              <div
                                className={`flex items-center space-x-2 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}
                                key={i}
                              >
                                <div className="w-1.5 h-1.5 bg-[#f1592a] rounded-full" />
                                <span className="text-sm text-gray-600">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                      <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: isEven ? 20 : -20,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: index * 0.15 + 0.3,
                            duration: 0.6,
                          }}
                          className="relative group"
                        >
                          <div className="absolute -inset-4 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 shadow-2xl shadow-gray-400/50" />
                          <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg transition-all duration-500">
                            <div className="aspect-[4/3] relative">
                              <ImageWithFallback
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
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
                        transition={{
                          delay: index * 0.15 + 0.4,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className="w-6 h-6 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-4">
                <Zap className="text-[#f1592a]" size={18} />
                <span className="text-[#f1592a] font-semibold text-sm">COMMUNICATION & DELIVERY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Your Trusted Partner In <br />
                <span className="text-[#f1592a]">Digital Transformation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the insights you need to make confident decisions. From setup to support,
                we've simplified the answers for you.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-6">
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
                    delay: 0.1,
                  }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Rocket
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge solutions using the latest technologies and methodologies to
                      deliver exceptional results.
                    </p>
                  </div>
                </motion.div>
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
                  className="flex items-start space-x-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Users
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Client-Centered Focus
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your success is our priority. We maintain transparent communication throughout
                      every project phase.
                    </p>
                  </div>
                </motion.div>
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
                    delay: 0.3,
                  }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Award
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Industry veterans with proven track records in delivering complex enterprise
                      solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-3 flex justify-center">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
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
                  }}
                  className="relative"
                >
                  <div className="relative w-64 h-80 rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwdGh1bWJzJTIwdXAlMjBzdWNjZXNzfGVufDF8fHx8MTc3MTkzMjkwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Professional Success"
                      className="w-full h-full object-cover"
                    />
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
                      delay: 0.4,
                    }}
                    className="absolute -top-4 -left-4 bg-white border border-gray-200 rounded-2xl p-3 shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <Shield className="text-[#f1592a]" size={20} />
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Secure Platform</div>
                        <div className="text-sm font-bold text-gray-900">ISO Certified</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div className="lg:col-span-4 space-y-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
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
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-white" />
                      </div>
                      <TrendingUp className="text-[#f1592a]" size={20} />
                    </div>
                    <span className="text-3xl font-bold text-[#f1592a]">66k+</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Happy Clients</p>
                  <p className="text-xs text-gray-500 mt-1">Across 40+ countries worldwide</p>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
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
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="text-[#f1592a]" size={24} />
                    <span className="text-3xl font-bold text-[#f1592a]">89.89%</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Client Satisfaction</p>
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: '89.89%',
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                      }}
                      className="h-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-full"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
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
                  className="bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Zap className="text-white" size={24} />
                    <span className="text-5xl font-bold">+75%</span>
                  </div>
                  <p className="text-lg font-bold mb-1">Increase company efficiency</p>
                  <p className="text-sm text-white/80">Average improvement in first 6 months</p>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#f1592a]/10 transition-all">
                        <Eye
                          className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                          size={20}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">More Review</span>
                    </div>
                    <motion.div
                      whileHover={{
                        x: 5,
                      }}
                      className="text-gray-400 group-hover:text-[#f1592a] transition-colors"
                    >
                      {'=>'}
                    </motion.div>
                  </div>
                </motion.div>
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
              className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Communication & Release Schedule</h3>
                <p className="text-gray-300">
                  Regular touchpoints and automated deployments for maximum transparency
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <MessageSquare className="mr-2 text-[#f1592a]" size={24} />
                    Communication Touchpoints
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <span className="font-semibold">Daily</span>
                      <span className="text-[#f1592a] text-sm">Slack updates</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <span className="font-semibold">Weekly</span>
                      <span className="text-[#f1592a] text-sm">Stand-up calls</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <span className="font-semibold">Bi-weekly</span>
                      <span className="text-[#f1592a] text-sm">Sprint reports</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <span className="font-semibold">Monthly</span>
                      <span className="text-[#f1592a] text-sm">Executive summary</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <GitBranch className="mr-2 text-[#f1592a]" size={24} />
                    Release Pipeline
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Code Commit',
                      'Auto Tests',
                      'Staging Deploy',
                      'Client Review',
                      'Production',
                    ].map((stage, i) => (
                      <div
                        className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                        key={stage}
                      >
                        <div className="w-8 h-8 bg-[#f1592a] rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="font-semibold flex-1">{stage}</span>
                        {i < 4 && <div className="text-gray-400">{'->'}</div>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Zap className="text-[#f1592a]" size={16} />
                    <span className="text-sm">Average deployment: 15 minutes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-[#f1592a]">Industry-Leading</span> Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We use the best tools to ensure efficiency, collaboration, and quality
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="group"
                  key={tool.name}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#f1592a]/30 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                    <div className="relative mb-3">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#f1592a]/5 transition-all mx-auto">
                        {typeof tool.icon === 'string' ? (
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            className="h-7 w-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <tool.icon
                            className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                            size={28}
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{tool.name}</h3>
                  </div>
                </motion.div>
              ))}
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
              className="mt-12 text-center"
            >
              <div className="inline-block bg-white border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">Plus:</span> Tailored tool stack based
                  on your team's preferences
                </p>
                <p className="text-sm text-gray-500">We adapt to your existing workflows and tools</p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-[#f1592a]">Quality Assurance</span> & Release
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multi-layered testing approach to ensure bug-free deployments
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {qaProcess.map((qa, index) => (
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
                    delay: index * 0.1,
                  }}
                  className="group"
                  key={qa.step}
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full hover:border-[#f1592a]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="relative w-14 h-14 mb-4">
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center group-hover:bg-[#f1592a]/5 transition-all border border-gray-200">
                        <qa.icon
                          className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{qa.step}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">{qa.description}</p>
                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-xs font-semibold text-[#f1592a]">{qa.coverage}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Release Pipeline</h3>
                <p className="text-gray-300">Automated CI/CD for faster, safer deployments</p>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {['Code Commit', 'Auto Tests', 'Staging Deploy', 'Client Review', 'Production'].map(
                  (stage, i) => (
                    <div className="relative" key={stage}>
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                        <div className="w-8 h-8 bg-[#f1592a] rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          {i + 1}
                        </div>
                        <p className="text-sm font-semibold">{stage}</p>
                      </div>
                      {i < 4 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-white/30 -translate-y-1/2" />
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Zap className="text-[#f1592a]" size={16} />
                  <span className="text-sm">Average deployment time: 15 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-[#f1592a]">Post-Launch</span> Support Model
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We don't disappear after launch. We're here for the long haul.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
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
                  className="group"
                  key={tier.title}
                >
                  <div
                    className={`relative bg-white border-2 rounded-3xl p-8 h-full ${index === 0 ? 'border-[#f1592a] shadow-xl shadow-[#f1592a]/10' : 'border-gray-200 hover:border-gray-300'} transition-all duration-300`}
                  >
                    {index === 0 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Critical
                        </div>
                      </div>
                    )}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <tier.icon className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.title}</h3>
                    <p className="text-[#f1592a] font-semibold mb-6">{tier.subtitle}</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li className="flex items-start space-x-3" key={i}>
                          <CheckCircle
                            className={
                              index === 0
                                ? 'text-[#f1592a] flex-shrink-0 mt-0.5'
                                : 'text-gray-400 flex-shrink-0 mt-0.5'
                            }
                            size={18}
                          />
                          <span className="text-gray-600 text-sm md:text-md">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
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
              className="mt-16 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-3xl p-8 md:p-12 text-white text-center"
            >
              <Shield className="mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-4">Our Support Guarantee</h3>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6">
                Every project includes a 30-day critical support period with unlimited bug fixes and
                optimizations. We're committed to your success, not just your launch.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-1">{'<2hr'}</div>
                  <div className="text-white/80 text-sm">Critical issue response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">99.9%</div>
                  <div className="text-white/80 text-sm">Uptime guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Monitoring & alerts</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
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
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-[#f1592a] rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#ff7a45] rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience <br /> <span className="text-[#f1592a]">Our Process?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and show you exactly how we'll bring it to life
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/contact">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all"
                    >
                      Start Your Project
                    </motion.button>
                  </a>
                  <a href="/our-story">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
                    >
                      Learn About Us
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default ProcessPage
