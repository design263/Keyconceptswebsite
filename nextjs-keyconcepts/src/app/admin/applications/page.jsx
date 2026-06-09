'use client'

import { useCallback, useEffect, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import { FileText, Eye, Trash2, X, Download } from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminTable } from '../components/AdminTable'

const applicationColumns = [
  { key: 'applicant', label: 'Applicant' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'job', label: 'Job' },
  { key: 'actions', label: 'Actions' },
]

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
      const res = await api.get(
        `${endpoints.APPLICATIONS}?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=-createdAt`,
        token
      )
      setApplications(res)
    } catch (err) {
      toast.error('Failed to load applications')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit])

  useEffect(() => {
    load()
  }, [load])

  const openProtectedResume = async (resumePath) => {
    try {
      const response = await fetch(`${api.baseUrl}${resumePath.replace('/api', '')}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!response.ok) return
      const blob = await response.blob()
      window.open(URL.createObjectURL(blob), '_blank', 'noopener,noreferrer')
    } catch (err) {
      toast.error('Failed to open resume')
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <FileText size={18} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Applications</h1>
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
          placeholder: 'Search applicants, job...',
        }}
        page={page}
        totalPages={applications.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(application) => (
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
                {application.resume && (
                  <button
                    title="Open Resume"
                    onClick={() => openProtectedResume(application.resume)}
                    className="p-1.5 rounded-sm text-green-600 bg-green-50 hover:bg-green-100 transition-all font-medium text-xs flex items-center gap-2 px-3"
                  >
                    <Download size={14} /> Resume
                  </button>
                )}
                {application.coverLetter && (
                  <button
                    title="View Cover Letter"
                    onClick={() => setSelectedCoverLetter(application.coverLetter)}
                    className="p-1.5 rounded-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all font-medium text-xs flex items-center gap-2 px-3"
                  >
                    <Eye size={14} /> Cover Letter
                  </button>
                )}
                <button
                  title="Delete"
                  onClick={async () => {
                    try {
                      const res = await api.delete(
                        `${endpoints.APPLICATIONS}/${application._id}`,
                        token
                      )
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
        )}
      />

      {selectedCoverLetter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
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
              <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
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
    </div>
  )
}
