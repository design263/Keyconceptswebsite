'use client'

import { motion } from 'motion/react'
import { Database, Layers, Rocket, Settings, Wrench } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
// import productDevelopmentImage from '/images/support/product_development.jpg'
// import specializedPlatformsImage from '/images/support/specialized_development.jpg'
// import odooDevelopmentImage from '/images/support/odoo_development.jpg'
// import supportMaintenanceImage from '/images/support/support.jpg'
// import mvpDevelopmentImage from '/images/support/MVP.png'
const services = [
  {
    icon: Layers,
    title: 'Product Development',
    description:
      'Overcome software scaling blocks. We engineer high-performance platforms that handle heavy user traffic and drive 2x operational efficiency.',
    image: '/images/support/product_development.jpg',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:row-span-2',
  },
  {
    icon: Rocket,
    title: 'Specialized Platforms',
    description:
      'Escape restrictive off-the-shelf limitations. We build custom community hubs and visitor portals designed for your exact organizational workflows.',
    image: '/images/support/specialized_development.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
    span: 'lg:col-span-2',
  },
  {
    icon: Database,
    title: 'Odoo Development',
    description:
      'Stop dealing with disjointed business data. We centralize inventory, sales, and accounting with Odoo ERP, reducing admin overhead by 30%.',
    image: '/images/support/odoo_development.jpg',
    color: 'from-gray-700 to-gray-900',
    span: 'lg:col-span-2',
  },
  {
    icon: Settings,
    title: 'MVP Development',
    description:
      'Mitigate market launch risks. We build feature-focused, investor-ready MVPs in 6-10 weeks to validate your product-market fit fast.',
    image: '/images/support/MVP.png',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:col-span-2',
  },
  {
    icon: Wrench,
    title: 'Support & Maintenance',
    description:
      'Eliminate system downtime. Proactive monitoring with fast bug fixes ensures 99.9% uptime.',
    image: '/images/support/support.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
]
const trendingServices = [
  {
    icon: Layers,
    title: 'Product Development',
    description:
      'Transform your ideas into scalable, market-ready products with our end-to-end development expertise.',
    gradient: 'from-[#f1592a] to-[#d94d24]',
  },
  {
    icon: Rocket,
    title: 'MVP Studio',
    description:
      'Rapidly build, test, and launch your minimum viable product to validate your business concept.',
    gradient: 'from-[#f1592a] to-[#d94d24]',
  },
  {
    icon: Database,
    title: 'Odoo Development',
    description:
      'Streamline your business operations with our expert Odoo development and customization services.',
    gradient: 'from-[#f1592a] to-[#d94d24]',
  },
]
function ServicesSection() {
  return (
    <section className=" py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
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
          className="mb-20"
        >
          {' '}
          <div className="text-center mb-12">
            {' '}
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
              What we do
            </motion.span>{' '}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>{' '}
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with innovative solutions across product development, rapid MVP
              creation, and enterprise ERP systems
            </p>
          </div>{' '}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingServices.map((service, index) => (
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
                className="group relative overflow-visible"
                key={service.title}
              >
                {' '}
                <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                      <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                        <service.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>{' '}
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
          className="mb-12"
        >
          {' '}
          <div className="text-center mb-12">
            {' '}
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
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-cyan-500/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
            >
              Our Services
            </motion.span>{' '}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive IT Solutions</h2>{' '}
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver excellence in every aspect of digital
              transformation
            </p>
          </div>{' '}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[140px]">
            {services.map((service, index) => (
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 ${service.span}`}
                key={service.title}
              >
                {' '}
                <div className="absolute inset-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                  />
                </div>{' '}
                <div className="relative h-full p-5 sm:p-6 flex flex-col justify-start text-white">
                  {' '}
                  <div className="flex items-center space-x-3 mb-3">
                    {' '}
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {' '}
                      <service.icon size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug">{service.title}</h3>{' '}
                  </div>{' '}
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{service.description}</p>{' '}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {' '}
                    <div
                      className={`absolute inset-0 ${service.color} blur-xl`}
                      style={{
                        transform: 'translateY(50%)',
                      }}
                    />
                  </div>
                </div>{' '}
                <div className="absolute inset-0 bg-[#f1592a]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export { ServicesSection }
