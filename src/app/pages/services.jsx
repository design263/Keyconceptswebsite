import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  TrendingUp,
  Database,
  Smartphone,
  Plug,
  Search,
  Shield,
  Brain,
  Cloud,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router";
const detailedServices = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your brand.",
    features: [
      "Social Media Marketing & Management",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "PPC & Google Ads Management",
      "Marketing Analytics & Reporting"
    ],
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Database,
    title: "ERP Solutions (Odoo Partner)",
    description: "Official Odoo partner providing complete ERP implementation.",
    features: [
      "Odoo Implementation & Customization",
      "Module Development",
      "Data Migration & Integration",
      "Training & Support",
      "Odoo Version Upgrades"
    ],
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description: "Custom application development for web, Android, and iOS.",
    features: [
      "React & Next.js Web Apps",
      "Native Android Development",
      "iOS App Development",
      "Progressive Web Apps (PWA)",
      "Cross-Platform Solutions"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless integration of third-party services and APIs.",
    features: [
      "RESTful API Development",
      "Third-Party Service Integration",
      "Payment Gateway Integration",
      "CRM & ERP Integration",
      "Webhook Implementation"
    ],
    color: "from-gray-500 to-gray-700"
  },
  {
    icon: Search,
    title: "SEO/SMO Services",
    description: "Optimize your online presence and search rankings.",
    features: [
      "Technical SEO Audit",
      "On-Page & Off-Page SEO",
      "Keyword Research & Strategy",
      "Local SEO Optimization",
      "Social Media Optimization"
    ],
    color: "from-[#f1592a] to-[#d94d24]"
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Leverage AI to automate and optimize your workflows.",
    features: [
      "AI-Powered Automation",
      "Machine Learning Integration",
      "Natural Language Processing",
      "Predictive Analytics",
      "Chatbot Development"
    ],
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Cloud,
    title: "Cloud-Native Development",
    description: "Build scalable applications designed for the cloud.",
    features: [
      "AWS & Azure Solutions",
      "Microservices Architecture",
      "Docker & Kubernetes",
      "Serverless Applications",
      "Cloud Migration Services"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Shield,
    title: "Digital Security",
    description: "Protect your digital assets with advanced security.",
    features: [
      "Security Audits & Testing",
      "Penetration Testing",
      "GDPR Compliance",
      "Data Encryption Solutions",
      "Security Monitoring"
    ],
    color: "from-[#f1592a] to-[#d94d24]"
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          className: "max-w-4xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6",
                children: "Our Services"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: "Comprehensive IT Solutions" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed", children: "From strategy to execution, we deliver excellence in every aspect of digital transformation" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: detailedServices.map((service, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        whileHover: { y: -10 },
        className: "group",
        children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: `w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsx(service.icon, { className: "text-gray-700", size: 32, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: service.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6", children: service.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-[#f1592a] flex-shrink-0 mt-1", size: 18 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: feature })
          ] }, i)) }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `group/btn w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2`,
              children: [
                /* @__PURE__ */ jsx("span", { children: "Get Started" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover/btn:translate-x-1 transition-transform", size: 18 })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl` })
        ] })
      },
      service.title
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-4xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Ready to Get Started?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Let's discuss how we can help transform your business with our comprehensive IT solutions." }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold",
              children: "Schedule a Consultation"
            }
          ) })
        ]
      }
    ) }) })
  ] });
}
export {
  ServicesPage
};
