'use client'

import { motion } from 'motion/react'
import { Code, Database, Layers, Megaphone, Rocket, Settings, Wrench } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
// import productDevelopmentImage from '/images/support/product_development.jpg'
// import specializedPlatformsImage from '/images/support/specialized_development.jpg'
// import odooDevelopmentImage from '/images/support/odoo_development.jpg'
// import supportMaintenanceImage from '/images/support/support.jpg'
// import mvpDevelopmentImage from '/images/support/MVP.png'
const services = [
  {
    icon: Code,
    title: 'Product Development',
    description:
      'You have a vision. We have the team and process to bring it to life — from wireframes and architecture to a product your customers will actually love using. We stay involved long after launch.',
    image: '/images/support/product_development.jpg',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:row-span-2',
  },
  {
    icon: Rocket,
    title: 'AI Automation',
    description:
      'AI doesn\'t have to be complicated or expensive. We identify the repetitive, time - consuming parts of your workflow and automate them intelligently - so your team can focus on work that actually matters.',
    image: '/images/support/specialized_development.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
    span: 'lg:col-span-2',
  },
  {
    icon: Database,
    title: 'Custom ERP Solutions',
    description:
      'If your team is juggling spreadsheets, WhatsApp approvals, and disconnected software - it\'s costing you more than you think. We build ERP systems that actually fit how your business works, not the other way around.',
    image: '/images/support/odoo_development.jpg',
    color: 'from-gray-700 to-gray-900',
    span: 'lg:col-span-2',
  },
  {
    icon: Settings,
    title: 'MVP Development',
    description:
      'Don\'t spend a year building something nobody wants. We help you launch a lean, focused MVP in weeks - real enough to test, fast enough to learn, and solid enough to grow into a full product.',
    image: '/images/support/MVP.png',
    color: 'from-gray-600 to-gray-800',
    span: 'lg:col-span-2',
  },
  {
    icon: Megaphone,
    title: 'GTM Outreach & PR',
    description:
      'A great product that nobody knows about is still a failure. We help you craft your go-to-market message, reach the right audience, and generate the early traction that turns a launch into momentum.',
    image: '/images/support/support.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Wrench,
    title: 'Support & Maintenance',
    description:
      'Software is never truly done. We provide ongoing maintenance, performance monitoring, security updates, and feature additions - so you never have to start over from scratch when your needs change.',
    image: '/images/support/support.jpg',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
]
const trendingServices = [
  {
    icon: Layers,
    title: 'We Listen Before We Build',
    description:
      'Most companies jump straight to solutions. We spend real time understanding your business, your team, and your customers — because the right technology starts with the right understanding.',
    image: '/assets/Complete Product Lifecycle Ownership.png',
  },
  {
    icon: Rocket,
    title: 'We Stay. Always.',
    description:
      'We are not a project vendor - we are a long-term partner. After launch, we are still here: improving, iterating, and making sure your product keeps up with your growing ambitions.',
    image: '/assets/Long-Term Product Partnership.png',
  },
  {
    icon: Database,
    title: 'Your Time & Budget Are Sacred',
    description:
      'We are transparent from day one - clear timelines, honest budgets, and no surprise scope creep. We respect what it takes to run a business, and we plan our work accordingly.',
    image: '/assets/Continuous Innovation.png',
  },
  {
    icon: Database,
    title: 'Innovation That Makes Sense',
    description:
      'We dont chase tech trends for the sake of it.Every feature, every tool, every decision is driven by one question: does this actually help your business grow? If the answer is yes, we build it.',
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
              What Sets Us Apart
            </motion.span>{' '}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">We Treat Your Business <span className="text-[#f1592a]">{"Like It's Our Own"}</span></h2>{' '}
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Every client we work with gets one thing we never compromise on — our complete attention and genuine care. {"Here's"} what that looks like in practice.
            </p>
          </div>{' '}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {trendingServices.map((service, index) => {
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
                  className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 lg:p-5 xl:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full"
                  key={service.title}
                >
                  {/* Image Container: first and centered */}
                  <div className="flex justify-center items-center h-36 sm:h-44 md:h-48 lg:h-36 xl:h-44 mb-5 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-w-full max-h-full object-contain select-none"
                      draggable="false"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg lg:text-base xl:text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
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
              What We Do
            </motion.span>{' '}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need. <span className="text-[#f1592a]">
              Nothing You Don't.
            </span></h2>{' '}
            <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
              We work across the full technology stack — from building your first product to scaling your existing systems. Pick what you need, or let's figure it out together.
            </p>
          </div>{' '}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export { ServicesSection }
