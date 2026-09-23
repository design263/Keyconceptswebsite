import Link from 'next/link'
import LayoutWrapper from '@/components/layout-wrapper'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('services')

const serviceLinks = [
  {
    href: '/product-development',
    title: 'Product Development',
    description: 'End-to-end product engineering for web, mobile, and SaaS platforms.',
  },
  {
    href: '/web-solutions',
    title: 'Web Solutions',
    description: 'Business websites, e-commerce, web apps, and APIs with modern stacks.',
  },
  {
    href: '/mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform apps for iOS and Android.',
  },
  {
    href: '/custom-erp-solutions',
    title: 'Custom ERP Solutions',
    description: 'ERP implementation, customization, integrations, and ongoing support.',
  },
  {
    href: '/mvp-studio',
    title: 'MVP Studio',
    description: 'Launch-ready MVPs for startups in weeks, not months.',
  },
  {
    href: '/support-maintenance',
    title: 'Support & Maintenance',
    description: 'Monitoring, fixes, security updates, and performance tuning.',
  },
]

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white mt-15">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-700 leading-relaxed mb-10">
            A full range of digital services to help your business build, launch, and scale
            modern software products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#f1592a]/40 hover:shadow-md transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
