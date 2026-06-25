'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Shield, Eye, Lock, FileText } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: '1. Information We Collect',
      content:
        'We collect information that you provide directly to us when contacting us, requesting a quote, or applying for jobs. This may include your name, email address, phone number, company name, and details of your project requirements or resume documents.',
    },
    {
      icon: Shield,
      title: '2. How We Use Your Information',
      content:
        'We use the collected information to respond to your inquiries, deliver our software engineering and Odoo ERP services, evaluate career applications, send updates, and improve our website and customer support experiences.',
    },
    {
      icon: Lock,
      title: '3. Data Protection & Security',
      content:
        'Key Concepts implements robust administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, disclosure, alteration, or destruction. We do not sell or lease your information to third parties.',
    },
    {
      icon: FileText,
      title: '4. Third-Party Services & Links',
      content:
        'Our website may contain links to external sites or integrate with third-party tools (like Google Maps or WhatsApp). We do not control and are not responsible for the privacy practices of these third-party domains.',
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Last updated: June 24, 2026. Learn how we safeguard and manage your personal data.
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
              At Key Concepts Innovations Pvt. Ltd., we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines our data collection, processing, and protection practices.
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact Our Privacy Team</h2>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                If you have any questions or concerns regarding our Privacy Policy or data processing practices, please get in touch with our team:
              </p>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@keyconcepts.co.in" className="text-[#f1592a] font-semibold hover:underline">
                    info@keyconcepts.co.in
                  </a>
                </li>
                <li>
                  <strong>Office Address:</strong> Key Concepts Innovations, VIP Road, Vesu, Surat, Gujarat, India.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
