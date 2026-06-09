'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import {
  BriefcaseBusiness,
  Pencil, Trash2,
  Plus, X,
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
  title: '', department: '', location: '',
  description: '', requirements: '', responsibilities: '',
  niceToHave: '', benefits: '',
  salary: '', experience: '', employmentType: '', status: 'active',
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
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-600">
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

  const loadJobs = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await api.get(
        `${endpoints.JOBS}?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`,
        token
      )
      setJobs(res)
    } catch (err) {
      toast.error('Failed to load jobs')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit, sort])

  useEffect(() => { loadJobs() }, [loadJobs])

  const saveJob = async (e) => {
    if (!token) return;
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
      loadJobs()

    } catch (err) {
      toast.error(err?.message || 'Failed to save job')
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
    <div className="space-y-5">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <BriefcaseBusiness size={18} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Job Openings</h1>
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
          className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 bg-[#f1592a] text-white hover:bg-[#f1592a]/90 shadow-sm shadow-[#f1592a]/20`}
        >
          <Plus size={15} /> Add Job Opening
        </button>
      </div>

      {showForm && (
        <div
          ref={formRef}
          style={{
            overflow: 'hidden',
            maxHeight: formVisible ? '2000px' : '0px',
            opacity: formVisible ? 1 : 0,
            transform: formVisible ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.3s ease',
          }}
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
                <Field label="Employment Type ">
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
        sort={{
          value: sort,
          onChange: (value) => {
            setSort(value)
            setPage(1)
          },
          options: sortOptions,
        }}
        searchInputClassName="w-80 pl-8 pr-3 py-1.5 text-sm rounded-sm border border-gray-200 bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all w-52"
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
            className="hover:bg-orange-50/40 transition-colors duration-150 group"
          >
            <td className="px-5 py-3 font-semibold text-foreground">{job.title}</td>
            <td className="px-5 py-3 text-muted-foreground">{job.department}</td>
            <td className="px-5 py-3 text-muted-foreground">{job.employmentType}</td>
            <td className="px-5 py-3 text-muted-foreground">{job.experience}</td>
            <td className="px-5 py-3">
              <StatusBadge status={job.status} />
            </td>
            <td className="px-5 py-2">
              <div className="flex items-center gap-3">
                <button
                  title="Edit"
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
                  className="p-1.5 rounded-sm text-muted-foreground text-blue-600 bg-blue-50 transition-all"
                >
                  <Pencil className=" text-blue-600" size={15} />
                </button>

                <button
                  title="Delete"
                  onClick={async () => {
                    try {
                      const res = await api.delete(`${endpoints.JOBS}/${job._id}`, token)
                      toast.success(res?.message || 'Job deleted successfully')
                      loadJobs()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to delete job')
                    }
                  }}
                  className="p-1.5 rounded-sm text-muted-foreground text-destructive bg-destructive/10 transition-all"
                >
                  <Trash2 className=" text-red-600" size={15} />
                </button>

                <button
                  title="Toggle status"
                  onClick={async () => {
                    try {
                      const res = await api.patch(
                        `/jobs/${job._id}`,
                        { status: job.status === 'active' ? 'inactive' : 'active' },
                        token
                      )
                      toast.success(res?.message || 'Status updated successfully')
                      loadJobs()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to toggle status')
                    }
                  }}
                  className={`
                    relative inline-flex items-center w-7 h-4 rounded-full 
                      transition-all duration-300 ease-in-out
                      ${job.status === 'active' ? 'bg-orange-500' : 'bg-gray-300'}
                    `}
                >
                  <span
                    className={`
                    absolute top-[2px] left-[2px] w-3 h-3 bg-white rounded-full 
                    shadow-md transform transition-all duration-300
                    ${job.status === 'active' ? 'translate-x-3' : 'translate-x-0'}
                  `}
                  />
                </button>
              </div>
            </td>
          </tr>
        )}
      />
    </div>
  )
}