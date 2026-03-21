import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, ArrowRight, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const caseStudies = [
  {
    id: "1",
    title: "Digital Transformation Success: Scaling Operations with Custom ERP",
    client: "TechCorp Industries",
    industry: "Manufacturing",
    challenge: "A manufacturing company struggling with disparate systems and inefficient processes needed a unified solution to streamline operations and improve productivity.",
    result: "We implemented a custom Odoo ERP solution that integrated all business processes, resulting in significant improvements in efficiency and cost savings.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzcyNDI4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Efficiency Increase", value: "45%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "ROI Timeline", value: "6 months" }
    ],
    featured: true
  },
  {
    id: "2",
    title: "E-commerce Platform Revolutionizing Retail Experience",
    client: "RetailMax Group",
    industry: "Retail",
    challenge: "Traditional retailer needed a modern e-commerce platform to compete in the digital marketplace.",
    result: "Built a scalable web and mobile platform with integrated inventory management and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzQxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Sales Growth", value: "120%" },
      { label: "Customer Reach", value: "3x" },
      { label: "Order Processing", value: "60% faster" }
    ]
  },
  {
    id: "3",
    title: "MVP to Market Leader: Startup Success Story",
    client: "InnovateTech Startup",
    industry: "SaaS",
    challenge: "Early-stage startup needed to validate product-market fit quickly with limited resources.",
    result: "Delivered a feature-rich MVP in 12 weeks that secured seed funding and acquired first 1000 users.",
    image: "https://images.unsplash.com/photo-1642406415849-a410b5d01a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjB0ZWFtfGVufDF8fHx8MTc3MjQyODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Time to Market", value: "12 weeks" },
      { label: "Funding Raised", value: "$2M" },
      { label: "User Growth", value: "1000+" }
    ]
  },
  {
    id: "4",
    title: "Cloud Migration Enhancing Business Continuity",
    client: "GlobalServices Inc",
    industry: "Financial Services",
    challenge: "Legacy infrastructure causing downtime and limiting scalability for growing financial services company.",
    result: "Successfully migrated to cloud infrastructure with zero downtime, ensuring 99.9% uptime and improved performance.",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Performance Boost", value: "3x" },
      { label: "Cost Savings", value: "40%" }
    ]
  }
];
function CaseStudiesPage() {
  const featuredCase = caseStudies.find((cs) => cs.featured);
  const regularCases = caseStudies.filter((cs) => !cs.featured);
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
                    /* @__PURE__ */ jsx(Award, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: "Success Stories" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6", children: "Case Studies" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto", children: "Discover how we've helped businesses transform their operations and achieve remarkable results with our innovative solutions." })
            ]
          }
        ),
        featuredCase && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "relative group",
            children: /* @__PURE__ */ jsx(Link, { to: `/case-study/${featuredCase.id}`, className: "block", children: /* @__PURE__ */ jsx("div", { className: "relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-64 md:h-full overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  ImageWithFallback,
                  {
                    src: featuredCase.image,
                    alt: featuredCase.title,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 bg-[#f1592a] text-white text-sm font-bold rounded-full shadow-lg", children: "Featured Case Study" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-12 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full", children: featuredCase.client }),
                  /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-sm font-semibold rounded-full", children: featuredCase.industry })
                ] }),
                /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#f1592a] transition-colors", children: featuredCase.title }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-gray-500 uppercase mb-2", children: "The Challenge" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: featuredCase.challenge })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 mb-6", children: featuredCase.metrics.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#f1592a] mb-1", children: metric.value }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: metric.label })
                ] }, idx)) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-[#f1592a] font-semibold group-hover:space-x-3 transition-all", children: [
                  /* @__PURE__ */ jsx("span", { children: "View Full Case Study" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "More Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Explore how we've partnered with businesses across industries to deliver measurable results and drive growth." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: regularCases.map((caseStudy, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "group",
          children: /* @__PURE__ */ jsx(Link, { to: `/case-study/${caseStudy.id}`, className: "block h-full", children: /* @__PURE__ */ jsxs("div", { className: "h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: caseStudy.image,
                  alt: caseStudy.title,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full", children: caseStudy.industry }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-[#f1592a] font-semibold mb-2", children: caseStudy.client }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors line-clamp-2", children: caseStudy.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1", children: caseStudy.challenge }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-100", children: caseStudy.metrics.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-[#f1592a]", children: metric.value }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 line-clamp-2", children: metric.label })
              ] }, idx)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700", children: "Read Case Study" }),
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
        caseStudy.id
      )) })
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
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "text-white", size: 32 }) }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Ready to Write Your Success Story?" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/90 text-lg mb-8", children: "Let's discuss how we can help you achieve similar results and transform your business operations." }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: "px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl", children: "Start Your Project Today" }) })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  CaseStudiesPage
};
