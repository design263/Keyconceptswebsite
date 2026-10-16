'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '../../use-admin-auth'
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  DollarSign,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  RotateCcw,
  Check,
  Loader2,
  Bell,
  X,
  Send,
  UserCheck,
  UserPlus,
  StickyNote,
  PhoneCall,
  Video,
  ExternalLink,
  Copy,
  ChevronRight,
  Sparkles,
  Trophy,
  Ban,
  FileText,
  Briefcase
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminCustomSelect, inputCls } from '../../components/AdminCustomSelect'
import { formatTopic, STAGE_BADGES } from '../page'

const PIPELINE_STAGES = [
  { key: 'New', label: 'New Lead' },
  { key: 'Contacted', label: 'Contacted' },
  { key: 'Qualified', label: 'Qualified' },
  { key: 'Proposal Sent', label: 'Proposal Sent' },
  { key: 'Negotiation', label: 'Negotiation' },
  { key: 'Converted', label: 'Converted' },
]

const ACTIVITY_TABS = [
  { key: 'Call', label: 'Call', icon: PhoneCall, defaultTitle: 'Phone Call with Client' },
  { key: 'Email', label: 'Email', icon: Mail, defaultTitle: 'Email Communication' },
  { key: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare, defaultTitle: 'WhatsApp Discussion' },
  { key: 'Meeting', label: 'Meeting', icon: Video, defaultTitle: 'Discovery / Demo Meeting' },
  { key: 'Note', label: 'Internal Note', icon: StickyNote, defaultTitle: 'Internal CRM Note' },
]

const LOST_REASONS = [
  'Budget constraint / Mismatch',
  'Went with another competitor',
  'Requirements out of technical scope',
  'Project cancelled or deferred indefinitely',
  'Client unresponsive after multiple attempts',
  'Other / Incompatible requirements',
]

