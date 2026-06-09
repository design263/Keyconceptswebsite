'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from './use-admin-auth'
import '@/styles/theme.css'
export default function AdminDashboardPage() {
  const router = useRouter()
  const token = useAdminAuth()

  useEffect(() => {
    if (token) {
      router.push('/admin/jobs')
    }
  }, [token])

  return null
}
