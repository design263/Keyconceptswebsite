'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, RefreshCw, ChevronUp } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const PAGE_SIZE = 3

export default function CaseStudiesList({ caseStudies = [] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visibleCases = caseStudies.slice(0, visibleCount)
  const hasMore = visibleCount < caseStudies.length
  const canShowLess = visibleCount > PAGE_SIZE && caseStudies.length > PAGE_SIZE

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, caseStudies.length))
  }

  const handleShowLess = () => {
    setVisibleCount(PAGE_SIZE)
  }

  if (!caseStudies.length) return null

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCases.map((caseStudy) => (
          <div className="group" key={caseStudy.id}>
            <Link href={`/case-study/${caseStudy.slug}`} className="block h-full">
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
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2">
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
          </div>
        ))}
      </div>

      {(hasMore || canShowLess) && (
        <div className="text-center mt-16">
          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105 flex items-center justify-center space-x-2 group mx-auto"
            >
              <span>Show More Case Studies</span>
              <RefreshCw className="group-hover:rotate-180 transition-transform duration-500" size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleShowLess}
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105 flex items-center justify-center space-x-2 group mx-auto"
            >
              <span>Show Less Case Studies</span>
              <ChevronUp className="group-hover:-translate-y-0.5 transition-transform" size={16} />
            </button>
          )}
        </div>
      )}
    </>
  )
}
