'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X, Mail, Phone, User, FileText, Briefcase, Upload, Clock, CheckCircle, Info, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { api, endpoints } from '@/lib/api'
import { ALL_COUNTRIES } from '@/data/countries'

const countries = ALL_COUNTRIES;

function CareerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null,
  })
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [phoneError, setPhoneError] = useState('')
  const [availableJobs, setAvailableJobs] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)

  useEffect(() => {
    let active = true
    if (isOpen) {
      api.get(endpoints.JOBS)
        .then((res) => {
          if (!active) return
          const list = res?.data || (Array.isArray(res) ? res : [])
          setAvailableJobs(list.filter((j) => j.status === 'active'))
        })
        .catch(() => { })
    }
    return () => {
      active = false
    }
  }, [isOpen])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionFeedback(null)

    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError('Please enter your mobile number')
      setIsSubmitting(false)
      return
    }

    if (!selectedCountry.pattern.test(formData.phone.trim())) {
      setPhoneError(selectedCountry.error)
      setIsSubmitting(false)
      return
    }

    try {
      const fullPhone = `${selectedCountry.code} ${formData.phone.trim()}`
      const submitData = new FormData()
      submitData.append('jobId', formData.position)
      submitData.append('fullName', formData.name.trim())
      submitData.append('email', formData.email.trim())
      submitData.append('phone', fullPhone)
      submitData.append('coverLetter', formData.coverLetter.trim() || `Experience: ${formData.experience}`)
      if (formData.resume) {
        submitData.append('resume', formData.resume)
      }

      const response = await api.post(endpoints.APPLICATIONS, submitData)

      if (response?.alreadyApplied) {
        setIsSubmitting(false)
        setSubmissionFeedback({
          type: 'in_progress',
          title: 'Application In Progress',
          message:
            response?.message ||
            'Thank you for reaching out again! We have received your application for this position and it is currently in progress with our recruitment team. We will reach out to you soon with updates.',
        })
        return
      }

      setSubmitSuccess(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null,
      })
      setSelectedCountry(countries[0])
      setPhoneError('')

      setTimeout(() => {
        onClose()
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      const isAlreadyApplied =
        error?.alreadyApplied ||
        error?.data?.alreadyApplied ||
        (error?.message && (
          error.message.includes('in progress') ||
          error.message.includes('already applied') ||
          error.message.includes('reaching out again')
        ))

      if (isAlreadyApplied) {
        setSubmissionFeedback({
          type: 'in_progress',
          title: 'Application In Progress',
          message:
            error?.message ||
            'Thank you for reaching out again! We have received your application for this position and it is currently in progress with our recruitment team. We will reach out to you soon with updates.',
        })
      } else {
        console.warn('Error submitting application:', error?.message || error)
        setSubmissionFeedback({
          type: 'error',
          title: 'Submission Notice',
          message: error?.message || 'Failed to submit application. Please try again.',
        })
      }
    }
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '')
    setFormData((prev) => ({
      ...prev,
      phone: val,
    }))

    if (!val) {
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
    const selected = countries.find((c) => c.code === e.target.value)
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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      resume: file,
    })
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {' '}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />{' '}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            {' '}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: 'spring',
                duration: 0.5,
              }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {' '}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                {' '}
                <X className="text-gray-600" size={18} />
              </button>{' '}
              <div className="bg-gradient-to-br from-[#f1592a] to-[#ff7a45] p-5 md:p-6 rounded-t-2xl">
                {' '}
                <motion.div
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
                >
                  {' '}
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                    Join Our Team
                  </h2>{' '}
                  <p className="text-white/90 text-xs md:text-sm">
                    Start your career journey with Key Concepts
                  </p>
                </motion.div>
              </div>{' '}
              <div className="p-5 md:p-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="text-center py-8"
                  >
                    {' '}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      {' '}
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {' '}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>{' '}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>{' '}
                    <p className="text-gray-600 text-sm">
                      Thank you for your interest. We'll review your application and get back to you
                      soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {' '}
                      <div>
                        {' '}
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Full Name *
                        </label>{' '}
                        <div className="relative">
                          {' '}
                          <User
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />{' '}
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>{' '}
                      <div>
                        {' '}
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Email Address *
                        </label>{' '}
                        <div className="relative">
                          {' '}
                          <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />{' '}
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {' '}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-0 pl-2.5 flex items-center pointer-events-auto z-10 border-r border-gray-200 pr-2">
                            <select
                              value={selectedCountry.code}
                              onChange={handleCountryChange}
                              className="bg-transparent text-xs text-gray-800 focus:outline-none cursor-pointer pr-3 appearance-none outline-none"
                            >
                              {countries.map((c) => (
                                <option key={c.label} value={c.code} className="text-xs">
                                  {c.flag} {c.code}
                                </option>
                              ))}
                            </select>
                            <ChevronDown size={10} className="text-gray-400 -ml-2 pointer-events-none" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder={selectedCountry.placeholder}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className={`w-full pl-22 pr-3 py-2.5 text-sm bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all ${phoneError ? 'border-red-500' : 'border-gray-200'
                              }`}
                          />
                        </div>
                        {phoneError && (
                          <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="position"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Position Applying For *
                        </label>
                        <div className="relative">
                          <Briefcase
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <select
                            id="position"
                            name="position"
                            required
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select a position</option>
                            {availableJobs.length > 0 ? (
                              availableJobs.map((j) => (
                                <option key={j._id} value={j._id}>
                                  {j.title} ({j.department})
                                </option>
                              ))
                            ) : (
                              <>
                                <option value="frontend-developer">Frontend Developer</option>
                                <option value="backend-developer">Backend Developer</option>
                                <option value="fullstack-developer">Full Stack Developer</option>
                                <option value="ui-ux-designer">UI/UX Designer</option>
                                <option value="project-manager">Project Manager</option>
                                <option value="business-analyst">Business Analyst</option>
                                <option value="odoo-developer">Odoo Developer</option>
                              </>
                            )}
                          </select>
                        </div>
                      </div>
                    </div>{' '}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {' '}
                      <div>
                        {' '}
                        <label
                          htmlFor="experience"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Years of Experience *
                        </label>{' '}
                        <div className="relative">
                          {' '}
                          <FileText
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />{' '}
                          <select
                            id="experience"
                            name="experience"
                            required
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none"
                          >
                            {' '}
                            <option value="">Select experience level</option>{' '}
                            <option value="0-1">0-1 years (Fresher)</option>{' '}
                            <option value="1-3">1-3 years</option>{' '}
                            <option value="3-5">3-5 years</option>{' '}
                            <option value="5-8">5-8 years</option>{' '}
                            <option value="8+">8+ years</option>
                          </select>
                        </div>
                      </div>{' '}
                      <div>
                        {' '}
                        <label
                          htmlFor="resume"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Upload Resume *
                        </label>{' '}
                        <div className="relative">
                          {' '}
                          <Upload
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                            size={18}
                          />{' '}
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            required
                            onChange={handleFileChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:bg-[#f1592a] file:text-white hover:file:bg-[#d94d24] file:cursor-pointer"
                            accept=".pdf,.doc,.docx"
                          />
                        </div>
                        {formData.resume && (
                          <p className="text-xs text-gray-500 mt-1">
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>{' '}
                    <div>
                      {' '}
                      <label
                        htmlFor="coverLetter"
                        className="block text-xs font-semibold text-gray-700 mb-1.5"
                      >
                        Why do you want to join us? *
                      </label>{' '}
                      <div className="relative">
                        {' '}
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />{' '}
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          required
                          value={formData.coverLetter}
                          onChange={handleChange}
                          rows={3}
                          className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about yourself and why you're interested..."
                        />
                      </div>
                    </div>{' '}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{
                        scale: isSubmitting ? 1 : 1.02,
                      }}
                      whileTap={{
                        scale: isSubmitting ? 1 : 0.98,
                      }}
                      className={`w-full py-3 text-sm bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          {' '}
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            {' '}
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />{' '}
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Application'
                      )}
                    </motion.button>{' '}
                    {/* Feedback Notice below form controls */}
                    {submissionFeedback && (
                      <div
                        role="status"
                        className={`mt-4 p-4 rounded-xl border transition-all duration-300 ${submissionFeedback.type === 'in_progress'
                          ? 'bg-amber-50/90 border-amber-200/90 text-amber-950 shadow-sm'
                          : submissionFeedback.type === 'success'
                            ? 'bg-emerald-50/90 border-emerald-200/90 text-emerald-950 shadow-sm'
                            : 'bg-rose-50/90 border-rose-200/90 text-rose-950 shadow-sm'
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${submissionFeedback.type === 'in_progress'
                              ? 'bg-amber-100 text-amber-700'
                              : submissionFeedback.type === 'success'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-rose-100 text-rose-700'
                              }`}
                          >
                            {submissionFeedback.type === 'in_progress' && <Clock className="w-4 h-4" />}
                            {submissionFeedback.type === 'success' && <CheckCircle className="w-4 h-4" />}
                            {submissionFeedback.type === 'error' && <Info className="w-4 h-4" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-xs font-semibold tracking-tight">
                                {submissionFeedback.title}
                              </h4>
                              {submissionFeedback.type === 'in_progress' && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-200/80 text-amber-900">
                                  Active Review
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs leading-relaxed opacity-90">
                              {submissionFeedback.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <p className="text-center text-xs text-gray-500 pt-1">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
export { CareerModal }
