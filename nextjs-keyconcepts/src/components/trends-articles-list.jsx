'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User, RefreshCw, ChevronUp } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

const PAGE_SIZE = 4

export default function TrendsArticlesList({ posts = [] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visiblePosts = posts.slice(0, visibleCount)
  const hasMore = visibleCount < posts.length
  const canShowLess = visibleCount > PAGE_SIZE && posts.length > PAGE_SIZE

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length))
  }

  const handleShowLess = () => {
    setVisibleCount(PAGE_SIZE)
  }

  if (!posts.length) return null

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visiblePosts.map((post) => (
          <div className="group" key={post.id}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} /> <span>{post.date}</span>
                    </div>
                    <span>{'\u2022'}</span>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} /> <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User size={16} /> <span>{post.author}</span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#f1592a] group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {(hasMore || canShowLess) && (
        <div className="text-center mt-16">
          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105 flex items-center justify-center space-x-2 group mx-auto"
            >
              <span>Show More Articles</span>
              <RefreshCw className="group-hover:rotate-180 transition-transform duration-500" size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleShowLess}
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105 flex items-center justify-center space-x-2 group mx-auto"
            >
              <span>Show Less Articles</span>
              <ChevronUp className="group-hover:-translate-y-0.5 transition-transform" size={16} />
            </button>
          )}
        </div>
      )}
    </>
  )
}
