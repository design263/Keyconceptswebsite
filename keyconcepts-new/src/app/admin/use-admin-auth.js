'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAdminAuth() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('admin_token')
      if (!token) {
        router.push('/admin/login')
        return
      }
    }
  }, [router])

  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_token')
  }
  return null
}
