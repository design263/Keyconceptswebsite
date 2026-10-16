'use client'

import { useState } from 'react'
import { TrendingUp, BarChart3, HelpCircle } from 'lucide-react'

export function TrendChart({ monthlyTrends, loading }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse h-64" />
    )
  }

  const trends = monthlyTrends || []
  const maxVal = Math.max(
    1,
    ...trends.flatMap((t) => [t.leads || 0, t.applications || 0])
  )

  const totalLeadsInTrend = trends.reduce((sum, t) => sum + (t.leads || 0), 0)
  const totalAppsInTrend = trends.reduce((sum, t) => sum + (t.applications || 0), 0)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f1592a] flex items-center justify-center">
            <TrendingUp size={16} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Inbound Activity Velocity
            </h3>
            <p className="text-xs text-gray-500">
              Month-over-month comparison of leads & candidate applications
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#f1592a]" />
            <span className="text-gray-700">Leads ({totalLeadsInTrend})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-blue-500" />
            <span className="text-gray-700">Applications ({totalAppsInTrend})</span>
          </div>
        </div>
      </div>

      {/* Chart Bars */}
      <div className="pt-4 pb-2">
        <div className="grid grid-cols-6 gap-2 sm:gap-6 items-end h-44 border-b border-gray-100 px-2">
          {trends.map((item, idx) => {
            const leadHeightPct = Math.max(item.leads > 0 ? 6 : 2, (item.leads / maxVal) * 100)
            const appHeightPct = Math.max(item.applications > 0 ? 6 : 2, (item.applications / maxVal) * 100)
            const isHovered = hoveredIndex === idx

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col items-center h-full justify-end group cursor-pointer relative"
              >
                {/* Floating tooltip on hover */}
                {isHovered && (
                  <div className="absolute -top-12 z-20 bg-gray-900 text-white text-[10px] py-1.5 px-2.5 rounded shadow-lg whitespace-nowrap pointer-events-none flex flex-col gap-0.5 animate-in fade-in zoom-in-95 duration-100">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-orange-300">Leads: {item.leads}</span>
                    <span className="text-blue-300">Applications: {item.applications}</span>
                  </div>
                )}

                {/* Bars Pair */}
                <div className="flex items-end gap-1 sm:gap-2 h-full w-full justify-center">
                  {/* Lead Bar */}
                  <div
                    style={{ height: `${leadHeightPct}%` }}
                    className={`w-3 sm:w-5 bg-gradient-to-t from-[#f1592a] to-[#ff7a45] rounded-t-sm transition-all duration-200 ${
                      isHovered ? 'brightness-110 shadow-sm' : ''
                    }`}
                  />
                  {/* Application Bar */}
                  <div
                    style={{ height: `${appHeightPct}%` }}
                    className={`w-3 sm:w-5 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm transition-all duration-200 ${
                      isHovered ? 'brightness-110 shadow-sm' : ''
                    }`}
                  />
                </div>

                {/* Month Label */}
                <span className="text-[11px] font-semibold text-gray-500 mt-2 truncate w-full text-center">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
