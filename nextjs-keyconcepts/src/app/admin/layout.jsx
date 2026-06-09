import AdminShell from './admin-shell'
import { adminMetadata } from '@/lib/seo'

export const metadata = adminMetadata

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>
}
