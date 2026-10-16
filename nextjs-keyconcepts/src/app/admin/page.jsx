'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAdminAuth } from './use-admin-auth'
import { api, endpoints } from '@/lib/api'
import { toast } from 'sonner'
import '@/styles/theme.css'
import {
  RotateCw,
  Calendar,
  Sparkles,
  LayoutDashboard
} from 'lucide-react'

import { KpiCards } from './components/dashboard/KpiCards'
import { AttentionHub } from './components/dashboard/AttentionHub'
import { PipelineVisuals } from './components/dashboard/PipelineVisuals'
import { TrendChart } from './components/dashboard/TrendChart'
import { RecentFeeds } from './components/dashboard/RecentFeeds'
import { QuickLaunchpad } from './components/dashboard/QuickLaunchpad'

const periodOptions = [
  { value: 'all', label: 'All Time' },
  { value: 'month', label: 'This Month' },
  { value: '30days', label: 'Last 30 Days' },
  { value: '7days', label: 'Last 7 Days' },
  { value: 'today', label: 'Today' },
]

export default function AdminDashboardPage() {
  const token = useAdminAuth()
  const [period, setPeriod] = useState('all')
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [stats, setStats] = useState(null)

  const fetchStats = useCallback(
    async (selectedPeriod = period, isRefresh = false) => {
      if (!token) return
      try {
        if (isRefresh) {
          setRefreshing(true)
        } else {
          setLoading(true)
        }

        const path = `${endpoints.DASHBOARD_STATS}?period=${selectedPeriod}`
        const res = await api.get(path, token)

        if (res && res.success) {
          setStats(res)
          if (isRefresh) {
            toast.success('Dashboard metrics refreshed')
          }
        } else {
          toast.error(res?.message || 'Failed to load dashboard data')
        }
      } catch (err) {
        console.error('Failed to load dashboard stats:', err)
        toast.error('Error connecting to dashboard analytics')
      } finally {
        setLoading(false)
        setRefreshing(false)
      }
    },
    [token, period]
  )

  useEffect(() => {
    if (token) {
      fetchStats(period)
    }
  }, [token, period, fetchStats])

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header & Range Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f1592a] to-[#ff7a45] text-white flex items-center justify-center shadow-xs">
              <LayoutDashboard size={17} />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              Executive Dashboard
            </h1>
          </div>
          <p className="text-xs text-gray-500">
            Real-time pulse of inbound business leads, hiring pipeline, and company content.
          </p>
        </div>

        {/* Right Controls: Filter Pills & Refresh */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Period selector */}
          <div className="flex items-center bg-gray-100 p-1 rounded-lg">
            {periodOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setPeriod(opt.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  period === opt.value
                    ? 'bg-white text-gray-900 shadow-2xs'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Refresh button */}
          <button
            onClick={() => fetchStats(period, true)}
            disabled={refreshing || loading}
            title="Refresh analytics"
            className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-orange-50 hover:text-[#f1592a] text-gray-600 transition-colors disabled:opacity-50 cursor-pointer shadow-2xs"
          >
            <RotateCw
              size={16}
              className={`${refreshing ? 'animate-spin text-[#f1592a]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* 1. Attention Hub (Urgent Notifications & Action Center) */}
      <AttentionHub
        attentionItems={stats?.attentionItems}
        loading={loading}
      />

      {/* 2. Executive KPI Cards */}
      <KpiCards
        kpis={stats?.kpis}
        loading={loading}
      />

      {/* 3. Pipeline Funnels (CRM & Recruitment) */}
      <PipelineVisuals
        leadPipeline={stats?.leadPipeline}
        applicationFunnel={stats?.applicationFunnel}
        kpis={stats?.kpis}
        loading={loading}
      />

      {/* 4. Inbound Velocity 6-Month Trend */}
      <TrendChart
        monthlyTrends={stats?.monthlyTrends}
        loading={loading}
      />

      {/* 5. Recent Activity Feeds */}
      <RecentFeeds
        recentLeads={stats?.recentLeads}
        recentApplications={stats?.recentApplications}
        loading={loading}
      />

      {/* 6. Quick Action Launchpad */}
      <QuickLaunchpad />
    </div>
  )
}
