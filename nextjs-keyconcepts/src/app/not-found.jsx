import Link from 'next/link'
import LayoutWrapper from '@/components/layout-wrapper'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </LayoutWrapper>
  )
}
