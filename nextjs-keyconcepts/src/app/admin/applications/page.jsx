'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import {
  FileText, ChevronLeft, ChevronRight,
  Eye, Trash2, X, Search, Loader2, Download,
  ChevronDown
} from 'lucide-react'
import { toast } from 'sonner'

import { api, endpoints } from '@/lib/api'

const inputCls =
  'w-full px-4 py-1.5 text-sm rounded-sm border border-border bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200'

const CustomSelect = ({ value, onChange, options, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputCls} cursor-pointer flex items-center justify-between pr-2 gap-2`}
      >
        <span>{selectedOption?.label || 'Select...'}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-border rounded-sm shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors hover:bg-primary/10 ${value === option.value ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'
                }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function AdminApplicationsPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(false)
  const [applications, setApplications] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [selectedCoverLetter, setSelectedCoverLetter] = useState(null)

  const load = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await api.get(`${endpoints.APPLICATIONS}?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=-createdAt`, token)
      setApplications(res)
    } catch (err) {
      toast.error('Failed to load applications')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit])

  useEffect(() => { load() }, [load])

  const openProtectedResume = async (resumePath) => {
    try {
      const response = await fetch(`${api.baseUrl}${resumePath.replace('/api', '')}`, { 
        headers: { Authorization: `Bearer ${token}` } 
      });
      if (!response.ok) return;
      const blob = await response.blob();
      window.open(URL.createObjectURL(blob), "_blank", "noopener,noreferrer");
    } catch (err) {
      toast.error('Failed to open resume');
    }
  };

  const firstRecord = applications.total === 0 ? 0 : (page - 1) * limit + 1
  const lastRecord = Math.min(page * limit, applications.total)

  const getPageNumbers = () => {
    const total = applications.totalPages
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    if (page <= 4) return [1, 2, 3, 4, 5, '...', total]
    if (page >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
    return [1, '...', page - 1, page, page + 1, '...', total]
  }

  const limitOptions = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText size={18} className="text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Applications</h1>
            <p className="text-xs text-muted-foreground">{applications.total} total applications</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-lg shadow-sm">
        {/* Table toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">All Applications
            <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {applications.total}
            </span>
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Search applicants, job..."
                className="w-full md:w-64 pl-8 pr-3 py-1.5 text-sm rounded-sm border border-border bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-muted/50 text-muted-foreground text-sm font-semibold border-b border-gray-200 uppercase tracking-wide">
                <th className="text-left px-5 py-2.5 font-semibold">Applicant</th>
                <th className="text-left px-5 py-2.5 font-semibold">Email</th>
                <th className="text-left px-5 py-2.5 font-semibold">Phone</th>
                <th className="text-left px-5 py-2.5 font-semibold">Job</th>
                <th className="text-left px-5 py-2.5 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Loader2 size={18} className="animate-spin text-primary" />
                      <span className="text-sm">Loading applications...</span>
                    </div>
                  </td>
                </tr>
              ) : applications.data.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <FileText size={32} className="text-border" />
                      <p className="text-sm">No applications found.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                applications.data.map((application) => (
                  <tr
                    key={application._id}
                    className="hover:bg-orange-50/40 transition-colors duration-150 group"
                  >
                    <td className="px-5 py-3 font-semibold text-foreground">{application.fullName}</td>
                    <td className="px-5 py-3 text-muted-foreground">{application.email}</td>
                    <td className="px-5 py-3 text-muted-foreground">{application.phone}</td>
                    <td className="px-5 py-3 text-muted-foreground">{application.jobId?.title || '-'}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        {/* Resume */}
                        {application.resume && (
                          <button
                            title="Open Resume"
                            onClick={() => openProtectedResume(application.resume)}
                            className="p-1.5 rounded-sm text-green-600 bg-green-50 hover:bg-green-100 transition-all font-medium text-xs flex items-center gap-2 px-3"
                          >
                            <Download size={14} /> Resume
                          </button>
                        )}
                        {/* Cover Letter */}
                        {application.coverLetter && (
                          <button
                            title="View Cover Letter"
                            onClick={() => setSelectedCoverLetter(application.coverLetter)}
                            className="p-1.5 rounded-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all font-medium text-xs flex items-center gap-2 px-3"
                          >
                            <Eye size={14} /> Cover Letter
                          </button>
                        )}
                        {/* Delete */}
                        <button
                          title="Delete"
                          onClick={async () => {
                            try {
                              const res = await api.delete(`${endpoints.APPLICATIONS}/${application._id}`, token)
                              toast.success(res?.message || 'Application deleted successfully')
                              load()
                            } catch (err) {
                              toast.error(err?.message || 'Failed to delete application')
                            }
                          }}
                          className="py-2 rounded-sm text-destructive bg-destructive/10 transition-all text-red-600 hover:bg-red-100 flex items-center gap-2 px-3"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 border-t border-border bg-muted/20">

          <p className="text-xs text-muted-foreground whitespace-nowrap">
            {applications.total === 0
              ? 'No records'
              : `Showing ${firstRecord} - ${lastRecord} of ${applications.total} records`}
          </p>

          <div className="flex items-center gap-1">
            {/* Prev */}
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((p, i) =>
              p === '...' ? (
                <span key={`ellipsis-${i}`} className="px-1 text-muted-foreground text-sm select-none">...</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex items-center justify-center w-8 h-8 rounded-sm text-xs font-semibold border transition-all
                    ${page === p
                      ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20'
                      : 'border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                >
                  {p}
                </button>
              )
            )}

            {/* Next */}
            <button
              disabled={page >= applications.totalPages}
              onClick={() => setPage((p) => Math.min(applications.totalPages, p + 1))}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Rows per page:</label>
            <CustomSelect
              value={limit.toString()}
              onChange={(value) => { setLimit(Number(value)); setPage(1) }}
              options={limitOptions}
            />
          </div>
        </div>
      </div>

      {selectedCoverLetter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden border border-border transform transition-all">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                  <FileText size={16} className="text-primary" />
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
              <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                {selectedCoverLetter}
              </pre>
            </div>
            <div className="px-6 py-4 border-t border-border flex justify-end">
              <button
                onClick={() => setSelectedCoverLetter(null)}
                className="px-4 py-2 rounded-sm text-sm font-medium text-foreground border border-border hover:bg-muted transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
