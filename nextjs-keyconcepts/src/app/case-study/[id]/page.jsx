import { notFound } from 'next/navigation'
import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Award, ExternalLink } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'

// Case study data - in a real app, this would come from a database or API
const caseStudies = [
  {
    id: '1',
    title: 'E-Commerce Platform Transformation: 300% Growth in 12 Months',
    client: 'Fashion Retail Giant',
    category: 'E-Commerce',
    industry: 'Retail',
    duration: '6 months',
    team: '8 members',
    excerpt: 'How we helped a major fashion retailer transform their online presence and achieve unprecedented growth through modern web technologies and strategic optimization.',
    challenge: 'The client was struggling with an outdated e-commerce platform that couldn\'t handle their growing traffic and sales volume. The site was slow, difficult to maintain, and provided poor user experience, leading to high cart abandonment rates.',
    solution: 'We developed a comprehensive e-commerce solution using Next.js, React, and a headless CMS. The new platform featured advanced search capabilities, personalized recommendations, and a seamless mobile experience.',
    results: [
      '300% increase in online sales',
      '60% reduction in page load time',
      '45% decrease in cart abandonment rate',
      '200% improvement in mobile conversion',
      '99.9% uptime achieved',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    testimonial: {
      quote: 'The transformation has been remarkable. Our online sales have skyrocketed, and customers love the new experience. The team\'s expertise and dedication were exceptional.',
      author: 'CEO, Fashion Retail Giant',
    },
    image: '/images/case-studies/ecommerce-transformation.jpg',
    gallery: [
      '/images/case-studies/ecommerce-dashboard.jpg',
      '/images/case-studies/ecommerce-mobile.jpg',
      '/images/case-studies/ecommerce-analytics.jpg',
    ],
    publishedDate: '2024-01-20',
    tags: ['E-Commerce', 'Next.js', 'React', 'Performance', 'UX Design'],
  },
  {
    id: '2',
    title: 'Enterprise ERP Implementation: Streamlining Operations for Manufacturing Company',
    client: 'Industrial Manufacturing Corp',
    category: 'ERP Solutions',
    industry: 'Manufacturing',
    duration: '9 months',
    team: '12 members',
    excerpt: 'Complete digital transformation of legacy systems with custom Odoo ERP implementation, resulting in streamlined operations and significant cost savings.',
    challenge: 'The manufacturing company was operating with multiple disconnected systems, manual processes, and no real-time visibility into operations. This led to inefficiencies, errors, and high operational costs.',
    solution: 'We implemented a comprehensive Odoo ERP solution customized for manufacturing needs, including inventory management, production planning, quality control, and financial reporting.',
    results: [
      '40% reduction in operational costs',
      '70% improvement in inventory accuracy',
      '50% faster order processing',
      '90% reduction in manual data entry',
      'Real-time visibility across all departments',
    ],
    technologies: ['Odoo ERP', 'Python', 'PostgreSQL', 'Docker', 'React', 'AWS'],
    testimonial: {
      quote: 'The ERP implementation has transformed how we operate. We now have complete visibility and control over our entire operation, leading to significant efficiency gains.',
      author: 'Operations Director, Industrial Manufacturing Corp',
    },
    image: '/images/case-studies/erp-implementation.jpg',
    gallery: [
      '/images/case-studies/erp-dashboard.jpg',
      '/images/case-studies/erp-inventory.jpg',
      '/images/case-studies/erp-reporting.jpg',
    ],
    publishedDate: '2024-01-18',
    tags: ['ERP', 'Odoo', 'Manufacturing', 'Digital Transformation', 'Process Optimization'],
  },
]

export async function generateMetadata({ params }) {
  const { id } = await params
  const caseStudy = caseStudies.find(cs => cs.id === id)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
    }
  }

  return {
    title: `${caseStudy.title} | Case Study | Key Concepts`,
    description: caseStudy.excerpt,
    keywords: `${caseStudy.tags.join(', ')}, case study, ${caseStudy.industry}, ${caseStudy.category}, success story`,
    openGraph: {
      title: `${caseStudy.title} | Case Study | Key Concepts`,
      description: caseStudy.excerpt,
      type: 'article',
      publishedTime: caseStudy.publishedDate,
      authors: [caseStudy.client],
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | Case Study | Key Concepts`,
      description: caseStudy.excerpt,
      images: [caseStudy.image],
    },
  }
}

export default async function CaseStudyDetailPage({ params }) {
  const { id } = await params
  const caseStudy = caseStudies.find(cs => cs.id === id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center text-gray-600 hover:text-[#f1592a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-600">{caseStudy.industry}</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{caseStudy.excerpt}</p>
                
                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#f1592a]" />
                    <div>
                      <p className="text-sm text-gray-600">Team Size</p>
                      <p className="font-semibold">{caseStudy.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#f1592a]" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{caseStudy.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-80 object-cover"
                  fallback="/images/case-studies/placeholder.jpg"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Testimonial */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-2xl p-8 text-white"
              >
                <blockquote className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                <cite className="font-semibold">- {caseStudy.testimonial.author}</cite>
              </motion.section>

              {/* Gallery */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform"
                        fallback="/images/case-studies/placeholder.jpg"
                      />
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Client</p>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Industry</p>
                    <p className="font-medium">{caseStudy.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium">{caseStudy.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">{caseStudy.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Team Size</p>
                    <p className="font-medium">{caseStudy.team}</p>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Share */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button className="w-full bg-[#f1592a] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#e0481a] transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
