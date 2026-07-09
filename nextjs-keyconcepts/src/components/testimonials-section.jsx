'use client'

import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
const testimonials = [
  {
    name: 'Paresh Chaudhari',
    role: 'CEO',
    content:
      'Great experience to working with Key Concepts team. Very co-operative staff.',
    rating: 5,
    company: 'Nobletex Industries Ltd.',
  },
  {
    name: 'Municipal School Board',
    role: 'Administrative Officer',
    content:
      'We would like to express our satisfaction and appriciation to key Concepts team for their excellent efforts towards sucessfully completeing the project. We also admire their aspiration for their prompt and flawless quality deliverables.',
    rating: 5,
    company: 'Municipal School Board',
  },
  {
    name: 'Jitendra Desai',
    role: 'President and Chief Innovist',
    content:
      'Young, smart and.High energy team doing great work. Excellent attitude and intentions, keep advancing with confidence!',
    rating: 5,
    company: 'Innovaam inc',
  },
  {
    name: 'Pooja Parekh',
    role: 'Media Manager',
    content:
      'We are utilising the services of Key concepts from long time in every posible way in our organisation. We as a construction business, now totally moving towards technology in every aspect. Key Concepts is providing great support for our all IT implementations (ERP solution, web catalog or any other IT solutions). The response to problems is always very fast, resolved quickly. Great service all round, I would not hesitate to recommend Key Concepts to all my network line business!',
    rating: 5,
    company: 'Green Group Developers',
  },
]
function TestimonialsSection() {
  const doubledTestimonials = [...testimonials, ...testimonials]
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-10"
        >
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-cyan-500/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their transformation journey with us
          </p>
        </motion.div>

        {/* Scrolling testimonials track */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <style>{`
            @keyframes testimonials-marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-${testimonials.length * 420}px); }
            }
          `}</style>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
              animation: `testimonials-marquee 35s linear infinite`,
              padding: '10px 0 20px',
            }}
            className="hover:[animation-play-state:paused]"
          >
            {doubledTestimonials.map((testimonial, i) => (
              <div
                key={i}
                style={{ width: '400px', flexShrink: 0 }}
                className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-[#f1592a]/10 group-hover:text-[#f1592a]/20 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star size={16} className="fill-[#f1592a] text-[#f1592a]" key={idx} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export { TestimonialsSection }
