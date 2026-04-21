'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  CheckCircle,
  FileText,
  Share2,
  Bookmark,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { useState, useEffect } from 'react'

import { api, endpoints } from '@/lib/api'

function JobDetailPage({ params }) {
  const resolvedParams = use(params)
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  })

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await api.get(endpoints.JOB_BY_ID(resolvedParams.id))
        setJob({
          id: data._id || data.id,
          title: data.title,
          department: data.department,
          location: data.location,
          type: data.employmentType || data.type,
          salary: data.salary || "Competitive",
          experience: data.experience || "Not specified",
          skills: data.requirements || data.skills || [],
          description: data.description,
          responsibilities: data.responsibilities?.length ? data.responsibilities : [],
          requirements: data.requirements?.length ? data.requirements : [],
          niceToHave: data.niceToHave?.length ? data.niceToHave : [],
          benefits: data.benefits?.length ? data.benefits : ["Competitive benefits package"],
        })
      } catch (error) {
        console.error('Error fetching job:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [resolvedParams.id])

  const submitApplication = async (e) => {
    e.preventDefault()
    if (isSubmitting) return // Prevent multiple submissions
    
    setIsSubmitting(true)
    try {
      const target = e.currentTarget
      const formData = new FormData(target)
      formData.append("jobId", String(job?.id))
      await api.post(endpoints.APPLICATIONS, formData)
      setIsModalOpen(false)
      setApplicationForm({ fullName: '', email: '', phone: '', linkedin: '', coverLetter: '' })
      // Show success message or redirect
      alert('Application submitted successfully!')
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <LayoutWrapper>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers">
            <motion.button
              whileHover={{
                x: -5,
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors mb-8"
            >
              <ArrowLeft size={20} /> <span className="font-medium">Back to Careers</span>
            </motion.button>
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-start space-x-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                    {job?.title || 'Job Title'}
                  </h1>
                  <div className="flex flex-wrap gap-3 text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Briefcase size={16} strokeWidth={2} /> <span>{job?.department || 'Department'}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={16} strokeWidth={2} /> <span>{job?.location || 'Location'}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock size={16} strokeWidth={2} /> <span>{job?.type || 'Employment Type'}</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{job?.description || 'Job description not available.'}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl">
                  <DollarSign className="text-[#f1592a]" size={18} strokeWidth={2} />
                  <span className="text-sm font-semibold text-gray-700">{job?.salary || 'Competitive'}</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl">
                  <Users className="text-[#f1592a]" size={18} strokeWidth={2} />
                  <span className="text-sm font-semibold text-gray-700">{job?.experience || 'Not specified'}</span>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-32 space-y-4">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold"
              >
                <FileText size={20} strokeWidth={2} /> <span>Apply for this Position</span>
              </motion.button>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#f1592a] transition-all"
                >
                  <Share2 size={18} strokeWidth={2} />
                  <span className="text-sm font-semibold">Share</span>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#f1592a] transition-all"
                >
                  <Bookmark size={18} strokeWidth={2} />
                  <span className="text-sm font-semibold">Save</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-3xl shadow-lg p-8 md:p-12 bg-white">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job?.skills?.map((skill) => (
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-[#ff7a45]/10 text-[#f1592a] rounded-full text-sm font-semibold border border-[#f1592a]/20"
                    key={skill}
                  >
                    {skill}
                  </span>
                )) || <span className="text-gray-500">No skills listed</span>}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsibilities</h2>
              <div className="space-y-3">
                {job?.responsibilities?.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-1"
                      size={20}
                      strokeWidth={2}
                    />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                )) || <span className="text-gray-500">No responsibilities listed</span>}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <div className="space-y-3">
                {job?.requirements?.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-1"
                      size={20}
                      strokeWidth={2}
                    />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                )) || <span className="text-gray-500">No requirements listed</span>}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nice to Have</h2>
              <div className="space-y-3">
                {job?.niceToHave?.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    <div className="w-2 h-2 bg-[#f1592a] rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                )) || <span className="text-gray-500">No additional qualifications listed</span>}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {job?.benefits?.map((benefit, index) => (
                  <div
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
                    key={index}
                  >
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-0.5"
                      size={18}
                      strokeWidth={2}
                    />
                    <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                  </div>
                )) || <span className="text-gray-500">No benefits listed</span>}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our team and help us build the future of digital transformation. We're excited
                to learn more about you!
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
              >
                Apply for {job?.title || 'this position'}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Apply for {job?.title || 'this position'}</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  <motion.div
                    whileHover={{
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FileText size={24} />
                  </motion.div>
                </button>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <form className="space-y-6" onSubmit={submitApplication}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="John Doe"
                      value={applicationForm.fullName}
                      onChange={(e) => setApplicationForm({...applicationForm, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                    placeholder="Tell us why you're interested in this position..."
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
    </LayoutWrapper>
  )
}

export default JobDetailPage;
