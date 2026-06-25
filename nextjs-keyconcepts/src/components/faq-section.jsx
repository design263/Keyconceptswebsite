'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { JsonLd } from './json-ld'
import { faqSchema } from '@/lib/structured-data'

export const faqs = [
  {
    question: 'What services does Key Concepts offer as a software development company?',
    answer:
      'We provide comprehensive custom software development, mobile app development, custom CRM development, web development, and certified Odoo ERP implementation tailored to optimize your business workflows and scale your operations.',
  },
  {
    question: 'Why should we choose Key Concepts as our ERP software company?',
    answer:
      'Since 2009, Key Concepts has engineered high-uptime enterprise systems. As a trusted ERP software company, we offer certified Odoo ERP consulting, custom module development, data migrations, and dedicated AMC support to ensure your business operations run smoothly.',
  },
  {
    question: 'What technologies do you use for mobile app development?',
    answer:
      'Our mobile app development team builds high-performance native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. We manage the entire lifecycle, from design to App Store and Google Play deployment.',
  },
  {
    question: 'How does custom CRM development help my business grow?',
    answer:
      'Our custom CRM development services build tailored tools to track leads, automate sales pipelines, centralize customer communication, and deliver analytics. This helps eliminate manual processes, increases sales efficiency, and supports business scale.',
  },
  {
    question: 'What web development stacks do you specialize in?',
    answer:
      'We specialize in high-performance web development utilizing Next.js, React, Node.js, and Tailwind CSS. We focus on building fast, responsive, secure, and SEO-optimized web applications that deliver outstanding conversion rates.',
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
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
