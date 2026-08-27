'use client'

import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
const testimonials = [
  {
    name: 'Paresh Chaudhari',
    role: 'CEO - Nobletex Industries Ltd.',
    content:
      'Working with Key Concepts was genuinely refreshing. Their team is cooperative, communicative, and actually understands what you\'re trying to achieve - not just what you\'ve asked for. They delivered beyond our expectations.',
    rating: 5,
    company: 'Nobletex Industries Ltd.',
    image: '/images/nobletex.jpg',
  },
  {
    name: 'Municipal School Board',
    role: 'Administrative Officer',
    content:
      'We would like to express our sincere appreciation to the Key Concepts team for their excellent efforts in successfully completing our project. We particularly admire their commitment to prompt, flawless quality deliverables.',
    rating: 5,
    company: 'Municipal School Board',
    image: '/images/Municipal-School-Board.jpg',
  },
  {
    name: 'Jitendra Desai',
    role: 'President and Chief Innovist',
    content:
      'Young, smart, high-energy team doing genuinely great work. Their attitude and intentions are excellent — keep advancing with confidence! It\'s rare to find a team this driven and genuinely passionate about what they build.',
    rating: 5,
    company: 'Innovaam inc',
  },
  {
    name: 'Pooja Parekh',
    role: 'Media Manager - Intstu Aspirations',
    content:
      'We\'ve used Key Concepts for everything - ERP, web catalogue, and all our IT needs. As a construction business moving entirely to technology, they\'ve been an invaluable partner. Problems are resolved fast. Service is outstanding. I\'d recommend them to everyone in my network without hesitation.',
    rating: 5,
    company: 'Green Group Developers',
    image: '/images/Intstu-aspirations.jpg',
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
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-xs md:text-sm font-semibold text-[#f1592a] mb-4"
          >
            Client Reviews
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Don't Just Take Our <span className="text-[#f1592a]">Word For It</span>
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
            Real words from real clients. We haven't changed a thing — except the typos.
          </p>
        </motion.div>

        {/* Scrolling testimonials track */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
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
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
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
