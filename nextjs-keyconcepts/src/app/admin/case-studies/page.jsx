'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import { Award, Pencil, Trash2, Plus, X } from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminCustomSelect, inputCls } from '../components/AdminCustomSelect'
import { AdminTable } from '../components/AdminTable'

const toMetricsText = (items) =>
  Array.isArray(items) ? items.map((item) => `${item.label}: ${item.value}`).join('\n') : ''

const initialCaseStudy = {
  title: '',
  slug: '',
  client: '',
  industry: '',
  challenge: '',
  result: '',
  image: '',
  metrics: '',
  featured: 'false',
  status: 'active',
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

export default function AdminCaseStudiesPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [caseStudies, setCaseStudies] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [caseStudyForm, setCaseStudyForm] = useState(initialCaseStudy)
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
      requestAnimationFrame(() => requestAnimationFrame(() => setFormVisible(true)))
    }
  }

  const loadCaseStudies = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await api.get(
        `${endpoints.CASE_STUDIES}?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`,
        token
      )
      setCaseStudies(res)
    } catch (err) {
      toast.error('Failed to load case studies')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit, sort])

  useEffect(() => {
    loadCaseStudies()
  }, [loadCaseStudies])

  const saveCaseStudy = async (e) => {
    e.preventDefault()
    if (!token) return

    const payload = {
      ...caseStudyForm,
      featured: caseStudyForm.featured === 'true',
    }

    try {
      if (editingId) {
        await api.put(endpoints.CASE_STUDY_BY_ID(editingId), payload, token)
        toast.success('Case study updated successfully')
      } else {
        await api.post(endpoints.CASE_STUDIES, payload, token)
        toast.success('Case study created successfully')
      }

      setEditingId(null)
      setCaseStudyForm(initialCaseStudy)
      setFormVisible(false)
      setTimeout(() => setShowForm(false), 320)
      loadCaseStudies()
    } catch (err) {
      toast.error(err?.message || 'Failed to save case study')
    }
  }

  const sortOptions = [
    { value: '-createdAt', label: 'Newest First' },
    { value: 'createdAt', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
    { value: '-title', label: 'Title Z-A' },
  ]

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'client', label: 'Client' },
    { key: 'industry', label: 'Industry' },
    { key: 'featured', label: 'Featured' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <Award size={18} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Case Studies</h1>
            <p className="text-xs text-muted-foreground">{caseStudies.total} total case studies</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (showForm && editingId) {
              setEditingId(null)
              setCaseStudyForm(initialCaseStudy)
              if (!showForm) toggleForm()
            } else {
              toggleForm()
            }
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 bg-[#f1592a] text-white hover:bg-[#f1592a]/90 shadow-sm shadow-[#f1592a]/20"
        >
          <Plus size={15} /> Add Case Study
        </button>
      </div>

      {showForm && (
        <div
          ref={formRef}
          style={{
            overflow: 'hidden',
            maxHeight: formVisible ? '2200px' : '0px',
            opacity: formVisible ? 1 : 0,
            transform: formVisible ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <form
            onSubmit={saveCaseStudy}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#f1592a]/10 flex items-center justify-center">
                  <Award size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">
                    {editingId ? 'Edit Case Study' : 'Create New Case Study'}
                  </h2>
                  <p className="text-xs text-muted-foreground">Manage public case study content</p>
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

            <div className="p-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Title">
                  <input
                    className={inputCls}
                    value={caseStudyForm.title}
                    onChange={(e) => setCaseStudyForm((p) => ({ ...p, title: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Slug">
                  <input
                    className={inputCls}
                    value={caseStudyForm.slug}
                    onChange={(e) => setCaseStudyForm((p) => ({ ...p, slug: e.target.value }))}
                    placeholder="Leave blank to generate from title"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Client">
                  <input
                    className={inputCls}
                    value={caseStudyForm.client}
                    onChange={(e) => setCaseStudyForm((p) => ({ ...p, client: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Industry">
                  <input
                    className={inputCls}
                    value={caseStudyForm.industry}
                    onChange={(e) => setCaseStudyForm((p) => ({ ...p, industry: e.target.value }))}
                    required
                  />
                </Field>
              </div>

              <Field label="Challenge">
                <textarea
                  className={inputCls}
                  rows={4}
                  value={caseStudyForm.challenge}
                  onChange={(e) => setCaseStudyForm((p) => ({ ...p, challenge: e.target.value }))}
                  required
                />
              </Field>

              <Field label="Result">
                <textarea
                  className={inputCls}
                  rows={4}
                  value={caseStudyForm.result}
                  onChange={(e) => setCaseStudyForm((p) => ({ ...p, result: e.target.value }))}
                  required
                />
              </Field>

              <Field label="Image URL">
                <input
                  className={inputCls}
                  value={caseStudyForm.image}
                  onChange={(e) => setCaseStudyForm((p) => ({ ...p, image: e.target.value }))}
                />
              </Field>

              <Field label="Metrics (one per line as Label: Value)">
                <textarea
                  className={inputCls}
                  rows={5}
                  value={caseStudyForm.metrics}
                  onChange={(e) => setCaseStudyForm((p) => ({ ...p, metrics: e.target.value }))}
                  placeholder={'Efficiency Increase: 45%\nCost Reduction: 30%\nROI Timeline: 6 months'}
                />
              </Field>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Featured">
                  <AdminCustomSelect
                    value={caseStudyForm.featured}
                    onChange={(value) => setCaseStudyForm((p) => ({ ...p, featured: value }))}
                    options={[
                      { value: 'false', label: 'No' },
                      { value: 'true', label: 'Yes' },
                    ]}
                  />
                </Field>
                <Field label="Status">
                  <AdminCustomSelect
                    value={caseStudyForm.status}
                    onChange={(value) => setCaseStudyForm((p) => ({ ...p, status: value }))}
                    options={[
                      { value: 'active', label: 'Active' },
                      { value: 'inactive', label: 'Inactive' },
                    ]}
                  />
                </Field>
              </div>
            </div>

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
                {editingId ? 'Update Case Study' : 'Create Case Study'}
              </button>
            </div>
          </form>
        </div>
      )}

      <AdminTable
        title="All Case Studies"
        total={caseStudies.total}
        columns={columns}
        data={caseStudies.data}
        loading={loading}
        loadingMessage="Loading case studies..."
        emptyIcon={Award}
        emptyMessage="No case studies found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search case studies...',
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
        totalPages={caseStudies.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(caseStudy) => (
          <tr key={caseStudy._id} className="hover:bg-orange-50/40 transition-colors duration-150 group">
            <td className="px-5 py-3 font-semibold text-foreground">{caseStudy.title}</td>
            <td className="px-5 py-3 text-muted-foreground">{caseStudy.client}</td>
            <td className="px-5 py-3 text-muted-foreground">{caseStudy.industry}</td>
            <td className="px-5 py-3 text-muted-foreground">{caseStudy.featured ? 'Yes' : 'No'}</td>
            <td className="px-5 py-3">
              <StatusBadge status={caseStudy.status} />
            </td>
            <td className="px-5 py-2">
              <div className="flex items-center gap-3">
                <button
                  title="Edit"
                  onClick={() => {
                    setEditingId(caseStudy._id)
                    setCaseStudyForm({
                      title: caseStudy.title || '',
                      slug: caseStudy.slug || '',
                      client: caseStudy.client || '',
                      industry: caseStudy.industry || '',
                      challenge: caseStudy.challenge || '',
                      result: caseStudy.result || '',
                      image: caseStudy.image || '',
                      metrics: toMetricsText(caseStudy.metrics || []),
                      featured: String(Boolean(caseStudy.featured)),
                      status: caseStudy.status || 'active',
                    })
                    if (!showForm) {
                      setShowForm(true)
                      requestAnimationFrame(() => requestAnimationFrame(() => setFormVisible(true)))
                    }
                  }}
                  className="p-1.5 rounded-sm text-blue-600 bg-blue-50 transition-all"
                >
                  <Pencil className="text-blue-600" size={15} />
                </button>
                <button
                  title="Delete"
                  onClick={async () => {
                    try {
                      await api.delete(endpoints.CASE_STUDY_BY_ID(caseStudy._id), token)
                      toast.success('Case study deleted successfully')
                      loadCaseStudies()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to delete case study')
                    }
                  }}
                  className="p-1.5 rounded-sm text-destructive bg-destructive/10 transition-all"
                >
                  <Trash2 className="text-red-600" size={15} />
                </button>
              </div>
            </td>
          </tr>
        )}
      />
    </div>
  )
}
