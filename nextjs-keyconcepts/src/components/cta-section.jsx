'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
function CTASection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {' '}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]">
        {' '}
        <div className="absolute inset-0 opacity-20">
          {' '}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />{' '}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      </div>{' '}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {' '}
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
          className="max-w-4xl mx-auto text-center"
        >
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8"
          >
            {' '}
            <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />{' '}
            <span className="text-sm md:text-md text-white font-medium">Ready to Transform?</span>
          </motion.div>{' '}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Digital Future Together
          </h2>{' '}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Join hundreds of businesses that have transformed their operations with our cutting-edge
            solutions. Book a discovery call today.
          </p>{' '}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold"
              >
                <span >View All Services</span>
              </motion.button>
            </Link>
          </div>{' '}
          <motion.div
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
            transition={{
              delay: 0.3,
            }}
            className="mt-6 md:mt-10 flex flex-wrap justify-center  gap-4 md:gap-8 text-white/80"
          >
            {' '}
            
            <div className="flex items-center space-x-2">
              {' '}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {' '}
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              <span className="text-sm">Free Initial Consultation</span>
            </div>{' '}
            <div className="flex items-center space-x-2">
              {' '}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {' '}
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              <span className="text-sm">24/7 Support Available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export { CTASection }
