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
    icon: Factory,
    name: 'Manufacturing',
    description: 'When your floor operations, inventory, and accounts are all talking different languages, production suffers. We bring them into one system that your entire team can actually use.',
  },
  {
    icon: ClipboardCheck,
    name: 'Insurance & RegTech',
    description: 'Slow claim cycles and manual documentation frustrate customers and cost money. We automate the paperwork so your team can focus on relationships and decisions, not data entry.',
  },
  {
    icon: Building2,
    name: 'Real Estate & Infra',
    description: 'Missed follow-ups and scattered property data cost deals. Our custom CRMs and listing platforms keep your pipeline organized and your clients engaged at every stage.',
  },

  {
    icon: Rocket,
    name: 'SaaS & Tech',
    description: 'Speed to market matters when you are building a SaaS product. We help you validate quickly with an MVP, then scale with the right architecture — without costly rewrites later.',
  },
  {
    icon: TrendingUp,
    name: 'Financial Services',
    description: 'Compliance, accuracy, and speed are non-negotiable in finance. We build platforms that handle high-volume financial data reliably, with the audit trails and reporting your team needs.',
  },
  {
    icon: Scale,
    name: 'Legal Tech',
    description: 'Legal work is time-sensitive and detail-heavy. We build contract management and document automation tools that reduce manual effort and let your team focus on what clients actually pay for.',
  },
  {
    icon: Trophy,
    name: 'Sports & Recreation',
    description: 'Running a sports facility or league should not require three different tools and a spreadsheet. We build booking, scheduling, and member management systems built for how you actually operate.',
  },
  {
    icon: ShoppingCart,
    name: 'Trade & Commerce',
    description: 'Whether you are managing a distribution network or running retail stores, we connect your inventory, orders, and customer data so the right products reach the right people at the right time.',
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
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">We've Worked In Your <span className="text-[#f1592a]">World Before</span></h2>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            We don't reinvent the wheel for every client. We bring 16 years of domain knowledge and deliver solutions that speak your industry's language from day one.
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
