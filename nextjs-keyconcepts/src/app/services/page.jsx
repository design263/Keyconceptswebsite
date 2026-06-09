import LayoutWrapper from '@/components/layout-wrapper'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('services')

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white mt-15">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              We offer a comprehensive range of digital services designed to help your business 
              thrive in the modern digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
                <p className="text-gray-700">Custom web applications built with modern technologies and best practices.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Development</h3>
                <p className="text-gray-700">Native and cross-platform mobile applications for iOS and Android.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ERP Solutions</h3>
                <p className="text-gray-700">Custom ERP implementations and integrations with Odoo and other platforms.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation</h3>
                <p className="text-gray-700">Strategic consulting and implementation for digital business transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
