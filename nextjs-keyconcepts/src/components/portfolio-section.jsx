import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Trophy } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { getCaseStudies } from '@/lib/content-api'

async function PortfolioSection() {
  const caseStudies = await getCaseStudies()
  const displayStudies = caseStudies.slice(0, 3)

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4">
              Proven Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Success Stories</h2>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped startups and enterprise businesses launch products, optimize ERPs, and grow globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden w-full bg-gray-200 shrink-0">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 text-[#f1592a] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {study.industry}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {study.client}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors leading-tight">
                  <Link href={`/case-study/${study.slug}`}>{study.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {study.challenge}
                </p>

                {/* Metrics Box */}
                {study.metrics && (
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 pt-6 mt-auto">
                    {study.metrics.map((metric, midx) => (
                      <div key={midx} className="text-center">
                        <div className="text-lg md:text-xl font-extrabold text-[#f1592a] tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase text-gray-400 font-bold leading-tight mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/insights/case-studies"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-full text-gray-800 hover:border-[#f1592a] hover:text-[#f1592a] transition-all font-semibold text-xs sm:text-sm"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { PortfolioSection }
