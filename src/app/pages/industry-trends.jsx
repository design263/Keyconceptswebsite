import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Enterprise Solutions: Transforming Business Operations",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise software, from predictive analytics to automated decision-making. Learn about the latest AI trends shaping the future of business operations and how companies can leverage these technologies for competitive advantage.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzNTkyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Artificial Intelligence",
    author: "Sarah Johnson",
    date: "February 28, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "2",
    title: "Cloud Computing Best Practices for Modern Businesses",
    excerpt: "Discover essential strategies for implementing cloud infrastructure that scales with your business needs while maintaining security and cost-efficiency.",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Cloud Computing",
    author: "Michael Chen",
    date: "February 25, 2026",
    readTime: "6 min read"
  },
  {
    id: "3",
    title: "Digital Transformation: A Complete Guide for Enterprises",
    excerpt: "Learn how to successfully navigate digital transformation initiatives and modernize your business processes for the digital age.",
    image: "https://images.unsplash.com/photo-1726607424598-139ff3391ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzIzOTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Digital Transformation",
    author: "Emily Rodriguez",
    date: "February 22, 2026",
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Cybersecurity Trends Every Business Should Know in 2026",
    excerpt: "Stay ahead of cyber threats with these essential security practices and emerging technologies protecting modern enterprises.",
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzIzMjgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Cybersecurity",
    author: "David Park",
    date: "February 20, 2026",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "Data Analytics: Turning Information into Actionable Insights",
    excerpt: "Master the art of data-driven decision making with advanced analytics tools and methodologies that drive business growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjM1MTYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Data Analytics",
    author: "Lisa Thompson",
    date: "February 18, 2026",
    readTime: "9 min read"
  },
  {
    id: "6",
    title: "Automation Technologies Reshaping the Workplace",
    excerpt: "Explore how automation is streamlining operations, reducing costs, and enabling teams to focus on strategic initiatives.",
    image: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzODMzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Automation",
    author: "James Wilson",
    date: "February 15, 2026",
    readTime: "6 min read"
  }
];
function IndustryTrendsPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-40", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-20 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs(
                motion.span,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.1 },
                  className: "inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/50 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: [
                    /* @__PURE__ */ jsx(TrendingUp, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: "Industry Insights" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6", children: "Industry Trends & Insights" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto", children: "Stay ahead of the curve with our expert insights on the latest technology trends, best practices, and industry innovations." })
            ]
          }
        ),
        featuredPost && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "relative group",
            children: /* @__PURE__ */ jsx(Link, { to: `/blog/${featuredPost.id}`, className: "block", children: /* @__PURE__ */ jsx("div", { className: "relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-64 md:h-full overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  ImageWithFallback,
                  {
                    src: featuredPost.image,
                    alt: featuredPost.title,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 bg-[#f1592a] text-white text-sm font-bold rounded-full shadow-lg", children: "Featured Article" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full", children: featuredPost.category }) }),
                /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#f1592a] transition-colors", children: featuredPost.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-6", children: featuredPost.excerpt }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(User, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: featuredPost.author })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: featuredPost.date })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(Clock, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: featuredPost.readTime })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-[#f1592a] font-semibold group-hover:space-x-3 transition-all", children: [
                  /* @__PURE__ */ jsx("span", { children: "Read Full Article" }),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 20, className: "group-hover:translate-x-1 transition-transform" })
                ] })
              ] })
            ] }) }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Latest Articles" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Explore our collection of in-depth articles covering the latest trends, technologies, and best practices in IT and ERP solutions." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: regularPosts.map((post, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "group",
          children: /* @__PURE__ */ jsx(Link, { to: `/blog/${post.id}`, className: "block h-full", children: /* @__PURE__ */ jsxs("div", { className: "h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: post.image,
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full", children: post.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-gray-500 mb-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { children: post.date })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx(Clock, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { children: post.readTime })
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1", children: post.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-gray-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-500", children: [
                  /* @__PURE__ */ jsx(User, { size: 16 }),
                  /* @__PURE__ */ jsx("span", { children: post.author })
                ] }),
                /* @__PURE__ */ jsx(
                  ArrowRight,
                  {
                    size: 18,
                    className: "text-[#f1592a] group-hover:translate-x-1 transition-transform"
                  }
                )
              ] })
            ] })
          ] }) })
        },
        post.id
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mt-16",
          children: /* @__PURE__ */ jsx("button", { className: "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f1592a]/30 transition-all hover:scale-105", children: "Load More Articles" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl overflow-hidden p-12 md:p-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative text-center max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Stay Updated with Our Newsletter" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/90 text-lg mb-8", children: "Get the latest industry trends, insights, and exclusive content delivered directly to your inbox." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 max-w-xl mx-auto", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Enter your email address",
                  className: "flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                }
              ),
              /* @__PURE__ */ jsx("button", { className: "px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap", children: "Subscribe Now" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mt-4", children: "Join 10,000+ professionals staying ahead of the curve" })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  IndustryTrendsPage
};
