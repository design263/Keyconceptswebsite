import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  keyFeatures: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Digital Transformation Success: Scaling Operations with Custom ERP",
    client: "TechCorp Industries",
    industry: "Manufacturing",
    challenge: "TechCorp Industries, a mid-sized manufacturing company, was struggling with disparate legacy systems that couldn't communicate with each other. Their operations were hampered by manual data entry, lack of real-time visibility into inventory, and inefficient production planning. These issues were leading to increased operational costs, delayed deliveries, and customer dissatisfaction.",
    solution: "We implemented a comprehensive Odoo ERP solution tailored to TechCorp's specific manufacturing needs. The solution integrated all business processes including inventory management, production planning, sales, purchasing, and financial management into a single unified system. We also developed custom modules for their unique quality control processes and automated reporting systems.",
    result: "The implementation resulted in a 45% increase in operational efficiency, 30% reduction in operational costs, and improved on-time delivery rates from 72% to 96%. The company achieved full ROI within 6 months of implementation.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzcyNDI4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Efficiency Increase", value: "45%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "ROI Timeline", value: "6 months" },
      { label: "On-time Delivery", value: "96%" },
    ],
    testimonial: {
      quote: "Key Concepts transformed our operations completely. Their custom ERP solution has given us the visibility and control we needed to scale our business efficiently.",
      author: "John Anderson",
      position: "CEO, TechCorp Industries",
    },
    keyFeatures: [
      "Integrated inventory management system",
      "Real-time production planning and scheduling",
      "Automated quality control workflows",
      "Custom reporting and analytics dashboards",
      "Mobile access for warehouse operations",
      "Seamless financial integration",
    ],
  },
  {
    id: "2",
    title: "E-commerce Platform Revolutionizing Retail Experience",
    client: "RetailMax Group",
    industry: "Retail",
    challenge: "RetailMax Group, a traditional brick-and-mortar retailer, needed to establish a strong online presence to compete with e-commerce giants. They lacked the infrastructure and technical expertise to build a scalable platform.",
    solution: "We developed a comprehensive e-commerce platform with integrated inventory management, seamless checkout experience, and mobile-first design. The solution included real-time inventory synchronization across all channels and personalized shopping experiences.",
    result: "RetailMax experienced 120% growth in sales, tripled their customer reach, and reduced order processing time by 60%. The platform now handles over 10,000 daily transactions.",
    image: "https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzQxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Sales Growth", value: "120%" },
      { label: "Customer Reach", value: "3x" },
      { label: "Order Processing", value: "60% faster" },
      { label: "Daily Transactions", value: "10,000+" },
    ],
    testimonial: {
      quote: "The e-commerce platform exceeded our expectations. We're now competing effectively in the digital marketplace while maintaining our customer service standards.",
      author: "Maria Santos",
      position: "Chief Digital Officer, RetailMax Group",
    },
    keyFeatures: [
      "Mobile-first responsive design",
      "Real-time inventory synchronization",
      "Personalized product recommendations",
      "Advanced search and filtering",
      "Secure payment gateway integration",
      "Customer loyalty program integration",
    ],
  },
  {
    id: "3",
    title: "MVP to Market Leader: Startup Success Story",
    client: "InnovateTech Startup",
    industry: "SaaS",
    challenge: "InnovateTech, an early-stage startup, needed to validate their product-market fit quickly with limited resources. They had a great idea but needed to build and launch fast to secure funding.",
    solution: "Our MVP Studio team worked closely with InnovateTech to develop a feature-rich minimum viable product in just 12 weeks. We used agile methodologies, rapid prototyping, and modern tech stack to deliver a scalable solution.",
    result: "The MVP successfully secured $2M in seed funding and acquired their first 1,000 users within 3 months of launch. The product is now processing over $1M in monthly transactions.",
    image: "https://images.unsplash.com/photo-1642406415849-a410b5d01a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjB0ZWFtfGVufDF8fHx8MTc3MjQyODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Time to Market", value: "12 weeks" },
      { label: "Funding Raised", value: "$2M" },
      { label: "User Growth", value: "1000+" },
      { label: "Monthly Revenue", value: "$1M+" },
    ],
    testimonial: {
      quote: "Key Concepts' MVP Studio was instrumental in our success. They helped us move from concept to funded startup in record time.",
      author: "Alex Kumar",
      position: "Founder & CEO, InnovateTech",
    },
    keyFeatures: [
      "Rapid MVP development (12 weeks)",
      "User-centric design approach",
      "Scalable cloud architecture",
      "Analytics and monitoring integration",
      "Automated testing and deployment",
      "Post-launch support and iterations",
    ],
  },
  {
    id: "4",
    title: "Cloud Migration Enhancing Business Continuity",
    client: "GlobalServices Inc",
    industry: "Financial Services",
    challenge: "GlobalServices Inc was running on legacy on-premise infrastructure that was causing frequent downtime and limiting their ability to scale. They needed a modern cloud solution without disrupting their 24/7 operations.",
    solution: "We executed a phased cloud migration strategy using AWS, ensuring zero downtime during the transition. We re-architected their applications for cloud-native deployment and implemented automated backup and disaster recovery systems.",
    result: "The migration achieved 99.9% uptime, 3x performance improvement, and 40% reduction in infrastructure costs. The company can now scale resources on-demand and has improved disaster recovery capabilities.",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Performance Boost", value: "3x" },
      { label: "Cost Savings", value: "40%" },
      { label: "Migration Downtime", value: "Zero" },
    ],
    testimonial: {
      quote: "The cloud migration was flawless. Key Concepts delivered on their promise of zero downtime while dramatically improving our infrastructure performance.",
      author: "Robert Chen",
      position: "CTO, GlobalServices Inc",
    },
    keyFeatures: [
      "Zero-downtime migration strategy",
      "Cloud-native application re-architecture",
      "Automated backup and recovery",
      "Security and compliance implementation",
      "Cost optimization strategies",
      "24/7 monitoring and support",
    ],
  },
];

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/insights/case-studies" className="text-[#f1592a] hover:underline">
            Return to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const relatedCases = caseStudies.filter((cs) => cs.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/insights/case-studies"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Case Studies</span>
            </Link>
          </motion.div>

          {/* Client & Industry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
              {caseStudy.client}
            </span>
            <span className="inline-block px-4 py-2 bg-[#f1592a]/10 text-[#f1592a] text-sm font-semibold rounded-full">
              {caseStudy.industry}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 max-w-4xl"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-[#f1592a] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#f1592a]/10 rounded-xl flex items-center justify-center">
                  <Target className="text-[#f1592a]" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#f1592a]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-[#f1592a]" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{caseStudy.solution}</p>
              
              {/* Key Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features Delivered</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#f1592a]/10 rounded-xl flex items-center justify-center">
                  <Users className="text-[#f1592a]" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Results</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.result}</p>
            </motion.div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl p-12 text-white"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative">
                  <svg className="w-12 h-12 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-xl">{caseStudy.testimonial.author}</div>
                    <div className="text-white/80">{caseStudy.testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Explore other transformative projects we've delivered
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedCases.map((relatedCase, index) => (
                <motion.div
                  key={relatedCase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/case-study/${relatedCase.id}`} className="block h-full">
                    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={relatedCase.image}
                          alt={relatedCase.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-xs font-semibold rounded-full mb-3">
                          {relatedCase.industry}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f1592a] transition-colors line-clamp-2">
                          {relatedCase.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{relatedCase.client}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl overflow-hidden p-12 md:p-16"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let's discuss how we can help you achieve similar results and transform your business operations.
              </p>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                  Start Your Project Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
