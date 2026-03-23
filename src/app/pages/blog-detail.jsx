import { motion } from 'motion/react'
import { Link, useParams } from 'react-router'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
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
function BlogDetailPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        {' '}
        <div className="text-center">
          {' '}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>{' '}
          <Link to="/insights/trends" className="text-[#f1592a] hover:underline">
            Return to Industry Trends
          </Link>
        </div>
      </div>
    )
  }
  const relatedPosts = blogPosts
    .filter((p) => p.id !== id && p.category === post.category)
    .slice(0, 3)
  return (
    <div className="min-h-screen bg-white">
      {' '}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {' '}
        <div className="absolute inset-0 opacity-40">
          {' '}
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />{' '}
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />
        </div>{' '}
        <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-8"
          >
            {' '}
            <Link
              to="/insights/trends"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors"
            >
              {' '}
              <ArrowLeft size={20} /> <span>Back to Industry Trends</span>
            </Link>
          </motion.div>{' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-6"
          >
            {' '}
            <span className="inline-block px-4 py-2 bg-[#f1592a]/10 text-[#f1592a] text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </motion.div>{' '}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl"
          >
            {post.title}
          </motion.h1>{' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            {' '}
            <div className="flex items-center space-x-2">
              {' '}
              <User size={20} /> <span className="font-semibold">{post.author}</span>
            </div>{' '}
            <div className="flex items-center space-x-2">
              {' '}
              <Calendar size={20} /> <span>{post.date}</span>
            </div>{' '}
            <div className="flex items-center space-x-2">
              {' '}
              <Clock size={20} /> <span>{post.readTime}</span>
            </div>
          </motion.div>{' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            {' '}
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#f1592a] hover:text-[#f1592a] transition-colors">
              {' '}
              <Share2 size={18} /> <span>Share</span>
            </button>{' '}
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#f1592a] hover:text-[#f1592a] transition-colors">
              {' '}
              <Bookmark size={18} /> <span>Save</span>
            </button>
          </motion.div>
        </div>
      </section>{' '}
      <section className="py-8">
        {' '}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {' '}
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>{' '}
      <section className="py-12">
        {' '}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <div className="max-w-4xl mx-auto">
            {' '}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
              style={{
                color: '#374151',
                lineHeight: '1.8',
              }}
            />
          </div>
        </div>
      </section>
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          {' '}
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            {' '}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-center mb-12"
            >
              {' '}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>{' '}
              <p className="text-lg text-gray-600">
                Continue exploring insights in {post.category}
              </p>
            </motion.div>{' '}
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group"
                  key={relatedPost.id}
                >
                  {' '}
                  <Link to={`/blog/${relatedPost.id}`} className="block h-full">
                    {' '}
                    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      {' '}
                      <div className="relative h-48 overflow-hidden">
                        {' '}
                        <ImageWithFallback
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>{' '}
                      <div className="p-6">
                        {' '}
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-3">
                          {relatedPost.category}
                        </span>{' '}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f1592a] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>{' '}
                        <p className="text-gray-600 text-sm line-clamp-3">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}{' '}
      <section className="py-20 bg-white">
        {' '}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl overflow-hidden p-12 md:p-16"
          >
            {' '}
            <div className="absolute inset-0 opacity-10">
              {' '}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />{' '}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>{' '}
            <div className="relative text-center max-w-3xl mx-auto">
              {' '}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>{' '}
              <p className="text-white/90 text-lg mb-8">
                Let's discuss how our solutions can help you achieve your digital transformation
                goals.
              </p>{' '}
              <Link to="/contact">
                {' '}
                <button className="px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                  Get Started Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export { BlogDetailPage }
