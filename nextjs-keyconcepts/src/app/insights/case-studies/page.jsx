'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Award, ArrowRight, Target } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { getFeaturedCaseStudy, getRegularCaseStudies } from '@/data/case-studies'

function CaseStudiesPage() {
  const featuredCase = getFeaturedCaseStudy()
  const regularCases = getRegularCaseStudies()

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />
          </div>
          <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/50 rounded-full text-sm font-semibold text-[#f1592a] mb-4"
              >
                <Award size={16} /> <span>Success Stories</span>
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable
                results with our innovative solutions.
              </p>
            </motion.div>
            {featuredCase && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <Link href={`/case-study/${featuredCase.id}`} className="block">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <ImageWithFallback
                          src={featuredCase.image}
                          alt={featuredCase.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          fallback="/images/case-studies/placeholder.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-2 bg-[#f1592a] text-white text-sm font-bold rounded-full shadow-lg">
                            Featured Case Study
                          </span>
                        </div>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                            {featuredCase.client}
                          </span>
                          <span className="inline-block px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-sm font-semibold rounded-full">
                            {featuredCase.industry}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#f1592a] transition-colors">
                          {featuredCase.title}
                        </h2>
                        <div className="mb-4">
                          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">
                            The Challenge
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{featuredCase.challenge}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {featuredCase.metrics.map((metric, idx) => (
                            <div className="text-center" key={idx}>
                              <div className="text-2xl font-bold text-[#f1592a] mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-[#f1592a] font-semibold group-hover:space-x-3 transition-all">
                          <span>View Full Case Study</span>
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Success Stories
              </h2>
              <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore how we've partnered with businesses across industries to deliver measurable
                results and drive growth.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCases.map((caseStudy, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                  key={caseStudy.id}
                >
                  <Link href={`/case-study/${caseStudy.id}`} className="block h-full">
                    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          fallback="/images/case-studies/placeholder.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                            {caseStudy.industry}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-sm text-[#f1592a] font-semibold mb-2">
                          {caseStudy.client}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {caseStudy.challenge}
                        </p>
                        <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-100">
                          {caseStudy.metrics.map((metric, idx) => (
                            <div className="text-center" key={idx}>
                              <div className="text-lg font-bold text-[#f1592a]">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-600 line-clamp-2">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">
                            Read Case Study
                          </span>
                          <ArrowRight
                            size={18}
                            className="text-[#f1592a] group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl overflow-hidden p-12 md:p-16"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Target className="text-white" size={32} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Let's discuss how we can help you achieve similar results and transform your
                  business operations.
                </p>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                    Start Your Project Today
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default CaseStudiesPage
