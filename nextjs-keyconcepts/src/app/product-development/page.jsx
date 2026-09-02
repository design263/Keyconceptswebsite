'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion } from 'motion/react'
import { useEnquiryModal } from '@/context/enquiry-modal-context'
import {
  Code,
  Smartphone,
  Server,
  Brain,
  Users,
  Building2,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  GitBranch,
  Layers,
  Target,
  Shield,
  Zap,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { useState } from 'react'

const buildCategories = [
  {
    id: 'web',
    icon: Code,
    title: 'Web Applications',
    description: 'Modern, scalable web apps built with cutting-edge frameworks',
    longDescription:
      'We craft responsive, high-performance web applications using the latest technologies. From progressive web apps to complex enterprise platforms, our solutions are built to scale with your business needs.',
    features: [
      'Progressive Web Apps (PWA)',
      'SaaS platforms & dashboards',
      'Enterprise portals',
      'E-commerce solutions',
    ],
    image:
      'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRldmVsb3BtZW50JTIwbW9kZXJufGVufDF8fHx8MTc3MTg0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native & cross-platform mobile experiences',
    longDescription:
      'Build stunning mobile applications that users love. Whether you need native iOS/Android apps or cross-platform solutions, we deliver performant, user-friendly mobile experiences.',
    features: [
      'iOS & Android native apps',
      'React Native & Flutter',
      'Hybrid mobile solutions',
      'Mobile-first design',
    ],
    image: '/assets/productDev/App_Development.png',
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Systems',
    description: 'Robust, secure, and scalable backend infrastructure',
    longDescription:
      'Power your applications with enterprise-grade backend systems. We design and build secure, scalable APIs and microservices that handle millions of requests while maintaining peak performance.',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices architecture',
      'Cloud-native applications',
      'Database design & optimization',
    ],
    image: '/assets/productDev/BAckent_system.jpg',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Integrations',
    description: 'Intelligent features powered by modern AI/ML',
    longDescription:
      'Integrate cutting-edge AI capabilities into your products. From ChatGPT integrations to custom machine learning models, we help you leverage AI to create smarter, more powerful applications.',
    features: [
      'OpenAI & LLM integrations',
      'Natural language processing',
      'Predictive analytics',
      'Automation & chatbots',
    ],
    image: '/assets/productDev/AIIntrigation.jpg',
  },
]

const targetAudience = [
  {
    icon: Rocket,
    title: 'Startups & Founders',
    description: 'Launch your MVP quickly and iterate based on real user feedback',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Scale operations with custom software tailored to your unique processes',
  },
  {
    icon: TrendingUp,
    title: 'Growing Businesses',
    description: 'Modernize legacy systems and build new revenue streams',
  },
  {
    icon: Users,
    title: 'Product Teams',
    description: 'Extend your dev capacity with experienced product engineers',
  },
]

const deliverySteps = [
  {
    number: '01',
    title: 'Sprint Planning',
    description: '2-week sprints with clear goals, user stories, and acceptance criteria',
  },
  {
    number: '02',
    title: 'Development & QA',
    description: 'Continuous integration, automated testing, and code reviews',
  },
  {
    number: '03',
    title: 'Staging & Review',
    description: 'Deploy to staging environment for client review and feedback',
  },
  {
    number: '04',
    title: 'Production Deploy',
    description: 'Seamless deployment with monitoring, rollback capability, and support',
  },
]

const engagementModels = [
  {
    icon: Target,
    title: 'Fixed Scope Projects',
    description: 'Well-defined projects with clear deliverables and timeline',
    features: [
      'Detailed project scope & requirements',
      'Fixed budget & timeline',
      'Milestone-based payments',
      'Ideal for MVPs & defined products',
    ],
    highlight: 'Best for MVPs',
  },
  {
    icon: Calendar,
    title: 'Monthly Retainers',
    description: 'Ongoing development partnership for continuous improvement',
    features: [
      'Dedicated team allocation',
      'Flexible sprint planning',
      'Priority support & maintenance',
      'Ideal for evolving products',
    ],
    highlight: 'Best for Scale-ups',
  },
]

