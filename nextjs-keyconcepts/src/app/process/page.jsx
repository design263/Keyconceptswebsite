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
  ArrowRight,
  Palette,
  Laptop,
  Cloud,
  ClipboardList,
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
      '/assets/Design-&-Prototyping.jpg',
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

// Inline SVG Brand Logos for high-fidelity rendering
function BrandLogo({ name }) {
  switch (name) {
    case 'Figma':
      return <img src="/assets/techLogo/figma.png" alt="Figma" className="w-[30px] h-[30px] object-contain" />
    case 'Adobe Photoshop':
      return <img src="/assets/techLogo/photoshop.png" alt="Adobe Photoshop" className="w-[30px] h-[30px] object-contain" />
    case 'Adobe Illustrator':
      return <img src="/assets/techLogo/illustrator.png" alt="Adobe Illustrator" className="w-[30px] h-[30px] object-contain" />
    case 'GitHub':
      return <img src="/assets/techLogo/github.svg" alt="GitHub" className="w-[30px] h-[30px] object-contain" />
    case 'Docker':
      return <img src="/assets/techLogo/docker.svg" alt="Docker" className="w-[30px] h-[30px] object-contain" />
    case 'AWS':
      return <img src="/assets/techLogo/aws-logo.svg" alt="AWS" className="w-[30px] h-[30px] object-contain" />
    case 'Jira':
      return <img src="/assets/techLogo/Jira.png" alt="Jira" className="w-[30px] h-[30px] object-contain" />
    case 'ClickUp':
      return <img src="/assets/techLogo/clickup.png" alt="ClickUp" className="w-[30px] h-[30px] object-contain" />
    case 'Slack':
      return <img src="/assets/techLogo/Slack.png" alt="Slack" className="w-[30px] h-[30px] object-contain" />
    case 'Microsoft Teams':
      return <img src="/assets/techLogo/teams.png" alt="Microsoft Teams" className="w-[30px] h-[30px] object-contain" />
    case 'React':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9.5C10.62 9.5 9.5 10.62 9.5 12s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S13.38 9.5 12 9.5Z" fill="#61DAFB" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#61DAFB" opacity="0.3" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        </svg>
      )
    case 'Next.js':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="black" stroke="#333" strokeWidth="1" />
          <path d="M17.5 17.5L10.2 8H8.5V16H10V10.2L16.2 17.5H17.5Z" fill="white" />
          <rect x="15" y="8" width="1.5" height="8" fill="white" />
        </svg>
      )
    case 'Node.js':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm6 14.3l-6 3.4-6-3.4V7.7l6-3.4 6 3.4v8.6z" fill="#339933" />
          <path d="M12 6.5L7 9.3v5.4l5 2.8 5-2.8V9.3l-5-2.8z" fill="#339933" opacity="0.5" />
        </svg>
      )
    case 'Vercel':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22H22L12 2Z" fill="black" />
        </svg>
      )
    case 'Google Analytics':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="14" width="4" height="7" rx="1" fill="#FF9F00" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="#FF8F00" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#FF6F00" />
        </svg>
      )
    case 'Google Search Console':
      return (
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7v6c0 5.5 4.5 10 10 11 5.5-1 10-5.5 10-11V7l-10-5z" fill="#4285F4" />
          <path d="M12 6l-6 3v4c0 3.7 3 6.8 6 7.7V6z" fill="#34A853" />
          <circle cx="12" cy="12" r="3" fill="#FBBC05" />
        </svg>
      )
    default:
      return null
  }
}

const techCategories = [
  {
    title: 'Design',
    icon: Palette,
    technologies: [
      { name: 'Figma' },
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' },
    ],
  },
  {
    title: 'Development',
    icon: Code,
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    technologies: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'Vercel' },
    ],
  },
  {
    title: 'Project Management',
    icon: ClipboardList,
    technologies: [
      { name: 'Jira' },
      { name: 'ClickUp' },
    ],
  },
  {
    title: 'Collaboration',
    icon: MessageSquare,
    technologies: [
      { name: 'Slack' },
      { name: 'Microsoft Teams' },
    ],
  },
  {
    title: 'Analytics & SEO',
    icon: BarChart3,
    technologies: [
      { name: 'Google Analytics' },
      { name: 'Google Search Console' },
    ],
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
    description: 'Client validation in staging environment before deployment',
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
        <section className="relative pt-32 md:pb-20 pb-10 overflow-hidden">
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
                <div className="inline-flex items-center space-x-2   md:px-4 md:py-2 px-3 py-2 bg-[#f1592a]/10 rounded-full mb-6">
                  <Award className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                  <span className="text-[#f1592a] text-xs md:text-sm font-semibold">Our Proven Process</span>
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
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
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
                <Target className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                <span className="text-[#f1592a] text-xs md:text-sm font-semibold">HOW WE WORK</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Get Started in <span className="text-[#f1592a]">Six Simple Steps</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                    className={`relative ${index === processSteps.length - 1 ? 'mb-0' : 'mb-10 md:mb-20 lg:mb-32'}`}
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
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
                <Zap className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                <span className="text-[#f1592a] text-xs md:text-sm font-semibold">COMMUNICATION & DELIVERY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Your Trusted Partner In <br />
                <span className="text-[#f1592a]">Digital Transformation</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Rocket
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors w-6 h-6 md:w-7 md:h-7"

                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2">Innovative Approach</h3>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
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
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Users
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors w-6 h-6 md:w-7 md:h-7"

                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2">
                      Client-Centered Focus
                    </h3>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
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
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                      <Award
                        className="text-gray-700 group-hover:text-[#f1592a] transition-colors w-6 h-6 md:w-7 md:h-7"

                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
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
                  className="bg-white border border-gray-200 rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all group"
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
                    <span className="text-2xl md:text-3xl font-bold text-[#f1592a]">66k+</span>
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
                    <span className="text-4xl md:text-5xl font-bold">+75%</span>
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

          </div>
        </section>
        <section className="py-12 md:py-16 bg-gray-50">
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
                Industry-Leading <span className="text-[#f1592a]">Technologies</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Leveraging industry-standard tools across design, development, collaboration, deployment, and analytics to deliver high-quality digital solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techCategories.map((category, index) => (
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
                  key={category.title}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 lg:px-2 lg:py-6 hover:border-[#f1592a]/30 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-between min-h-[160px]">
                    <div className="w-full">
                      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-3">{category.title}</h3>
                    </div>
                    {/* Horizontal row of monochrome/colored logos */}
                    <div className="flex items-center justify-center gap-1.5 mt-auto pt-2 flex-wrap">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"
                          title={tech.name}
                        >
                          <div className="transition-all duration-300">
                            <BrandLogo name={tech.name} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
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
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 lg:p-6 h-full hover:border-[#f1592a]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 mb-4">
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center group-hover:bg-[#f1592a]/5 transition-all border border-gray-200">
                        <qa.icon
                          className="text-gray-700 group-hover:text-[#f1592a] transition-colors"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2">{qa.step}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">{qa.description}</p>
                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-xs font-semibold text-[#f1592a]">{qa.coverage}</span>
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
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience Our Process?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's discuss your project and show you exactly how we'll bring it to life
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
                    <span className="text-sm md:text-md">Start Your Project</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </a>
                <a href="/our-story" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold flex items-center justify-center space-x-2 group"
                  >
                    <span className="text-sm md:text-md">Learn About Us</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default ProcessPage
