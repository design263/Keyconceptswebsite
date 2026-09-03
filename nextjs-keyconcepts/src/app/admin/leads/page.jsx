'use client'

import { useCallback, useEffect, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import { MessageSquare, Eye, Trash2, X } from 'lucide-react'
import { toast } from 'sonner'
import { api } from '@/lib/api'
import { AdminTable } from '../components/AdminTable'

const leadColumns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'subject', label: 'Subject' },
  { key: 'message', label: 'Message' },
  { key: 'actions', label: 'Actions' },
]

export default function AdminLeadsPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(false)
  const [leads, setLeads] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [selectedLeadMessage, setSelectedLeadMessage] = useState(null)

  const load = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await api.get(
        `/contact-leads?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=-createdAt`,
        token
      )
      setLeads(res)
    } catch (err) {
      toast.error('Failed to load leads')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit])

  useEffect(() => {
    load()
  }, [load])
  const getLeadDetails = (lead) => {
    const lines = lead?.message?.split('\n') || []
  
    const message = lines
      .filter((line) => !line.startsWith('Company:') && !line.startsWith('Phone:') && !line.startsWith('Approximate Budget:'))
      .join('\n')
  
    const company =
      lines.find((line) => line.startsWith('Company:'))?.replace('Company:', '').trim() || '-'
  
    const phone =
      lines.find((line) => line.startsWith('Phone:'))?.replace('Phone:', '').trim() || '-'

    const budget =
      lead?.approximateBudget ||
      lines.find((line) => line.startsWith('Approximate Budget:'))?.replace('Approximate Budget:', '').trim() ||
      '—'
  
    return {
      message: message || '-',
      company,
      phone,
      budget,
    }
  }
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <MessageSquare size={18} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Contact Leads</h1>
            <p className="text-xs text-muted-foreground">{leads.total} total leads</p>
          </div>
        </div>
      </div>

      <AdminTable
        title="All Contact Leads"
        total={leads.total}
        columns={leadColumns}
        data={leads.data}
        loading={loading}
        loadingMessage="Loading leads..."
        emptyIcon={MessageSquare}
        emptyMessage="No leads found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search leads...',
        }}
        page={page}
        totalPages={leads.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(lead) => (
          <tr
            key={lead._id}
            className="hover:bg-orange-50/40 transition-colors duration-150 group"
          >
            <td className="px-5 py-3 font-semibold text-foreground">{lead.name}</td>
            <td className="px-5 py-3 text-muted-foreground">{lead.email}</td>
            <td className="px-5 py-3 text-muted-foreground">{lead.subject}</td>
            <td className="px-5 py-3 text-muted-foreground max-w-xs truncate">{lead.message}</td>
            <td className="px-5 py-2">
              <div className="flex items-center gap-2">
                <button
                  title="View Message"
                  onClick={() => setSelectedLeadMessage(lead)}
                  className="p-1.5 rounded-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all font-medium text-xs flex items-center gap-2 px-3"
                >
                  <Eye size={14} /> View
                </button>
                <button
                  title="Delete"
                  onClick={async () => {
                    try {
                      const res = await api.delete(`/contact-leads/${lead._id}`, token)
                      toast.success(res?.message || 'Lead deleted successfully')
                      load()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to delete lead')
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

      {selectedLeadMessage && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden border border-gray-200 transform transition-all">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#f1592a]/10 flex items-center justify-center">
                  <MessageSquare size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Lead Message</h2>
                  <p className="text-xs text-muted-foreground">Contact lead details</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLeadMessage(null)}
                className="w-7 h-7 rounded-sm flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Name</label>
                    <p className="text-muted-foreground">{selectedLeadMessage.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Email</label>
                    <p className="text-muted-foreground">{selectedLeadMessage.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Phone</label>
                    <p className="text-muted-foreground">{getLeadDetails(selectedLeadMessage).phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Company</label>
                    <p className="text-muted-foreground">{getLeadDetails(selectedLeadMessage).company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Subject</label>
                    <p className="text-muted-foreground">{selectedLeadMessage.subject}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Approximate Budget</label>
                    <p className="text-muted-foreground">{getLeadDetails(selectedLeadMessage).budget}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Date</label>
                    <p className="text-muted-foreground">
                      {selectedLeadMessage.createdAt
                        ? new Date(selectedLeadMessage.createdAt).toLocaleDateString()
                        : '-'}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <p className="text-muted-foreground mt-1">{getLeadDetails(selectedLeadMessage).message}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedLeadMessage(null)}
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
