'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const LOGOS_PER_PAGE = 8

// Create paginated rows (with wrapping)
function wrapPages(list, size) {
  if (!list.length) return [[]]

  const n = list.length
  const pageCount = Math.ceil(n / size)
  const pages = []

  for (let p = 0; p < pageCount; p++) {
    const row = []
    for (let i = 0; i < size; i++) {
      row.push(list[(p * size + i) % n])
    }
    pages.push(row)
  }

  return pages
}

function ClientLogos() {
  const [logos, setLogos] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Fetch logos from API
  useEffect(() => {
    fetch('/api/clientLogos')
      .then((res) => res.json())
      .then((data) => {
        setLogos(data || [])
      })
      .catch((err) => {
        console.error('Error fetching logos:', err)
      })
      .finally(() => setLoading(false))
  }, [])

  // Create pages dynamically
  const pages = useMemo(() => wrapPages(logos, LOGOS_PER_PAGE), [logos])
  const pageCount = pages.length

  // Auto scroll
  useEffect(() => {
    if (pageCount <= 1 || isPaused) return

    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 4000)

    return () => clearInterval(id)
  }, [pageCount, isPaused])

  // Loading state
  if (loading) {
    return (
      <div className="py-16 text-center text-gray-500">
        Loading client logos...
      </div>
    )
  }

  // Empty state
  if (!logos.length) {
    return (
      <div className="py-16 text-center text-gray-400">
        No client logos available
      </div>
    )
  }

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative w-full overflow-hidden pb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ width: `${pageCount * 100}%` }}
            animate={{ x: `-${(page / pageCount) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {pages.map((group, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center"
                style={{ width: `${100 / pageCount}%` }}
              >
                {group.map((src, slotIndex) => (
                  <motion.div
                    key={`${pageIndex}-${slotIndex}-${src}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-center h-16 sm:h-20 px-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-white hover:shadow-lg transition-all">
                      <img
                        src={src}
                        alt="client logo"
                        className="max-h-8 sm:max-h-10 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {pageCount > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === page ? 'bg-[#f1592a]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export { ClientLogos }