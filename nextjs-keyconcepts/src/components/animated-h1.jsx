'use client'

import { motion } from 'motion/react'

/** Semantic h1 with motion on a wrapper — identical visuals, crawler-friendly. */
export function AnimatedH1({ className, children, ...motionProps }) {
  return (
    <motion.div {...motionProps}>
      <h1 className={className}>{children}</h1>
    </motion.div>
  )
}
