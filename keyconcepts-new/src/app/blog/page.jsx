import LayoutWrapper from '@/components/layout-wrapper'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo-helpers'

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Solutions: Transforming Business Operations',
    excerpt:
      'Explore how artificial intelligence is revolutionizing enterprise software, from predictive analytics to automated decision-making.',
    content: `
      <p>Artificial Intelligence has emerged as a transformative force in enterprise technology, fundamentally changing how businesses operate, make decisions, and serve their customers. This comprehensive guide explores the current state of AI in enterprise solutions and what the future holds.</p>

      <h2>The Current State of AI in Enterprise</h2>
      <p>Today's enterprises are leveraging AI across multiple domains, from customer service chatbots to predictive maintenance systems. Machine learning algorithms are analyzing vast amounts of data to uncover insights that were previously impossible to detect.</p>

      <h3>Key Applications</h3>
      <ul>
        <li><strong>Predictive Analytics:</strong> Forecasting business trends and customer behavior with unprecedented accuracy</li>
        <li><strong>Process Automation:</strong> Streamlining repetitive tasks and reducing operational costs</li>
        <li><strong>Decision Support:</strong> Providing data-driven recommendations for strategic planning</li>
        <li><strong>Natural Language Processing:</strong> Enabling sophisticated customer interactions and document analysis</li>
      </ul>

      <h2>The Future Landscape</h2>
      <p>As we look ahead, several trends are shaping the future of AI in enterprise solutions:</p>

      <h3>1. Democratization of AI</h3>
      <p>AI tools are becoming more accessible to non-technical users through low-code and no-code platforms. This democratization enables business users to create custom AI solutions without extensive programming knowledge.</p>

      <h3>2. Edge AI</h3>
      <p>Processing AI workloads at the edge, closer to where data is generated, reduces latency and improves privacy. This is particularly important for IoT devices and real-time decision-making applications.</p>

      <h3>3. Ethical AI</h3>
      <p>As AI systems become more prevalent, organizations are prioritizing ethical considerations, including bias mitigation, transparency, and accountability in AI decision-making.</p>

      <h2>Implementation Strategies</h2>
      <p>Successfully implementing AI in enterprise environments requires a strategic approach:</p>

      <ol>
        <li><strong>Start Small:</strong> Begin with pilot projects that demonstrate clear ROI</li>
        <li><strong>Build Data Infrastructure:</strong> Ensure you have quality data and proper data governance</li>
        <li><strong>Invest in Talent:</strong> Develop internal AI capabilities through training and hiring</li>
        <li><strong>Choose the Right Partners:</strong> Work with experienced AI solution providers</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of AI in enterprise solutions is bright, with technology continuing to evolve and mature. Organizations that invest in AI now will be better positioned to compete in an increasingly digital marketplace. The key is to approach AI implementation strategically, focusing on real business problems and measurable outcomes.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzNTkyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Artificial Intelligence',
    author: 'Sarah Johnson',
    date: 'February 28, 2026',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices for Modern Businesses',
    excerpt:
      'Discover essential strategies for implementing cloud infrastructure that scales with your business needs.',
    content: `
      <p>Cloud computing has revolutionized how businesses manage their IT infrastructure, offering scalability, flexibility, and cost-efficiency. This guide covers best practices for modern cloud implementations.</p>

      <h2>Understanding Cloud Architecture</h2>
      <p>A well-designed cloud architecture is the foundation of successful cloud adoption. It should balance performance, security, and cost-effectiveness.</p>

      <h2>Security Best Practices</h2>
      <p>Security should be a top priority in any cloud implementation. Implement multi-layered security, regular audits, and compliance monitoring.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cloud Computing',
    author: 'Michael Chen',
    date: 'February 25, 2026',
    readTime: '6 min read',
  },
  {
    id: '3',
    title: 'Digital Transformation: A Complete Guide for Enterprises',
    excerpt:
      'Learn how to successfully navigate digital transformation initiatives and modernize your business processes.',
    content: `
      <p>Digital transformation is more than just adopting new technologies\u2014it's about fundamentally rethinking how your organization operates and delivers value to customers.</p>

      <h2>The Digital Transformation Framework</h2>
      <p>A successful digital transformation requires a comprehensive framework that addresses technology, processes, and people.</p>

      <h2>Key Success Factors</h2>
      <p>Leadership commitment, clear vision, and employee engagement are critical to successful transformation initiatives.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1726607424598-139ff3391ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzIzOTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Digital Transformation',
    author: 'Emily Rodriguez',
    date: 'February 22, 2026',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'Cybersecurity Trends Every Business Should Know in 2026',
    excerpt:
      'Stay ahead of cyber threats with these essential security practices and emerging technologies.',
    content: `
      <p>As cyber threats continue to evolve, businesses must stay informed about the latest security trends and best practices to protect their assets and data.</p>

      <h2>Emerging Threats</h2>
      <p>Understanding the threat landscape is the first step in building effective defenses against cyber attacks.</p>

      <h2>Defense Strategies</h2>
      <p>Implement a multi-layered security approach that combines technology, processes, and user education.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzIzMjgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cybersecurity',
    author: 'David Park',
    date: 'February 20, 2026',
    readTime: '7 min read',
  },
  {
    id: '5',
    title: 'Data Analytics: Turning Information into Actionable Insights',
    excerpt:
      'Master the art of data-driven decision making with advanced analytics tools and methodologies.',
    content: `
      <p>Data analytics has become essential for businesses looking to gain competitive advantages through informed decision-making.</p>

      <h2>Analytics Fundamentals</h2>
      <p>Build a strong foundation in data collection, processing, and visualization to unlock the full potential of your data.</p>

      <h2>Advanced Techniques</h2>
      <p>Explore machine learning, predictive modeling, and other advanced analytics techniques to extract deeper insights.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjM1MTYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Data Analytics',
    author: 'Lisa Thompson',
    date: 'February 18, 2026',
    readTime: '9 min read',
  },
  {
    id: '6',
    title: 'Automation Technologies Reshaping the Workplace',
    excerpt:
      'Explore how automation is streamlining operations, reducing costs, and enabling teams to focus on strategic initiatives.',
    content: `
      <p>Automation is transforming the modern workplace, enabling organizations to operate more efficiently and allowing employees to focus on high-value activities.</p>

      <h2>Types of Automation</h2>
      <p>From robotic process automation to intelligent workflow systems, discover the various forms of automation available today.</p>

      <h2>Implementation Roadmap</h2>
      <p>Learn how to identify automation opportunities and successfully implement automation solutions in your organization.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzODMzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Automation',
    author: 'James Wilson',
    date: 'February 15, 2026',
    readTime: '6 min read',
  },
]

export const metadata = generatePageMetadata({
  title: 'Blog | Insights and Articles',
  description: 'Read our latest articles on web development, technology trends, and digital transformation insights.',
  keywords: 'blog, articles, insights, web development, technology trends, digital transformation, IT solutions',
  path: '/blog',
  ogType: 'website'
})

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
