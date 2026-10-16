'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '../../use-admin-auth'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  MapPin,
  User,
  Mail,
  Phone,
  Briefcase,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  RotateCcw,
  ExternalLink,
  FileText,
  Check,
  Download,
  Loader2,
  Bell,
  CalendarCheck,
  CalendarX,
  X,
  Send,
  UserCheck,
  Building,
  History,
  Lock,
  Ban,
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminCustomSelect, inputCls } from '../../components/AdminCustomSelect'

const STATUS_BADGES = {
  Applied: {
    bg: 'bg-blue-50 text-blue-700 border-blue-200/80',
    dot: 'bg-blue-500',
  },
  Shortlisted: {
    bg: 'bg-purple-50 text-purple-700 border-purple-200/80',
    dot: 'bg-purple-500',
  },
  Interviewing: {
    bg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    dot: 'bg-amber-500',
  },
  Selected: {
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dot: 'bg-emerald-500',
  },
  Rejected: {
    bg: 'bg-rose-50 text-rose-700 border-rose-200/80',
    dot: 'bg-rose-500',
  },
}

const ROUND_STATUS_BADGES = {
  Scheduled: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Rescheduled: 'bg-amber-50 text-amber-700 border-amber-200/80',
  'Not Completed': 'bg-rose-50 text-rose-700 border-rose-200/80',
  Cancelled: 'bg-gray-100 text-gray-600 border-gray-200',
}

const REMINDER_OPTIONS = [
  { value: '15 mins before', label: '15 minutes before' },
  { value: '30 mins before', label: '30 minutes before' },
  { value: '1 hour before', label: '1 hour before (Default)' },
  { value: '2 hours before', label: '2 hours before' },
  { value: '1 day before', label: '1 day before' },
  { value: 'none', label: 'No reminder' },
]

// Get today's date formatted as YYYY-MM-DD
const getTodayDateString = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Generate default future time (next whole hour, e.g. if now is 3:15 PM -> 04:00 PM)
const getDefaultFutureTime = () => {
  const d = new Date()
  d.setHours(d.getHours() + 1)
  let h = d.getHours()
  const ampm = h >= 12 ? 'PM' : 'AM'
  const displayH = h % 12 || 12
  return `${String(displayH).padStart(2, '0')}:00 ${ampm}`
}

// Parse any time string into { hour, minute, ampm }
const parseTimeParts = (val) => {
  if (!val) return { hour: '11', minute: '00', ampm: 'AM' }
  const trimmed = String(val).trim()
  const match = trimmed.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i)
  if (match) {
    let [_, hStr, mStr, ampmStr] = match
    let h = parseInt(hStr, 10)
    let ampm = (ampmStr || '').toUpperCase()
    if (!ampm) {
      ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
    }
    return {
      hour: String(h).padStart(2, '0'),
      minute: mStr.padStart(2, '0'),
      ampm: ampm || 'AM',
    }
  }
  return { hour: '11', minute: '00', ampm: 'AM' }
}

// Convert time string to 24-hour "HH:mm" for native <input type="time">
const to24hTime = (val) => {
  if (!val) return '11:00'
  const parts = parseTimeParts(val)
  let h = parseInt(parts.hour, 10)
  if (parts.ampm === 'PM' && h < 12) h += 12
  if (parts.ampm === 'AM' && h === 12) h = 0
  return `${String(h).padStart(2, '0')}:${parts.minute}`
}

// Convert "HH:mm" (from native <input type="time">) to 12-hour "hh:mm AM/PM"
const to12hTime = (val) => {
  if (!val) return '11:00 AM'
  const [hStr, mStr] = String(val).split(':')
  let h = parseInt(hStr, 10)
  if (isNaN(h)) return '11:00 AM'
  const ampm = h >= 12 ? 'PM' : 'AM'
  const displayH = h % 12 || 12
  return `${String(displayH).padStart(2, '0')}:${(mStr || '00').padStart(2, '0')} ${ampm}`
}

// Check if given date and time are in the past
const isPastDateTime = (dateStr, timeStr) => {
  if (!dateStr || !timeStr) return false
  const parts = parseTimeParts(timeStr)
  const [year, month, day] = String(dateStr).split('-').map(Number)
  if (!year || !month || !day) return false

  let h = parseInt(parts.hour, 10)
  const m = parseInt(parts.minute, 10)
  if (parts.ampm === 'PM' && h < 12) h += 12
  if (parts.ampm === 'AM' && h === 12) h = 0

  const target = new Date(year, month - 1, day, h, m, 0, 0)
  return target.getTime() < Date.now()
}

const initialRoundForm = {
  roundName: '',
  interviewerId: '',
  interviewDate: getTodayDateString(),
  interviewTime: '11:00 AM',
  duration: '45 mins',
  location: '',
  interviewerReminder: '15 mins before',
  notes: '',
  rescheduleReason: '',
}

