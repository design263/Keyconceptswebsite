'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useAdminAuth } from '../use-admin-auth'
import {
  MessageSquare,
  Eye,
  Trash2,
  X,
  Check,
  Mail,
  Phone,
  Building2,
  HelpCircle,
  DollarSign,
  UserCheck,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminTable } from '../components/AdminTable'

export const formatTopic = (val) => {
  if (!val) return 'General Inquiry'
  const specialMap = {
    'support-maintenance': 'Support Maintenance',
    'custom-development': 'Custom Development',
    'api-integration': 'API Integration',
    'web-mobile': 'Web & Mobile',
    'mvp-studio': 'MVP Studio',
    'digital-marketing': 'Digital Marketing',
    'odoo-erp': 'Odoo ERP',
    'mvp development': 'MVP Development',
    'custom erp solutions': 'Custom ERP Solutions',
    'product development': 'Product Development',
    'visitorz management system': 'Visitorz Management System',
    'younited communities': 'Younited Communities',
    'claim genie': 'Claim Genie',
  }
  const lower = String(val).trim().toLowerCase()
  if (specialMap[lower]) return specialMap[lower]

  return String(val)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const STAGE_BADGES = {
  New: {
    bg: 'bg-slate-100 text-slate-700 border-slate-200/80',
    dot: 'bg-slate-500',
    label: 'New',
  },
  Contacted: {
    bg: 'bg-blue-50 text-blue-700 border-blue-200/80',
    dot: 'bg-blue-500',
    label: 'Contacted',
  },
  Qualified: {
    bg: 'bg-purple-50 text-purple-700 border-purple-200/80',
    dot: 'bg-purple-500',
    label: 'Qualified',
  },
  'Proposal Sent': {
    bg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    dot: 'bg-indigo-500',
    label: 'Proposal Sent',
  },
  Negotiation: {
    bg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    dot: 'bg-amber-500',
    label: 'Negotiation',
  },
  Converted: {
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dot: 'bg-emerald-500',
    label: 'Converted',
  },
  Lost: {
    bg: 'bg-rose-50 text-rose-700 border-rose-200/80',
    dot: 'bg-rose-500',
    label: 'Lost',
  },
  Closed: {
    bg: 'bg-gray-100 text-gray-600 border-gray-200',
    dot: 'bg-gray-400',
    label: 'Closed',
  },
}

const leadColumns = [
  { key: 'name', label: 'Client / Company' },
  { key: 'subject', label: 'Service & Budget' },
  { key: 'stage', label: 'Pipeline Stage' },
  { key: 'assignedTo', label: 'Assigned To' },
  { key: 'nextFollowUp', label: 'Next Follow-Up' },
  { key: 'contact', label: 'Contact Info' },
  { key: 'date', label: 'Inquiry Date' },
  { key: 'actions', label: 'Actions' },
]

const initialFilters = {
  subject: '',
  approximateBudget: '',
  status: '',
  stage: '',
  assignedTo: '',
  priority: '',
  fromDate: '',
  toDate: '',
}

const sortOptions = [
  { value: '-createdAt', label: 'Newest First' },
  { value: 'createdAt', label: 'Oldest First' },
  { value: 'name', label: 'Name A-Z' },
  { value: '-name', label: 'Name Z-A' },
  { value: 'nextFollowUpDate', label: 'Follow-Up Date' },
]

export default function AdminLeadsPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [leads, setLeads] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [selectedLead, setSelectedLead] = useState(null)
  const [deleteModalLead, setDeleteModalLead] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  // Active quick tab
  const [activeTab, setActiveTab] = useState('') // '' | 'New' | 'in_progress' | 'Converted' | 'closed_lost'

  // Viewed leads tracking (synced with localStorage for instant reactivity)
  const [viewedLeadIds, setViewedLeadIds] = useState([])

  // Advance filter state
  const [filters, setFilters] = useState(initialFilters)
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false)
  const [filterOptions, setFilterOptions] = useState({
    services: [],
    budgets: [],
  })
  const [assigneesList, setAssigneesList] = useState([])

  // Load viewed lead IDs from localStorage safely on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('admin_viewed_leads')
      if (stored) {
        const parsed = JSON.parse(stored)
        setTimeout(() => setViewedLeadIds(parsed), 0)
      }
    } catch {
      // ignore
    }
  }, [])

  // Fetch unique filter options from backend
  useEffect(() => {
    let active = true
    const fetchFilterOptions = async () => {
      try {
        const res = await api.get(endpoints.CONTACT_LEAD_FILTER_OPTIONS, token)
        if (active && res) {
          setFilterOptions({
            services: res.services || [],
            budgets: res.budgets || [],
          })
        }
      } catch {
        // Silently fallback if filter-options fails
      }
    }
    if (token) {
      fetchFilterOptions()
    }
    return () => {
      active = false
    }
  }, [token])

  // Fetch Lead Assignees for filter
  useEffect(() => {
    if (!token) return
    api.get(`${endpoints.LEAD_ASSIGNEES}?limit=100&isActive=true`, token)
      .then((res) => {
        if (res?.data) {
          setAssigneesList(res.data)
        }
      })
      .catch(() => {
        // ignore
      })
  }, [token])

  // Declarative Advance Filter Schema for AdminTable
  const filterFields = useMemo(
    () => [
      {
        key: 'stage',
        label: 'Pipeline Stage',
        type: 'select',
        placeholder: '--Select Stage--',
        options: [
          { value: '', label: 'All Stages' },
          { value: 'New', label: 'New' },
          { value: 'Contacted', label: 'Contacted' },
          { value: 'Qualified', label: 'Qualified' },
          { value: 'Proposal Sent', label: 'Proposal Sent' },
          { value: 'Negotiation', label: 'Negotiation' },
          { value: 'Converted', label: 'Converted' },
          { value: 'Lost', label: 'Lost' },
          { value: 'Closed', label: 'Closed' },
        ],
      },
      {
        key: 'assignedTo',
        label: 'Assigned Member',
        type: 'select',
        placeholder: '--Select Assignee--',
        options: [
          { value: '', label: 'All Assignees' },
          { value: 'unassigned', label: 'Unassigned' },
          ...assigneesList.map((a) => ({ value: a._id, label: `${a.name} (${a.role})` })),
        ],
      },
      {
        key: 'priority',
        label: 'Priority',
        type: 'select',
        placeholder: '--Select Priority--',
        options: [
          { value: '', label: 'All Priorities' },
          { value: 'Urgent', label: 'Urgent' },
          { value: 'High', label: 'High' },
          { value: 'Medium', label: 'Medium' },
          { value: 'Low', label: 'Low' },
        ],
      },
      {
        key: 'subject',
        label: 'Service',
        type: 'select',
        placeholder: '--Select Service--',
        options: [
          { value: '', label: '--Select Service--' },
          ...filterOptions.services.map((s) => ({ value: s, label: formatTopic(s) })),
        ],
      },
      {
        key: 'approximateBudget',
        label: 'Approximate Budget',
        type: 'select',
        placeholder: '--Select Budget--',
        options: [
          { value: '', label: '--Select Budget--' },
          ...filterOptions.budgets.map((b) => ({ value: b, label: b })),
        ],
      },
      {
        key: 'dateRange',
        label: 'Date Submitted',
        type: 'dateRange',
        startKey: 'fromDate',
        endKey: 'toDate',
      },
    ],
    [filterOptions.services, filterOptions.budgets, assigneesList]
  )

  // Fetch leads with server-side pagination, filters, and debounced search
  useEffect(() => {
    let ignore = false
    if (!token) return

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      sort: sort || '-createdAt',
      search: q || '',
      subject: filters.subject || '',
      approximateBudget: filters.approximateBudget || '',
      stage: activeTab || filters.stage || filters.status || '',
      assignedTo: filters.assignedTo || '',
      priority: filters.priority || '',
      fromDate: filters.fromDate || '',
      toDate: filters.toDate || '',
    })

    const timer = setTimeout(() => {
      if (!ignore) setLoading(true)
    }, 0)

    api.get(`${endpoints.CONTACT_LEADS}?${queryParams.toString()}`, token)
      .then((res) => {
        if (!ignore && res) {
          const list = res.data || res.leads || (Array.isArray(res) ? res : [])
          const totalCount = res.total ?? res.pagination?.total ?? list.length
          const pagesCount = res.totalPages ?? res.pagination?.totalPages ?? (Math.ceil(totalCount / limit) || 1)
          setLeads({
            data: list,
            total: totalCount,
            page: res.page ?? page,
            totalPages: pagesCount,
          })
        }
      })
      .catch((err) => {
        if (!ignore) {
          toast.error(err?.message || 'Failed to load contact leads')
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
      clearTimeout(timer)
    }
  }, [token, page, q, limit, sort, filters, activeTab, refreshKey])

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  // Mark lead viewed in UI and persist to localStorage
  const markAsReadInUI = (leadId) => {
    setViewedLeadIds((prev) => {
      if (prev.includes(leadId)) return prev
      const updated = [...prev, leadId]
      try {
        localStorage.setItem('admin_viewed_leads', JSON.stringify(updated))
      } catch {
        // ignore
      }
      return updated
    })

    setLeads((prev) => ({
      ...prev,
      data: prev.data.map((item) =>
        item._id === leadId
          ? { ...item, isViewed: true, viewedAt: item.viewedAt || new Date().toISOString() }
          : item
      ),
    }))
  }

  // Open lead detail popup modal
  const handleOpenLead = async (lead) => {
    setSelectedLead(lead)
    markAsReadInUI(lead._id)

    if (token) {
      try {
        await api.patch(endpoints.CONTACT_LEAD_VIEWED(lead._id), {}, token)
      } catch {
        // fail silently for background API call
      }
    }
  }

  // Delete Contact Lead
  const handleConfirmDelete = async () => {
    if (!token || !deleteModalLead) return
    setIsDeleting(true)
    try {
      const res = await api.delete(`${endpoints.CONTACT_LEADS}/${deleteModalLead._id}`, token)
      toast.success(res?.message || 'Lead deleted successfully')
      setDeleteModalLead(null)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to delete lead')
    } finally {
      setIsDeleting(false)
    }
  }

  // Clean raw message text
  const getCleanMessage = (lead) => {
    if (!lead?.message) return 'No message content provided.'
    const rawLines = lead.message.split('\n')
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

  return (
    <div className="w-full min-w-0 space-y-4 pb-8">
      {/* Header Info */}
      <div className="shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <MessageSquare size={16} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Contact Leads</h1>
            <p className="text-xs text-muted-foreground">
              Total {leads.total} client inquiries & business leads
            </p>
          </div>
        </div>

        <Link
          href="/admin/master/lead-assignees"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 bg-orange-50 text-[#f1592a] hover:bg-orange-100 border border-orange-200/80 cursor-pointer shadow-2xs"
        >
          <UserCheck size={14} /> Manage Assignees
        </Link>
      </div>

      {/* AdminTable Component */}
      <AdminTable
        title="All Inbound Leads"
        total={leads.total}
        columns={leadColumns}
        data={leads.data}
        minWidth="980px"
        loading={loading}
        loadingMessage="Loading leads..."
        emptyIcon={MessageSquare}
        emptyMessage="No contact leads found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search name, email, company, service, phone...',
        }}
        advanceFilter={{
          fields: filterFields,
          values: filters,
          isOpen: showAdvanceFilter,
          onToggle: () => setShowAdvanceFilter((prev) => !prev),
          onApply: (newFilters) => {
            setFilters(newFilters)
            setActiveTab('')
            setPage(1)
            setShowAdvanceFilter(false)
          },
          onReset: () => {
            setFilters(initialFilters)
            setActiveTab('')
            setPage(1)
          },
          onClearAll: () => {
            setFilters(initialFilters)
            setActiveTab('')
            setQ('')
            setPage(1)
          },
          onRemove: (key) => {
            setFilters((prev) => ({ ...prev, [key]: '' }))
            setPage(1)
          },
        }}
        quickTabs={
          <div className="inline-flex items-center p-0.5 rounded-md bg-gray-100 border border-gray-200 text-xs font-medium">
            <button
              type="button"
              onClick={() => {
                setActiveTab('')
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors cursor-pointer ${
                !activeTab
                  ? 'bg-white text-gray-900 font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              All Leads
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('New')
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors cursor-pointer ${
                activeTab === 'New'
                  ? 'bg-slate-700 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              New
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('in_progress')
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors cursor-pointer ${
                activeTab === 'in_progress'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              In Progress
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('Converted')
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors cursor-pointer ${
                activeTab === 'Converted'
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Converted 🏆
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('closed_lost')
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors cursor-pointer ${
                activeTab === 'closed_lost'
                  ? 'bg-rose-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Lost / Closed
            </button>
          </div>
        }
        sort={{
          value: sort,
          onChange: (value) => {
            setSort(value)
            setPage(1)
          },
          options: sortOptions,
        }}
        page={page}
        totalPages={leads.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(lead) => {
          const isViewed = Boolean(lead.isViewed || viewedLeadIds.includes(lead._id))
          const company = lead.company || '—'
          const rawPhoneDigits = (lead.phone || '').replace(/\D/g, '')
          const phone = rawPhoneDigits.length >= 5 ? lead.phone : '—'
          const budget = lead.approximateBudget || '—'
          const stageStyle = STAGE_BADGES[lead.status] || STAGE_BADGES.New
          const assignee = lead.assignedTo

          // Determine next follow-up urgency
          let followUpCls = 'text-gray-500'
          let followUpText = '—'
          if (lead.nextFollowUpDate) {
            const fDate = new Date(lead.nextFollowUpDate)
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const fDay = new Date(fDate)
            fDay.setHours(0, 0, 0, 0)

            followUpText = fDate.toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
            })

            if (fDay.getTime() < today.getTime()) {
              followUpCls = 'text-rose-600 font-semibold'
            } else if (fDay.getTime() === today.getTime()) {
              followUpCls = 'text-amber-600 font-semibold'
            } else {
              followUpCls = 'text-blue-600 font-medium'
            }
          }

          return (
            <tr
              key={lead._id}
              className="hover:bg-orange-50/30 transition-colors duration-150 group"
            >
              {/* Client & Company */}
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {!isViewed && (
                    <span
                      className="w-2 h-2 rounded-full bg-[#f1592a] shrink-0 shadow-2xs animate-pulse"
                      title="New Unread"
                    />
                  )}
                  <div>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm block">
                      {lead.name}
                    </span>
                    <span className="text-[11px] text-gray-500 flex items-center gap-1">
                      <Building2 size={11} className="text-gray-400" />
                      {company}
                    </span>
                  </div>
                </div>
              </td>

              {/* Service & Budget */}
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-orange-50 text-[#f1592a] border border-orange-200/60 max-w-[190px] truncate">
                    {formatTopic(lead.subject)}
                  </span>
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <DollarSign size={11} className="text-gray-400" />
                    {budget}
                  </div>
                </div>
              </td>

              {/* Pipeline Stage Badge */}
              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${stageStyle.bg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${stageStyle.dot}`} />
                  {stageStyle.label}
                </span>
              </td>

              {/* Assigned Team Member */}
              <td className="px-4 py-3 whitespace-nowrap">
                {assignee ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs">
                    <div className="w-5 h-5 rounded-full bg-[#f1592a]/15 text-[#f1592a] font-bold text-[10px] flex items-center justify-center">
                      {assignee.name?.charAt(0) || 'U'}
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="font-semibold text-gray-800 text-[11px]">{assignee.name}</span>
                      <span className="text-[10px] text-gray-400">{assignee.role || 'Member'}</span>
                    </div>
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium text-gray-400 bg-gray-100 border border-gray-200/60">
                    Unassigned
                  </span>
                )}
              </td>

              {/* Next Follow-Up */}
              <td className="px-4 py-3 whitespace-nowrap">
                <div className={`flex items-center gap-1 text-xs ${followUpCls}`}>
                  <Calendar size={12} />
                  <span>{followUpText}</span>
                </div>
              </td>

              {/* Contact Info */}
              <td className="px-4 py-3 whitespace-nowrap text-xs">
                <div className="flex flex-col text-[11px] leading-tight">
                  <span className="text-gray-800 font-medium">{lead.email}</span>
                  <span className="text-gray-400">{phone}</span>
                </div>
              </td>

              {/* Submitted Date */}
              <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                {lead.createdAt
                  ? new Date(lead.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : '-'}
              </td>

              {/* Actions */}
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-1.5">
                  <Link
                    href={`/admin/leads/${lead._id}`}
                    title="Open Lead Lifecycle & CRM Workspace"
                    className="h-7 px-2.5 rounded-md text-[#f1592a] bg-orange-50 hover:bg-[#f1592a] hover:text-white border border-orange-200/80 transition-all font-semibold text-xs flex items-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <UserCheck size={13} /> Manage
                  </Link>

                  <button
                    title="Quick Peek Message"
                    onClick={() => handleOpenLead(lead)}
                    className="h-7 w-7 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200/80 transition-all flex items-center justify-center shadow-2xs cursor-pointer"
                  >
                    <Eye size={13} />
                  </button>

                  <button
                    title="Delete Lead"
                    onClick={() => setDeleteModalLead(lead)}
                    className="h-7 w-7 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200/80 transition-all flex items-center justify-center shadow-2xs cursor-pointer"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </td>
            </tr>
          )
        }}
      />

      {/* Quick Message Peek Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xl rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#f1592a]/10 flex items-center justify-center">
                  <MessageSquare size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Inquiry Quick Peek</h2>
                  <p className="text-xs text-muted-foreground">
                    From {selectedLead.name} ({selectedLead.email})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 max-h-[70vh] overflow-y-auto space-y-4">
              <div className="grid grid-cols-2 gap-3 bg-gray-50/70 p-3.5 rounded-lg border border-gray-100 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[11px]">Service</span>
                  <span className="font-semibold text-gray-900">{formatTopic(selectedLead.subject)}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Approximate Budget</span>
                  <span className="font-semibold text-gray-900">{selectedLead.approximateBudget || '—'}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Company</span>
                  <span className="font-semibold text-gray-900">{selectedLead.company || '—'}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">Phone</span>
                  <span className="font-semibold text-gray-900">{selectedLead.phone || '—'}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Project Message</label>
                <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                  <pre className="whitespace-pre-wrap text-xs text-gray-800 leading-relaxed font-sans">
                    {getCleanMessage(selectedLead)}
                  </pre>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50/50">
              <Link
                href={`/admin/leads/${selectedLead._id}`}
                onClick={() => setSelectedLead(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-2xs"
              >
                Open Full CRM Workspace <ArrowRight size={13} />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteModalLead && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground">Delete Contact Lead</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Are you sure you want to delete inquiry from{' '}
              <span className="font-semibold text-foreground">&ldquo;{deleteModalLead.name}&rdquo;</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setDeleteModalLead(null)}
                disabled={isDeleting}
                className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-foreground hover:bg-gray-100 transition-colors disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="px-4 py-1.5 text-xs font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
