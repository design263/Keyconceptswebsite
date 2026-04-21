import { notFound } from 'next/navigation'
import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'

// Blog post data - in a real app, this would come from a database or API
const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Solutions: Transforming Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise software, from predictive analytics to automated decision-making.',
    content: `
      <p>Artificial Intelligence has emerged as a transformative force in enterprise technology, fundamentally changing how businesses operate, make decisions, and serve their customers. This comprehensive guide explores the current state of AI in enterprise solutions and what the future holds.</p>

      <h2>The Current State of AI in Enterprise</h2>
      <p>Today's enterprises are leveraging AI across multiple domains, from customer service chatbots to predictive maintenance systems. Machine learning algorithms are analyzing vast amounts of data to uncover insights that were previously impossible to detect.</p>

      <h2>Key Applications</h2>
      <ul>
        <li>Predictive Analytics</li>
        <li>Automated Customer Service</li>
        <li>Supply Chain Optimization</li>
        <li>Risk Management</li>
      </ul>

      <h2>Future Trends</h2>
      <p>The integration of AI into enterprise systems will continue to accelerate, with more sophisticated algorithms and real-time processing capabilities becoming standard.</p>
    `,
    author: 'Tech Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/blog/ai-enterprise.jpg',
    tags: ['AI', 'Enterprise', 'Innovation']
  },
  {
    id: '2',
    title: 'Modern Web Development Best Practices for 2024',
    excerpt: 'Discover the latest trends and best practices in web development that will shape the digital landscape this year.',
    content: `
      <p>Web development continues to evolve rapidly, with new frameworks, tools, and methodologies emerging regularly. This guide covers the essential best practices developers should adopt in 2024.</p>

      <h2>Core Technologies</h2>
      <p>Modern web development relies on a combination of frontend and backend technologies that work together seamlessly.</p>

      <h2>Performance Optimization</h2>
      <p>Website performance remains critical for user experience and SEO rankings. Learn how to optimize your applications for speed.</p>

      <h2>Security Considerations</h2>
      <p>With increasing cyber threats, security should be a primary concern in every web development project.</p>
    `,
    author: 'Dev Team',
    date: '2024-01-10',
    readTime: '6 min read',
    image: '/blog/web-dev.jpg',
    tags: ['Web Development', 'Best Practices', 'Performance']
  }
]

export default function BlogPostPage({ params }) {
  const { id } = params
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Blog</span>
              </motion.button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
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
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="sticky top-8"
                  >
                    {/* Author Info */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold mb-4">About Author</h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-[#f1592a] rounded-full flex items-center justify-center">
                          <User className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-sm text-gray-600">Senior Developer</p>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">Share Article</h3>
                      <div className="flex space-x-3">
                        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                          <Share2 size={18} />
                        </button>
                        <button className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
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
