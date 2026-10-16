'use client'

import Link from 'next/link'
import {
  Mail,
  BriefcaseBusiness,
  FileSpreadsheet,
  Newspaper,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export function KpiCards({ kpis, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-4 bg-gray-200 rounded w-24" />
              <div className="w-10 h-10 bg-gray-200 rounded-lg" />
            </div>
            <div className="h-8 bg-gray-200 rounded w-16 mb-2" />
            <div className="h-3 bg-gray-100 rounded w-36" />
          </div>
        ))}
      </div>
    )
  }

  const cards = [
    {
      title: 'Contact Leads',
      value: kpis?.totalLeads ?? 0,
      subValue: `${kpis?.convertedLeads ?? 0} converted (${kpis?.leadConversionRate ?? '0.0'}%)`,
      badge:
        (kpis?.newLeads ?? 0) > 0
          ? `${kpis.newLeads} New`
          : (kpis?.unviewedLeadsCount ?? 0) > 0
          ? `${kpis.unviewedLeadsCount} Unread`
          : null,
      badgeColor: 'bg-orange-50 text-[#f1592a] border-orange-200',
      icon: Mail,
      iconBg: 'bg-orange-50 text-[#f1592a]',
      href: '/admin/leads',
      linkLabel: 'View CRM Leads',
      gradient: 'from-[#f1592a]/10 to-transparent',
    },
    {
      title: 'Job Applications',
      value: kpis?.totalApplications ?? 0,
      subValue: `${kpis?.selectedCount ?? 0} selected (${kpis?.selectionRate ?? '0.0'}%)`,
      badge: kpis?.scheduledInterviewsCount > 0 ? `${kpis.scheduledInterviewsCount} Interviews` : null,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: FileSpreadsheet,
      iconBg: 'bg-blue-50 text-blue-600',
      href: '/admin/applications',
      linkLabel: 'Review Applicants',
      gradient: 'from-blue-500/10 to-transparent',
    },
    {
      title: 'Active Job Openings',
      value: kpis?.activeJobs ?? 0,
      subValue: `${kpis?.totalJobs ?? 0} total roles (${kpis?.inactiveJobs ?? 0} closed)`,
      badge: `${kpis?.activeJobs ?? 0} Live`,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: BriefcaseBusiness,
      iconBg: 'bg-emerald-50 text-emerald-600',
      href: '/admin/jobs',
      linkLabel: 'Manage Openings',
      gradient: 'from-emerald-500/10 to-transparent',
    },
    {
      title: 'Content & Stories',
      value: (kpis?.totalBlogs ?? 0) + (kpis?.totalCaseStudies ?? 0),
      subValue: `${kpis?.activeBlogs ?? 0} Blogs · ${kpis?.activeCaseStudies ?? 0} Case Studies`,
      badge: 'Live',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: Newspaper,
      iconBg: 'bg-purple-50 text-purple-600',
      href: '/admin/blogs',
      linkLabel: 'Explore Content',
      gradient: 'from-purple-500/10 to-transparent',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon
        return (
          <div
            key={idx}
            className="group relative bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient subtle glow background */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.gradient} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity`}
            />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {card.title}
                </span>
                <div
                  className={`w-9 h-9 rounded-lg ${card.iconBg} flex items-center justify-center transition-transform group-hover:scale-105`}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">
                  {card.value}
                </span>
                {card.badge && (
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 line-clamp-1">
                {card.subValue}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <Link
                href={card.href}
                className="font-medium text-[#f1592a] hover:text-[#d0461b] flex items-center gap-1 group/link"
              >
                <span>{card.linkLabel}</span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