export default function LeadDetailPage({ params }) {
  const unwrappedParams = use(params)
  const leadId = unwrappedParams.id
  const token = useAdminAuth()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [lead, setLead] = useState(null)
  const [assignees, setAssignees] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)

  // Status updating loader
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)

  // Assignment Modal
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [selectedAssigneeId, setSelectedAssigneeId] = useState('')
  const [isAssigning, setIsAssigning] = useState(false)

  // Prompt Assignee when moving from New to Contacted
  const [showAssignPromptModal, setShowAssignPromptModal] = useState(false)

  // Proposal Sent Modal
  const [showProposalModal, setShowProposalModal] = useState(false)
  const [proposalForm, setProposalForm] = useState({
    quotedAmount: '',
    proposalLink: '',
    notes: '',
  })

  // Converted Modal
  const [showConvertModal, setShowConvertModal] = useState(false)
  const [convertForm, setConvertForm] = useState({
    dealValue: '',
    kickoffDate: '',
    convertedNotes: '',
  })

  // Lost / Closed Modal
  const [showLostModal, setShowLostModal] = useState(false)
  const [lostTargetStatus, setLostTargetStatus] = useState('Lost') // 'Lost' | 'Closed'
  const [selectedLostReason, setSelectedLostReason] = useState(LOST_REASONS[0])
  const [lostNotes, setLostNotes] = useState('')

  // Activity Composer State
  const [activeActivityTab, setActiveActivityTab] = useState('Call')
  const [activityForm, setActivityForm] = useState({
    title: 'Phone Call with Client',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
    conversationDetails: '',
    outcome: '',
    nextFollowUpDate: '',
  })
  const [isSubmittingActivity, setIsSubmittingActivity] = useState(false)

  // Priority Update loader
  const [isUpdatingPriority, setIsUpdatingPriority] = useState(false)

  // Fetch Lead Details
  useEffect(() => {
    let ignore = false
    if (!token || !leadId) return

    setLoading(true)
    api.get(endpoints.CONTACT_LEAD_BY_ID(leadId), token)
      .then((res) => {
        if (!ignore && res?.lead) {
          setLead(res.lead)
          setSelectedAssigneeId(res.lead.assignedTo?._id || '')
        }
      })
      .catch((err) => {
        if (!ignore) {
          toast.error(err?.message || 'Failed to load lead details')
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [token, leadId, refreshKey])

  // Fetch Assignees Master List
  useEffect(() => {
    if (!token) return
    api.get(`${endpoints.LEAD_ASSIGNEES}?limit=100&isActive=true`, token)
      .then((res) => {
        if (res?.data) {
          setAssignees(res.data)
        }
      })
      .catch(() => {
        // ignore
      })
  }, [token])

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  // Tab change in activity composer
  const handleSelectActivityTab = (tabKey) => {
    setActiveActivityTab(tabKey)
    const tabObj = ACTIVITY_TABS.find((t) => t.key === tabKey)
    setActivityForm((prev) => ({
      ...prev,
      title: tabObj?.defaultTitle || prev.title,
    }))
  }

  // Submit New Activity
  const handleSubmitActivity = async (e) => {
    e.preventDefault()
    if (!token || !leadId) return

    if (!activityForm.title.trim()) {
      toast.error('Activity title is required')
      return
    }

    setIsSubmittingActivity(true)
    try {
      const res = await api.post(
        endpoints.CONTACT_LEAD_ACTIVITIES(leadId),
        {
          type: activeActivityTab,
          title: activityForm.title,
          date: activityForm.date,
          time: activityForm.time,
          conversationDetails: activityForm.conversationDetails,
          outcome: activityForm.outcome,
          nextFollowUpDate: activityForm.nextFollowUpDate || null,
        },
        token
      )

      toast.success(res?.message || 'Interaction logged successfully')
      if (res?.lead) setLead(res.lead)

      // Reset activity form
      const tabObj = ACTIVITY_TABS.find((t) => t.key === activeActivityTab)
      setActivityForm({
        title: tabObj?.defaultTitle || '',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
        conversationDetails: '',
        outcome: '',
        nextFollowUpDate: '',
      })
    } catch (err) {
      toast.error(err?.message || 'Failed to log activity')
    } finally {
      setIsSubmittingActivity(false)
    }
  }

  // Generic Update Status API caller
  const handleUpdateStatus = async (newStatus, extraBody = {}) => {
    if (!token || !leadId) return
    setIsUpdatingStatus(true)
    try {
      const res = await api.patch(
        endpoints.CONTACT_LEAD_STATUS(leadId),
        { status: newStatus, ...extraBody },
        token
      )
      toast.success(res?.message || `Stage updated to ${newStatus}`)
      if (res?.lead) setLead(res.lead)
      else triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to update stage')
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  // Intelligent Stage Stepper Click Handler
  const handleStageClick = (stageKey) => {
    if (stageKey === lead?.status) return

    // 1. Moving to Proposal Sent -> open Proposal modal
    if (stageKey === 'Proposal Sent') {
      setProposalForm({
        quotedAmount: lead?.quotedAmount || lead?.approximateBudget || '',
        proposalLink: lead?.proposalLink || '',
        notes: '',
      })
      setShowProposalModal(true)
      return
    }

    // 2. Moving to Converted -> open Converted modal
    if (stageKey === 'Converted') {
      const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      setConvertForm({
        dealValue: lead?.dealValue || lead?.quotedAmount || '',
        kickoffDate: lead?.kickoffDate ? new Date(lead.kickoffDate).toISOString().split('T')[0] : nextWeek,
        convertedNotes: lead?.convertedNotes || '',
      })
      setShowConvertModal(true)
      return
    }

    // 3. Moving to Contacted when currently unassigned -> offer quick assign prompt
    if (stageKey === 'Contacted' && !lead?.assignedTo) {
      setShowAssignPromptModal(true)
      return
    }

    // 4. Fluid 1-click execution for routine stages (New, Contacted, Qualified, Negotiation)
    handleUpdateStatus(stageKey)
  }

  // Handle Proposal Sent Confirmation
  const handleConfirmProposal = async (e) => {
    e.preventDefault()
    if (!proposalForm.quotedAmount.trim()) {
      toast.error('Quoted Deal Amount is required for Proposal Sent')
      return
    }

    await handleUpdateStatus('Proposal Sent', {
      quotedAmount: proposalForm.quotedAmount.trim(),
      proposalLink: proposalForm.proposalLink.trim(),
      notes: proposalForm.notes.trim(),
    })
    setShowProposalModal(false)
  }

  // Handle Convert Deal Confirmation
  const handleConfirmConvert = async (e) => {
    e.preventDefault()
    if (!convertForm.dealValue.trim()) {
      toast.error('Final Agreed Deal Value is required to convert')
      return
    }
    if (!convertForm.kickoffDate) {
      toast.error('Target Project Kickoff Date is required')
      return
    }

    await handleUpdateStatus('Converted', {
      dealValue: convertForm.dealValue.trim(),
      kickoffDate: convertForm.kickoffDate,
      convertedNotes: convertForm.convertedNotes.trim(),
    })
    setShowConvertModal(false)
  }

  // Handle Mark Lost / Closed Confirmation
  const handleConfirmLost = async (e) => {
    e.preventDefault()
    if (!selectedLostReason) {
      toast.error('Please choose a reason for loss')
      return
    }

    await handleUpdateStatus(lostTargetStatus, {
      lostReason: selectedLostReason,
      notes: lostNotes.trim(),
    })
    setShowLostModal(false)
    setLostNotes('')
  }

  // Assign Team Member
  const handleConfirmAssignment = async () => {
    if (!token || !leadId) return
    setIsAssigning(true)
    try {
      const res = await api.patch(
        endpoints.CONTACT_LEAD_ASSIGN(leadId),
        { assigneeId: selectedAssigneeId || null },
        token
      )
      toast.success(res?.message || 'Lead assignment updated')
      if (res?.lead) setLead(res.lead)
      else triggerReload()
      setShowAssignModal(false)
    } catch (err) {
      toast.error(err?.message || 'Failed to assign team member')
    } finally {
      setIsAssigning(false)
    }
  }

  // Update Priority
  const handleUpdatePriority = async (newPriority) => {
    if (!token || !leadId) return
    setIsUpdatingPriority(true)
    try {
      const res = await api.patch(
        endpoints.CONTACT_LEAD_DETAILS(leadId),
        { priority: newPriority },
        token
      )
      toast.success(`Priority updated to ${newPriority}`)
      if (res?.lead) setLead(res.lead)
    } catch (err) {
      toast.error(err?.message || 'Failed to update priority')
    } finally {
      setIsUpdatingPriority(false)
    }
  }

  // Copy helper
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard`)
  }

  // Clean raw message text
  const getCleanMessage = (leadObj) => {
    if (!leadObj?.message) return 'No message content provided.'
    const rawLines = leadObj.message.split('\n')
    const cleaned = rawLines.filter((l) => {
      const trimmed = l.trim()
      return (
        !trimmed.startsWith('Company:') &&
        !trimmed.startsWith('Phone:') &&
        !trimmed.startsWith('Approximate Budget:')
      )
    })
    const joined = cleaned.join('\n').trim()
    return joined || 'No extra message details provided.'
  }

  // Activity Icon Helper
  const getActivityIcon = (type) => {
    switch (type) {
      case 'Call':
        return <PhoneCall size={14} className="text-blue-600" />
      case 'Email':
        return <Mail size={14} className="text-purple-600" />
      case 'WhatsApp':
        return <MessageSquare size={14} className="text-emerald-600" />
      case 'Meeting':
        return <Video size={14} className="text-amber-600" />
      case 'Status Change':
        return <RotateCcw size={14} className="text-indigo-600" />
      case 'Assignment':
        return <UserCheck size={14} className="text-[#f1592a]" />
      case 'Note':
      default:
        return <StickyNote size={14} className="text-gray-600" />
    }
  }

  if (loading) {
    return (
      <div className="w-full min-h-[500px] flex flex-col items-center justify-center space-y-3">
        <Loader2 size={32} className="animate-spin text-[#f1592a]" />
        <p className="text-xs text-muted-foreground font-medium">Loading lead CRM workspace...</p>
      </div>
    )
  }

  if (!lead) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#f1592a]">
          <AlertCircle size={24} />
        </div>
        <div className="text-center">
          <h2 className="text-base font-bold text-gray-900">Lead Not Found</h2>
          <p className="text-xs text-gray-500 mt-1">This lead may have been deleted or does not exist.</p>
        </div>
        <Link
          href="/admin/leads"
          className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-2xs"
        >
          Back to All Leads
        </Link>
      </div>
    )
  }

  const currentStageIndex = PIPELINE_STAGES.findIndex((s) => s.key === lead.status)
  const isTerminalLost = lead.status === 'Lost' || lead.status === 'Closed'
  const isConverted = lead.status === 'Converted'
  const stageBadge = STAGE_BADGES[lead.status] || STAGE_BADGES.New
  const cleanPhone = (lead.phone || '').replace(/\D/g, '')

  // Next follow up check
  let followUpAlert = null
  if (lead.nextFollowUpDate) {
    const fDate = new Date(lead.nextFollowUpDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const fDay = new Date(fDate)
    fDay.setHours(0, 0, 0, 0)

    const dateFormatted = fDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

    if (fDay.getTime() < today.getTime()) {
      followUpAlert = {
        type: 'overdue',
        text: `Follow-up was scheduled for ${dateFormatted} (Overdue)`,
        cls: 'bg-rose-50 border-rose-200 text-rose-800',
        badge: 'Overdue Follow-up',
      }
    } else if (fDay.getTime() === today.getTime()) {
      followUpAlert = {
        type: 'today',
        text: `Follow-up is scheduled for Today (${dateFormatted})`,
        cls: 'bg-amber-50 border-amber-200 text-amber-800',
        badge: "Today's Action",
      }
    } else {
      followUpAlert = {
        type: 'upcoming',
        text: `Upcoming follow-up scheduled for ${dateFormatted}`,
        cls: 'bg-blue-50 border-blue-200 text-blue-800',
        badge: 'Scheduled Follow-up',
      }
    }
  }

  return (
    <div className="w-full min-w-0 space-y-5 pb-12">
      {/* Top Breadcrumb & Header Action Bar */}
      <div className="shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/leads"
              className="text-xs text-muted-foreground hover:text-[#f1592a] flex items-center gap-1 transition-colors font-medium"
            >
              <ArrowLeft size={13} /> Back to Leads
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs font-semibold text-gray-600">Lead #{lead._id.slice(-6).toUpperCase()}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">{lead.name}</h1>

            {/* Status Stage Pill */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${stageBadge.bg}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${stageBadge.dot}`} />
              {stageBadge.label}
            </span>

            {/* Priority Selector */}
            <div className="inline-flex items-center gap-1 pl-1">
              <span className="text-[11px] text-gray-400 font-medium">Priority:</span>
              <select
                value={lead.priority || 'Medium'}
                disabled={isUpdatingPriority}
                onChange={(e) => handleUpdatePriority(e.target.value)}
                className="text-xs font-semibold rounded-md border border-gray-200 bg-white px-2 py-0.5 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#f1592a] cursor-pointer"
              >
                <option value="Urgent">🔴 Urgent</option>
                <option value="High">🟠 High</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Low">🟢 Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons: Direct Calling / WhatsApp / Email / Assignment */}
        <div className="flex flex-wrap items-center gap-2">
          {lead.phone && cleanPhone.length >= 5 && (
            <>
              <a
                href={`tel:${cleanPhone}`}
                title="Direct Phone Call"
                className="h-8 px-2.5 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-all font-medium text-xs flex items-center gap-1.5 shadow-2xs"
              >
                <PhoneCall size={13} className="text-blue-600" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                  `Hello ${lead.name}, thank you for reaching out to Key Concepts regarding ${lead.subject}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="h-8 px-2.5 rounded-md border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-all font-medium text-xs flex items-center gap-1.5 shadow-2xs"
              >
                <MessageSquare size={13} className="text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </>
          )}

          <a
            href={`mailto:${lead.email}?subject=${encodeURIComponent(
              `Key Concepts Inquiry Follow-up: ${lead.subject}`
            )}`}
            title="Send Email"
            className="h-8 px-2.5 rounded-md border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-800 transition-all font-medium text-xs flex items-center gap-1.5 shadow-2xs"
          >
            <Mail size={13} className="text-purple-600" />
            <span>Email</span>
          </a>

          {/* Assign / Change Member Button */}
          <button
            type="button"
            onClick={() => setShowAssignModal(true)}
            className="h-8 px-3 rounded-md bg-[#f1592a] hover:bg-[#f1592a]/90 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-[#f1592a]/20 cursor-pointer"
          >
            <UserCheck size={14} />
            <span>{lead.assignedTo ? 'Change Assignee' : 'Assign Team Member'}</span>
          </button>
        </div>
      </div>

      {/* Visual Pipeline Progression Stepper */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Sales Pipeline Stage
            </span>
            <span className="text-[11px] text-gray-500">
              (Click any stage to advance or update lead status)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isConverted && (
              <button
                type="button"
                onClick={() => handleStageClick('Converted')}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Trophy size={13} /> Mark Converted
              </button>
            )}

            {!isTerminalLost && (
              <button
                type="button"
                onClick={() => {
                  setLostTargetStatus('Lost')
                  setShowLostModal(true)
                }}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Ban size={13} /> Mark Lost
              </button>
            )}
          </div>
        </div>

        {/* Stepper Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isCurrent = lead.status === stage.key
            const isPassed = currentStageIndex > idx && !isTerminalLost

            let btnStyle = 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
            if (isCurrent) {
              btnStyle = 'bg-[#f1592a] text-white border-[#f1592a] font-bold shadow-xs'
            } else if (isPassed) {
              btnStyle = 'bg-emerald-50 text-emerald-800 border-emerald-200/80 font-semibold'
            }

            return (
              <button
                key={stage.key}
                type="button"
                disabled={isUpdatingStatus}
                onClick={() => handleStageClick(stage.key)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs transition-all cursor-pointer ${btnStyle}`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-[10px] opacity-75 font-mono">{idx + 1}.</span>
                  <span className="truncate">{stage.label}</span>
                </div>
                {isPassed && <Check size={12} className="text-emerald-600 shrink-0" />}
                {isCurrent && <Sparkles size={12} className="text-white shrink-0" />}
              </button>
            )
          })}
        </div>

        {/* Outcome banner if converted or lost */}
        {isConverted && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-3 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Deal Won & Converted!</span>{' '}
                {lead.dealValue && (
                  <span className="font-semibold text-emerald-800 underline ml-1">
                    Value: {lead.dealValue}
                  </span>
                )}
                {lead.convertedNotes && (
                  <span className="text-emerald-700 ml-1.5">&ldquo;{lead.convertedNotes}&rdquo;</span>
                )}
              </div>
            </div>
            {lead.kickoffDate && (
              <span className="text-[11px] font-semibold text-emerald-800 shrink-0">
                Kickoff: {new Date(lead.kickoffDate).toLocaleDateString('en-IN')}
              </span>
            )}
          </div>
        )}

        {isTerminalLost && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-xs text-rose-900">
            <Ban size={16} className="text-rose-600 shrink-0" />
            <div>
              <span className="font-bold">Lead Marked as {lead.status}:</span>{' '}
              <span className="text-rose-700 font-medium">{lead.lostReason || 'No reason provided.'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Workspace: 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column (5 Cols): Client, Commercial, Assignee */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: Assigned Team Member */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-2">
                <UserCheck size={15} className="text-[#f1592a]" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Assigned Team Member
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAssignModal(true)}
                className="text-[11px] font-semibold text-[#f1592a] hover:underline cursor-pointer"
              >
                {lead.assignedTo ? 'Change' : '+ Assign'}
              </button>
            </div>

            {lead.assignedTo ? (
              <div className="flex items-start gap-3 pt-0.5">
                <div className="w-10 h-10 rounded-xl bg-[#f1592a]/10 text-[#f1592a] font-bold flex items-center justify-center text-sm shrink-0 border border-[#f1592a]/20">
                  {lead.assignedTo.name?.charAt(0) || 'U'}
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-gray-900 truncate">
                      {lead.assignedTo.name}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-50 text-[#f1592a] border border-orange-200">
                      {lead.assignedTo.leadType}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{lead.assignedTo.role}</p>

                  <div className="pt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-gray-400" />
                      <a href={`mailto:${lead.assignedTo.email}`} className="hover:underline">
                        {lead.assignedTo.email}
                      </a>
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-gray-400" />
                      <a href={`tel:${lead.assignedTo.phone}`} className="hover:underline">
                        {lead.assignedTo.phone}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-4 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                  <UserPlus size={16} />
                </div>
                <p className="text-xs text-gray-500">No sales representative or team member assigned yet.</p>
                <button
                  type="button"
                  onClick={() => setShowAssignModal(true)}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold bg-orange-50 text-[#f1592a] hover:bg-orange-100 transition-colors border border-orange-200 cursor-pointer"
                >
                  Assign Responsible Member
                </button>
              </div>
            )}
          </div>

          {/* Card 2: Commercial & Proposal Deal Overview */}
          {(lead.quotedAmount || lead.dealValue || lead.proposalLink || isConverted) && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <DollarSign size={15} className="text-[#f1592a]" />
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    Commercial Deal Summary
                  </h3>
                </div>
                {isConverted ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Deal Won 🏆
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Quotation Active
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                {lead.dealValue && (
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Final Agreed Deal Value</span>
                    <span className="font-bold text-emerald-700 text-sm">{lead.dealValue}</span>
                  </div>
                )}

                {lead.kickoffDate && (
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Target Kickoff Date</span>
                    <span className="font-semibold text-gray-900">
                      {new Date(lead.kickoffDate).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                )}

                {lead.quotedAmount && (
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Quoted Proposal Amount</span>
                    <span className="font-semibold text-gray-900">{lead.quotedAmount}</span>
                  </div>
                )}

                {lead.proposalLink && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-500 font-medium">Proposal / SOW Link</span>
                    <a
                      href={lead.proposalLink.startsWith('http') ? lead.proposalLink : `https://${lead.proposalLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#f1592a] hover:underline flex items-center gap-1"
                    >
                      View Proposal <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Card 3: Client Profile & Inbound Inquiry */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3.5">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5">
              <User size={15} className="text-[#f1592a]" />
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                Client Information
              </h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Contact Person</span>
                <span className="font-semibold text-gray-900">{lead.name}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Email Address</span>
                <div className="flex items-center gap-1.5">
                  <a href={`mailto:${lead.email}`} className="font-semibold text-[#f1592a] hover:underline">
                    {lead.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(lead.email, 'Email')}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <Copy size={11} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Phone Number</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-900">{lead.phone || '—'}</span>
                  {lead.phone && (
                    <button
                      onClick={() => copyToClipboard(lead.phone, 'Phone')}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <Copy size={11} />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Company Name</span>
                <span className="font-semibold text-gray-900">{lead.company || '—'}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Service Requested</span>
                <span className="font-semibold text-[#f1592a] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                     {formatTopic(lead.subject)}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Approximate Budget</span>
                <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                  {lead.approximateBudget || 'Open / Not specified'}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-gray-500 font-medium">Received Date</span>
                <span className="font-semibold text-gray-700">
                  {lead.createdAt
                    ? new Date(lead.createdAt).toLocaleString('en-IN', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })
                    : '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Inbound Requirements Message */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-2">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <FileText size={15} className="text-[#f1592a]" />
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                Original Message / Specifications
              </h3>
            </div>
            <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
              <p className="whitespace-pre-wrap text-xs text-gray-800 leading-relaxed font-sans">
                {getCleanMessage(lead)}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Interaction Hub, Follow-Up, Chronological Timeline */}
        <div className="lg:col-span-7 space-y-4">
          {/* Upcoming Follow-Up Alert Card */}
          {followUpAlert && (
            <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${followUpAlert.cls}`}>
              <div className="flex items-center gap-2.5">
                <Bell size={18} className="shrink-0" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block">
                    {followUpAlert.badge}
                  </span>
                  <p className="text-xs font-semibold">{followUpAlert.text}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActivityForm((p) => ({
                    ...p,
                    title: 'Completed Scheduled Follow-up',
                    outcome: 'Follow-up executed successfully',
                  }))
                }}
                className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors shrink-0 cursor-pointer shadow-2xs"
              >
                Log Follow-up Now
              </button>
            </div>
          )}

          {/* Interaction & Activity Composer */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[#f1592a]" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Record Interaction / Activity
                </h3>
              </div>
              <span className="text-[11px] text-gray-400">Chronological CRM Log</span>
            </div>

            {/* Fast Activity Type Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-lg border border-gray-200/80 overflow-x-auto">
              {ACTIVITY_TABS.map((tab) => {
                const Icon = tab.icon
                const isActive = activeActivityTab === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleSelectActivityTab(tab.key)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${isActive
                      ? 'bg-white text-gray-900 shadow-xs border border-gray-200'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <Icon size={13} className={isActive ? 'text-[#f1592a]' : 'text-gray-400'} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Interaction Form */}
            <form onSubmit={handleSubmitActivity} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-gray-700">
                    Activity Title / Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Call regarding MVP budget"
                    value={activityForm.title}
                    onChange={(e) => setActivityForm((p) => ({ ...p, title: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-gray-700">Date</label>
                    <input
                      type="date"
                      value={activityForm.date}
                      onChange={(e) => setActivityForm((p) => ({ ...p, date: e.target.value }))}
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-gray-700">Time</label>
                    <input
                      type="text"
                      placeholder="e.g. 03:30 PM"
                      value={activityForm.time}
                      onChange={(e) => setActivityForm((p) => ({ ...p, time: e.target.value }))}
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>

              {/* Discussion Details */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-gray-700">
                  Discussion / Conversation Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail the discussion points, client feedback, questions asked..."
                  value={activityForm.conversationDetails}
                  onChange={(e) => setActivityForm((p) => ({ ...p, conversationDetails: e.target.value }))}
                  className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all"
                />
              </div>

              {/* Outcome and Next Follow Up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-gray-700">
                    Outcome / Next Action Item
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Client agreed, send proposal by Friday"
                    value={activityForm.outcome}
                    onChange={(e) => setActivityForm((p) => ({ ...p, outcome: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-gray-700">
                    Schedule Next Follow-Up (Optional)
                  </label>
                  <input
                    type="date"
                    value={activityForm.nextFollowUpDate}
                    onChange={(e) => setActivityForm((p) => ({ ...p, nextFollowUpDate: e.target.value }))}
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end pt-1">
                <button
                  type="submit"
                  disabled={isSubmittingActivity}
                  className="px-4 py-2 rounded-md text-xs font-semibold bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-sm shadow-[#f1592a]/20 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingActivity && <Loader2 size={13} className="animate-spin" />}
                  <Send size={13} />
                  <span>Log {activeActivityTab} Activity</span>
                </button>
              </div>
            </form>
          </div>

          {/* Activity Timeline / History */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3 max-h-[500px] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-2">
                <RotateCcw size={15} className="text-[#f1592a]" />
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Communication History & Timeline ({lead.activities?.length || 0})
                </h3>
              </div>
            </div>

            {lead.activities && lead.activities.length > 0 ? (
              <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                {[...lead.activities].reverse().map((act, index) => {
                  const actDate = act.date
                    ? new Date(act.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                    : ''

                  return (
                    <div key={act._id || index} className="relative group">
                      {/* Timeline Dot Icon */}
                      <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-2xs group-hover:border-[#f1592a] transition-colors">
                        {getActivityIcon(act.type)}
                      </div>

                      {/* Timeline Card */}
                      <div className="bg-gray-50/70 border border-gray-200/80 rounded-lg p-3 space-y-1.5 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-xs font-bold text-gray-900">{act.title}</span>
                            <span className="text-[10px] text-gray-400 block">
                              By {act.recordedBy || 'Admin'} &bull; {actDate} {act.time ? `at ${act.time}` : ''}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-gray-200 text-gray-700 shrink-0">
                            {act.type}
                          </span>
                        </div>

                        {act.conversationDetails && (
                          <p className="text-xs text-gray-700 whitespace-pre-wrap leading-relaxed">
                            {act.conversationDetails}
                          </p>
                        )}

                        {act.outcome && (
                          <div className="pt-1 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                            <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                              Outcome
                            </span>
                            <span>{act.outcome}</span>
                          </div>
                        )}

                        {act.nextFollowUpDate && (
                          <div className="pt-0.5 flex items-center gap-1 text-[11px] text-blue-700 font-medium">
                            <Calendar size={11} />
                            <span>
                              Follow-up Scheduled:{' '}
                              {new Date(act.nextFollowUpDate).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-xs text-gray-400 py-4 text-center">No interactions recorded yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal 1: Assign Team Member Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2">
                <UserCheck size={16} className="text-[#f1592a]" />
                <h3 className="text-sm font-bold text-gray-900">Assign Lead to Team Member</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAssignModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-xs text-gray-600">
                Choose a responsible member from the <strong>Lead Assignee Master</strong> to take ownership of this lead&apos;s communications and lifecycle.
              </p>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-700">Select Assignee</label>
                <select
                  value={selectedAssigneeId}
                  onChange={(e) => setSelectedAssigneeId(e.target.value)}
                  className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] cursor-pointer"
                >
                  <option value="">-- Unassigned --</option>
                  {assignees.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.name} ({a.role} &bull; {a.leadType})
                    </option>
                  ))}
                </select>
              </div>

              {assignees.length === 0 && (
                <p className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded border border-amber-200">
                  No active lead assignees found. Go to{' '}
                  <Link href="/admin/master/lead-assignees" className="underline font-bold">
                    Lead Assignee Master
                  </Link>{' '}
                  to create assignees.
                </p>
              )}
            </div>

            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowAssignModal(false)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isAssigning}
                onClick={handleConfirmAssignment}
                className="px-4 py-1.5 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isAssigning && <Loader2 size={13} className="animate-spin" />}
                Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Quick Assign Prompt when advancing from New to Contacted */}
      {showAssignPromptModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-orange-50">
              <div className="flex items-center gap-2">
                <UserCheck size={16} className="text-[#f1592a]" />
                <h3 className="text-sm font-bold text-gray-900">Assign Lead Ownership</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAssignPromptModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-5 space-y-3.5">
              <p className="text-xs text-gray-600">
                This lead is currently <strong>unassigned</strong>. Would you like to assign a team member before moving to <strong>Contacted</strong>?
              </p>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-700">Choose Team Member</label>
                <select
                  value={selectedAssigneeId}
                  onChange={(e) => setSelectedAssigneeId(e.target.value)}
                  className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] cursor-pointer"
                >
                  <option value="">-- Choose Team Member --</option>
                  {assignees.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.name} ({a.role} &bull; {a.leadType})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowAssignPromptModal(false)
                  handleUpdateStatus('Contacted')
                }}
                className="text-xs text-gray-500 hover:text-gray-800 underline font-medium cursor-pointer"
              >
                Skip &amp; Mark Contacted
              </button>

              <button
                type="button"
                disabled={!selectedAssigneeId || isAssigning}
                onClick={async () => {
                  await handleConfirmAssignment()
                  setShowAssignPromptModal(false)
                  handleUpdateStatus('Contacted')
                }}
                className="px-4 py-1.5 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isAssigning && <Loader2 size={13} className="animate-spin" />}
                Assign &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Send Proposal / Quotation Modal (Mandatory Quoted Value) */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-indigo-50">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-indigo-600" />
                <h3 className="text-sm font-bold text-indigo-950">Record Proposal / Quotation Sent</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowProposalModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleConfirmProposal}>
              <div className="p-5 space-y-3.5">
                <p className="text-xs text-gray-600">
                  Moving to <strong>Proposal Sent</strong> requires recording the estimated quotation for pipeline forecasting.
                </p>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Quoted Deal Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹5,00,000 or $8,000"
                    value={proposalForm.quotedAmount}
                    onChange={(e) => setProposalForm((p) => ({ ...p, quotedAmount: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Proposal / SOW Link (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Google Drive, Figma, or proposal document URL"
                    value={proposalForm.proposalLink}
                    onChange={(e) => setProposalForm((p) => ({ ...p, proposalLink: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Proposal Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Scope highlights, payment milestones shared..."
                    value={proposalForm.notes}
                    onChange={(e) => setProposalForm((p) => ({ ...p, notes: e.target.value }))}
                    className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingStatus}
                  className="px-4 py-1.5 text-xs font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isUpdatingStatus && <Loader2 size={13} className="animate-spin" />}
                  Confirm Proposal Sent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 4: Convert Deal Modal (Mandatory Agreed Value & Kickoff Date) */}
      {showConvertModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-emerald-50">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-emerald-600" />
                <h3 className="text-sm font-bold text-emerald-950">Convert Lead / Deal Won 🏆</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowConvertModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleConfirmConvert}>
              <div className="p-5 space-y-3.5">
                <p className="text-xs text-gray-600">
                  Congratulations! Record the confirmed commercial details to celebrate and convert this deal.
                </p>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Final Agreed Deal Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹5,00,000 or $10,000"
                    value={convertForm.dealValue}
                    onChange={(e) => setConvertForm((p) => ({ ...p, dealValue: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Target Project Kickoff Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={convertForm.kickoffDate}
                    onChange={(e) => setConvertForm((p) => ({ ...p, kickoffDate: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Project / Kickoff Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Contract signed for MVP development, kickoff meeting scheduled..."
                    value={convertForm.convertedNotes}
                    onChange={(e) => setConvertForm((p) => ({ ...p, convertedNotes: e.target.value }))}
                    className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowConvertModal(false)}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingStatus}
                  className="px-4 py-1.5 text-xs font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isUpdatingStatus && <Loader2 size={13} className="animate-spin" />}
                  Confirm Deal Won
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 5: Mark Lost / Closed Modal (Mandatory Loss Reason) */}
      {showLostModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-rose-50">
              <div className="flex items-center gap-2">
                <Ban size={16} className="text-rose-600" />
                <h3 className="text-sm font-bold text-rose-950">Mark Lead as {lostTargetStatus}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLostModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <form onSubmit={handleConfirmLost}>
              <div className="p-5 space-y-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Reason for Loss <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedLostReason}
                    onChange={(e) => setSelectedLostReason(e.target.value)}
                    className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 cursor-pointer"
                  >
                    {LOST_REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Additional Explanation / Feedback (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly detail why the client did not proceed..."
                    value={lostNotes}
                    onChange={(e) => setLostNotes(e.target.value)}
                    className="w-full text-xs rounded-md border border-gray-200 bg-white p-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowLostModal(false)}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingStatus}
                  className="px-4 py-1.5 text-xs font-semibold rounded-md bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isUpdatingStatus && <Loader2 size={13} className="animate-spin" />}
                  Confirm {lostTargetStatus}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
