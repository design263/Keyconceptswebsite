'use client'

import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Award, Users, Clock, Globe, CheckCircle } from 'lucide-react'
const stats = [

  {
    icon: Award,
    value: 16,
    suffix: '+',
    label: ' Years of Excellence',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Users,
    value: 25,
    suffix: '+',
    label: 'Expert Members',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Clock,
    value: 1,
    suffix: 'Mn+',
    label: ' Hours Delivered',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: Globe,
    value: 400,
    suffix: '+',
    label: 'Clients Worldwide',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    icon: CheckCircle,
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
]
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
    return () => unsubscribe()
  }, [springValue])
  return (
    <span className="inline-flex items-baseline">
      {' '}
      <span ref={ref} className="tabular-nums">
        {value}
      </span>{' '}
      <span className="ml-1">{suffix}</span>
    </span>
  )
}
function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {' '}
      <div className="absolute inset-0 opacity-30">
        {' '}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f1592a]/10 rounded-full blur-3xl" />{' '}
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />
      </div>{' '}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {' '}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          {' '}
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
          >
            Our Impact
          </motion.span>{' '}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Delivering Excellence Globally</h2>{' '}
          <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by enterprises and startups worldwide for innovative software solutions
          </p>
        </motion.div>{' '}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: stat.value === 1 ? 0 : index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
              key={stat.label}
            >
              {' '}
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-4 lg:p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">
                {' '}
                <div className="flex items-start gap-6">
                  {' '}
                  <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {' '}
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                      <stat.icon
                        className="text-gray-700 w-5 h-5"
                        strokeWidth={1.5}
                      />
                    </div>{' '}
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                  </div>{' '}
                  <div className="flex-1 min-w-0">
                    {' '}
                    <div className="mb-2">
                      {' '}
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {' '}
                        {stat.value === 1 ? (
                          <span className="inline-flex items-baseline">
                            <span className="tabular-nums">{stat.value}</span>
                            <span className="ml-1">{stat.suffix}</span>
                          </span>
                        ) : (
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        )}
                      </div>
                    </div>{' '}
                    <p className="text-gray-600 font-medium leading-relaxed">{stat.label}</p>
                  </div>
                </div>{' '}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { StatsSection }