const techStack = {
  frontend: [
    { name: 'React', logo: '/assets/techLogo/react-icon.svg' },
    { name: 'TypeScript', logo: '/assets/techLogo/typescript.png' },
    { name: 'Tailwind CSS', logo: '/assets/techLogo/tailwind css.png' },
    { name: 'Next.js', logo: '/assets/techLogo/react-icon.svg' },
  ],
  mobile: [
    { name: 'React Native', logo: '/assets/techLogo/react-native-icon.svg' },
    { name: 'Flutter', logo: '/assets/techLogo/flutter.png' },
    { name: 'Swift', logo: '/assets/techLogo/swift.jpg' },
    { name: 'Kotlin', logo: '/assets/techLogo/kotlin.jpg' },
  ],
  backend: [
    { name: 'Python', logo: '/assets/techLogo/python.jpg' },
    { name: 'PostgreSQL', logo: '/assets/techLogo/postgresql.png' },
    { name: 'MongoDB', logo: '/assets/techLogo/mongodb.png' },
    { name: 'Jenkins', logo: '/assets/techLogo/Jenkins.png' },
  ],
  cloud: [
    { name: 'AWS', logo: '/assets/techLogo/AWS.png' },
    { name: 'Azure', logo: '/assets/techLogo/microsoft-azure-logo-icon.svg' },
    { name: 'Docker', logo: '/assets/techLogo/docker.png' },
    { name: 'Jenkins', logo: '/assets/techLogo/Jenkins.png' },
  ],
  ai: [
    { name: 'OpenAI', logo: '/assets/techLogo/openai-logo-icon.svg' },
    { name: 'LangChain', logo: '/assets/techLogo/langchain.png' },
    { name: 'TensorFlow', logo: '/assets/techLogo/tensorflow.png' },
    { name: 'Hugging Face', logo: '/assets/techLogo/hugging face.png' },
  ],
}

