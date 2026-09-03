'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'
import { Mail, Phone, PhoneCall, MapPin, Send, MessageSquare, Map, ChevronDown, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { api, endpoints } from '@/lib/api'

const countries = [
  { code: '+91', flag: '🇮🇳', label: 'India', placeholder: '98765 43210', pattern: /^[6-9]\d{9}$/, error: 'Please enter a valid 10-digit mobile number' },
  { code: '+1', flag: '🇺🇸', label: 'USA', placeholder: '202 555 0111', pattern: /^\d{10}$/, error: 'Please enter a valid 10-digit number' },
  { code: '+44', flag: '🇬🇧', label: 'UK', placeholder: '7123 456789', pattern: /^7\d{9}$/, error: 'Please enter a valid UK mobile number starting with 7' },
  { code: '+61', flag: '🇦🇺', label: 'Australia', placeholder: '412 345 678', pattern: /^4\d{8}$/, error: 'Please enter a valid Australian mobile number' },
  { code: '+971', flag: '🇦🇪', label: 'UAE', placeholder: '50 123 4567', pattern: /^5\d{8}$/, error: 'Please enter a valid UAE mobile number' },
]

function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  })
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`
      }
    })
    return () => unsubscribe()
  }, [springValue, prefix, suffix])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}

const contactStats = [
  {
    numericValue: 24,
    suffix: ' hrs',
    displayText: '24 hrs',
    label: 'Guaranteed response time',
  },
  {
    numericValue: 400,
    suffix: '+',
    displayText: '400+',
    label: 'Clients who trusted us',
  },
  {
    numericValue: 16,
    suffix: ' yrs',
    displayText: '16 yrs',
    label: 'Building in Surat',
  },
  {
    isText: true,
    displayText: 'Free',
    label: 'Initial consultation - always',
  },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    approximateBudget: 'Prefer not to say / Not sure yet',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [phoneError, setPhoneError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return // Prevent multiple submissions

    if (formData.phone && !selectedCountry.pattern.test(formData.phone)) {
      setPhoneError(selectedCountry.error)
      return
    }

    console.log('Form submission started...') // Debug log
    setIsSubmitting(true)
    try {
      const fullPhone = `${selectedCountry.code} ${formData.phone}`
      const budgetVal = formData.approximateBudget || 'Prefer not to say / Not sure yet'

      // Send form data to API using contact-leads endpoint like React version
      console.log('Sending data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.service || 'General Inquiry',
        approximateBudget: budgetVal,
        message: `${formData.message}${formData.company ? `\nCompany: ${formData.company}` : ''}${formData.phone ? `\nPhone: ${fullPhone}` : ''}${budgetVal ? `\nApproximate Budget: ${budgetVal}` : ''}`,
      })

      const res = await api.post('/contact-leads', {
        name: formData.name,
        email: formData.email,
        subject: formData.service || 'General Inquiry',
        approximateBudget: budgetVal,
        message: `${formData.message}${formData.company ? `\nCompany: ${formData.company}` : ''}${formData.phone ? `\nPhone: ${fullPhone}` : ''}${budgetVal ? `\nApproximate Budget: ${budgetVal}` : ''}`,
      })

      console.log('API response:', res) // Debug log

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        approximateBudget: 'Prefer not to say / Not sure yet',
        message: '',
      })
      setPhoneError('')

      // Show success message
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '')
    setFormData((prev) => ({
      ...prev,
      phone: val,
    }))

    if (val === '') {
      setPhoneError('')
      return
    }

    if (!selectedCountry.pattern.test(val)) {
      setPhoneError(selectedCountry.error)
    } else {
      setPhoneError('')
    }
  }

  const handleCountryChange = (e) => {
    const selected = countries.find(c => c.code === e.target.value)
    if (selected) {
      setSelectedCountry(selected)
      if (formData.phone) {
        if (!selected.pattern.test(formData.phone)) {
          setPhoneError(selected.error)
        } else {
          setPhoneError('')
        }
      }
    }
  }

  // Test loading state
  const testLoading = () => {
    console.log('Current isSubmitting state:', isSubmitting)
    setIsSubmitting(!isSubmitting)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-[#f7f7f7] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6"
              >
                <MessageSquare className="text-[#f1592a]" size={18} />
                <span className="text-sm font-medium text-gray-700">We Respond Within 24 Hours</span>
              </motion.span>
              <AnimatedH1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Let's Just <br></br>{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Talk First.
                </span>
              </AnimatedH1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="text-md lg:text-lg text-gray-600 leading-relaxed font-medium"
              >
                No commitment, no pitch deck, no pressure. Just an honest conversation about what you're building and whether we're the right team to help. We'll respond within 24 hours.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Tell us about your project — we'll read every message and reply within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors text-base text-gray-800"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors text-base text-gray-800"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors text-base text-gray-800"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-0 pl-3 flex items-center pointer-events-auto z-10 border-r border-gray-200 pr-2">
                            <select
                              value={selectedCountry.code}
                              onChange={handleCountryChange}
                              className="bg-transparent text-base text-gray-800 focus:outline-none cursor-pointer pr-4 appearance-none outline-none"
                            >
                              {countries.map((c) => (
                                <option key={c.label} value={c.code} className="text-base">
                                  {c.flag} {c.code}
                                </option>
                              ))}
                            </select>
                            <ChevronDown size={10} className="text-gray-400 -ml-3 pointer-events-none" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className={`w-full pl-24 pr-4 py-3 rounded-lg border focus:outline-none transition-colors text-base text-gray-800 ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#f1592a]'}`}
                            placeholder={selectedCountry.placeholder}
                          />
                        </div>
                        {phoneError && (
                          <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                        )}
                      </div>
                    </div>
                    <div className=" relative">
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        What Can We Help With? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="appearance-none w-full px-4 py-3.5 pr-12 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors text-base text-gray-800"
                      >
                        <option value="" className="text-base">Select a service..</option>
                        <option value="Visitorz Management System" className="text-base">Visitorz Management System</option>
                        <option value="Younited Communities" className="text-base">Younited Communities</option>
                        <option value="Claim Genie" className="text-base">Claim Genie</option>
                        <option value="Product Development" className="text-base">Product Development</option>
                        <option value="MVP Development" className="text-base">MVP Development</option>
                        <option value="Custom ERP Solutions" className="text-base">Custom ERP Solutions</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-2/3 -translate-y-1/2 text-gray-500 pointer-events-none"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="approximateBudget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Approximate Budget
                      </label>
                      <select
                        id="approximateBudget"
                        name="approximateBudget"
                        value={formData.approximateBudget}
                        onChange={handleChange}
                        className="appearance-none w-full px-4 py-3.5 pr-12 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors text-gray-800 text-base"
                      >
                        <option value="Prefer not to say / Not sure yet" className="text-base">Prefer not to say / Not sure yet</option>
                        <option value="Under ₹5 Lakhs" className="text-base">Under ₹5 Lakhs</option>
                        <option value="₹5 – ₹15 Lakhs" className="text-base">₹5 – ₹15 Lakhs</option>
                        <option value="₹15 – ₹50 Lakhs" className="text-base">₹15 – ₹50 Lakhs</option>
                        <option value="₹50 Lakhs +" className="text-base">₹50 Lakhs +</option>
                        <option value="Open to discussion" className="text-base">Open to discussion</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-2/3 -translate-y-1/2 text-gray-500 pointer-events-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors resize-none text-base text-gray-800 placeholder:text-[12px] placeholder:text-gray-400"
                        placeholder="Describe your project, what you're trying to solve, your timeline, and any specific requirements you have. The more detail, the better we can help..."
                      />
                    </div>
                    <div className="flex justify-center">
                      <motion.button
                        type="submit"
                        whileHover={{
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        disabled={isSubmitting}
                        className="group  px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send <span className='hidden sm:inline'>Message</span></span>
                            <Send
                              className="group-hover:translate-x-1 transition-transform"
                              size={20}
                            />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="lg:col-span-1 space-y-4"
              >
                {/* Card 1: Our Offices */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-200/80"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#f1592a] w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-gray-900 text-lg font-bold">Our Offices</h3>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="block font-bold text-[#f1592a] uppercase tracking-wider text-[11px] mb-1">
                        HEAD OFFICE — INDIA
                      </span>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        301, Highfield Ascot, VIP Road, Vesu, Surat – 395007, Gujarat, India
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById('office-map')?.scrollIntoView({ behavior: 'smooth' })
                          }
                          className="ml-1.5 inline-flex items-center font-semibold text-[#f1592a] hover:underline"
                        >
                          <Map size={13} className="mr-0.5" /> Map
                        </button>
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                      <span className="font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                        BRANCH OFFICES
                      </span>
                      <span className="text-gray-700 font-semibold">London, UK • New York, USA</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Reach Us */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-200/80"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="text-[#f1592a] w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-gray-900 text-lg font-bold">Reach Us</h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-0.5">
                          SALES & PROJECTS
                        </span>
                        <a
                          href="https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-900 hover:text-[#f1592a] transition-colors text-sm"
                        >
                          +91 9374 356 357
                        </a>
                      </div>
                      <a
                        href="mailto:info@keyconcepts.co.in"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors font-medium text-xs"
                      >
                        info@keyconcepts.co.in
                      </a>
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                      <div>
                        <span className="block font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-0.5">
                          HR & CAREERS
                        </span>
                        <a
                          href="https://wa.me/919376356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20career%20opportunities"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-900 hover:text-[#f1592a] transition-colors text-sm"
                        >
                          +91 9376 356 357
                        </a>
                      </div>
                      <a
                        href="mailto:hr@keyconcepts.co.in"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors font-medium text-xs"
                      >
                        hr@keyconcepts.co.in
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Business Hours */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-200/80"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center shrink-0">
                      <Clock className="text-[#f1592a] w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-gray-900 text-lg font-bold">Business Hours</h3>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Monday – Saturday</span>
                      <span className="font-bold text-gray-900">9:00 AM – 6:30 PM IST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Sunday</span>
                      <span className="font-medium text-gray-400">Closed</span>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-3 flex items-center space-x-2 text-[11px] font-medium text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>We reply to all enquiries within 24 hours</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Looking for something specific? */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-[#f1592a]/10 via-[#f1592a]/5 to-white border border-[#f1592a]/20 rounded-3xl p-5 shadow-lg transition-all"
                >
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Looking for something specific?
                  </h3>
                  <div className="space-y-2.5">
                    <Link
                      href="/careers"
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white/90 hover:bg-white border border-gray-100 hover:border-[#f1592a]/40 shadow-sm hover:shadow transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-base">💼</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#f1592a] transition-colors">
                          Join our team
                        </span>
                      </div>
                      <ArrowRight size={15} className="text-gray-400 group-hover:text-[#f1592a] group-hover:translate-x-1 transition-all" />
                    </Link>

                    <Link
                      href="/custom-erp-solutions"
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white/90 hover:bg-white border border-gray-100 hover:border-[#f1592a]/40 shadow-sm hover:shadow transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-base">📊</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#f1592a] transition-colors">
                          See our work
                        </span>
                      </div>
                      <ArrowRight size={15} className="text-gray-400 group-hover:text-[#f1592a] group-hover:translate-x-1 transition-all" />
                    </Link>

                    <Link
                      href="/visitor-management"
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white/90 hover:bg-white border border-gray-100 hover:border-[#f1592a]/40 shadow-sm hover:shadow transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-base">🛒</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#f1592a] transition-colors">
                          Explore our products
                        </span>
                      </div>
                      <ArrowRight size={15} className="text-gray-400 group-hover:text-[#f1592a] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {contactStats.map((stat, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  key={stat.label}
                  className="flex flex-col items-center group cursor-default"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#f1592a] mb-2 leading-none group-hover:scale-105 transition-transform">
                    {stat.isText ? (
                      stat.displayText
                    ) : (
                      <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                    )}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium max-w-[200px] leading-snug">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="office-map" className="bg-white">
          <div className="max-w-full">
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
              className="overflow-hidden border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.343275721204!2d72.77929890319963!3d21.141237449811474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c3673c602d7%3A0xcefa2d39c2268022!2sKey%20Concepts!5e0!3m2!1sen!2sin!4v1772429902290!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Key Concepts Office Location"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default ContactPage
