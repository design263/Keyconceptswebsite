import LayoutWrapper from '@/components/layout-wrapper'
import { Calendar, Clock, ArrowRight, User, TrendingUp, RefreshCw } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { getFeaturedBlogPost, getRegularBlogPosts } from '@/lib/content-api'

export const dynamic = 'force-dynamic'

async function IndustryTrendsPage() {
  const featuredPost = await getFeaturedBlogPost()
  const regularPosts = await getRegularBlogPosts()

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <section className="relative pt-32 md:pb-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />
          </div>
          <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/50 rounded-full text-sm font-semibold text-[#f1592a] mb-4">
                <TrendingUp size={16} /> 
                <span className="text-xs md:text-sm">Industry Insights</span>
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6">
                Industry Trends & Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with our expert insights on the latest technology trends, best
                practices, and industry innovations.
              </p>
            </div>
            {featuredPost && (
              <div className="relative group">
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <ImageWithFallback
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-2 bg-[#f1592a] text-white text-sm font-bold rounded-full shadow-lg">
                            Featured Article
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                            {featuredPost.category}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#f1592a] transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-2">
                            <User size={16} /> <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} /> <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock size={16} /> <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-[#f1592a] font-semibold group-hover:space-x-3 transition-all">
                          <span className="text-sm md:text-md">Read Full Article</span>
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of in-depth articles covering the latest trends, technologies,
                and best practices in IT and ERP solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {regularPosts.map((post) => (
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
                          <span>•</span>
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
            <div className="text-center mt-16">
              <button className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105 flex items-center justify-center space-x-2 group mx-auto">
                <span>Load More Articles</span>
                <RefreshCw className="group-hover:rotate-180 transition-transform duration-500" size={16} />
              </button>
            </div>
          </div>
        </section>
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get the latest industry trends, insights, and exclusive content delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 md:px-6 md:py-4 px-4 py-3 text-sm md:text-md border border-white/40 bg-white/20 backdrop-blur-sm rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-md bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-2xl hover:shadow-white/50">
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/80 text-sm mt-4">
                Join 10,000+ professionals staying ahead of the curve
              </p>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}

export default IndustryTrendsPage