export default function CandidateDetailPage({ params }) {
  const unwrappedParams = use(params)
  const candidateId = unwrappedParams.id
  const token = useAdminAuth()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [candidate, setCandidate] = useState(null)
  const [interviewers, setInterviewers] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)

  // Status updating action loading
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)

  // Candidate Selection / Rejection Confirmation Modal
  const [statusConfirmModal, setStatusConfirmModal] = useState(null) // { type: 'select' | 'reject', sendEmail: boolean } | null

  // Schedule / Reschedule Modal state
  const [modalMode, setModalMode] = useState(null) // 'schedule' | 'reschedule'
  const [activeRound, setActiveRound] = useState(null)
  const [roundForm, setRoundForm] = useState(initialRoundForm)
  const [isSubmittingRound, setIsSubmittingRound] = useState(false)

  // Quick Round Status Update Modal
  const [statusUpdateRound, setStatusUpdateRound] = useState(null)
  const [selectedRoundStatus, setSelectedRoundStatus] = useState('')
  const [statusNote, setStatusNote] = useState('')
  const [isUpdatingRoundStatus, setIsUpdatingRoundStatus] = useState(false)

  // Resume viewing state
  const [isOpeningResume, setIsOpeningResume] = useState(false)

  // Fetch candidate details
  useEffect(() => {
    let ignore = false
    if (!token || !candidateId) return

    setLoading(true)
    api.get(endpoints.APPLICATION_BY_ID(candidateId), token)
      .then((res) => {
        if (!ignore && res?.application) {
          setCandidate(res.application)
        }
      })
      .catch((err) => {
        if (!ignore) {
          toast.error(err?.message || 'Failed to load candidate details')
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [token, candidateId, refreshKey])

  // Fetch interviewers master list for dropdown
  useEffect(() => {
    if (!token) return
    api.get(`${endpoints.INTERVIEWERS}?limit=100&isActive=true`, token)
      .then((res) => {
        if (res?.data) {
          setInterviewers(res.data)
        }
      })
      .catch(() => {
        // fail gracefully
      })
  }, [token])

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  // Open protected resume
  const handleOpenResume = async () => {
    if (!candidate?.resumeFilePath && !candidate?.resumeUrl) {
      toast.error('No resume file attached')
      return
    }
    setIsOpeningResume(true)
    try {
      const resumePath = candidate.resumeFilePath || candidate.resumeUrl
      const cleanPath = resumePath.replace(/^https?:\/\/[^/]+/, '').replace('/api', '')
      const response = await fetch(`${api.baseUrl}${cleanPath}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!response.ok) throw new Error('Could not open resume file')
      const blob = await response.blob()
      window.open(URL.createObjectURL(blob), '_blank', 'noopener,noreferrer')
    } catch {
      toast.error('Failed to open resume')
    } finally {
      setIsOpeningResume(false)
    }
  }

  // Update Overall Candidate Status
  const handleUpdateStatus = async (newStatus, options = {}) => {
    if (!token || !candidate) return
    setIsUpdatingStatus(true)
    try {
      const res = await api.patch(
        endpoints.APPLICATION_STATUS(candidate._id),
        { status: newStatus, ...options },
        token
      )
      toast.success(res?.message || `Candidate marked as ${newStatus}`)
      if (res?.application) {
        setCandidate(res.application)
      } else {
        triggerReload()
      }
    } catch (err) {
      toast.error(err?.message || 'Failed to update candidate status')
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  // Confirm Status Change from Modal (Selection or Rejection with email options)
  const handleConfirmStatusChange = async () => {
    if (!statusConfirmModal) return
    const { type, sendEmail } = statusConfirmModal
    const newStatus = type === 'select' ? 'Selected' : 'Rejected'
    await handleUpdateStatus(newStatus, {
      action: type === 'reject' && !sendEmail ? 'ignore' : type,
      sendEmail,
    })
    setStatusConfirmModal(null)
  }

  // Reconsider & Reopen Candidate
  const handleReopenCandidate = async () => {
    // If candidate has interview rounds, reopen to 'Interviewing', otherwise 'Shortlisted'
    const targetStatus = (candidate?.interviewRounds?.length || 0) > 0 ? 'Interviewing' : 'Shortlisted'
    await handleUpdateStatus(targetStatus)
  }

  // Open Schedule Modal
  const openScheduleModal = () => {
    if (candidate?.status === 'Rejected') {
      toast.error('Cannot schedule an interview for a rejected candidate. Please reconsider the candidate first.')
      return
    }

    if (candidate?.status === 'Applied') {
      toast.error('Candidate must be shortlisted before scheduling an interview round. Please shortlist the candidate first.')
      return
    }

    const nextRoundNumber = (candidate?.interviewRounds?.length || 0) + 1
    const suggestedName =
      nextRoundNumber === 1
        ? 'HR Screening'
        : nextRoundNumber === 2
          ? 'Technical Round 1'
          : nextRoundNumber === 3
            ? 'Technical Round 2'
            : `Round ${nextRoundNumber}`

    setRoundForm({
      roundName: suggestedName,
      interviewerId: interviewers[0]?._id || '',
      interviewDate: getTodayDateString(),
      interviewTime: getDefaultFutureTime(),
      duration: '45 mins',
      location: 'https://meet.google.com/',
      interviewerReminder: '15 mins before',
      notes: '',
      rescheduleReason: '',
    })
    setModalMode('schedule')
    setActiveRound(null)
  }

  // Open Reschedule Modal
  const openRescheduleModal = (round) => {
    if (candidate?.status === 'Rejected') {
      toast.error('Cannot reschedule interview rounds for a rejected candidate. Please reconsider the candidate first.')
      return
    }

    if (candidate?.status === 'Applied') {
      toast.error('Candidate must be shortlisted before managing interview rounds.')
      return
    }

    const terminalStatuses = ['Completed', 'Not Completed', 'Cancelled']
    if (terminalStatuses.includes(round.status)) {
      toast.error(`This round has already been marked as "${round.status}" and cannot be modified.`)
      return
    }

    const isPastRoundDate = round.interviewDate && round.interviewDate < getTodayDateString()
    const initialDate = isPastRoundDate ? getTodayDateString() : round.interviewDate || getTodayDateString()
    const initialTime = isPastRoundDate || isPastDateTime(initialDate, round.interviewTime)
      ? getDefaultFutureTime()
      : round.interviewTime || getDefaultFutureTime()

    setActiveRound(round)
    setRoundForm({
      roundName: round.roundName || '',
      interviewerId: round.interviewerId?._id || round.interviewerId || '',
      interviewDate: initialDate,
      interviewTime: initialTime,
      duration: round.duration || '45 mins',
      location: round.location || '',
      interviewerReminder: round.interviewerReminder || '15 mins before',
      notes: round.notes || '',
      rescheduleReason: '',
    })
    setModalMode('reschedule')
  }

  // Submit Schedule or Reschedule
  const handleSubmitRound = async (e) => {
    e.preventDefault()
    if (!token || !candidate) return

    if (candidate.status === 'Rejected') {
      toast.error('Cannot schedule or reschedule interview rounds for a rejected candidate. Please reconsider the candidate first.')
      return
    }

    if (candidate.status === 'Applied') {
      toast.error('Candidate must be shortlisted before scheduling interview rounds.')
      return
    }

    if (modalMode === 'reschedule' && activeRound && ['Completed', 'Not Completed', 'Cancelled'].includes(activeRound.status)) {
      toast.error(`This round has already been marked as "${activeRound.status}" and cannot be modified.`)
      return
    }

    if (!roundForm.roundName || !roundForm.interviewerId || !roundForm.interviewDate || !roundForm.interviewTime || !roundForm.location) {
      toast.error('Please fill in all required interview fields')
      return
    }

    // Validation 1: Cannot select past dates
    if (roundForm.interviewDate < getTodayDateString()) {
      toast.error('Interview date cannot be in the past. Please select today or a future date.')
      return
    }

    // Validation 2: In time section, cannot select past time
    if (isPastDateTime(roundForm.interviewDate, roundForm.interviewTime)) {
      toast.error('Interview time cannot be in the past. Please select a future time.')
      return
    }

    if (modalMode === 'reschedule' && !roundForm.rescheduleReason.trim()) {
      toast.error('Please provide a reason for rescheduling')
      return
    }

    const payload = {
      ...roundForm,
      interviewTime: roundForm.interviewTime,
    }

    setIsSubmittingRound(true)
    try {
      if (modalMode === 'schedule') {
        const res = await api.post(
          endpoints.APPLICATION_ROUNDS(candidate._id),
          payload,
          token
        )
        toast.success(res?.message || 'Interview round scheduled! Emails sent.')
        if (res?.application) setCandidate(res.application)
        else triggerReload()
      } else {
        const res = await api.put(
          endpoints.APPLICATION_ROUND_UPDATE(candidate._id, activeRound._id),
          {
            ...payload,
            status: 'Rescheduled',
          },
          token
        )
        toast.success(res?.message || 'Interview round rescheduled! Emails sent.')
        if (res?.application) setCandidate(res.application)
        else triggerReload()
      }
      setModalMode(null)
      setActiveRound(null)
    } catch (err) {
      toast.error(err?.message || 'Failed to save interview round')
    } finally {
      setIsSubmittingRound(false)
    }
  }

  // Open Round Status Update Modal
  const openRoundStatusModal = (round, status) => {
    if (candidate?.status === 'Rejected') {
      toast.error('Cannot update round status for a rejected candidate. Please reconsider the candidate first.')
      return
    }

    if (candidate?.status === 'Applied') {
      toast.error('Candidate must be shortlisted before managing round status.')
      return
    }

    const terminalStatuses = ['Completed', 'Not Completed', 'Cancelled']
    if (terminalStatuses.includes(round.status)) {
      toast.error(`This round has already been marked as "${round.status}" and cannot be modified.`)
      return
    }

    setStatusUpdateRound(round)
    setSelectedRoundStatus(status)
    setStatusNote('')
  }

  // Submit Round Status Update
  const handleSubmitRoundStatus = async () => {
    if (!token || !candidate || !statusUpdateRound) return

    if (candidate.status === 'Rejected') {
      toast.error('Cannot update round status for a rejected candidate. Please reconsider the candidate first.')
      return
    }

    if (candidate.status === 'Applied') {
      toast.error('Candidate must be shortlisted before managing round status.')
      return
    }

    const terminalStatuses = ['Completed', 'Not Completed', 'Cancelled']
    if (terminalStatuses.includes(statusUpdateRound.status)) {
      toast.error(`This round has already been marked as "${statusUpdateRound.status}" and cannot be modified.`)
      return
    }

    setIsUpdatingRoundStatus(true)
    try {
      const res = await api.put(
        endpoints.APPLICATION_ROUND_UPDATE(candidate._id, statusUpdateRound._id),
        {
          status: selectedRoundStatus,
          notes: statusNote,
        },
        token
      )
      toast.success(res?.message || `Round marked as ${selectedRoundStatus}`)
      if (res?.application) setCandidate(res.application)
      else triggerReload()
      setStatusUpdateRound(null)
    } catch (err) {
      toast.error(err?.message || 'Failed to update round status')
    } finally {
      setIsUpdatingRoundStatus(false)
    }
  }

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center gap-3 text-muted-foreground">
        <Loader2 size={32} className="animate-spin text-[#f1592a]" />
        <p className="text-xs font-medium">Loading candidate profile...</p>
      </div>
    )
  }

  if (!candidate) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center gap-4 text-center">
        <AlertCircle size={40} className="text-gray-400" />
        <div>
          <h2 className="text-base font-bold text-gray-800">Candidate Not Found</h2>
          <p className="text-xs text-gray-500 mt-1">This application may have been removed or does not exist.</p>
        </div>
        <Link
          href="/admin/applications"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#d84b20] transition-colors"
        >
          <ArrowLeft size={14} /> Back to Applications
        </Link>
      </div>
    )
  }

  const overallStatus = candidate.status || 'Applied'
  const rounds = candidate.interviewRounds || []
  const activities = candidate.activities || []

  return (
    <div className="w-full min-w-0 space-y-4 pb-12">
      {/* Top Header & Breadcrumb Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/applications"
            className="w-8 h-8 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors shadow-2xs"
            title="Back to Applications List"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                {candidate.fullName}
              </h1>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${STATUS_BADGES[overallStatus]?.bg || 'bg-gray-100 text-gray-700'
                  }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${STATUS_BADGES[overallStatus]?.dot || 'bg-gray-400'
                    }`}
                />
                {overallStatus}
              </span>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
              <Briefcase size={12} className="text-[#f1592a]" />
              Applied for <strong className="text-gray-700">{candidate.jobId?.title || 'Open Position'}</strong>
              {candidate.jobId?.department && ` • ${candidate.jobId.department}`}
            </p>
          </div>
        </div>

        {/* Lifecycle Quick Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {overallStatus === 'Rejected' ? (
            <button
              onClick={handleReopenCandidate}
              disabled={isUpdatingStatus}
              className="h-8 px-3.5 rounded-md bg-[#f1592a] hover:bg-[#d84b20] text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
            >
              {isUpdatingStatus ? (
                <Loader2 size={13} className="animate-spin" />
              ) : (
                <RotateCcw size={13} />
              )}
              Reconsider / Reopen Candidate
            </button>
          ) : overallStatus === 'Selected' ? (
            <>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-semibold text-xs shadow-2xs">
                <CheckCircle2 size={14} className="text-emerald-600" /> Candidate Selected
              </span>
              <button
                onClick={() => handleUpdateStatus('Interviewing')}
                disabled={isUpdatingStatus}
                className="h-8 px-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
                title="Reopen candidate into interviewing"
              >
                <RotateCcw size={13} /> Reopen
              </button>
            </>
          ) : overallStatus === 'Applied' ? (
            <>
              <button
                onClick={() => handleUpdateStatus('Shortlisted')}
                disabled={isUpdatingStatus}
                className="h-8 px-3.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
              >
                {isUpdatingStatus ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <UserCheck size={14} />
                )}
                Shortlist Candidate
              </button>

              <button
                onClick={() => handleUpdateStatus('Rejected', { action: 'ignore', sendEmail: false })}
                disabled={isUpdatingStatus}
                title="Archive / Ignore application without sending an email"
                className="h-8 px-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
              >
                {isUpdatingStatus ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <Ban size={14} />
                )}
                Ignore
              </button>
            </>
          ) : (
            /* Candidate is Shortlisted or Interviewing */
            <>
              <button
                onClick={openScheduleModal}
                className="h-8 px-3 rounded-md bg-[#f1592a] hover:bg-[#d84b20] text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <Plus size={14} /> Schedule Interview Round
              </button>

              <button
                onClick={() => setStatusConfirmModal({ type: 'select', sendEmail: true })}
                disabled={isUpdatingStatus}
                className="h-8 px-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
              >
                <CheckCircle2 size={14} /> Select Candidate
              </button>

              <button
                onClick={() => setStatusConfirmModal({ type: 'reject', sendEmail: true })}
                disabled={isUpdatingStatus}
                className="h-8 px-3 rounded-md border border-rose-200 text-rose-700 hover:bg-rose-50 font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
              >
                <XCircle size={14} /> Reject
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* LEFT COLUMN: Candidate Profile & Activity History (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Candidate Profile Details Card */}
          <div className="bg-white rounded-xl border border-gray-200/90 shadow-2xs overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Candidate Profile
              </span>
              <button
                onClick={handleOpenResume}
                disabled={isOpeningResume}
                className="h-6 px-2.5 rounded text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 flex items-center gap-1 transition-colors"
                title="View Resume Document"
              >
                {isOpeningResume ? (
                  <Loader2 size={11} className="animate-spin" />
                ) : (
                  <Download size={11} />
                )}
                Resume
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <User size={13} className="text-[#f1592a]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Full Name</p>
                  <p className="text-xs font-semibold text-gray-900">{candidate.fullName}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={13} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Email Address</p>
                  <a
                    href={`mailto:${candidate.email}`}
                    className="text-xs text-blue-600 hover:underline font-medium break-all"
                  >
                    {candidate.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={13} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Phone Number</p>
                  <a
                    href={`tel:${candidate.phone}`}
                    className="text-xs text-gray-800 hover:text-emerald-600 font-medium"
                  >
                    {candidate.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar size={13} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Applied Date</p>
                  <p className="text-xs text-gray-800">
                    {candidate.createdAt
                      ? new Date(candidate.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      : '-'}
                  </p>
                </div>
              </div>

              {/* Cover Letter Section */}
              {candidate.coverLetter && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase mb-1.5 flex items-center gap-1">
                    <FileText size={12} /> Cover Letter
                  </p>
                  <div className="p-2.5 bg-gray-50/80 rounded-lg border border-gray-100 text-xs text-gray-700 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto font-sans">
                    {candidate.coverLetter}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activity Timeline Card */}
          <div className="bg-white rounded-xl border border-gray-200/90 shadow-2xs overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                <History size={13} className="text-[#f1592a]" /> Activity Timeline
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                {activities.length} entries
              </span>
            </div>

            <div className="p-4 max-h-[420px] overflow-y-auto">
              {activities.length === 0 ? (
                <div className="py-6 text-center text-xs text-gray-400">
                  No activity recorded yet.
                </div>
              ) : (
                <ol className="relative border-l border-gray-200 ml-2 space-y-4">
                  {activities.map((act, idx) => (
                    <li key={act._id || idx} className="ml-4">
                      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full border-2 border-white bg-[#f1592a] shadow-xs" />
                      <p className="text-xs font-bold text-gray-900 leading-tight">
                        {act.title}
                      </p>
                      {act.description && (
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                          {act.description}
                        </p>
                      )}
                      <time className="text-[10px] text-gray-400 block mt-1">
                        {act.createdAt
                          ? new Date(act.createdAt).toLocaleString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                          : ''}
                      </time>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interview Rounds Lifecycle (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200/90 shadow-2xs overflow-hidden">
            {/* Header bar */}
            <div className="px-5 py-3.5 border-b border-gray-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Interview Rounds
                </h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-[#f1592a] border border-orange-200/60">
                  {rounds.length} {rounds.length === 1 ? 'Round' : 'Rounds'}
                </span>
              </div>
            </div>

            {/* Rounds List Content */}
            <div className="p-5">
              {overallStatus === 'Rejected' && (
                <div className="mb-4 p-3 bg-rose-50/80 border border-rose-200/80 rounded-xl flex items-start gap-2.5">
                  <AlertCircle size={15} className="text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-rose-900 leading-relaxed">
                    <strong className="font-bold">Candidate is Rejected:</strong> Scheduling new rounds, rescheduling, and status updates are locked. Click <strong>&ldquo;Reconsider / Reopen Candidate&rdquo;</strong> above to resume the hiring process.
                  </div>
                </div>
              )}

              {overallStatus === 'Applied' && (
                <div className="mb-4 p-3.5 bg-purple-50/80 border border-purple-200/80 rounded-xl flex items-start gap-2.5">
                  <UserCheck size={16} className="text-purple-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-purple-950 leading-relaxed">
                    <strong className="font-bold text-purple-900">Application Under Review:</strong> Shortlist this candidate first before scheduling interview rounds or selecting them.
                  </div>
                </div>
              )}

              {rounds.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f1592a] mb-3">
                    <Calendar size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">No Interview Rounds Scheduled</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {overallStatus === 'Applied'
                      ? 'Shortlist this candidate to start scheduling interview rounds, assigning interviewers, and sending notifications.'
                      : 'Set up interview rounds to assign interviewers from your master list, set time slots, and notify both parties via automated email.'}
                  </p>
                  {overallStatus === 'Applied' ? (
                    <button
                      onClick={() => handleUpdateStatus('Shortlisted')}
                      disabled={isUpdatingStatus}
                      className="mt-4 h-8 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors disabled:opacity-50"
                    >
                      <UserCheck size={14} /> Shortlist Candidate First
                    </button>
                  ) : overallStatus !== 'Rejected' ? (
                    <button
                      onClick={openScheduleModal}
                      className="mt-4 h-8 px-4 rounded-md bg-[#f1592a] hover:bg-[#d84b20] text-white font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <Plus size={14} /> Schedule First Round
                    </button>
                  ) : null}
                </div>
              ) : (
                <div className="space-y-4">
                  {rounds.map((round, idx) => {
                    const interviewer = round.interviewerId || {}
                    const isMeetingLink = round.location?.startsWith('http')

                    return (
                      <div
                        key={round._id || idx}
                        className="rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all p-4.5 space-y-3 shadow-2xs"
                      >
                        {/* Round Header & Status */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-md bg-orange-50 text-[#f1592a] font-bold text-xs flex items-center justify-center border border-orange-100">
                              {round.roundNumber || idx + 1}
                            </span>
                            <div>
                              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                                {round.roundName}
                              </h3>
                              <p className="text-[11px] text-gray-500">
                                Assigned to{' '}
                                <strong className="text-gray-800">
                                  {interviewer.name || 'Panel Member'}
                                </strong>{' '}
                                {interviewer.role ? `(${interviewer.role})` : ''}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${ROUND_STATUS_BADGES[round.status] ||
                                'bg-gray-100 text-gray-700 border-gray-200'
                                }`}
                            >
                              {round.status}
                            </span>
                          </div>
                        </div>

                        {/* Interview Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 py-1 text-xs">
                          <div className="p-2 rounded-lg bg-gray-50/70 border border-gray-100 flex items-center gap-2">
                            <Calendar size={14} className="text-[#f1592a] shrink-0" />
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">Date</p>
                              <p className="font-semibold text-gray-800 truncate">
                                {round.interviewDate
                                  ? new Date(round.interviewDate).toLocaleDateString('en-IN', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                  })
                                  : '-'}
                              </p>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-gray-50/70 border border-gray-100 flex items-center gap-2">
                            <Clock size={14} className="text-blue-600 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">Time & Duration</p>
                              <p className="font-semibold text-gray-800 truncate">
                                {round.interviewTime} ({round.duration || '45 mins'})
                              </p>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-gray-50/70 border border-gray-100 flex items-center gap-2">
                            {isMeetingLink ? (
                              <Video size={14} className="text-purple-600 shrink-0" />
                            ) : (
                              <MapPin size={14} className="text-purple-600 shrink-0" />
                            )}
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">Location</p>
                              {isMeetingLink ? (
                                <a
                                  href={round.location}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-blue-600 hover:underline flex items-center gap-1 truncate"
                                >
                                  Join Link <ExternalLink size={10} />
                                </a>
                              ) : (
                                <p className="font-semibold text-gray-800 truncate">{round.location}</p>
                              )}
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-gray-50/70 border border-gray-100 flex items-center gap-2">
                            <User size={14} className="text-emerald-600 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">Interviewer Type</p>
                              <p className="font-semibold text-gray-800 truncate">
                                {interviewer.interviewType || 'General'}
                              </p>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-gray-50/70 border border-gray-100 flex items-center gap-2">
                            <Bell size={14} className={round.isReminderSent ? "text-emerald-600 shrink-0" : "text-amber-600 shrink-0"} />
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                                Reminder
                                {round.isReminderSent && (
                                  <span className="text-[9px] text-emerald-700 font-bold bg-emerald-50 px-1 rounded border border-emerald-200">
                                    Sent
                                  </span>
                                )}
                              </p>
                              <p className="font-semibold text-gray-800 truncate">
                                {round.interviewerReminder && round.interviewerReminder !== 'none'
                                  ? round.interviewerReminder
                                  : 'No reminder'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Notes / Reschedule Reason */}
                        {round.rescheduleReason && (
                          <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-xs text-amber-800">
                            <strong>Rescheduled:</strong> {round.rescheduleReason}
                          </div>
                        )}

                        {round.notes && (
                          <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                            <span className="font-semibold text-gray-700">Notes:</span> {round.notes}
                          </div>
                        )}

                        {/* Round Actions Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                          {overallStatus === 'Rejected' ? (
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 italic">
                              <Lock size={12} className="text-gray-400" />
                              Candidate is rejected • Round actions are locked
                            </div>
                          ) : ['Completed', 'Not Completed', 'Cancelled'].includes(round.status) ? (
                            <div className="flex items-center gap-2">
                              {round.status === 'Completed' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                                  <CheckCircle2 size={12} className="text-emerald-600" /> Round Completed (Final Status)
                                </span>
                              )}
                              {round.status === 'Not Completed' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
                                  <XCircle size={12} className="text-rose-600" /> Round Not Completed (Final Status)
                                </span>
                              )}
                              {round.status === 'Cancelled' && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                                  <Ban size={12} className="text-gray-500" /> Round Cancelled (Final Status)
                                </span>
                              )}
                              <span className="text-[10px] text-gray-400 italic flex items-center gap-1">
                                <Lock size={10} /> Locked
                              </span>
                            </div>
                          ) : (
                            <>
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="text-[11px] font-semibold text-gray-400 mr-1">
                                  Update Status:
                                </span>

                                <button
                                  onClick={() => openRoundStatusModal(round, 'Completed')}
                                  className="h-6 px-2 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                                >
                                  <Check size={11} /> Mark Completed
                                </button>

                                <button
                                  onClick={() => openRoundStatusModal(round, 'Not Completed')}
                                  className="h-6 px-2 rounded text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200/80 hover:bg-rose-100 transition-colors flex items-center gap-1"
                                >
                                  <X size={11} /> Not Completed
                                </button>

                                <button
                                  onClick={() => openRoundStatusModal(round, 'Cancelled')}
                                  className="h-6 px-2 rounded text-[11px] font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => openRescheduleModal(round)}
                                  className="h-6 px-2.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/80 hover:bg-amber-100 transition-colors flex items-center gap-1"
                                >
                                  <RotateCcw size={11} /> Reschedule Round
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SCHEDULE / RESCHEDULE MODAL */}
      {modalMode && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xl rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#f1592a]/10 flex items-center justify-center">
                  <Calendar size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">
                    {modalMode === 'schedule'
                      ? 'Schedule Interview Round'
                      : `Reschedule ${activeRound?.roundName}`}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Candidate: <strong className="text-gray-700">{candidate.fullName}</strong>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalMode(null)}
                className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleSubmitRound} className="p-6 space-y-4 max-h-[calc(85vh-100px)] overflow-y-auto">
              {/* Row 1: Round Name and Assign Interviewer in a single row without suggestion chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Round Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={roundForm.roundName}
                    onChange={(e) => setRoundForm({ ...roundForm, roundName: e.target.value })}
                    placeholder="e.g. Technical Round 1"
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                    Assign Interviewer<span className="text-red-500">*</span>
                  </label>
                  <AdminCustomSelect
                    value={roundForm.interviewerId}
                    onChange={(val) => setRoundForm({ ...roundForm, interviewerId: val })}
                    className='w-full'
                    options={interviewers.map((i) => ({
                      value: i._id,
                      label: `${i.name}`,
                    }))}
                    placeholder="-- Select Interviewer --"
                  />
                </div>
              </div>

              {/* Row 2: Date & Foolproof 12h Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-gray-700">
                      Interview Date <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <input
                    type="date"
                    required
                    min={getTodayDateString()}
                    value={roundForm.interviewDate}
                    onChange={(e) => {
                      const val = e.target.value
                      if (val && val < getTodayDateString()) {
                        toast.error('Cannot select past dates')
                        setRoundForm({ ...roundForm, interviewDate: getTodayDateString() })
                        return
                      }
                      setRoundForm({ ...roundForm, interviewDate: val })
                    }}
                    className={inputCls}
                  />
                  {roundForm.interviewDate && roundForm.interviewDate < getTodayDateString() && (
                    <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle size={12} className="shrink-0" /> Date cannot be in the past.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-gray-700">
                      Interview Time <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <input
                    type="time"
                    required
                    value={to24hTime(roundForm.interviewTime)}
                    onChange={(e) => {
                      const formatted = to12hTime(e.target.value)
                      setRoundForm({ ...roundForm, interviewTime: formatted })
                    }}
                    className={inputCls}
                  />

                  {/* Real-time Past Time Warning */}
                  {isPastDateTime(roundForm.interviewDate, roundForm.interviewTime) && (
                    <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle size={12} className="shrink-0" /> Selected time is in the past. Please select a future time.
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Duration input text parallel to Meeting Link or Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={roundForm.duration}
                    onChange={(e) => setRoundForm({ ...roundForm, duration: e.target.value })}
                    placeholder="e.g. 45 mins"
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Meeting Link or Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={roundForm.location}
                    onChange={(e) => setRoundForm({ ...roundForm, location: e.target.value })}
                    placeholder="e.g. https://meet.google.com/xyz or Office Room"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Row 4: Send Reminder to Interviewer setting */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <Bell size={13} className="text-[#f1592a]" /> Send Reminder to Interviewer
                </label>
                <AdminCustomSelect
                  value={roundForm.interviewerReminder}
                  onChange={(val) => setRoundForm({ ...roundForm, interviewerReminder: val })}
                  options={REMINDER_OPTIONS}
                  placeholder="Select when reminder can be sent"
                />
              </div>

              {/* Reschedule Reason if rescheduling */}
              {modalMode === 'reschedule' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-amber-800">
                    Reason for Rescheduling <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={roundForm.rescheduleReason}
                    onChange={(e) =>
                      setRoundForm({ ...roundForm, rescheduleReason: e.target.value })
                    }
                    placeholder="e.g. Candidate requested slot change / Interviewer unavailable"
                    className={inputCls}
                  />
                </div>
              )}

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Notes / Instructions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={roundForm.notes}
                  onChange={(e) => setRoundForm({ ...roundForm, notes: e.target.value })}
                  placeholder="Additional instructions for candidate or interviewer..."
                  className={inputCls}
                />
              </div>

              {/* Email Notice Callout */}
              {/* <div className="p-3 bg-orange-50/70 border border-orange-200/80 rounded-lg flex items-start gap-2.5">
                <Send size={15} className="text-[#f1592a] shrink-0 mt-0.5" />
                <p className="text-xs text-orange-900 leading-relaxed">
                  <strong>Automatic Email Dispatch:</strong> Upon saving, professional invitation emails containing the schedule, date, time, and meeting link will be sent to both <strong>{candidate.email}</strong> and the assigned interviewer.
                </p>
              </div> */}

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalMode(null)}
                  disabled={isSubmittingRound}
                  className="px-4 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmittingRound ||
                    isPastDateTime(roundForm.interviewDate, roundForm.interviewTime) ||
                    (roundForm.interviewDate && roundForm.interviewDate < getTodayDateString())
                  }
                  className="px-5 py-2 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#d84b20] transition-colors shadow-2xs flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingRound ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Saving & Sending Invites...
                    </>
                  ) : (
                    <>
                      <Send size={13} />{' '}
                      {modalMode === 'schedule' ? 'Schedule & Send Invites' : 'Reschedule & Notify'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* QUICK ROUND STATUS MODAL */}
      {statusUpdateRound && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-gray-900">
              Update Round Status
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mark <strong className="text-gray-800">{statusUpdateRound.roundName}</strong> as{' '}
              <span className="font-semibold text-[#f1592a]">{selectedRoundStatus}</span>?
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">Remarks / Notes (Optional)</label>
              <textarea
                rows={2}
                value={statusNote}
                onChange={(e) => setStatusNote(e.target.value)}
                placeholder="Optional notes or remarks..."
                className={inputCls}
              />
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setStatusUpdateRound(null)}
                disabled={isUpdatingRoundStatus}
                className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmitRoundStatus}
                disabled={isUpdatingRoundStatus}
                className="px-4 py-1.5 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#d84b20] transition-colors shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
              >
                {isUpdatingRoundStatus ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  'Confirm Update'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SELECTION OR REJECTION CONFIRMATION MODAL */}
      {statusConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div
              className={`px-5 py-4 border-b flex items-center justify-between ${
                statusConfirmModal.type === 'select'
                  ? 'bg-emerald-50/60 border-emerald-100'
                  : 'bg-rose-50/60 border-rose-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {statusConfirmModal.type === 'select' ? (
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 size={18} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <XCircle size={18} />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {statusConfirmModal.type === 'select'
                      ? 'Confirm Candidate Selection'
                      : 'Confirm Candidate Rejection'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {statusConfirmModal.type === 'select'
                      ? `Select ${candidate.fullName} for ${candidate.jobId?.title || 'the position'}`
                      : `Reject ${candidate.fullName} for ${candidate.jobId?.title || 'the position'}`}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStatusConfirmModal(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body & Email Preview */}
            <div className="p-5 space-y-4">
              {/* Email Send Toggle */}
              <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer select-none hover:bg-gray-100/60 transition-colors">
                <input
                  type="checkbox"
                  checked={statusConfirmModal.sendEmail}
                  onChange={(e) =>
                    setStatusConfirmModal({
                      ...statusConfirmModal,
                      sendEmail: e.target.checked,
                    })
                  }
                  className="mt-0.5 rounded border-gray-300 text-[#f1592a] focus:ring-[#f1592a]"
                />
                <div className="text-xs">
                  <span className="font-semibold text-gray-900">
                    {statusConfirmModal.type === 'select'
                      ? 'Send congratulations & offer email to candidate'
                      : 'Send formal interview rejection email to candidate'}
                  </span>
                  <p className="text-gray-500 mt-0.5">
                    Recipient: <strong>{candidate.fullName}</strong> ({candidate.email})
                  </p>
                </div>
              </label>

              {/* Email Preview Card */}
              {statusConfirmModal.sendEmail ? (
                <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 border-b border-gray-200/80 pb-2">
                    <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                      <Send size={12} className="text-[#f1592a]" /> Email Preview
                    </span>
                    <span className="text-gray-400 truncate max-w-[260px]">
                      Subject:{' '}
                      {statusConfirmModal.type === 'select'
                        ? 'Congratulations! You Have Been Selected'
                        : `Update regarding your application for ${candidate.jobId?.title || 'position'}`}
                    </span>
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed font-sans space-y-2 bg-white p-3 rounded border border-gray-200/60 max-h-48 overflow-y-auto">
                    <p>Dear <strong>{candidate.fullName}</strong>,</p>
                    {statusConfirmModal.type === 'select' ? (
                      <>
                        <p className="font-semibold text-emerald-700">Congratulations!</p>
                        <p>We are pleased to inform you that you have been selected for the <strong>{candidate.jobId?.title || 'position'}</strong> position at <strong>Key Concepts Innovations Pvt. Ltd.</strong></p>
                        <p>Thank you for your time and participation throughout the interview process. We look forward to having you join our team.</p>
                        <p>Our HR team will contact you regarding the joining date and further formalities.</p>
                      </>
                    ) : (
                      <>
                        <p>Thank you for your interest in the <strong>{candidate.jobId?.title || 'position'}</strong> position at <strong>Key Concepts Innovations Pvt. Ltd.</strong> and for taking the time to participate in our interview process.</p>
                        <p>After careful consideration, we regret to inform you that we will not be proceeding with your application at this time.</p>
                        <p>We appreciate your time and effort and wish you all the best in your future endeavors.</p>
                      </>
                    )}
                    <p className="pt-2 text-gray-500">
                      Best regards,<br />
                      HR Team<br />
                      <strong>Key Concepts Innovations Pvt. Ltd.</strong>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-xs text-amber-800">
                  <AlertCircle size={15} className="shrink-0 text-amber-600 mt-0.5" />
                  <span>
                    No email will be sent to the candidate. Their status will be updated internally on the dashboard.
                  </span>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2.5 px-5 py-3.5 bg-gray-50/80 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setStatusConfirmModal(null)}
                disabled={isUpdatingStatus}
                className="px-4 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmStatusChange}
                disabled={isUpdatingStatus}
                className={`px-4 py-2 text-xs font-semibold rounded-md text-white shadow-2xs flex items-center gap-1.5 transition-colors ${
                  statusConfirmModal.type === 'select'
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-rose-600 hover:bg-rose-700'
                }`}
              >
                {isUpdatingStatus ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Updating...
                  </>
                ) : statusConfirmModal.type === 'select' ? (
                  'Confirm Selection'
                ) : (
                  'Confirm Rejection'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
