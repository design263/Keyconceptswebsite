import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const blogPosts = [
  {
    title: "The Future of AI-Powered ERP Systems in 2026",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise resource planning and what it means for your business.",
    author: "Sarah Johnson",
    date: "February 8, 2026",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGlnaXRhbCUyMGJyYWlufGVufDF8fHx8MTc3MDcwMjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    title: "Why Cloud-Native Architecture is Essential for Modern Businesses",
    excerpt: "Learn about the benefits of cloud-native development and how it can transform your application infrastructure.",
    author: "Michael Chen",
    date: "February 5, 2026",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzcwNjM3OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    title: "Building a Digital Immune System: Complete Security Guide",
    excerpt: "A comprehensive guide to protecting your digital infrastructure from modern cyber threats.",
    author: "David Thompson",
    date: "February 2, 2026",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzcwNjQyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    title: "Odoo 18: New Features and Implementation Best Practices",
    excerpt: "Everything you need to know about the latest Odoo release and how to implement it effectively.",
    author: "Emily Rodriguez",
    date: "January 30, 2026",
    category: "ERP Solutions",
    image: "https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MXx8fHwxNzcwNzAyNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    title: "Mobile-First Development: Why It Matters in 2026",
    excerpt: "Understanding the importance of mobile-first approach in modern web and app development.",
    author: "John Anderson",
    date: "January 28, 2026",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzA1ODQ0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    title: "SEO Trends and Strategies for 2026: Complete Guide",
    excerpt: "Stay ahead of the competition with the latest SEO trends and proven optimization strategies.",
    author: "Sarah Johnson",
    date: "January 25, 2026",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzcwNzAyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];
const categories = [
  "All Posts",
  "AI & Automation",
  "Cloud Computing",
  "Cybersecurity",
  "ERP Solutions",
  "Mobile Development",
  "Digital Marketing"
];
function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  return /* @__PURE__ */ jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          className: "max-w-4xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsxs(
              motion.span,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6",
                children: [
                  /* @__PURE__ */ jsx(TrendingUp, { size: 18 }),
                  /* @__PURE__ */ jsx("span", { children: "Knowledge Hub" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: "Insights & Articles" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed", children: "Stay updated with the latest trends, insights, and best practices in technology and digital transformation" })
          ]
        }
      ) })
    ] }),
    featuredPost && /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "relative group",
        children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-[400px] lg:h-[500px] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              ImageWithFallback,
              {
                src: featuredPost.image,
                alt: featuredPost.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6", children: /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-[#f1592a] text-white rounded-full text-sm font-semibold", children: "Featured" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 lg:p-12", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gradient-to-r from-[#f1592a]/10 to-cyan-500/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4", children: featuredPost.category }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#f1592a] transition-colors", children: featuredPost.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: featuredPost.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 text-sm text-gray-500 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(User, { size: 16 }),
                /* @__PURE__ */ jsx("span", { children: featuredPost.author })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Calendar, { size: 16 }),
                /* @__PURE__ */ jsx("span", { children: featuredPost.date })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "group/btn px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Read Article" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover/btn:translate-x-1 transition-transform", size: 18 })
                ]
              }
            )
          ] })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-gray-50 sticky top-20 z-40 backdrop-blur-lg bg-gray-50/80", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: categories.map((category, index) => /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.05 },
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: `px-6 py-2 rounded-full transition-all ${index === 0 ? "bg-[#f1592a] text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100 shadow"}`,
        children: category
      },
      category
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: regularPosts.map((post, index) => /* @__PURE__ */ jsx(
        motion.article,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -10 },
          className: "group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: post.image,
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700", children: post.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed", children: post.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500 mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(User, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs", children: post.author })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs", children: post.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "text-[#f1592a] font-semibold flex items-center space-x-2 group/arrow hover:space-x-3 transition-all", children: [
                /* @__PURE__ */ jsx("span", { children: "Read More" }),
                /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "group-hover/arrow:translate-x-1 transition-transform" })
              ] })
            ] })
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-center mt-12",
          children: /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold",
              children: "Load More Articles"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-4xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Stay Updated" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Subscribe to our newsletter for the latest insights and industry trends" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Enter your email",
                className: "flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap",
                children: "Subscribe"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  BlogPage
};
