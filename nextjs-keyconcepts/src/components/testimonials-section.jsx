'use client'

import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures Inc.',
    content:
      'Key Concepts transformed our entire business operations with their Odoo ERP solution. The AI-powered automation has saved us countless hours and significantly improved our efficiency.',
    rating: 5,
    company: 'TechVentures',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateSoft',
    content:
      'Their cloud-native app development expertise is unmatched. We launched our product 3 months ahead of schedule with their dedicated team. Absolutely phenomenal work!',
    rating: 5,
    company: 'InnovateSoft',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthLab',
    content:
      'The digital marketing and SEO services have tripled our online visibility. Their data-driven approach and transparent reporting make them stand out from the competition.',
    rating: 5,
    company: 'GrowthLab',
  },
  {
    name: 'David Thompson',
    role: 'Founder, StartupHub',
    content:
      'From API integration to mobile app development, Key Concepts handled everything seamlessly. Their technical expertise and customer service are second to none.',
    rating: 5,
    company: 'StartupHub',
  },
]
function TestimonialsSection() {
  return (
    <section className="py-16 md:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
          className="text-center mb-16"
        >
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
            Client Success Stories
          </motion.span>{' '}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>{' '}
          <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their transformation journey with us
          </p>
        </motion.div>{' '}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
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
              className="group relative"
              key={index}
            >
              {' '}
              <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-6  md:p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                {' '}
                <div className="absolute top-8 right-8 text-[#f1592a]/10 group-hover:text-[#f1592a]/20 transition-colors">
                  {' '}
                  <Quote className="w-10 h-10 md:w-12 md:h-12" />
                </div>{' '}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star size={18} className="fill-[#f1592a] text-[#f1592a]" key={i} />
                  ))}
                </div>{' '}
                <p className="text-sm md:text-mdtext-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>{' '}
                <div className="flex items-center space-x-4">
                  {' '}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>{' '}
                  <div>
                    {' '}
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>{' '}
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>{' '}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a]/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>{' '}
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              value: '500+',
              label: 'Projects Completed',
            },
            {
              value: '98%',
              label: 'Client Satisfaction',
            },
            {
              value: '150+',
              label: 'Enterprise Clients',
            },
            {
              value: '24/7',
              label: 'Support Available',
            },
          ].map((stat, index) => (
            <motion.div
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
              transition={{
                delay: index * 0.1,
              }}
              className="text-center"
              key={index}
            >
              {' '}
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>{' '}
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export { TestimonialsSection }
