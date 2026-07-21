'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useAdminAuth } from '../use-admin-auth'
import { Newspaper, Pencil, Trash2, Plus, X } from 'lucide-react'
import { toast } from 'sonner'
import '@/styles/theme.css'
import { api, endpoints } from '@/lib/api'
import { AdminCustomSelect, inputCls } from '../components/AdminCustomSelect'
import { AdminTable } from '../components/AdminTable'

const toText = (items) => (Array.isArray(items) ? items.join('\n') : '')
const toList = (value) => String(value || '').split('\n').map((i) => i.trim()).filter(Boolean)

const initialBlog = {
  title: '',
  slug: '',
  excerpt: '',
  contentHtml: '',
  image: '',
  category: '',
  author: '',
  readTime: '',
  tags: '',
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

export default function AdminBlogsPage() {
  const token = useAdminAuth()
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState('-createdAt')
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState({ data: [], total: 0, page: 1, totalPages: 1 })
  const [blogForm, setBlogForm] = useState(initialBlog)
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

  const loadBlogs = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await api.get(
        `${endpoints.BLOGS}?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`,
        token
      )
      setBlogs(res)
    } catch (err) {
      toast.error('Failed to load blogs')
    } finally {
      setLoading(false)
    }
  }, [token, page, q, limit, sort])

  useEffect(() => {
    loadBlogs()
  }, [loadBlogs])

  const saveBlog = async (e) => {
    e.preventDefault()
    if (!token) return

    const payload = {
      ...blogForm,
      tags: toList(blogForm.tags),
      featured: blogForm.featured === 'true',
    }

    try {
      if (editingId) {
        await api.put(endpoints.BLOG_BY_ID(editingId), payload, token)
        toast.success('Blog updated successfully')
      } else {
        await api.post(endpoints.BLOGS, payload, token)
        toast.success('Blog created successfully')
      }

      setEditingId(null)
      setBlogForm(initialBlog)
      setFormVisible(false)
      setTimeout(() => setShowForm(false), 320)
      loadBlogs()
    } catch (err) {
      toast.error(err?.message || 'Failed to save blog')
    }
  }

  const sortOptions = [
    { value: '-createdAt', label: 'Newest First' },
    { value: 'createdAt', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
    { value: '-title', label: 'Title Z-A' },
  ]

  const blogColumns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'author', label: 'Author' },
    { key: 'featured', label: 'Featured' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#f1592a]/10 flex items-center justify-center">
            <Newspaper size={18} className="text-[#f1592a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Blogs</h1>
            <p className="text-xs text-muted-foreground">{blogs.total} total posts</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (showForm && editingId) {
              setEditingId(null)
              setBlogForm(initialBlog)
              if (!showForm) toggleForm()
            } else {
              toggleForm()
            }
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 bg-[#f1592a] text-white hover:bg-[#f1592a]/90 shadow-sm shadow-[#f1592a]/20"
        >
          <Plus size={15} /> Add Blog
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
            onSubmit={saveBlog}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#f1592a]/10 flex items-center justify-center">
                  <Newspaper size={16} className="text-[#f1592a]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">
                    {editingId ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </h2>
                  <p className="text-xs text-muted-foreground">Manage public blog content</p>
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
                    value={blogForm.title}
                    onChange={(e) => setBlogForm((p) => ({ ...p, title: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Slug">
                  <input
                    className={inputCls}
                    value={blogForm.slug}
                    onChange={(e) => setBlogForm((p) => ({ ...p, slug: e.target.value }))}
                    placeholder="Leave blank to generate from title"
                  />
                </Field>
              </div>

              <Field label="Excerpt">
                <textarea
                  className={inputCls}
                  rows={3}
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm((p) => ({ ...p, excerpt: e.target.value }))}
                  required
                />
              </Field>

              <Field label="Content HTML">
                <textarea
                  className={inputCls}
                  rows={12}
                  value={blogForm.contentHtml}
                  onChange={(e) => setBlogForm((p) => ({ ...p, contentHtml: e.target.value }))}
                  required
                />
              </Field>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Image URL">
                  <input
                    className={inputCls}
                    value={blogForm.image}
                    onChange={(e) => setBlogForm((p) => ({ ...p, image: e.target.value }))}
                  />
                </Field>
                <Field label="Category">
                  <input
                    className={inputCls}
                    value={blogForm.category}
                    onChange={(e) => setBlogForm((p) => ({ ...p, category: e.target.value }))}
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Author">
                  <input
                    className={inputCls}
                    value={blogForm.author}
                    onChange={(e) => setBlogForm((p) => ({ ...p, author: e.target.value }))}
                  />
                </Field>
                <Field label="Read Time">
                  <input
                    className={inputCls}
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm((p) => ({ ...p, readTime: e.target.value }))}
                    placeholder="e.g. 6 min read"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Field label="Tags (one per line)">
                  <textarea
                    className={inputCls}
                    rows={4}
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm((p) => ({ ...p, tags: e.target.value }))}
                  />
                </Field>
                <Field label="Featured">
                  <AdminCustomSelect
                    value={blogForm.featured}
                    onChange={(value) => setBlogForm((p) => ({ ...p, featured: value }))}
                    options={[
                      { value: 'false', label: 'No' },
                      { value: 'true', label: 'Yes' },
                    ]}
                  />
                </Field>
                <Field label="Status">
                  <AdminCustomSelect
                    value={blogForm.status}
                    onChange={(value) => setBlogForm((p) => ({ ...p, status: value }))}
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
                {editingId ? 'Update Blog' : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      )}

      <AdminTable
        title="All Blogs"
        total={blogs.total}
        columns={blogColumns}
        data={blogs.data}
        loading={loading}
        loadingMessage="Loading blogs..."
        emptyIcon={Newspaper}
        emptyMessage="No blog posts found."
        search={{
          value: q,
          onChange: (value) => {
            setQ(value)
            setPage(1)
          },
          placeholder: 'Search blogs...',
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
        totalPages={blogs.totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={(value) => {
          setLimit(value)
          setPage(1)
        }}
        renderRow={(blog) => (
          <tr key={blog._id} className="hover:bg-orange-50/40 transition-colors duration-150 group">
            <td className="px-5 py-3 font-semibold text-foreground">{blog.title}</td>
            <td className="px-5 py-3 text-muted-foreground">{blog.category || '-'}</td>
            <td className="px-5 py-3 text-muted-foreground">{blog.author || '-'}</td>
            <td className="px-5 py-3 text-muted-foreground">{blog.featured ? 'Yes' : 'No'}</td>
            <td className="px-5 py-3">
              <StatusBadge status={blog.status} />
            </td>
            <td className="px-5 py-2">
              <div className="flex items-center gap-3">
                <button
                  title="Edit"
                  onClick={() => {
                    setEditingId(blog._id)
                    setBlogForm({
                      title: blog.title || '',
                      slug: blog.slug || '',
                      excerpt: blog.excerpt || '',
                      contentHtml: blog.contentHtml || '',
                      image: blog.image || '',
                      category: blog.category || '',
                      author: blog.author || '',
                      readTime: blog.readTime || '',
                      tags: toText(blog.tags || []),
                      featured: String(Boolean(blog.featured)),
                      status: blog.status || 'active',
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
                      await api.delete(endpoints.BLOG_BY_ID(blog._id), token)
                      toast.success('Blog deleted successfully')
                      loadBlogs()
                    } catch (err) {
                      toast.error(err?.message || 'Failed to delete blog')
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
