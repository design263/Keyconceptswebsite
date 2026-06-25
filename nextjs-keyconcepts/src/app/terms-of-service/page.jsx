'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Scale, RefreshCw, FileWarning, Terminal } from 'lucide-react'

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Scale,
      title: '1. Acceptance of Terms',
      content:
        'By accessing this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site.',
    },
    {
      icon: Terminal,
      title: '2. Services Provision & Scope',
      content:
        'Key Concepts provides IT consultation, custom software development, mobile application design, and Odoo ERP implementation. The scope of work, timelines, and budgets are governed by individual client contracts and agreements.',
    },
    {
      icon: FileWarning,
      title: '3. Intellectual Property Rights',
      content:
        'All contents, logos, text, designs, layouts, graphics, and materials on this site are the intellectual property of Key Concepts. Unauthorized reproduction, modification, or distribution is strictly prohibited.',
    },
    {
      icon: RefreshCw,
      title: '4. Revision & Disclaimer',
      content:
        'The materials on our website are provided "as is". We may revise these terms of service or modify the contents of the website at any time without prior notice.',
    },
  ]

  return (
    <LayoutWrapper>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#f1592a]/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Last updated: June 24, 2026. Review our service engagement conditions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose max-w-none text-gray-600 space-y-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-[#f1592a] pl-4">
              Welcome to the website of Key Concepts Innovations Pvt. Ltd. These Terms of Service outline the rules and guidelines for utilizing our website and digital resources.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-12">
              {sections.map((sec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-[#f1592a] shrink-0">
                      <sec.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{sec.title}</h2>
                      <p className="leading-relaxed text-sm md:text-base">{sec.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#f1592a]/5 border border-[#f1592a]/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Governing Law</h2>
              <p className="text-sm md:text-base leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and any legal disputes related to our services or website shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
