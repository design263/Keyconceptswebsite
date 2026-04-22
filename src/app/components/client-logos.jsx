import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'

const LOGOS_PER_PAGE = 8

/** Each row always has `size` logos; indices wrap with modulo so the last row is never short. */
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

const logoModules = import.meta.glob('../../assets/clientLogo/*.{png,jpg,jpeg}', {
  eager: true,
})

function pathToDisplayName(filePath) {
  const base = filePath
    .split(/[/\\]/)
    .pop()
    .replace(/\.[^.]+$/, '')
  return base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function normalizeClientKey(name) {
  return name.toLowerCase().replace(/[-_\s]+/g, '')
}

const clients = Object.entries(logoModules)
  .map(([path, mod]) => ({
    name: pathToDisplayName(path),
    logo: mod.default,
    path,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
  .filter((client, index, arr) => {
    const key = normalizeClientKey(client.name)
    return arr.findIndex((c) => normalizeClientKey(c.name) === key) === index
  })

function ClientLogos() {

  const [logos, setLogos] = useState([])
  const pages = useMemo(() => wrapPages(clients, LOGOS_PER_PAGE), [])
  const pageCount = pages.length
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (pageCount <= 1) return undefined
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 5000)
    return () => clearInterval(id)
  }, [pageCount])

  useEffect(() => {
    fetch('/api/logos')
      .then(res => res.json())
      .then(setLogos)
  }, [])

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative w-full overflow-hidden pb-12">
          <motion.div
            className="flex"
            style={{ width: `${pageCount * 100}%` }}
            animate={{ x: `-${(page / pageCount) * 100}%` }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            {pages.map((group, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-8 gap-3 sm:gap-4 lg:gap-6 items-center"
                style={{ width: `${100 / pageCount}%` }}
              >
                {group.map((client, slotIndex) => (
                  <motion.div
                    key={`${pageIndex}-${slotIndex}-${client.path}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative min-w-0"
                    title={client.name}
                  >
                    <div className="flex items-center justify-center h-16 sm:h-20 px-2 sm:px-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-white hover:shadow-lg transition-all">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-8 sm:max-h-10 max-w-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { ClientLogos }
