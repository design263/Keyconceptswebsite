'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Database, HelpCircle, ToggleLeft, Settings } from 'lucide-react'

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: HelpCircle,
      title: '1. What Are Cookies?',
      content:
        'Cookies are small text files stored on your device (computer, tablet, or mobile) by your web browser when you visit a website. They are widely used to make websites work more efficiently and provide performance insights to the site owners.',
    },
    {
      icon: Database,
      title: '2. Cookies We Use',
      content:
        'We use essential cookies to keep our layout responsive and load assets smoothly. We also use third-party analytics cookies (such as Google Analytics) to understand page traffic patterns, helping us refine our digital content and services.',
    },
    {
      icon: ToggleLeft,
      title: '3. Managing Cookie Preferences',
      content:
        'You can choose to accept or decline cookies. Most web browsers automatically accept cookies by default, but you can usually modify your browser settings to decline cookies if you prefer. Note that disabling cookies may affect website design features.',
    },
    {
      icon: Settings,
      title: '4. Policy Updates',
      content:
        'We may update our Cookie Policy from time to time to reflect changes in technology or data regulation. Any changes will be posted on this page with an updated revision date.',
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Last updated: June 24, 2026. Understand how we use cookies to optimize your visit.
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
              At Key Concepts Innovations Pvt. Ltd., we believe in being clear and open about how we collect and use data related to you. This policy provides detailed information about how and when we use cookies on our website.
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Questions & Contact</h2>
              <p className="text-sm md:text-base leading-relaxed">
                If you have questions about our use of cookies or tracking technologies, please email us at{' '}
                <a href="mailto:info@keyconcepts.co.in" className="text-[#f1592a] font-semibold hover:underline">
                  info@keyconcepts.co.in
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
