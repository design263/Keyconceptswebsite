import LayoutWrapper from '@/components/layout-wrapper'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Solutions: Transforming Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise software, from predictive analytics to automated decision-making.',
    author: 'AI Research Team',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
    image: '/images/blog/ai-enterprise-solutions.jpg',
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications: Best Practices for Modern Development',
    excerpt: 'Learn the essential strategies and technologies for creating web applications that can handle growth and maintain performance.',
    author: 'Engineering Team',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    category: 'Web Development',
    image: '/images/blog/scalable-web-apps.jpg',
  },
]

export const metadata = {
  title: 'Blog - Key Concepts | Insights and Articles',
  description: 'Read our latest articles on web development, technology trends, and digital transformation insights.',
  openGraph: {
    title: 'Blog - Key Concepts | Insights and Articles',
    description: 'Read our latest articles on web development, technology trends, and digital transformation insights.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Key Concepts | Insights and Articles',
    description: 'Read our latest articles on web development, technology trends, and digital transformation insights.',
  },
}

export default function BlogPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Insights, tutorials, and best practices on web development, technology trends, 
              and digital transformation from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-xl">
                  <div className="w-full h-48 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-t-xl"></div>
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
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
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
