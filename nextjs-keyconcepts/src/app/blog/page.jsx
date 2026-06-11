import LayoutWrapper from '@/components/layout-wrapper'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { blogPosts } from '@/data/blog-posts'

import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('blog')

export default function BlogPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Insights, tutorials, and best practices on web development, technology trends,
              and digital transformation from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    fallback="/images/blog/placeholder.jpg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-[#f1592a] hover:text-[#e0481a] font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
