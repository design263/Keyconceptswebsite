'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import {
  BriefcaseBusiness,
  Pencil,
  Trash2,
  Plus,
  X,
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminCustomSelect, inputCls } from '../components/AdminCustomSelect'
import { AdminTable } from '../components/AdminTable'

const toText = (items) => items.join('\n')
const toList = (value) =>
  value.split('\n').map((i) => i.trim()).filter(Boolean)

const initialJob = {
  title: '',
  department: '',
  location: '',
  description: '',
  requirements: '',
  responsibilities: '',
  niceToHave: '',
  benefits: '',
  salary: '',
  experience: '',
  employmentType: '',
  status: 'active',
}

const initialFilters = {
  department: '',
  location: '',
  employmentType: '',
  experience: '',
  status: '',
  fromDate: '',
  toDate: '',
}

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
      {label}
    </label>
    {children}
  </div>
)

const StatusBadge = ({ status }) =>
  status === 'active' ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-200/80 shadow-2xs">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
      Inactive
    </span>
  )

export default function AdminJobsPage() {
  const token = useAdminAuth()

  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [jobs, setJobs] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [jobForm, setJobForm] = useState(initialJob)
  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  // Advance filter state
  const [filters, setFilters] = useState(initialFilters)
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false)
  const [filterOptions, setFilterOptions] = useState({
    departments: [],
    locations: [],
    employmentTypes: [],
    experiences: [],
  })

  // Status Change Dialog state
  const [statusModalJob, setStatusModalJob] = useState(null)
  const [targetStatus, setTargetStatus] = useState('active')
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const formRef = useRef(null)

  const toggleForm = () => {
    if (showForm) {
      setFormVisible(false)
      setTimeout(() => setShowForm(false), 320)
    } else {
      setShowForm(true)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setFormVisible(true))
      )
    }
  }

  // Fetch unique filter options from backend
  useEffect(() => {
    let active = true
    const fetchFilterOptions = async () => {
      try {
        const res = await api.get(endpoints.JOB_FILTER_OPTIONS)
        if (active && res) {
          setFilterOptions({
            departments: res.departments || [],
            locations: res.locations || [],
            employmentTypes: res.employmentTypes || [],
            experiences: res.experiences || [],
          })
        }
      } catch {
        // Fallback options will be used
      }
    }
    fetchFilterOptions()
    return () => {
      active = false
    }
  }, [])

  // Deduplicated dropdown options combining backend distinct values with standard defaults
  const departmentOptions = useMemo(() => {
    const defaults = ['Engineering', 'Design', 'Marketing', 'Product', 'Sales', 'Backend', 'Front End']
    return Array.from(new Set([...filterOptions.departments, ...defaults])).filter(Boolean).sort()
  }, [filterOptions.departments])

  const employmentTypeOptions = useMemo(() => {
    const defaults = ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance']
    return Array.from(new Set([...filterOptions.employmentTypes, ...defaults])).filter(Boolean).sort()
  }, [filterOptions.employmentTypes])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locationOptions = useMemo(() => {
    const defaults = ['Remote', 'On-Site', 'Hybrid', 'Mumbai', 'Bengaluru', 'Delhi NCR']
    return Array.from(new Set([...filterOptions.locations, ...defaults])).filter(Boolean).sort()
  }, [filterOptions.locations])

  const experienceOptions = useMemo(() => {
    const defaults = ['Entry Level', '1-2 years', '2-4 years', '3-5 years', '5+ years']
    return Array.from(new Set([...filterOptions.experiences, ...defaults])).filter(Boolean).sort()
  }, [filterOptions.experiences])

  // Declarative Advance Filter Schema for AdminTable
  const filterFields = useMemo(
    () => [
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: '--Select--',
        options: [
          { value: '', label: '--Select--' },
          ...departmentOptions.map((dept) => ({ value: dept, label: dept })),
        ],
      },
      {
        key: 'employmentType',
        label: 'Employment Type',
        type: 'select',
        placeholder: '--Select--',
        options: [
          { value: '', label: '--Select--' },
          ...employmentTypeOptions.map((type) => ({ value: type, label: type })),
        ],
      },
      // {
      //   key: 'location',
      //   label: 'Location',
      //   type: 'select',
      //   placeholder: '--Select--',
      //   options: [
      //     { value: '', label: '--Select--' },
      //     ...locationOptions.map((loc) => ({ value: loc, label: loc })),
      //   ],
      // },
      {
        key: 'experience',
        label: 'Experience',
        type: 'select',
        placeholder: '--Select--',
        options: [
          { value: '', label: '--Select--' },
          ...experienceOptions.map((exp) => ({ value: exp, label: exp })),
        ],
      },
      // {
      //   key: 'status',
      //   label: 'Status',
      //   type: 'select',
      //   placeholder: '--Select--',
      //   options: [
      //     { value: '', label: '--Select--' },
      //     { value: 'active', label: 'Active' },
      //     { value: 'inactive', label: 'Inactive' },
      //   ],
      // },
      // {
      //   key: 'dateRange',
      //   label: 'Date Posted',
      //   type: 'dateRange',
      //   fromKey: 'fromDate',
      //   toKey: 'toDate',
      // },
    ],
    [departmentOptions, employmentTypeOptions, experienceOptions]
  )

  // Load jobs with all filter parameters passed (either with value or "")
  useEffect(() => {
    let ignore = false
    if (!token) return

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      q: q || '',
      sort: sort || '-createdAt',
      department: filters.department || '',
      location: filters.location || '',
      employmentType: filters.employmentType || '',
      experience: filters.experience || '',
      status: filters.status || '',
      fromDate: filters.fromDate || '',
      toDate: filters.toDate || '',
    })

    const timer = setTimeout(() => {
      if (!ignore) setLoading(true)
    }, 0)

    api.get(`${endpoints.JOBS}?${queryParams.toString()}`, token)
      .then((res) => {
        if (!ignore) {
          setJobs(res)
        }
      })
      .catch(() => {
        if (!ignore) {
          toast.error('Failed to load jobs')
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

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  const saveJob = async (e) => {
    if (!token) return
    e.preventDefault()

    const payload = {
      ...jobForm,
      requirements: toList(jobForm.requirements),
      responsibilities: toList(jobForm.responsibilities),
      niceToHave: toList(jobForm.niceToHave),
      benefits: toList(jobForm.benefits),
    }

    try {
      if (editingId) {
        const res = await api.put(`${endpoints.JOBS}/${editingId}`, payload, token)
        toast.success(res?.message || 'Job updated successfully')
      } else {
        const res = await api.post(endpoints.JOBS, payload, token)
        toast.success(res?.message || 'Job created successfully')
      }

      setEditingId(null)
      setJobForm(initialJob)
      setFormVisible(false)
      setTimeout(() => setShowForm(false), 320)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to save job')
    }
  }

  // Handle status update confirmation from modal
  const handleConfirmStatusChange = async () => {
    if (!token || !statusModalJob) return
    setUpdatingStatus(true)
    try {
      const res = await api.patch(
        `/jobs/${statusModalJob._id}`,
        { status: targetStatus },
        token
      )
      toast.success(res?.message || `Status updated to ${targetStatus}`)
      setStatusModalJob(null)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to update job status')
    } finally {
      setUpdatingStatus(false)
    }
  }

  const sortOptions = [
    { value: '-createdAt', label: 'Newest First' },
    { value: 'createdAt', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
    { value: '-title', label: 'Title Z-A' },
  ]

  const jobColumns = [
    { key: 'title', label: 'Title' },
    { key: 'department', label: 'Department' },
    { key: 'type', label: 'Type' },
    { key: 'experience', label: 'Experience' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ]

  return (
    <div className="w-full min-w-0 space-y-4 pb-8">
      <div className="shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <BriefcaseBusiness size={16} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Job Openings</h1>
            <p className="text-xs text-muted-foreground">{jobs.total} total positions</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (showForm && editingId) {
              setEditingId(null)
              setJobForm(initialJob)
              if (!showForm) toggleForm()
            } else {
              toggleForm()
            }
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 bg-[#f1592a] text-white hover:bg-[#f1592a]/90 shadow-sm shadow-[#f1592a]/20"
        >
          <Plus size={14} /> Add Job Opening
        </button>
      </div>

      {showForm && (
        <div
          ref={formRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${formVisible ? 'max-h-[2000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'
            }`}
        >
          <form
            onSubmit={saveJob}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Form header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#f1592a]/10 flex items-center justify-center">
                  <BriefcaseBusiness size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">
                    {editingId ? 'Edit Job Opening' : 'Create New Job Opening'}
                  </h2>
                  <p className="text-xs text-muted-foreground">Fill in all required fields below</p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleForm}
                className="w-7 h-7 rounded-sm flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>

            {/* Form body */}
            <div className="p-6 grid gap-4">
              {/* Title */}
              <Field label="Job Title">
                <input
                  className={inputCls}
                  placeholder="e.g. Senior React Developer"
                  value={jobForm.title}
                  onChange={(e) => setJobForm((p) => ({ ...p, title: e.target.value }))}
                  required
                />
              </Field>

              {/* Department + Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Department">
                  <input
                    className={inputCls}
                    placeholder="e.g. Engineering"
                    value={jobForm.department}
                    onChange={(e) => setJobForm((p) => ({ ...p, department: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Location">
                  <input
                    className={inputCls}
                    placeholder="e.g. Remote / Mumbai"
                    value={jobForm.location}
                    onChange={(e) => setJobForm((p) => ({ ...p, location: e.target.value }))}
                    required
                  />
                </Field>
              </div>

              {/* Description */}
              <Field label="Description">
                <textarea
                  className={inputCls}
                  placeholder="Describe role and what team does..."
                  value={jobForm.description}
                  onChange={(e) => setJobForm((p) => ({ ...p, description: e.target.value }))}
                  rows={3}
                  required
                />
              </Field>

              {/* Responsibilities + Requirements */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Responsibilities (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={'- Build features\n- Review PRs\n- Write tests'}
                    value={jobForm.responsibilities}
                    onChange={(e) => setJobForm((p) => ({ ...p, responsibilities: e.target.value }))}
                    rows={4}
                    required
                  />
                </Field>
                <Field label="Requirements (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={'- 3+ years React\n- TypeScript\n- REST APIs'}
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm((p) => ({ ...p, requirements: e.target.value }))}
                    rows={4}
                    required
                  />
                </Field>
              </div>

              {/* Nice to Have + Benefits */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nice to Have (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={'- GraphQL\n- Docker'}
                    value={jobForm.niceToHave}
                    onChange={(e) => setJobForm((p) => ({ ...p, niceToHave: e.target.value }))}
                    rows={3}
                  />
                </Field>
                <Field label="Benefits (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={'- Health insurance\n- Flexible hours'}
                    value={jobForm.benefits}
                    onChange={(e) => setJobForm((p) => ({ ...p, benefits: e.target.value }))}
                    rows={3}
                  />
                </Field>
              </div>

              {/* Salary + Experience + Employment Type + Status */}
              <div className="grid md:grid-cols-4 gap-4">
                <Field label="Salary">
                  <input
                    className={inputCls}
                    placeholder="e.g. $12-18 LPA"
                    value={jobForm.salary}
                    onChange={(e) => setJobForm((p) => ({ ...p, salary: e.target.value }))}
                  />
                </Field>
                <Field label="Experience">
                  <input
                    className={inputCls}
                    placeholder="e.g. 3-5 years"
                    value={jobForm.experience}
                    onChange={(e) => setJobForm((p) => ({ ...p, experience: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Employment Type">
                  <input
                    className={inputCls}
                    placeholder="e.g. Full-time"
                    value={jobForm.employmentType}
                    onChange={(e) => setJobForm((p) => ({ ...p, employmentType: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Status">
                  <AdminCustomSelect
                    value={jobForm.status}
                    onChange={(value) => setJobForm((p) => ({ ...p, status: value }))}
                    options={[
                      { value: 'active', label: 'Active' },
                      { value: 'inactive', label: 'Inactive' },
                    ]}
                  />
                </Field>
              </div>
            </div>

            {/* Form footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3 bg-muted/30">
              <button
                type="button"
                onClick={toggleForm}
                className="px-4 py-2 rounded-sm text-sm font-medium text-foreground border border-gray-200 hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-sm text-sm font-semibold bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-sm shadow-[#f1592a]/20"
              >
                {editingId ? 'Update Job' : 'Create Job'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* AdminTable with fully reusable, schema-driven Advance Filter */}
      <AdminTable
        title="All Job Openings"
        total={jobs.total}
        columns={jobColumns}
        data={jobs.data}
        loading={loading}
        loadingMessage="Loading jobs..."
        emptyIcon={BriefcaseBusiness}
        emptyMessage="No job openings found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search jobs...',
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
        quickTabs={
          <div className="inline-flex items-center p-0.5 rounded-md bg-gray-100 border border-gray-200 text-xs font-medium">
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, status: '' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${!filters.status
                ? 'bg-white text-gray-900 font-semibold shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              All Jobs
            </button>
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, status: 'active' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${filters.status === 'active'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              Active
            </button>
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, status: 'inactive' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${filters.status === 'inactive'
                ? 'bg-red-600 text-white font-semibold shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              Inactive
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
        totalPages={jobs.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(job) => (
          <tr
            key={job._id}
            className="hover:bg-orange-50/30 transition-colors duration-150 group"
          >
            <td className="px-4 py-3 font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap">
              {job.title}
            </td>
            <td className="px-4 py-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
              {job.department}
            </td>
            <td className="px-4 py-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
              {job.employmentType}
            </td>
            <td className="px-4 py-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
              {job.experience}
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <button
                type="button"
                onClick={() => {
                  setStatusModalJob(job)
                  setTargetStatus(job.status === 'active' ? 'inactive' : 'active')
                }}
                className="cursor-pointer focus:outline-none transition-transform active:scale-95 inline-block"
                title="Click to change status"
              >
                <StatusBadge status={job.status} />
              </button>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <button
                  title="Edit Job"
                  onClick={() => {
                    setEditingId(job._id)
                    setJobForm({
                      title: job.title,
                      department: job.department,
                      location: job.location,
                      description: job.description,
                      requirements: toText(job.requirements || []),
                      responsibilities: toText(job.responsibilities || []),
                      niceToHave: toText(job.niceToHave || []),
                      benefits: toText(job.benefits || []),
                      salary: job.salary || '',
                      experience: job.experience,
                      employmentType: job.employmentType,
                      status: job.status,
                    })
                    if (!showForm) {
                      setShowForm(true)
                      requestAnimationFrame(() =>
                        requestAnimationFrame(() => setFormVisible(true))
                      )
                    }
                  }}
                  className="h-7 w-7 rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200/60 transition-all flex items-center justify-center shadow-2xs"
                >
                  <Pencil size={13} />
                </button>

                <button
                  title="Delete Job"
                  onClick={async () => {
                    if (!window.confirm(`Are you sure you want to delete "${job.title}"?`)) return
                    try {
                      const res = await api.delete(`${endpoints.JOBS}/${job._id}`, token)
                      toast.success(res?.message || 'Job deleted successfully')
                      triggerReload()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to delete job')
                    }
                  }}
                  className="h-7 w-7 rounded-md text-red-600 bg-red-50 hover:bg-red-100 border border-red-200/60 transition-all flex items-center justify-center shadow-2xs"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </td>
          </tr>
        )}
      />

      {/* Simple Status Change Confirmation Dialog */}
      {statusModalJob && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground">Change Status</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Are you sure you want to change the status of <span className="font-semibold text-foreground">&ldquo;{statusModalJob.title}&rdquo;</span> to <span className={`font-bold capitalize ${targetStatus === 'active' ? 'text-green-600' : 'text-red-600'}`}>{targetStatus}</span>?
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setStatusModalJob(null)}
                disabled={updatingStatus}
                className="px-3.5 py-1.5 text-xs font-medium rounded-sm border border-gray-200 text-foreground hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={updatingStatus}
                onClick={handleConfirmStatusChange}
                className="px-4 py-1.5 text-xs font-semibold rounded-sm bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-sm disabled:opacity-50"
              >
                {updatingStatus ? 'Updating...' : 'Proceed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}