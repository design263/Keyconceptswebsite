import { Link } from 'react-router'
import { SEO } from '../components/ui/seo'

function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-screen bg-white flex items-center justify-center">
      {' '}
      <div className="text-center">
        {' '}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>{' '}
        <Link to="/" className="text-[#f1592a] hover:underline">
          Return Home
        </Link>
      </div>
    </div>
    </>
  )
}
export { NotFoundPage }
