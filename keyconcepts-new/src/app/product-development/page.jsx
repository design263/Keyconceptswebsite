import LayoutWrapper from '@/components/layout-wrapper'
import ProductDevelopment from '@/components/services/productDevelopment'
import { generateServiceMetadata } from '@/lib/seo-helpers'

export const metadata = generateServiceMetadata({
  title: 'Product Development Services | End-to-End Solutions | Key Concepts',
  description: 'Complete product development services from concept to launch. We handle design, development, testing, and deployment of your digital products.',
  path: '/product-development',
  keywords: ['product development', 'software development lifecycle', 'product design', 'agile development', 'product management', 'software engineering', 'product launch', 'digital products']
})

function ProductDevelopmentPage() {

  return (
    <LayoutWrapper>
      <ProductDevelopment />
    </LayoutWrapper>
  )
}

export default ProductDevelopmentPage
