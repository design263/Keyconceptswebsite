'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useAdminAuth } from '../use-admin-auth'
import {
  FileText,
  Eye,
  X,
  Download,
  Check,
  UserCheck,
  Calendar,
  ChevronRight,
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminTable } from '../components/AdminTable'

const STATUS_BADGES = {
  Applied: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Shortlisted: 'bg-purple-50 text-purple-700 border-purple-200/80',
  Interviewing: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Selected: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Rejected: 'bg-rose-50 text-rose-700 border-rose-200/80',
}

const applicationColumns = [
  { key: 'applicant', label: 'Applicant' },
  { key: 'status', label: 'Status' },
  { key: 'job', label: 'Job Position' },
  { key: 'rounds', label: 'Interview Rounds' },
  { key: 'contact', label: 'Contact Details' },
  { key: 'appliedAt', label: 'Applied Date' },
  { key: 'actions', label: 'Actions' },
]

const initialFilters = {
  jobId: '',
  department: '',
  status: '',
  fromDate: '',
  toDate: '',
}


const sortOptions = [
  { value: '-createdAt', label: 'Newest First' },
  { value: 'createdAt', label: 'Oldest First' },
  { value: 'fullName', label: 'Name A-Z' },
  { value: '-fullName', label: 'Name Z-A' },
]