function ProductDevelopmentPage() {
  const { openModal } = useEnquiryModal()
  const [selectedCategory, setSelectedCategory] = useState('web')

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative mt-5 py-20 md:py-32 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
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
                <Sparkles className="text-[#f1592a] w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Custom Product Development
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
                Build Products That{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Users Love
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
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
              >
                From concept to launch, we craft scalable web & mobile applications with modern tech
                stacks, agile methodology, and a relentless focus on user experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button
                  onClick={() => openModal('Product Development')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-[80%] sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span className="text-sm md:text-base font-semibold">Start a Conversation</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </motion.button>

                <motion.a
                  href="#who-its-for"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[80%] sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span className="text-sm md:text-base font-semibold">Explore Services</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="who-its-for" className="py-12 md:py-16 bg-white">
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                Who It's For
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Ambitious Teams</h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're launching a startup or scaling an enterprise, we're your technical
                partner
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((audience, index) => (
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
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                  key={audience.title}
                >
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-4 lg:p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center">
                    <div className="relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                        <audience.icon className="text-gray-700" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className=" py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                What We Build
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Full-Stack Product Development
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                From frontend to backend, mobile to AI  -  we build complete, production-ready
                products
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {buildCategories.map((category, index) => (
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
                    onClick={() => setSelectedCategory(category.id)}
                    className={`md:px-6 px-4 md:py-3 py-2 text-sm md:text-md rounded-full border-2 transition-all duration-300 font-medium ${selectedCategory === category.id ? 'bg-white border-[#f1592a] text-[#f1592a] shadow-lg' : 'bg-white/60 border-gray-200 text-gray-700 hover:border-[#f1592a]/50 hover:bg-white'}`}
                    key={category.id}
                  >
                    {category.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {selectedCategory && (
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
                key={selectedCategory}
              >
                {buildCategories
                  .filter((cat) => cat.id === selectedCategory)
                  .map((category) => (
                    <div
                      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 md:p-12 shadow-2xl border border-gray-200"
                      key={category.id}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="relative w-12 h-12 md:w-14 md:h-14 mb-6">
                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                              <category.icon
                                className="text-gray-700"
                                size={28}
                                strokeWidth={1.5}
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h3>
                          <p className="text-gray-600 text-md md:text-lg mb-8 leading-relaxed">
                            {category.longDescription}
                          </p>
                          <ul className="space-y-3 mb-8">
                            {category.features.map((feature, idx) => (
                              <li className="flex items-start space-x-3" key={idx}>
                                <CheckCircle
                                  className="text-[#f1592a] flex-shrink-0 mt-1"
                                  size={20}
                                  strokeWidth={2}
                                />
                                <span className="text-gray-700 text-sm md:text-md">{feature}</span>
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
                            className="inline-flex items-center space-x-2 px-6 md:px-8  py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                          >
                            <span className="text-sm md:text-md">Start Building</span> <ArrowRight size={20} />
                          </motion.a>
                        </div>
                        <div className="relative">
                          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                              src={category.image}
                              alt={category.title}
                              className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
            {!selectedCategory && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg mb-6">Select a category to learn more</p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setSelectedCategory('web')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                >
                  <span className="text-sm md:text-md">Explore Our Services</span>
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />
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
                Delivery Approach
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Agile, Transparent, Iterative</h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven delivery methodology ensures quality, speed, and continuous feedback
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliverySteps.map((step, index) => (
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
                  key={step.number}
                >
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-4 lg:p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="text-3xl md:text-5xl font-bold text-[#f1592a]/20 mb-4">{step.number}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < deliverySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="text-[#f1592a]/30" size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/assets/productDev/agile.jpg"
                  alt="Agile Development Process"
                  className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>
        <section className="hidden py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
              >
                Engagement Models
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Flexible Engagement Options</h2>
              <p className="text-md md:text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the model that fits your project stage, budget, and timeline
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {engagementModels.map((model, index) => (
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
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                  key={model.title}
                >
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-4  lg:p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-xs font-semibold rounded-full">
                        {model.highlight}
                      </span>
                    </div>
                    <div className="relative w-12 h-12 md:w-14 md:h-14 mb-6 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all">
                        <model.icon className="text-gray-700" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{model.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>
                    <ul className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <li className="flex items-start space-x-3" key={idx}>
                          <CheckCircle
                            className="text-[#f1592a] flex-shrink-0 mt-0.5"
                            size={18}
                            strokeWidth={2}
                          />
                          <span className="text-gray-700 text-sm md:text-md">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
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
                Tech Stack
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Modern, Battle-Tested Technologies
              </h2>
              <p className="text-md md:text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                We use proven frameworks and tools that scale with your business
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {Object.entries(techStack).map(([category, technologies], index) => (
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
                  className="group h-full"
                  key={category}
                >
                  <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-5 shadow-lg border border-gray-100 hover:bg-white hover:border-[#f1592a]/30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-start">
                    <h3 className="text-base font-extrabold mb-5 capitalize text-center text-gray-900 border-b border-gray-100 pb-3 tracking-wider">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 gap-3 my-auto">
                      {technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100/80 hover:border-[#f1592a]/30 hover:shadow-md transition-all duration-300 group/tech text-center"
                        >
                          <div className="w-10 h-10 mb-2 flex items-center justify-center rounded-xl p-1 bg-white border border-gray-100 shadow-xs group-hover/tech:scale-110 transition-transform">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-800 text-center leading-tight">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhY2slMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzE4NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Tech Stack"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Key Concepts?
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                16+ years of experience building products that scale, backed by a team that cares
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Fast Time-to-Market',
                  description: 'Launch MVPs in weeks, not months, with our proven process',
                },
                {
                  icon: Shield,
                  title: 'Enterprise-Grade Quality',
                  description: 'Code reviews, testing, and security baked into every sprint',
                },
                {
                  icon: Users,
                  title: 'Dedicated Team',
                  description: 'Work with the same engineers throughout your project',
                },
                {
                  icon: Target,
                  title: 'Product-First Mindset',
                  description: 'We think beyond code  -  UX, scalability, and business goals',
                },
                {
                  icon: GitBranch,
                  title: 'Full Transparency',
                  description: 'Daily standups, sprint reviews, and direct Slack access',
                },
                {
                  icon: Layers,
                  title: 'Scalable Architecture',
                  description: 'Build once, scale forever with cloud-native design',
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
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white relative overflow-hidden">
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
                className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8"
              >
                <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-md text-white font-medium">Ready to Build?</span>
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's Turn Your Idea into Reality
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                Schedule a free consultation with our product team. We'll discuss your vision, tech
                requirements, timeline, and provide a custom proposal.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => openModal('Product Development')}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold cursor-pointer"
                >
                  <span className="text-sm md:text-md">Start a Conversation</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </motion.button>
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
                  <span className="text-sm md:text-md">Discuss Your Requirements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Clear Project Roadmap</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />{' '}
                  <span className="text-sm md:text-md">Ongoing Support Beyond Launch</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default ProductDevelopmentPage
