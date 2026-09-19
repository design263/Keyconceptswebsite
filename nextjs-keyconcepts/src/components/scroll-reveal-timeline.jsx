'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react'

export function ScrollRevealTimeline({ steps }) {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 60%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto relative pl-6 space-y-12">
      {/* Static track line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

      {/* Animated scroll-driven fill line */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f1592a] via-[#ff7a45] to-[#f1592a] origin-top rounded-full shadow-[0_0_8px_rgba(241,89,42,0.4)]"
          style={{ scaleY }}
        />
      )}

      {steps.map((step, idx) => (
        <TimelineStep key={idx} step={step} idx={idx} shouldReduceMotion={shouldReduceMotion} />
      ))}
    </div>
  )
}

function TimelineStep({ step, idx, shouldReduceMotion }) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : Math.min(idx * 0.06, 0.3),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative group"
    >
      {/* Marker / dot */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.35,
          delay: shouldReduceMotion ? 0 : Math.min(idx * 0.06 + 0.1, 0.35),
        }}
        className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-white bg-gray-300 group-hover:bg-[#f1592a] group-hover:scale-125 transition-all duration-300 shadow-sm"
      />

      <div className="bg-white border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-lg transition-all rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs md:text-sm font-bold text-[#f1592a]">{step.time}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{step.title}</h3>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
