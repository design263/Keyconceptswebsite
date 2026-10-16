'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useAdminAuth } from '../../use-admin-auth'
import {
  Users,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2
} from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminTable } from '../../components/AdminTable'
import { AdminCustomSelect, inputCls } from '../../components/AdminCustomSelect'

const interviewerColumns = [
  { key: 'name', label: 'Interviewer Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone Number' },
  { key: 'role', label: 'Role' },
  { key: 'interviewType', label: 'Interview Type' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  interviewType: 'Technical',
  isActive: true,
}

const initialFilters = {
  interviewType: '',
  status: '',
  role: '',
}

const sortOptions = [
  { value: '-createdAt', label: 'Newest First' },
  { value: 'createdAt', label: 'Oldest First' },
  { value: 'name', label: 'Name A-Z' },
  { value: '-name', label: 'Name Z-A' },
]

const typeBadgeStyles = {
  Technical: 'bg-blue-50 text-blue-700 border-blue-200/60',
  HR: 'bg-purple-50 text-purple-700 border-purple-200/60',
  Managerial: 'bg-amber-50 text-amber-700 border-amber-200/60',
}

export default function AdminInterviewersPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [interviewers, setInterviewers] = useState({
    data: [],
    total: 0,
    page: 1,
    totalPages: 1,
  })
  const [refreshKey, setRefreshKey] = useState(0)

  // Filters state
  const [filters, setFilters] = useState(initialFilters)
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false)

  // Inline Form State for Add / Edit
  const formRef = useRef(null)
  const [showForm, setShowForm] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [editingInterviewer, setEditingInterviewer] = useState(null)
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Delete confirmation modal
  const [deleteModalInterviewer, setDeleteModalInterviewer] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  // Fetch Interviewers List
  useEffect(() => {
    let ignore = false
    if (!token) return

    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      sort: sort || '-createdAt',
      search: q || '',
      interviewType: filters.interviewType || '',
      role: filters.role || '',
      ...(filters.status === 'active' ? { isActive: 'true' } : {}),
      ...(filters.status === 'inactive' ? { isActive: 'false' } : {}),
    })

    const timer = setTimeout(() => {
      if (!ignore) setLoading(true)
    }, 0)

    api.get(`${endpoints.INTERVIEWERS}?${queryParams.toString()}`, token)
      .then((res) => {
        if (!ignore && res) {
          const list = res.data || res.interviewers || (Array.isArray(res) ? res : [])
          const totalCount = res.total ?? res.pagination?.total ?? list.length
          const pagesCount = res.totalPages ?? res.pagination?.totalPages ?? (Math.ceil(totalCount / limit) || 1)
          setInterviewers({
            data: list,
            total: totalCount,
            page: res.page ?? page,
            totalPages: pagesCount,
          })
        }
      })
      .catch((err) => {
        if (!ignore) {
          toast.error(err?.message || 'Failed to load interviewers')
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
      clearTimeout(timer)
    }
  }, [token, page, q, limit, sort, filters, refreshKey])

  const triggerReload = () => setRefreshKey((prev) => prev + 1)

  // Advance filter schema
  const filterFields = useMemo(
    () => [
      {
        key: 'interviewType',
        label: 'Interview Type',
        type: 'select',
        placeholder: '--Select Type--',
        options: [
          { value: '', label: '--All Types--' },
          { value: 'Technical', label: 'Technical' },
          { value: 'HR', label: 'HR' },
          { value: 'Managerial', label: 'Managerial' },
        ],
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: '--Select Status--',
        options: [
          { value: '', label: '--All Status--' },
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ],
      },
      {
        key: 'role',
        label: 'Role / Designation',
        type: 'text',
        placeholder: 'e.g. Lead Developer',
      },
    ],
    []
  )

  // Close inline form
  const handleCloseForm = () => {
    setFormVisible(false)
    setTimeout(() => {
      setShowForm(false)
      setEditingInterviewer(null)
      setFormData(initialForm)
    }, 320)
  }

  // Open inline form for Create
  const handleOpenCreate = () => {
    if (showForm && !editingInterviewer) {
      handleCloseForm()
    } else {
      setEditingInterviewer(null)
      setFormData(initialForm)
      if (!showForm) {
        setShowForm(true)
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setFormVisible(true))
        )
      }
    }
  }

  // Open inline form for Edit
  const handleOpenEdit = (interviewer) => {
    setEditingInterviewer(interviewer)
    setFormData({
      name: interviewer.name || '',
      email: interviewer.email || '',
      phone: interviewer.phone || '',
      role: interviewer.role || '',
      interviewType: interviewer.interviewType || 'Technical',
      isActive: interviewer.isActive ?? true,
    })
    if (!showForm) {
      setShowForm(true)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setFormVisible(true))
      )
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 60)
  }

  // Submit Create or Edit
  const handleSubmitForm = async (e) => {
    e.preventDefault()
    if (!token) return

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.role.trim()) {
      toast.error('All fields are required')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      toast.error('Please enter a valid email address')
      return
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error('Please provide a valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)
    try {
      if (editingInterviewer) {
        const res = await api.post(
          endpoints.INTERVIEWER_UPDATE(editingInterviewer._id),
          formData,
          token
        )
        toast.success(res?.message || 'Interviewer updated successfully')
      } else {
        const res = await api.post(
          endpoints.INTERVIEWER_CREATE,
          formData,
          token
        )
        toast.success(res?.message || 'Interviewer created successfully')
      }
      handleCloseForm()
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to save interviewer')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Toggle active status
  const handleToggleStatus = async (interviewer) => {
    if (!token) return
    const nextStatus = !interviewer.isActive
    try {
      await api.post(
        endpoints.INTERVIEWER_UPDATE(interviewer._id),
        { isActive: nextStatus },
        token
      )
      toast.success(`Interviewer marked as ${nextStatus ? 'Active' : 'Inactive'}`)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to update status')
    }
  }

  // Delete Interviewer
  const handleConfirmDelete = async () => {
    if (!token || !deleteModalInterviewer) return
    setIsDeleting(true)
    try {
      const res = await api.delete(
        endpoints.INTERVIEWER_DELETE(deleteModalInterviewer._id),
        token
      )
      toast.success(res?.message || 'Interviewer deleted successfully')
      setDeleteModalInterviewer(null)
      triggerReload()
    } catch (err) {
      toast.error(err?.message || 'Failed to delete interviewer')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="w-full min-w-0 space-y-4 pb-8">
      {/* Page Header */}
      <div className="shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <Users size={16} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Interviewers</h1>
            <p className="text-xs text-muted-foreground">Total {interviewers.total} interviewers</p>
          </div>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 bg-[#f1592a] text-white hover:bg-[#f1592a]/90 shadow-sm shadow-[#f1592a]/20 cursor-pointer"
        >
          {showForm && !editingInterviewer ? (
            <>
              <X size={14} /> Close Form
            </>
          ) : (
            <>
              <Plus size={14} /> Add Interviewer
            </>
          )}
        </button>
      </div>

      {/* Inline Form on Top of the Table */}
      {showForm && (
        <div
          ref={formRef}
          className={`shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${formVisible ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'
            }`}
        >
          <form
            onSubmit={handleSubmitForm}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#f1592a]/10 flex items-center justify-center">
                  <Users size={15} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">
                    {editingInterviewer ? 'Edit Interviewer' : 'Create New Interviewer'}
                  </h2>
                  <p className="text-[11px] text-muted-foreground">
                    {editingInterviewer ? 'Update existing interviewer details' : 'Fill in the information below to add a new interviewer'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseForm}
                className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Interviewer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                {/* Role */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Role / Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Frontend Architect"
                    value={formData.role}
                    onChange={(e) => setFormData((p) => ({ ...p, role: e.target.value }))}
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className={inputCls}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Phone Number (10 digits) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value.replace(/\D/g, '') }))}
                    className={inputCls}
                  />
                </div>

                {/* Interview Type */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Interview Type <span className="text-red-500">*</span>
                  </label>
                  <AdminCustomSelect
                    value={formData.interviewType}
                    onChange={(val) => setFormData((p) => ({ ...p, interviewType: val }))}
                    options={[
                      { value: 'Technical', label: 'Technical' },
                      { value: 'HR', label: 'HR' },
                      { value: 'Managerial', label: 'Managerial' },
                    ]}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Active Status Checkbox */}
              <div className="pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData((p) => ({ ...p, isActive: e.target.checked }))}
                    className="w-4 h-4 rounded-sm text-[#f1592a] focus:ring-[#f1592a] border-gray-300 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-gray-700">
                    Active (Available for conducting interviews)
                  </span>
                </label>
              </div>
            </div>

            {/* Form Footer */}
            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/60 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleCloseForm}
                disabled={isSubmitting}
                className="px-3.5 py-1.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 bg-white hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-1.5 rounded-md text-xs font-semibold bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-colors shadow-sm shadow-[#f1592a]/20 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting && <Loader2 size={13} className="animate-spin" />}
                {editingInterviewer ? 'Update Interviewer' : 'Create Interviewer'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* AdminTable View */}
      <AdminTable
        title="All Interviewers"
        total={interviewers.total}
        columns={interviewerColumns}
        data={interviewers.data}
        minWidth="880px"
        loading={loading}
        loadingMessage="Loading interviewers..."
        emptyIcon={Users}
        emptyMessage="No interviewers found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search name, email, phone, role...',
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
                setFilters((p) => ({ ...p, interviewType: '' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${!filters.interviewType
                  ? 'bg-white text-gray-900 font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, interviewType: 'Technical' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${filters.interviewType === 'Technical'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              Technical
            </button>
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, interviewType: 'HR' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${filters.interviewType === 'HR'
                  ? 'bg-purple-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              HR
            </button>
            <button
              type="button"
              onClick={() => {
                setFilters((p) => ({ ...p, interviewType: 'Managerial' }))
                setPage(1)
              }}
              className={`px-2.5 py-1 rounded-sm text-xs transition-colors ${filters.interviewType === 'Managerial'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-gray-500 hover:text-gray-900'
                }`}
            >
              Managerial
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
        totalPages={interviewers.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(interviewer) => {
          const typeCls = typeBadgeStyles[interviewer.interviewType] || 'bg-gray-100 text-gray-700 border-gray-200'
          return (
            <tr
              key={interviewer._id}
              className="hover:bg-orange-50/25 transition-colors duration-150 group"
            >
              <td className="px-4 py-3 font-semibold text-gray-900 text-xs whitespace-nowrap">
                {interviewer.name}
              </td>
              <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                {interviewer.email}
              </td>
              <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap font-medium">
                {interviewer.phone}
              </td>
              <td className="px-4 py-3 text-gray-700 text-xs whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-gray-700 border border-gray-200/80">
                  {interviewer.role}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium border ${typeCls}`}>
                  {interviewer.interviewType}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => handleToggleStatus(interviewer)}
                  className="cursor-pointer focus:outline-none transition-transform active:scale-95 inline-block"
                  title="Click to toggle status"
                >
                  {interviewer.isActive ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-600 border border-rose-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Inactive
                    </span>
                  )}
                </button>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-1.5">
                  <button
                    title="Edit Interviewer"
                    onClick={() => handleOpenEdit(interviewer)}
                    className="h-7 w-7 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-200/80 transition-all flex items-center justify-center shadow-2xs cursor-pointer"
                  >
                    <Pencil size={13} />
                  </button>

                  <button
                    title="Delete Interviewer"
                    onClick={() => setDeleteModalInterviewer(interviewer)}
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



      {/* Delete Confirmation Modal */}
      {deleteModalInterviewer && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-xl border border-gray-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground">Delete Interviewer</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Are you sure you want to delete <span className="font-semibold text-foreground">&ldquo;{deleteModalInterviewer.name}&rdquo;</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setDeleteModalInterviewer(null)}
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
