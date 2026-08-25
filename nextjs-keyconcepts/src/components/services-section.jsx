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
      'Turn your idea into a market-ready digital product with end-to-end product development.',
    image: '/images/support/product_development.jpg',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:row-span-2',
  },
  {
    icon: Rocket,
    title: 'AI Automation',
    description:
      'Transform your business with intelligent automation. We design and implement custom AI solutions that streamline workflows, reduce manual effort, and unlock new levels of efficiency.',
    image: '/images/support/specialized_development.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
    span: 'lg:col-span-2',
  },
  {
    icon: Database,
    title: 'Custom ERP Solutions',
    description:
      'Streamline your business operations with our custom ERP solutions, designed to optimize workflows, manage resources, and drive growth.',
    image: '/images/support/odoo_development.jpg',
    color: 'from-gray-700 to-gray-900',
    span: 'lg:col-span-2',
  },
  {
    icon: Settings,
    title: 'MVP Development',
    description:
      'Launch a feature-focused MVP quickly to test your idea and validate your product in the market.',
    image: '/images/support/MVP.png',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:col-span-2',
  },
  {
    icon: Wrench,
    title: 'GTM Outreach & PR',
    description:
      'Keep your software secure, up to date, and running smoothly with ongoing support and maintenance.',
    image: '/images/support/support.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
]
const trendingServices = [
  {
    icon: Layers,
    title: 'Complete Product Lifecycle Ownership',
    description:
      'From idea validation to post-launch growth, we stay involved through every stage of your product journey.',
    image: '/assets/Complete Product Lifecycle Ownership.png',
  },
  {
    icon: Rocket,
    title: 'Long-Term Product Partnership',
    description:
      'We dont hand over code and walk away. We continue building, improving, and supporting your product as your business evolves.',
    image: '/assets/Long-Term Product Partnership.png',
  },
  {
    icon: Database,
    title: 'Continuous Innovation',
    description:
      'We help you prioritize new features, improve user experience, optimize performance, and keep your product competitive.',
    image: '/assets/Continuous Innovation.png',
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Sets Us <span className="text-[#f1592a]">Apart</span></h2>{' '}
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with innovative solutions across product development, rapid MVP
              creation, and enterprise ERP systems
            </p>
          </div>{' '}
          <div className="flex flex-col gap-8 md:gap-12 max-w-[976px] mx-auto">
            {trendingServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
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
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-white border border-gray-100 rounded-[12px] p-3 sm:p-4 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all duration-300"
                  key={service.title}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Container */}
                    <div className={`flex flex-col text-left ${isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Image Container */}
                    <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="flex-shrink-0 max-w-[450px] mx-auto">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="max-w-full max-h-full object-contain select-none"
                          draggable="false"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Services
            </motion.span>{' '}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive <span className="text-[#f1592a]">
              IT Solutions
            </span></h2>{' '}
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
