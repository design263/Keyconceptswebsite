'use client'

import { motion } from 'motion/react'
import {
  Factory,
  ShoppingCart,
  Building2,
  Trophy,
  ClipboardCheck,
  Scale,
  Rocket,
  TrendingUp,
} from 'lucide-react'

const industries = [
  {
    icon: ClipboardCheck,
    name: 'Insurance & Reg. Tech',
    description: 'Automated claim processing, validation workflows, and digital documentation portals.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Custom ERP integrations, warehouse management solutions, inventory tracking, and supply chain optimization.',
  },
  {
    icon: Building2,
    name: 'Real Estate & Infra',
    description: 'Property listings, custom CRM management, and deal pipeline automation.',
  },

  {
    icon: Rocket,
    name: 'SaaS & Tech',
    description: 'Scalable MVP development, multi-tenant architectures, API integrations, and cloud infrastructure setup.',
  },
  {
    icon: TrendingUp,
    name: 'Financial Services',
    description: 'Digital auditing platforms, custom payment modules, and high-performance financial reports.',
  },
  {
    icon: Trophy,
    name: 'Sports & Recreation',
    description: 'Facility scheduling, league management systems, booking engines, and member engagement applications.',
  },
  {
    icon: Scale,
    name: 'Legal Tech',
    description: 'Custom contract management, automated document generation, legal research platforms, and compliance workflows.',
  },
  {
    icon: ShoppingCart,
    name: 'Trade & Commerce',
    description: 'Omnichannel commerce hubs, point-of-sale integrations, and automated inventory systems.',
  },
]

function IndustriesSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Industries We <span className="text-[#f1592a]">Serve</span></h2>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Providing tailored digital transformations and custom software engineering across key vertical sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-12 h-12 group-hover:scale-110 transition-transform shrink-0">
                    <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-all border border-gray-100 group-hover:border-[#f1592a]/10">
                      <ind.icon className="text-gray-700 w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{ind.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { IndustriesSection }
