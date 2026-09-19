'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { JsonLd } from './json-ld'
import { faqSchema } from '@/lib/structured-data'

export const faqs = [
  {
    question: 'What does Key Concepts specialise in?',
    answer:
      'Key Concepts specialises in AI-native product engineering, custom software development, enterprise automation, ERP solutions, and digital product development. We work with businesses to build, modernise, and scale software systems.',
  },
  {
    question: 'How can Key Concepts help businesses adopt AI?',
    answer:
      'We help businesses identify practical AI opportunities and integrate AI into existing or new software systems. This includes workflow automation, document intelligence, AI-powered features, and business process optimisation.',
  },
  {
    question: 'Does Key Concepts build complete SaaS products?',
    answer:
      'Yes. Key Concepts can support the SaaS product lifecycle from product discovery and UX to engineering, AI integration, deployment, maintenance, and ongoing improvements.',
  },
  {
    question: 'Can Key Concepts modernise an existing legacy application?',
    answer:
      'Yes. We can assess existing applications, identify modernisation opportunities, and incrementally improve architecture, technology, performance, and maintainability while considering existing business processes.',
  },
  {
    question: 'Do you develop custom ERP and enterprise systems?',
    answer:
      'Yes. We develop custom ERP and enterprise software tailored to specific business processes, integrations, workflows, reporting, and operational requirements.',
  },
  {
    question: 'Can Key Concepts work as our long-term product engineering team?',
    answer:
      'Yes. We can work as an extended product engineering partner, supporting ongoing development, maintenance, enhancements, technology upgrades, and product scaling.',
  },
  {
    question: 'Which industries does Key Concepts have experience in?',
    answer:
      'Our experience spans areas including insurance and regtech, manufacturing, real estate and infrastructure, SaaS and technology, financial services, sports and recreation, legal technology, and trade and commerce.',
  },
  {
    question: 'Where is Key Concepts located and do you work with global clients?',
    answer:
      'Key Concepts Innovations Pvt. Ltd. is based in Surat, Gujarat, India, and works with startups and enterprises across India and global markets. We partner with clients worldwide on software, SaaS, AI, ERP, and digital product development initiatives.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50/50 border-t border-gray-100">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked <span className="text-[#f1592a]">Questions</span></h2>
          <p className="text-md md:text-lg text-gray-600">
            Find answers to common inquiries about our software development, ERP, CRM, and mobile app services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200/80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-gray-50 text-gray-500 group-hover:text-[#f1592a] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { FAQSection }
