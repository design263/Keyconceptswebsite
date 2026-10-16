'use client'

import { Users, Filter, CheckCircle, TrendingUp, Layers } from 'lucide-react'

const leadStatusConfig = {
  New: { bg: 'bg-blue-500', pillBg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  Contacted: { bg: 'bg-indigo-500', pillBg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  Qualified: { bg: 'bg-teal-500', pillBg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  'Proposal Sent': { bg: 'bg-amber-500', pillBg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Negotiation: { bg: 'bg-[#f1592a]', pillBg: 'bg-orange-50', text: 'text-[#f1592a]', border: 'border-orange-200' },
  Converted: { bg: 'bg-emerald-600', pillBg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  Lost: { bg: 'bg-rose-400', pillBg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  Closed: { bg: 'bg-slate-400', pillBg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
}

const appStatusConfig = {
  Applied: { bar: 'bg-blue-500', text: 'text-blue-700', light: 'bg-blue-50' },
  Shortlisted: { bar: 'bg-purple-500', text: 'text-purple-700', light: 'bg-purple-50' },
  Interviewing: { bar: 'bg-amber-500', text: 'text-amber-700', light: 'bg-amber-50' },
  Selected: { bar: 'bg-emerald-500', text: 'text-emerald-700', light: 'bg-emerald-50' },
  Rejected: { bar: 'bg-red-400', text: 'text-red-700', light: 'bg-red-50' },
}

export function PipelineVisuals({ leadPipeline, applicationFunnel, kpis, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse h-64" />
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse h-64" />
      </div>
    )
  }

  const safeLeadPipeline = leadPipeline || []
  const safeAppFunnel = applicationFunnel || []
  const totalLeads = kpis?.totalLeads || 0
  const totalApps = kpis?.totalApplications || 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 1. CRM LEADS PIPELINE */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f1592a] flex items-center justify-center">
                <Layers size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  CRM Lead Pipeline Distribution
                </h3>
                <p className="text-xs text-gray-500">
                  Lead stage progression & win rate
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                {kpis?.leadConversionRate || '0.0'}% Win Rate
              </span>
            </div>
          </div>

          {/* Stacked Proportional Bar */}
          <div className="mt-4 mb-5">
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex shadow-inner">
              {totalLeads > 0 ? (
                safeLeadPipeline.map((item, idx) => {
                  const conf = leadStatusConfig[item.status] || { bg: 'bg-gray-400' }
                  if (item.count === 0) return null
                  const widthPct = Math.max(2, (item.count / totalLeads) * 100)
                  return (
                    <div
                      key={idx}
                      style={{ width: `${widthPct}%` }}
                      className={`${conf.bg} h-full transition-all duration-300 relative group`}
                      title={`${item.status}: ${item.count} (${item.percentage}%)`}
                    />
                  )
                })
              ) : (
                <div className="w-full bg-gray-200 h-full" />
              )}
            </div>
          </div>

          {/* Detailed Status Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {safeLeadPipeline.map((item) => {
              const conf = leadStatusConfig[item.status] || {
                pillBg: 'bg-gray-50',
                text: 'text-gray-700',
                border: 'border-gray-200',
                bg: 'bg-gray-400',
              }
              return (
                <div
                  key={item.status}
                  className={`p-2.5 rounded-lg border ${conf.border} ${conf.pillBg} flex flex-col justify-between`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-2 h-2 rounded-full ${conf.bg}`} />
                    <span className="text-xs font-medium text-gray-700 truncate">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-bold text-gray-900">
                      {item.count}
                    </span>
                    <span className={`text-[10px] font-semibold ${conf.text}`}>
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Active in Pipeline: <strong className="text-gray-800">{kpis?.activeInPipeline ?? 0}</strong></span>
          <span>Total Received: <strong className="text-gray-800">{totalLeads}</strong></span>
        </div>
      </div>

      {/* 2. RECRUITMENT FUNNEL */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Talent Recruitment Funnel
                </h3>
                <p className="text-xs text-gray-500">
                  Applicant flow through screening & selection
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                {kpis?.selectionRate || '0.0'}% Selected
              </span>
            </div>
          </div>

          {/* Stepped Funnel Bars */}
          <div className="space-y-2.5 mt-3">
            {safeAppFunnel.map((item) => {
              const conf = appStatusConfig[item.status] || {
                bar: 'bg-gray-400',
                text: 'text-gray-700',
                light: 'bg-gray-50',
              }
              const pct = totalApps > 0 ? Math.round((item.count / totalApps) * 100) : 0

              return (
                <div key={item.status} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${conf.bar}`} />
                      {item.status}
                    </span>
                    <span className="text-gray-500">
                      <strong className="text-gray-900">{item.count}</strong> ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.max(item.count > 0 ? 4 : 0, pct)}%` }}
                      className={`h-full ${conf.bar} rounded-full transition-all duration-300`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Active Interviews: <strong className="text-amber-600">{kpis?.interviewingCount ?? 0}</strong></span>
          <span>Total Applicants: <strong className="text-gray-800">{totalApps}</strong></span>
        </div>
      </div>
    </div>
  )
}
