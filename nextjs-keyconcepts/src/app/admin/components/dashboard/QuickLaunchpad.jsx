'use client'

import Link from 'next/link'
import {
  PlusCircle,
  BriefcaseBusiness,
  Newspaper,
  Award,
  Mail,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react'

export function QuickLaunchpad() {
  const actions = [
    {
      title: 'Post New Job',
      subtitle: 'Publish career vacancy',
      icon: BriefcaseBusiness,
      href: '/admin/jobs',
      color: 'hover:border-emerald-300 hover:bg-emerald-50/40 text-emerald-700',
      iconColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Write Blog Post',
      subtitle: 'Publish insights & articles',
      icon: Newspaper,
      href: '/admin/blogs',
      color: 'hover:border-purple-300 hover:bg-purple-50/40 text-purple-700',
      iconColor: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'Add Case Study',
      subtitle: 'Showcase client success',
      icon: Award,
      href: '/admin/case-studies',
      color: 'hover:border-blue-300 hover:bg-blue-50/40 text-blue-700',
      iconColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'View Inbound Leads',
      subtitle: 'Manage client CRM records',
      icon: Mail,
      href: '/admin/leads',
      color: 'hover:border-orange-300 hover:bg-orange-50/40 text-[#f1592a]',
      iconColor: 'bg-orange-100 text-[#f1592a]',
    },
    {
      title: 'Manage Masters',
      subtitle: 'Interviewers & lead assignees',
      icon: Users,
      href: '/admin/master/interviewers',
      color: 'hover:border-slate-300 hover:bg-slate-50/40 text-slate-700',
      iconColor: 'bg-slate-100 text-slate-700',
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f1592a] flex items-center justify-center">
            <Compass size={16} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Quick Action Launchpad
            </h3>
            <p className="text-xs text-gray-500">
              Direct access to create and manage platform records
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map((act, idx) => {
          const Icon = act.icon
          return (
            <Link
              key={idx}
              href={act.href}
              className={`p-3.5 rounded-xl border border-gray-200/90 bg-white transition-all duration-200 flex flex-col justify-between group ${act.color}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg ${act.iconColor} flex items-center justify-center transition-transform group-hover:scale-105`}>
                  <Icon size={16} />
                </div>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-current group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 group-hover:text-current transition-colors">
                  {act.title}
                </p>
                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                  {act.subtitle}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
