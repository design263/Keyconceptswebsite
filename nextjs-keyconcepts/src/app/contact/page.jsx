'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { AnimatedH1 } from '@/components/animated-h1'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, MessageSquare, Map, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { api, endpoints } from '@/lib/api'

const countries = [
  { code: '+91', flag: '🇮🇳', label: 'India', placeholder: '98765 43210', pattern: /^[6-9]\d{9}$/, error: 'Please enter a valid 10-digit mobile number' },
  { code: '+1', flag: '🇺🇸', label: 'USA', placeholder: '202 555 0111', pattern: /^\d{10}$/, error: 'Please enter a valid 10-digit number' },
  { code: '+44', flag: '🇬🇧', label: 'UK', placeholder: '7123 456789', pattern: /^7\d{9}$/, error: 'Please enter a valid UK mobile number starting with 7' },
  { code: '+61', flag: '🇦🇺', label: 'Australia', placeholder: '412 345 678', pattern: /^4\d{8}$/, error: 'Please enter a valid Australian mobile number' },
  { code: '+971', flag: '🇦🇪', label: 'UAE', placeholder: '50 123 4567', pattern: /^5\d{8}$/, error: 'Please enter a valid UAE mobile number' },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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
      // Send form data to API using contact-leads endpoint like React version
      console.log('Sending data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.service || 'General Inquiry',
        message: `${formData.message}${formData.company ? `\nCompany: ${formData.company}` : ''}${formData.phone ? `\nPhone: ${fullPhone}` : ''}`,
      })

      const res = await api.post('/contact-leads', {
        name: formData.name,
        email: formData.email,
        subject: formData.service || 'General Inquiry',
        message: `${formData.message}${formData.company ? `\nCompany: ${formData.company}` : ''}${formData.phone ? `\nPhone: ${fullPhone}` : ''}`,
      })

      console.log('API response:', res) // Debug log

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
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
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <span className="text-sm font-medium text-gray-700">Get in Touch</span>
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
                Let's Start{' '}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Building Together
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
                className="text-xl text-gray-600  leading-relaxed max-w-3xl mx-auto"
              >
                We're here to help transform your business with cutting-edge ERP solutions, custom
                development, and intelligent technology services.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
                  <h2 className="text-3xl font-bold mb-2">Send us a Request</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you shortly.
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
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
                              className="bg-transparent text-sm text-gray-800 focus:outline-none cursor-pointer pr-4 appearance-none outline-none"
                            >
                              {countries.map((c) => (
                                <option key={c.label} value={c.code}>
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
                            className={`w-full pl-24 pr-4 py-3 rounded-lg border focus:outline-none transition-colors ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#f1592a]'}`}
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
                        Product/Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="appearance-none w-full px-4 py-3.5 pr-12 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                      >
                        <option value="">Select</option>
                        <option value="Visitorz Management System">Visitorz Management System</option>
                        <option value="Younited Communities">Younited Communities</option>
                        <option value="Claim Genie">Claim Genie</option>
                        <option value="Product Development">Product Development</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="Custom ERP Solutions">Custom ERP Solutions</option>
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
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
                            <span>Submit <span className='hidden sm:inline'>Your Request</span></span>
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
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                    Have questions? We're here to help. Reach out to us through any of these
                    channels.
                  </p>
                </div>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="text-white" size={24} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>

                      <div className="flex items-start justify-between gap-3">
                        <p className="text-gray-600 leading-relaxed">
                          301, Highfield Ascot, Opp. Palm Avenue, VIP Road, <br />
                          Vesu, Surat - 395007. Gujarat, India
                          <button
                            onClick={() =>
                              document
                                .getElementById('office-map')
                                ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="relative top-[3px] ml-1 rounded-lg text-[#f1592a]  hover:scale-110 transition-all"
                            title="View on Map"
                          >
                            <Map size={17} className="text-[#f1592a] " />
                          </button>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="text-white" size={24} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reach Us</h3>
                      <div>
                        <a
                          href="https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#f1592a] transition-colors"
                        >
                          +91 9374 356 357
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:info@keyconcepts.co.in"
                          className="text-gray-600 hover:text-[#f1592a] transition-colors"
                        >
                          info@keyconcepts.co.in
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="text-white" size={24} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">For Career Enquire</h3>
                      <div>
                        <a
                          href="https://wa.me/919376356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20career%20opportunities"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#f1592a] transition-colors"
                        >
                          +91 9376 356 357
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:hr@keyconcepts.co.in"
                          className="text-gray-600 hover:text-[#f1592a] transition-colors"
                        >
                          hr@keyconcepts.co.in
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="office-map" className="pt-12 bg-white">
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
