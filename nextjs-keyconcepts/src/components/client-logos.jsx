'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

// Static logo imports for Next.js compatibility
const logoModules = {
  '../../assets/clientLogo/ICRISET.png': { default: '/assets/clientLogo/ICRISET.png' },
  '../../assets/clientLogo/Jivraj.jpg': { default: '/assets/clientLogo/Jivraj.jpg' },
  '../../assets/clientLogo/Nobletex.jpg': { default: '/assets/clientLogo/Nobletex.jpg' },
  '../../assets/clientLogo/Otlo-Ventures.jpg': { default: '/assets/clientLogo/Otlo-Ventures.jpg' },
  '../../assets/clientLogo/PPSU.png': { default: '/assets/clientLogo/PPSU.png' },
  '../../assets/clientLogo/Sorus-Logo-Picsart-BackgroundRemover.png': { default: '/assets/clientLogo/Sorus-Logo-Picsart-BackgroundRemover.png' },
  '../../assets/clientLogo/Ted-x_logo.png': { default: '/assets/clientLogo/Ted-x_logo.png' },
  '../../assets/clientLogo/acutaas.png': { default: '/assets/clientLogo/acutaas.png' },
  '../../assets/clientLogo/amardeep.png': { default: '/assets/clientLogo/amardeep.png' },
  '../../assets/clientLogo/dolphy-logo.png': { default: '/assets/clientLogo/dolphy-logo.png' },
  '../../assets/clientLogo/easysell_logo.png': { default: '/assets/clientLogo/easysell_logo.png' },
  '../../assets/clientLogo/heartfulness.png': { default: '/assets/clientLogo/heartfulness.png' },
  '../../assets/clientLogo/infinity-logo.png': { default: '/assets/clientLogo/infinity-logo.png' },
  '../../assets/clientLogo/instu-aspirations.jpg': { default: '/assets/clientLogo/instu-aspirations.jpg' },
  '../../assets/clientLogo/north-gate.jpg': { default: '/assets/clientLogo/north-gate.jpg' },
  '../../assets/clientLogo/saas-bhoomi.png': { default: '/assets/clientLogo/saas-bhoomi.png' },
  '../../assets/clientLogo/soilsens.png': { default: '/assets/clientLogo/soilsens.png' },
  '../../assets/clientLogo/solex.png': { default: '/assets/clientLogo/solex.png' },
}

function pathToDisplayName(filePath) {
  const base = filePath.split(/[/\\]/).pop().replace(/\.[^.]+$/, '')
  return base
    .replace(/Picsart|Background|Remover/gi, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
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

// Each logo card width in px (including gap)
const ITEM_WIDTH = 160  // logo card width
const GAP = 24          // gap between cards
const ITEM_FULL = ITEM_WIDTH + GAP
// Speed: px per second — adjust to taste
const SPEED = 40

function ClientLogos() {
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate logos so the loop is seamless:
  // We render [original + duplicate] — the CSS animation scrolls
  // exactly one full "original" width, then resets invisibly.
  const doubled = [...clients, ...clients]
  const totalWidth = clients.length * ITEM_FULL
  const duration = totalWidth / SPEED // seconds for one full cycle

  return (
    <section className="pt-16 pb-10 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
        </motion.div>

        {/* Outer mask — hides the overflow and fades edges */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Inject the keyframe animation via a style tag */}
          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
          `}</style>

          {/* Scrolling track */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              width: 'max-content',
              animation: `marquee ${duration}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              padding: '10px 0 20px',
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={`${client.path}-${i}`}
                title={client.name}
                style={{ width: `${ITEM_WIDTH}px`, flexShrink: 0 }}
                className="group flex items-center justify-center h-20 px-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-white hover:shadow-lg transition-all cursor-default"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name + ' logo'}
                  className="max-h-10 max-w-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  loading="lazy"
                  suppressHydrationWarning
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { ClientLogos }