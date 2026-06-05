'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, ExternalLink } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'

export function CaseStudyDetail({ caseStudy }) {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-8"
          >
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center text-gray-600 hover:text-[#f1592a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-600">{caseStudy.client}</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{caseStudy.challenge}</p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-80 object-cover"
                  fallback="/images/case-studies/placeholder.jpg"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Result</h2>
                <p className="text-gray-700 leading-relaxed">{caseStudy.result}</p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
                    >
                      <div className="flex justify-center mb-3">
                        <TrendingUp className="w-5 h-5 text-[#f1592a]" />
                      </div>
                      <div className="text-2xl font-bold text-[#f1592a] mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Client</p>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Industry</p>
                    <p className="font-medium">{caseStudy.industry}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Outcomes</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.metrics.map((metric) => (
                    <span
                      key={metric.label}
                      className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm"
                    >
                      {metric.label}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/contact">
                  <button className="w-full bg-[#f1592a] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#e0481a] transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Start Your Project
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
