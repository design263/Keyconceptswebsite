'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bell,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Mail,
  User,
  MapPin,
  ExternalLink,
  AlertTriangle,
  Building2
} from 'lucide-react'

export function AttentionHub({ attentionItems, loading }) {
  const [activeTab, setActiveTab] = useState('inbound')

  const inboundLeads = attentionItems?.inboundLeads || attentionItems?.unviewedLeads || []
  const unviewedCount = attentionItems?.unviewedLeadsCount || 0
  const upcomingInterviews = attentionItems?.upcomingInterviews || []
  const followUpsDue = attentionItems?.followUpsDue || []

  const totalUrgentCount =
    inboundLeads.length + upcomingInterviews.length + followUpsDue.length

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-48 mb-4" />
        <div className="space-y-3">
          <div className="h-14 bg-gray-100 rounded-lg" />
          <div className="h-14 bg-gray-100 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="px-4 py-3.5 sm:px-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-orange-50/40 via-white to-white">
        <div className="flex items-center gap-2.5">
          <div className="relative shrink-0">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f1592a] flex items-center justify-center font-bold">
              <Bell size={16} />
            </div>
            {totalUrgentCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <span>Attention Center</span>
              {totalUrgentCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-700">
                  {totalUrgentCount} Actionable
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700">
                  All Clear
                </span>
              )}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Inbound client inquiries and scheduled hiring rounds requiring response
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 bg-gray-100/90 p-1 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('inbound')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'inbound'
                ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>Inbound Leads ({inboundLeads.length})</span>
            {unviewedCount > 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" title={`${unviewedCount} unread`} />
            )}
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'interviews'
                ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Interviews ({upcomingInterviews.length})
          </button>
          <button
            onClick={() => setActiveTab('followups')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'followups'
                ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Follow-ups ({followUpsDue.length})
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-5">
        {/* TAB 1: INBOUND LEADS */}
        {activeTab === 'inbound' && (
          <div>
            {inboundLeads.length === 0 ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <CheckCircle2 size={36} className="text-emerald-500 mb-2" />
                <p className="text-sm font-semibold text-gray-800">
                  No Open Inbound Leads
                </p>
                <p className="text-xs text-gray-500 max-w-sm mt-0.5">
                  All inquiries for the selected period have been addressed or progressed.
                </p>
                <Link
                  href="/admin/leads"
                  className="mt-3 text-xs font-semibold text-[#f1592a] hover:underline"
                >
                  View All CRM Pipeline Leads →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {inboundLeads.map((lead) => (
                  <Link
                    key={lead._id}
                    href={`/admin/leads/${lead._id}`}
                    className="group border border-orange-200/80 bg-orange-50/20 hover:bg-orange-50/50 rounded-xl p-3.5 transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      {/* Name & Badges */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                          {!lead.isViewed && (
                            <span
                              className="w-2 h-2 rounded-full bg-red-500 shrink-0"
                              title="Unread Inquiry"
                            />
                          )}
                          <span className="font-semibold text-xs text-gray-900 group-hover:text-[#f1592a] transition-colors truncate">
                            {lead.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200 leading-tight">
                            {lead.status || 'New'}
                          </span>
                          {lead.priority && (
                            <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-gray-100 text-gray-600 uppercase leading-tight">
                              {lead.priority}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Company */}
                      {lead.company && (
                        <p className="text-[11px] text-gray-600 font-medium mb-1 flex items-center gap-1 truncate">
                          <Building2 size={11} className="text-gray-400 shrink-0" />
                          <span className="truncate">{lead.company}</span>
                        </p>
                      )}

                      {/* Inquiry Snippet */}
                      <p className="text-[11px] text-gray-500 line-clamp-2 italic mb-2">
                        "{lead.subject || lead.message || 'Website Contact Form'}"
                      </p>
                    </div>

                    {/* Bottom date and link */}
                    <div className="pt-2 border-t border-orange-100 flex items-center justify-between text-[11px] text-gray-400">
                      <span>
                        {lead.createdAt
                          ? new Date(lead.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : ''}
                      </span>
                      <span className="text-[#f1592a] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Open Record <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SCHEDULED INTERVIEWS */}
        {activeTab === 'interviews' && (
          <div>
            {upcomingInterviews.length === 0 ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <Calendar size={36} className="text-gray-300 mb-2" />
                <p className="text-sm font-semibold text-gray-800">
                  No Interviews Scheduled
                </p>
                <p className="text-xs text-gray-500 max-w-sm mt-0.5">
                  No upcoming candidate rounds are currently marked as Scheduled.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {upcomingInterviews.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/admin/applications/${item.applicationId}`}
                    className="group border border-blue-200/80 bg-blue-50/20 hover:bg-blue-50/50 rounded-xl p-3.5 transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-xs text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                          {item.candidateName}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-blue-100 text-blue-700 shrink-0 leading-tight">
                          Round {item.roundNumber}: {item.roundName}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 font-medium mb-1">
                        🎯 {item.jobTitle}
                      </p>
                      <div className="space-y-0.5 text-[11px] text-gray-500 mb-2">
                        <p className="flex items-center gap-1.5">
                          <User size={12} className="text-gray-400 shrink-0" />
                          <span>Interviewer: {item.interviewer}</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <Clock size={12} className="text-gray-400 shrink-0" />
                          <span>
                            {item.interviewDate} at {item.interviewTime} ({item.duration || '45m'})
                          </span>
                        </p>
                        {item.location && (
                          <p className="flex items-center gap-1.5 truncate">
                            <MapPin size={12} className="text-gray-400 shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-blue-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                      <span>View Application</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: FOLLOW-UPS DUE */}
        {activeTab === 'followups' && (
          <div>
            {followUpsDue.length === 0 ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <CheckCircle2 size={36} className="text-emerald-500 mb-2" />
                <p className="text-sm font-semibold text-gray-800">
                  All Follow-ups Clear
                </p>
                <p className="text-xs text-gray-500 max-w-sm mt-0.5">
                  No client follow-up calls or emails are due or overdue at this moment.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {followUpsDue.map((item) => (
                  <Link
                    key={item._id}
                    href={`/admin/leads/${item._id}`}
                    className="group border border-amber-200/80 bg-amber-50/20 hover:bg-amber-50/50 rounded-xl p-3.5 transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-xs text-gray-900 group-hover:text-amber-700 transition-colors truncate">
                          {item.name}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-amber-100 text-amber-800 shrink-0 leading-tight">
                          {item.status}
                        </span>
                      </div>
                      {item.company && (
                        <p className="text-[11px] text-gray-600 font-medium mb-1">
                          🏢 {item.company}
                        </p>
                      )}
                      <p className="text-[11px] text-amber-800 font-semibold mb-2 flex items-center gap-1.5">
                        <AlertTriangle size={13} className="text-amber-600 shrink-0" />
                        <span>
                          Due:{' '}
                          {item.nextFollowUpDate
                            ? new Date(item.nextFollowUpDate).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                              })
                            : 'Today'}
                        </span>
                      </p>
                    </div>

                    <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
                      <span>Open Lead Record</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
