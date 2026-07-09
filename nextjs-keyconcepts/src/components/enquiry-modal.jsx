'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight, Check, Calendar, Building2, User, Phone, MessageSquare, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

const clientLogos = [
  { name: 'Rajhans', src: '/assets/clientLogo/rajhans-logos.png' },
  { name: 'Genius', src: '/assets/clientLogo/Genius-Logo.png' },
  { name: 'Jivraj', src: '/assets/clientLogo/Jivraj.jpg' },
  { name: 'Nobletex', src: '/assets/clientLogo/Nobletex.jpg' },
  { name: 'PPSU', src: '/assets/clientLogo/PPSU.png' },
  { name: 'Dolphy', src: '/assets/clientLogo/dolphy-logo.png' },
  { name: 'Easysell', src: '/assets/clientLogo/easysell_logo.png' },
  { name: 'Heartfulness', src: '/assets/clientLogo/heartfulness.png' },
  { name: 'Solex', src: '/assets/clientLogo/solex.png' },
]

function EnquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    service: '',
  })

  const [countryCode, setCountryCode] = useState('+91')

  // Reset modal state on close or open
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setSelectedDate(null)
      setCurrentDate(new Date())
      setFormData({
        name: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      setErrors({
        name: '',
        phone: '',
        service: '',
      })
      setCountryCode('+91')
    }
  }, [isOpen])

  // Calendar logic
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const handlePrevMonth = () => {
    const now = new Date()
    if (year > now.getFullYear() || (year === now.getFullYear() && month > now.getMonth())) {
      setCurrentDate(new Date(year, month - 1, 1))
    }
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isFutureDate = (day) => {
    const dateToCheck = new Date(year, month, day)
    return dateToCheck > today
  }

  const handleDateSelect = (day) => {
    if (isFutureDate(day)) {
      setSelectedDate(new Date(year, month, day))
    }
  }

  // Form Validation
  const validateField = (name, value) => {
    let errorMsg = ''
    if (name === 'name') {
      if (!value) {
        errorMsg = 'Full Name is required'
      } else if (value.trim().length < 3) {
        errorMsg = 'Name must be at least 3 characters'
      }
    } else if (name === 'phone') {
      if (!value) {
        errorMsg = 'Contact Number is required'
      } else if (!/^\d+$/.test(value)) {
        errorMsg = 'Phone number must contain digits only'
      } else if (value.length < 10 || value.length > 15) {
        errorMsg = 'Phone number must be between 10 and 15 digits'
      }
    } else if (name === 'service') {
      if (!value) {
        errorMsg = 'Required Service is required'
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleServiceChange = (e) => {
    const { value } = e.target
    setFormData((prev) => ({ ...prev, service: value }))
    validateField('service', value)
  }

  const isFormValid =
    formData.name.trim().length >= 3 &&
    /^\d+$/.test(formData.phone) &&
    formData.phone.length >= 10 &&
    formData.phone.length <= 15 &&
    formData.service !== '' &&
    !errors.name &&
    !errors.phone &&
    !errors.service

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      setStep(3)
    }
  }

  // Generate blank prefix boxes and days
  const blankDays = Array(firstDayOfMonth).fill(null)
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const allDays = [...blankDays, ...monthDays]

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : ''

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white md:text-gray-500 md:bg-gray-100 md:hover:bg-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Left Column (35%) - Orange Gradient Theme */}
              <div className="w-full md:w-[35%] bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a] p-6 md:p-8 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30 mb-6">
                    <Calendar size={13} />
                    <span>Discovery Session</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    Book a Discovery Call
                  </h2>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    Schedule a 15-minute consultation with our product managers to map your development strategy.
                  </p>

                  {/* Trust Badges */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2 text-sm text-white/95">
                      <Check size={16} className="text-white" />
                      <span>Trusted by 400+ Clients</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/95">
                      <Check size={16} className="text-white" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/95">
                      <Check size={16} className="text-white" />
                      <span>No Obligation</span>
                    </div>
                  </div>
                </div>

                {/* Client Logos Grid - 3-in-a-row colored logos */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-3">
                    Supported Brands
                  </p>
                  <div className="grid grid-cols-3 gap-3 bg-white/10 p-3 rounded-2xl border border-white/20">
                    {clientLogos.map((logo) => (
                      <div
                        key={logo.name}
                        className="aspect-square flex items-center justify-center p-1 bg-white rounded-xl hover:bg-gray-50 transition-all shadow-sm"
                        title={logo.name}
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="max-h-7 max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (65%) */}
              <div className="w-full md:w-[65%] p-6 md:p-8 bg-white flex flex-col justify-center min-h-[500px]">
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-bold text-gray-900">Select Date</h3>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={handlePrevMonth}
                          className="p-2 text-gray-600 hover:text-[#f1592a] hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm font-semibold text-gray-800 w-32 text-center">
                          {monthNames[month]} {year}
                        </span>
                        <button
                          onClick={handleNextMonth}
                          className="p-2 text-gray-600 hover:text-[#f1592a] hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Calendar grid */}
                    <div>
                      {/* Weekday headers */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                          <div key={d} className="text-xs font-bold text-gray-400 py-1">
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Day cells */}
                      <div className="grid grid-cols-7 gap-1.5 text-center">
                        {allDays.map((day, idx) => {
                          if (day === null) {
                            return <div key={`empty-${idx}`} />
                          }

                          const isSelectable = isFutureDate(day)
                          const isSelected =
                            selectedDate &&
                            selectedDate.getDate() === day &&
                            selectedDate.getMonth() === month &&
                            selectedDate.getFullYear() === year

                          return (
                            <button
                              key={`day-${day}`}
                              disabled={!isSelectable}
                              onClick={() => handleDateSelect(day)}
                              className={`aspect-square rounded-full text-sm font-semibold flex items-center justify-center transition-all ${isSelected
                                ? 'bg-[#f1592a] text-white shadow-lg shadow-[#f1592a]/30'
                                : isSelectable
                                  ? 'text-gray-800 hover:bg-[#f1592a]/10 hover:text-[#f1592a]'
                                  : 'text-gray-300 cursor-not-allowed'
                                }`}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {selectedDate
                          ? `Selected: ${formattedSelectedDate}`
                          : 'Please select a future date'}
                      </span>
                      <button
                        onClick={() => setStep(2)}
                        disabled={!selectedDate}
                        className="px-6 py-2.5 bg-[#f1592a] text-white rounded-full font-semibold text-sm hover:bg-[#d94d24] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-[#f1592a]/20"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-gray-100 pb-3 mb-2 flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-gray-500 hover:text-[#f1592a] font-semibold"
                      >
                        ← Back to Calendar
                      </button>
                      <span className="text-xs text-gray-300">|</span>
                      <span className="text-xs text-[#f1592a] font-bold">
                        {formattedSelectedDate}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">Provide Contact Details</h3>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`block w-full pl-9 pr-3 py-2 text-sm border rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] transition-all outline-none ${errors.name ? 'border-red-500' : 'border-gray-200'
                            }`}
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Contact Number with Flag Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Contact Number *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-2.5 py-2 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] outline-none bg-white font-medium cursor-pointer shrink-0"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+1">🇨🇦 +1</option>
                        </select>
                        <div className="relative flex-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <Phone size={16} />
                          </div>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`block w-full pl-9 pr-3 py-2 text-sm border rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] transition-all outline-none ${errors.phone ? 'border-red-500' : 'border-gray-200'
                              }`}
                            placeholder="e.g. 9876543210"
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company Name (optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Building2 size={16} />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] transition-all outline-none"
                          placeholder="e.g. Acme Corporation"
                        />
                      </div>
                    </div>

                    {/* Required Service Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Required Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleServiceChange}
                        className={`block w-full px-3 py-2 text-sm border rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] transition-all outline-none bg-white ${errors.service ? 'border-red-500' : 'border-gray-200'
                          }`}
                      >
                        <option value="">-- Select Service --</option>
                        <option value="Product Development">Product Development</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="Odoo ERP Development">Odoo ERP Development</option>
                        <option value="Support & Maintenance">Support & Maintenance</option>
                        <option value="Other">Other Solutions</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Message (optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={2}
                        className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] transition-all outline-none resize-none"
                        placeholder="Briefly describe your project requirements..."
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className="px-6 py-2.5 bg-[#f1592a] text-white rounded-full font-semibold text-sm hover:bg-[#d94d24] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-[#f1592a]/20"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-6 space-y-6">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
                      <Check size={32} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        ✅ Booking Request Submitted Successfully!
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Our team will contact you soon.
                      </p>
                    </div>

                    <div className="max-w-md mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Meeting Date
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {formattedSelectedDate}
                      </p>
                      {formData.phone && (
                        <>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 mt-3">
                            Contact Info
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {countryCode} {formData.phone}
                          </p>
                        </>
                      )}
                    </div>

                    <button
                      onClick={onClose}
                      className="px-8 py-3 bg-gray-900 text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg flex items-center justify-center"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </ AnimatePresence>
  )
}

export { EnquiryModal }
