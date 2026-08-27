'use client'

import { motion } from 'motion/react'
import { MessageSquare, ClipboardList, Palette, Code, Rocket, Handshake } from 'lucide-react'
import { useEnquiryModal } from '../context/enquiry-modal-context'

const processSteps = [
  {
    number: '01',
    title: 'We Listen',
    description:
      'No forms, no questionnaires to start. Just a real conversation about your business, your goals, and what\'s not working right now.',
    icon: MessageSquare,
    color: 'from-[#f1592a] to-[#ff7a45]',
  },
  {
    number: '02',
    title: 'We Plan Together',
    description:
      'We map out what to build, what to skip, and what it\'ll cost - honestly. No vague estimates or scope that magically grows later.',
    icon: ClipboardList,
    color: 'from-gray-600 to-gray-800',
  },
  {
    number: '03',
    title: 'We Design It Right',
    description:
      'Great software starts with great design. We make sure the experience is intuitive for your team and your customers before a single line of code is written.',
    icon: Palette,
    color: 'from-gray-700 to-gray-900',
  },
  {
    number: '04',
    title: 'We Build It Properly',
    description:
      'Our developers write clean, scalable code - not quick hacks that break in six months. You get progress updates, not silence.',
    icon: Code,
    color: 'from-gray-600 to-gray-800',
  },
  {
    number: '05',
    title: 'We Launch Carefully',
    description:
      'We test rigorously before going live. When we flip the switch, it works - because we\'ve made sure of it.',
    icon: Rocket,
    color: 'from-[#f1592a] to-[#d94d24]',
  },
  {
    number: '06',
    title: 'We Stay With You',
    description:
      'After launch is where most agencies disappear. We stay. Supporting, improving, and growing your product as your business evolves.',
    icon: Handshake,
    color: 'from-gray-700 to-gray-900',
  },
]

// Arrow between cards: vertical (down) for mobile/tablet, horizontal (right) for desktop
function ConnectorArrow({ index, total, isLastInRow }) {
  const isLast = index === total - 1

  return (
    <>
      {/* Mobile & Tablet: vertical down arrow between every card except last */}


      {/* Desktop: horizontal right arrow — only between cards in same row (not last in row, not last overall) */}
      {!isLast && !isLastInRow && (
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-0.5
                        bg-gradient-to-r from-[#f1592a] to-[#ff7a45] z-10">
          {/* rightward arrowhead */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
                          w-0 h-0
                          border-t-[5px] border-t-transparent
                          border-b-[5px] border-b-transparent
                          border-l-[8px] border-l-[#ff7a45]" />
        </div>
      )}
    </>
  )
}

function ProcessSection() {
  const { openModal } = useEnquiryModal()
  const COLS = 3 // desktop grid columns

  return (
    <section className=" py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
          >
            How We Work
          </motion.span>
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4">Simple Process. No Surprises.</h2>
          <p className="text-base sm:text-md lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            We keep things straightforward because we know you don't have time for complicated agency processes. Here's exactly what working with us looks like.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop top connector line */}

          {/*
            Mobile/Tablet: single column (flex column) so arrows flow naturally top→bottom.
            Desktop: 3-column grid, unchanged.
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
            {processSteps.map((step, index) => {
              const isLastInRow = (index + 1) % COLS === 0 // 3rd, 6th card in desktop grid

              return (
                <div key={step.number}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-full"
                  >
                    <div className="group h-full relative bg-white/60 backdrop-blur-lg rounded-2xl p-4 lg:p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300">

                      {/* Desktop: floating number bubble above card */}
                      <div className="hidden lg:flex absolute -top-[38px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-100 items-center justify-center z-10 group-hover:border-[#f1592a]/20 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{step.number}</span>
                        </div>
                      </div>

                      {/* Mobile/Tablet: inline number badge */}
                      <div className="lg:hidden mb-3 sm:mb-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white text-xs font-bold rounded-full">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                            <step.icon className="text-gray-700" size={20} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f1592a] rounded-full border-2 border-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-lg font-bold mb-1 sm:mb-2 group-hover:text-[#f1592a] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />

                      {/* Desktop horizontal arrow */}
                      <ConnectorArrow
                        index={index}
                        total={processSteps.length}
                        isLastInRow={isLastInRow}
                      />
                    </div>
                  </motion.div>

                  {/* Mobile/Tablet vertical arrow (rendered outside the card box) */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4 md:my-5">
                      <div className="relative flex flex-col items-center">
                        <div className="w-0.5 h-10 sm:h-14 bg-gradient-to-b from-[#f1592a] to-[#ff7a45]" />
                        {/* CSS triangle arrowhead pointing down */}
                        <div className="w-0 h-0
                                        border-l-[5px] border-l-transparent
                                        border-r-[5px] border-r-transparent
                                        border-t-[8px] border-t-[#ff7a45]" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </section>
  )
}

export { ProcessSection }