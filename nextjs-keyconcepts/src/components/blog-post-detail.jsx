'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'

export function BlogPostDetail({ post }) {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            

            <div className="max-w-4xl mx-auto">
            <Link href="/insights/trends">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Industry Trends</span>
              </motion.button>
            </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-block px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden mb-10">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-72 md:h-96 object-cover"
                    fallback="/images/blog/placeholder.jpg"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="sticky top-8"
                  >
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold mb-4">About Author</h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-[#f1592a] rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-sm text-gray-600">{post.category}</p>
                        </div>
                      </div>
                    </div>

                    {post.tags?.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h3 className="font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Share Article</h3>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <Share2 size={18} />
                        </button>
                        <button
                          type="button"
                          className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <Bookmark size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
