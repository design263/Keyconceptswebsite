import { motion } from 'motion/react'
import { SEO } from '../components/ui/seo'
import {
  TrendingUp,
  Database,
  Smartphone,
  Plug,
  Search,
  Shield,
  Brain,
  Cloud,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Link } from 'react-router'
const detailedServices = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your brand.',
    features: [
      'Social Media Marketing & Management',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'PPC & Google Ads Management',
      'Marketing Analytics & Reporting',
    ],
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Database,
    title: 'ERP Solutions (Odoo Partner)',
    description: 'Official Odoo partner providing complete ERP implementation.',
    features: [
      'Odoo Implementation & Customization',
      'Module Development',
      'Data Migration & Integration',
      'Training & Support',
      'Odoo Version Upgrades',
    ],
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Development',
    description: 'Custom application development for web, Android, and iOS.',
    features: [
      'React & Next.js Web Apps',
      'Native Android Development',
      'iOS App Development',
      'Progressive Web Apps (PWA)',
      'Cross-Platform Solutions',
    ],
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Seamless integration of third-party services and APIs.',
    features: [
      'RESTful API Development',
      'Third-Party Service Integration',
      'Payment Gateway Integration',
      'CRM & ERP Integration',
      'Webhook Implementation',
    ],
    color: 'from-gray-500 to-gray-700',
  },
  {
    icon: Search,
    title: 'SEO/SMO Services',
    description: 'Optimize your online presence and search rankings.',
    features: [
      'Technical SEO Audit',
      'On-Page & Off-Page SEO',
      'Keyword Research & Strategy',
      'Local SEO Optimization',
      'Social Media Optimization',
    ],
    color: 'from-[#f1592a] to-[#d94d24]',
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Leverage AI to automate and optimize your workflows.',
    features: [
      'AI-Powered Automation',
      'Machine Learning Integration',
      'Natural Language Processing',
      'Predictive Analytics',
      'Chatbot Development',
    ],
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Development',
    description: 'Build scalable applications designed for the cloud.',
    features: [
      'AWS & Azure Solutions',
      'Microservices Architecture',
      'Docker & Kubernetes',
      'Serverless Applications',
      'Cloud Migration Services',
    ],
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Shield,
    title: 'Digital Security',
    description: 'Protect your digital assets with advanced security.',
    features: [
      'Security Audits & Testing',
      'Penetration Testing',
      'GDPR Compliance',
      'Data Encryption Solutions',
      'Security Monitoring',
    ],
    color: 'from-[#f1592a] to-[#d94d24]',
  },
]
function ServicesPage() {
  return (
    <>
      <SEO
        title="Our IT Services & Solutions"
        description="Explore our expert IT services: Odoo ERP, Web & Mobile Development, Digital Marketing, AI Solutions, and more. Transform your business today."
      />
      <div className="pt-20">
        {' '}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {' '}
          <div className="absolute inset-0 opacity-10">
            {' '}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" />{' '}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl" />
          </div>{' '}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {' '}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-4xl mx-auto text-center"
            >
              {' '}
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
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6"
              >
                Our Services
              </motion.span>{' '}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Comprehensive IT Solutions</h1>{' '}
              <p className="text-xl text-gray-300 leading-relaxed">
                From strategy to execution, we deliver excellence in every aspect of digital
                transformation
              </p>
            </motion.div>
          </div>
        </section>{' '}
        <section className="py-24 bg-white">
          {' '}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {' '}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedServices.map((service, index) => (
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
                  key={service.title}
                >
                  {' '}
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                    {' '}
                    <div className="relative w-16 h-16 mb-6">
                      {' '}
                      <div
                        className={`w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        {' '}
                        <service.icon className="text-gray-700" size={32} strokeWidth={1.5} />
                      </div>{' '}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>{' '}
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>{' '}
                    <p className="text-gray-600 mb-6">{service.description}</p>{' '}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li className="flex items-start space-x-3" key={i}>
                          {' '}
                          <Check className="text-[#f1592a] flex-shrink-0 mt-1" size={18} />{' '}
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>{' '}
                    <Link to="/contact">
                      {' '}
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className={`group/btn w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2`}
                      >
                        {' '}
                        <span>Get Started</span>{' '}
                        <ArrowRight
                          className="group-hover/btn:translate-x-1 transition-transform"
                          size={18}
                        />
                      </motion.button>
                    </Link>{' '}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>{' '}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          {' '}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {' '}
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
              {' '}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>{' '}
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help transform your business with our comprehensive IT
                solutions.
              </p>{' '}
              <Link to="/contact">
                {' '}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
export { ServicesPage }
