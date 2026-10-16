'use client'

import Link from 'next/link'
import {
  Mail,
  FileSpreadsheet,
  ArrowRight,
  Building2,
  Briefcase
} from 'lucide-react'

const leadStatusStyles = {
  New: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Contacted: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
  Qualified: 'bg-teal-50 text-teal-700 border-teal-200/80',
  'Proposal Sent': 'bg-amber-50 text-amber-700 border-amber-200/80',
  Negotiation: 'bg-orange-50 text-[#f1592a] border-orange-200/80',
  Converted: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Lost: 'bg-rose-50 text-rose-700 border-rose-200/80',
  Closed: 'bg-slate-50 text-slate-700 border-slate-200/80',
}

const appStatusStyles = {
  Applied: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Shortlisted: 'bg-purple-50 text-purple-700 border-purple-200/80',
  Interviewing: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Selected: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Rejected: 'bg-red-50 text-red-700 border-red-200/80',
}

export function RecentFeeds({ recentLeads, recentApplications, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse h-64" />
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse h-64" />
      </div>
    )
  }

  const leads = recentLeads || []
  const applications = recentApplications || []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 1. RECENT CONTACT LEADS */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="px-4 py-3.5 sm:px-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f1592a] flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Recent Inbound Leads
                </h3>
                <p className="text-xs text-gray-500 leading-tight mt-0.5">
                  Latest client business inquiries
                </p>
              </div>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-semibold text-[#f1592a] hover:text-[#d0461b] flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* List items */}
          <div className="divide-y divide-gray-100">
            {leads.length === 0 ? (
              <div className="p-8 text-center text-xs text-gray-500">
                No recent leads found.
              </div>
            ) : (
              leads.map((lead) => {
                const badgeCls =
                  leadStatusStyles[lead.status] ||
                  'bg-gray-50 text-gray-700 border-gray-200/80'
                const hasStatus = Boolean(lead.status && lead.status.trim())

                return (
                  <Link
                    key={lead._id}
                    href={`/admin/leads/${lead._id}`}
                    className="px-4 py-3 sm:px-5 flex items-center justify-between gap-3 hover:bg-orange-50/25 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      {/* Name + Status badge */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-900 group-hover:text-[#f1592a] transition-colors truncate">
                          {lead.name}
                        </span>
                        {!lead.isViewed && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"
                            title="Unread"
                          />
                        )}
                        {hasStatus && (
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border leading-tight shrink-0 ${badgeCls}`}
                          >
                            {lead.status}
                          </span>
                        )}
                      </div>

                      {/* Subtitle details */}
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-gray-500 truncate">
                        {lead.company && (
                          <span className="truncate flex items-center gap-1 text-gray-600">
                            <Building2 size={11} className="text-gray-400 shrink-0" />
                            {lead.company}
                          </span>
                        )}
                        {lead.assignedTo?.name && (
                          <span className="text-gray-400 truncate">
                            · Rep: {lead.assignedTo.name}
                          </span>
                        )}
                        {lead.dealValue && (
                          <span className="text-emerald-700 font-medium">
                            · Val: {lead.dealValue}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right action / date column */}
                    <div className="text-right shrink-0 min-w-[68px]">
                      <span className="text-[11px] text-gray-400 font-medium block">
                        {lead.createdAt
                          ? new Date(lead.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                            })
                          : ''}
                      </span>
                      <span className="text-[11px] text-[#f1592a] font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5 mt-0.5">
                        Inspect →
                      </span>
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50/60 border-t border-gray-100 text-center">
          <Link
            href="/admin/leads"
            className="text-xs font-medium text-gray-600 hover:text-[#f1592a] transition-colors"
          >
            Open Full CRM Pipeline →
          </Link>
        </div>
      </div>

      {/* 2. RECENT JOB APPLICATIONS */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="px-4 py-3.5 sm:px-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileSpreadsheet size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Recent Applications
                </h3>
                <p className="text-xs text-gray-500 leading-tight mt-0.5">
                  Latest job candidates submitted
                </p>
              </div>
            </div>
            <Link
              href="/admin/applications"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* List items */}
          <div className="divide-y divide-gray-100">
            {applications.length === 0 ? (
              <div className="p-8 text-center text-xs text-gray-500">
                No recent applications found.
              </div>
            ) : (
              applications.map((app) => {
                const badgeCls =
                  appStatusStyles[app.status] ||
                  'bg-gray-50 text-gray-700 border-gray-200/80'
                const hasStatus = Boolean(app.status && app.status.trim())

                return (
                  <Link
                    key={app._id}
                    href={`/admin/applications/${app._id}`}
                    className="px-4 py-3 sm:px-5 flex items-center justify-between gap-3 hover:bg-blue-50/25 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      {/* Name + Status badge */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                          {app.fullName}
                        </span>
                        {hasStatus && (
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border leading-tight shrink-0 ${badgeCls}`}
                          >
                            {app.status}
                          </span>
                        )}
                      </div>

                      {/* Target Role & Dept */}
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-gray-500 truncate">
                        <span className="truncate text-gray-600 flex items-center gap-1">
                          <Briefcase size={11} className="text-gray-400 shrink-0" />
                          {app.jobId?.title || 'Open Position'}
                        </span>
                        {app.jobId?.department && (
                          <span className="text-gray-400 truncate">
                            ({app.jobId.department})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right action / date column */}
                    <div className="text-right shrink-0 min-w-[68px]">
                      <span className="text-[11px] text-gray-400 font-medium block">
                        {app.createdAt
                          ? new Date(app.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                            })
                          : ''}
                      </span>
                      <span className="text-[11px] text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5 mt-0.5">
                        Review →
                      </span>
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50/60 border-t border-gray-100 text-center">
          <Link
            href="/admin/applications"
            className="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Review All Applicants & Resumes →
          </Link>
        </div>
      </div>
    </div>
  )
}