export default function AdminApplicationsPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [applications, setApplications] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [selectedCoverLetter, setSelectedCoverLetter] = useState(null)
  const [deleteModalApp, setDeleteModalApp] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [viewedResumes, setViewedResumes] = useState([])

  // Load viewed resume IDs from localStorage safely on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('admin_viewed_resumes')
      if (stored) {
        const parsed = JSON.parse(stored)
        setTimeout(() => setViewedResumes(parsed), 0)
      }
    } catch {
      // ignore
    }
  }, [])

  // Advance filter state
  const [filters, setFilters] = useState(initialFilters)
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false)
  const [filterOptions, setFilterOptions] = useState({
    jobs: [],
    departments: [],
  })

  // Fetch unique filter options from backend
  useEffect(() => {
    let active = true
    const fetchFilterOptions = async () => {
      try {
        const res = await api.get(endpoints.APPLICATION_FILTER_OPTIONS, token)
        if (active && res) {
          setFilterOptions({
            jobs: res.jobs || [],
            departments: res.departments || [],
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

  // Declarative Advance Filter Schema for AdminTable
  const filterFields = useMemo(
    () => [
      {
        key: 'status',
        label: 'Candidate Status',
        type: 'select',
        placeholder: '--Select Status--',
        options: [
          { value: '', label: '--All Statuses--' },
          { value: 'Applied', label: 'Applied' },
          { value: 'Shortlisted', label: 'Shortlisted' },
          { value: 'Interviewing', label: 'Interviewing' },
          { value: 'Selected', label: 'Selected' },
          { value: 'Rejected', label: 'Rejected' },
        ],
      },
      {
        key: 'jobId',
        label: 'Job Position',
        type: 'select',
        placeholder: '--Select Job--',
        options: [
          { value: '', label: '--Select Job--' },
          ...filterOptions.jobs.map((job) => ({ value: job._id, label: job.title })),
        ],
      },
      {
        key: 'dateRange',
        label: 'Date Applied',
        type: 'dateRange',
        fromKey: 'fromDate',
        toKey: 'toDate',
      },
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: '--Select Department--',
        options: [
          { value: '', label: '--Select Department--' },
          ...filterOptions.departments.map((dept) => ({ value: dept, label: dept })),
        ],
      },
    ],
    [filterOptions.jobs, filterOptions.departments]
  )

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  // Load applications with all filter parameters passed (either with value or "")
  useEffect(() => {
    let ignore = false
    if (!token) return

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      q: q || '',
      sort: sort || '-createdAt',
      jobId: filters.jobId || '',
      department: filters.department || '',
      status: filters.status || '',
      fromDate: filters.fromDate || '',
      toDate: filters.toDate || '',
    })

    const timer = setTimeout(() => {
      if (!ignore) setLoading(true)
    }, 0)

    api.get(`${endpoints.APPLICATIONS}?${queryParams.toString()}`, token)
      .then((res) => {
        if (!ignore && res) {
          setApplications(res)
        }
      })

      .catch(() => {
        if (!ignore) {
          toast.error('Failed to load applications')
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false)
        }
      })

    return () => {
      ignore = true
      clearTimeout(timer)
    }
  }, [token, page, q, limit, sort, filters, refreshKey])

  const openProtectedResume = async (application) => {
    const resumePath = application.resumeFilePath || application.resumeUrl || application.resume
    if (!resumePath) {
      toast.error('No resume attached')
      return
    }
    try {
      // Mark this resume as viewed
      setViewedResumes((prev) => {
        if (!prev.includes(application._id)) {
          const next = [...prev, application._id]
          try {
            localStorage.setItem('admin_viewed_resumes', JSON.stringify(next))
          } catch {
            // ignore
          }
          return next
        }
        return prev
      })

      const cleanPath = resumePath.replace(/^https?:\/\/[^/]+/, '').replace('/api', '')
      const response = await fetch(`${api.baseUrl}${cleanPath}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!response.ok) throw new Error('Could not open resume file')
      const blob = await response.blob()
      window.open(URL.createObjectURL(blob), '_blank', 'noopener,noreferrer')
    } catch {
      toast.error('Failed to open resume')
    }
  }

  const handleConfirmDelete = async () => {
    if (!token || !deleteModalApp) return
    setIsDeleting(true)
    try {
      const res = await api.delete(
        `${endpoints.APPLICATIONS}/${deleteModalApp._id}`,
        token
      )
      toast.success(res?.message || 'Application deleted successfully')
      setDeleteModalApp(null)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to delete application')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="w-full min-w-0 space-y-4 pb-8">
      <div className="shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <FileText size={16} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Applications</h1>
            <p className="text-xs text-muted-foreground">{applications.total} total applications</p>
          </div>
        </div>
      </div>

      <AdminTable
        title="All Applications"
        total={applications.total}
        columns={applicationColumns}
        data={applications.data}
        loading={loading}
        loadingMessage="Loading applications..."
        emptyIcon={FileText}
        emptyMessage="No applications found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search applicants, jobs...',
        }}
        advanceFilter={{
          fields: filterFields,
          values: filters,
          isOpen: showAdvanceFilter,
          onToggle: () => setShowAdvanceFilter((prev) => !prev),
          onApply: (newFilters) => {
            setFilters(newFilters)
            setPage(1)
            setShowAdvanceFilter(false)
          },
          onReset: () => {
            setFilters(initialFilters)
            setPage(1)
          },
          onClearAll: () => {
            setFilters(initialFilters)
            setQ('')
            setPage(1)
          },
          onRemove: (key, field) => {
            if (field.type === 'dateRange') {
              setFilters((prev) => ({
                ...prev,
                [field.fromKey || `${field.key}From`]: '',
                [field.toKey || `${field.key}To`]: '',
              }))
            } else {
              setFilters((prev) => ({ ...prev, [key]: '' }))
            }
            setPage(1)
          },
        }}
        sort={{
          value: sort,
          onChange: (value) => {
            setSort(value)
            setPage(1)
          },
          options: sortOptions,
        }}
        page={page}
        totalPages={applications.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(application) => {
          const hasResume = Boolean(application.resumeFilePath || application.resumeUrl || application.resume)
          const isResumeViewed = viewedResumes.includes(application._id)
          const appStatus = application.status || 'Applied'
          const rounds = application.interviewRounds || []
          const completedRounds = rounds.filter((r) => r.status === 'Completed').length

          return (
            <tr
              key={application._id}
              className="hover:bg-orange-50/30 transition-colors duration-150 group"
            >
              <td className="px-4 py-3 whitespace-nowrap">
                <Link
                  href={`/admin/applications/${application._id}`}
                  className="font-bold text-gray-900 hover:text-[#f1592a] text-xs sm:text-sm transition-colors flex items-center gap-1 group/name"
                >
                  <span>{application.fullName}</span>
                  <ChevronRight size={13} className="text-gray-400 group-hover/name:text-[#f1592a] transition-transform group-hover/name:translate-x-0.5" />
                </Link>
              </td>

              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    STATUS_BADGES[appStatus] || 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {appStatus}
                </span>
              </td>

              <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {application.jobId?.title || 'Unknown Position'}
                </span>
              </td>

              <td className="px-4 py-3 whitespace-nowrap">
                {rounds.length > 0 ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/80">
                    <Calendar size={11} className="text-amber-600" />
                    {rounds.length} {rounds.length === 1 ? 'Round' : 'Rounds'}
                    {completedRounds > 0 && ` (${completedRounds} done)`}
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400 italic">None scheduled</span>
                )}
              </td>

              <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                <div className="flex flex-col text-[11px] leading-tight">
                  <span className="text-gray-800 font-medium">{application.email}</span>
                  <span className="text-gray-400">{application.phone}</span>
                </div>
              </td>

              <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                {application.createdAt
                  ? new Date(application.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : '-'}
              </td>

              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-1.5">
                  <Link
                    href={`/admin/applications/${application._id}`}
                    title="Manage candidate interview lifecycle"
                    className="h-7 px-2.5 rounded-md text-[#f1592a] bg-orange-50 hover:bg-[#f1592a] hover:text-white border border-orange-200/80 transition-all font-semibold text-xs flex items-center gap-1 shadow-2xs"
                  >
                    <UserCheck size={13} /> Manage
                  </Link>

                  {hasResume && (
                    isResumeViewed ? (
                      <button
                        title="Resume opened - Click to view again"
                        onClick={() => openProtectedResume(application)}
                        className="h-7 px-2 rounded-md text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all font-medium text-xs flex items-center gap-1 shadow-2xs"
                      >
                        <Check size={12} className="text-emerald-600" /> Resume
                      </button>
                    ) : (
                      <button
                        title="Open Resume"
                        onClick={() => openProtectedResume(application)}
                        className="h-7 px-2 rounded-md text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition-all font-medium text-xs flex items-center gap-1 shadow-2xs"
                      >
                        <Download size={12} /> Resume
                      </button>
                    )
                  )}

                  {application.coverLetter && (
                    <button
                      title="View Cover Letter"
                      onClick={() => setSelectedCoverLetter(application.coverLetter)}
                      className="h-7 px-2 rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/70 transition-all font-medium text-xs flex items-center gap-1 shadow-2xs"
                    >
                      <Eye size={12} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          )
        }}

      />

      {/* Cover Letter Modal */}
      {selectedCoverLetter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden border border-gray-200 transform transition-all">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#f1592a]/10 flex items-center justify-center">
                  <FileText size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Cover Letter</h2>
                  <p className="text-xs text-muted-foreground">Applicant cover letter content</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCoverLetter(null)}
                className="w-7 h-7 rounded-sm flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">
                {selectedCoverLetter}
              </pre>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedCoverLetter(null)}
                className="px-4 py-2 rounded-sm text-sm font-medium text-foreground border border-gray-200 hover:bg-muted transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple Delete Confirmation Dialog */}
      {deleteModalApp && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground">Delete Application</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Are you sure you want to delete the application from <span className="font-semibold text-foreground">&ldquo;{deleteModalApp.fullName}&rdquo;</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setDeleteModalApp(null)}
                disabled={isDeleting}
                className="px-3.5 py-1.5 text-xs font-medium rounded-sm border border-gray-200 text-foreground hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="px-4 py-1.5 text-xs font-semibold rounded-sm bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50"
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
