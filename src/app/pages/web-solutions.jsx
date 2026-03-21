import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Globe, Zap, Shield, Cloud, Database, Code2, Layers, Gauge, Rocket, Lock, Server, Terminal, CheckCircle, TrendingUp, Eye, Smartphone, ShoppingCart, Layout, Puzzle, Network } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
const techStacks = [
  {
    title: "Next.js Performance",
    description: "Blazing-fast React framework with server-side rendering and static generation",
    icon: Zap,
    features: ["Server Components", "Edge Runtime", "Image Optimization", "Route Handlers"],
    color: "from-[#f1592a] to-[#ff7a45]",
    size: "large",
    code: `export default async function Page() {
  const data = await fetchData();
  return <Dashboard data={data} />;
}`
  },
  {
    title: "Cloud-Native Hosting",
    description: "Scalable infrastructure with global CDN and automatic failover",
    icon: Cloud,
    features: ["99.9% Uptime", "Auto Scaling", "Global CDN", "DDoS Protection"],
    color: "from-gray-700 to-gray-900",
    size: "medium",
    code: `// Deployed globally in seconds
vercel deploy --prod`
  },
  {
    title: "Headless CMS",
    description: "Flexible content management with API-first architecture",
    icon: Database,
    features: ["REST & GraphQL", "Real-time Updates", "Role-based Access", "Multi-channel"],
    color: "from-gray-600 to-gray-800",
    size: "medium",
    code: `const content = await cms.getContent({
  type: 'page',
  locale: 'en'
});`
  }
];
const webSolutionTypes = [
  {
    icon: Layout,
    title: "Brand Website",
    description: "Professional corporate websites that establish your brand identity and build trust with your audience",
    features: [
      "Custom Design System",
      "SEO Optimized",
      "Content Management",
      "Analytics Integration",
      "Mobile Responsive",
      "Fast Loading"
    ],
    color: "from-[#f1592a] to-[#ff7a45]",
    technologies: ["Next.js", "Tailwind CSS", "Headless CMS"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Scalable online stores with seamless checkout experiences and inventory management",
    features: [
      "Product Catalog",
      "Payment Gateway",
      "Cart & Checkout",
      "Order Management",
      "Customer Accounts",
      "Admin Dashboard"
    ],
    color: "from-gray-700 to-gray-900",
    technologies: ["React", "Stripe", "PostgreSQL"]
  },
  {
    icon: Code2,
    title: "Web Application",
    description: "Complex web apps with real-time features, database integration, and advanced functionality",
    features: [
      "User Authentication",
      "Real-time Updates",
      "Data Visualization",
      "File Management",
      "Role-based Access",
      "API Integration"
    ],
    color: "from-gray-600 to-gray-800",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    icon: Puzzle,
    title: "Chrome Extensions",
    description: "Browser extensions that enhance productivity and provide seamless integration with web services",
    features: [
      "Cross-browser Support",
      "Background Scripts",
      "Content Scripts",
      "Storage Sync",
      "Popup Interface",
      "Context Menus"
    ],
    color: "from-gray-500 to-gray-700",
    technologies: ["JavaScript", "Chrome API", "Manifest V3"]
  },
  {
    icon: Network,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation and robust security",
    features: [
      "RESTful Endpoints",
      "GraphQL Schema",
      "Authentication",
      "Rate Limiting",
      "API Documentation",
      "WebSocket Support"
    ],
    color: "from-gray-400 to-gray-600",
    technologies: ["Node.js", "Express", "Swagger"]
  }
];
const performanceMetrics = [
  { label: "Performance", score: 100, color: "#f1592a" },
  { label: "Accessibility", score: 100, color: "#6b7280" },
  { label: "Best Practices", score: 100, color: "#4b5563" },
  { label: "SEO", score: 100, color: "#9ca3af" }
];
const webFeatures = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Optimized for speed with 100/100 Lighthouse scores"
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "Enterprise-grade security with SSL and HTTPS"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "CDN-powered delivery for worldwide audiences"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design optimized for all devices"
  }
];
const codeSnippets = [
  {
    language: "TypeScript",
    code: `interface WebApp {
  performance: 100;
  secure: true;
  scalable: true;
}`,
    line: 1
  },
  {
    language: "React",
    code: `const App = () => {
  return <FastWebsite />;
};`,
    line: 2
  },
  {
    language: "API",
    code: `GET /api/data
Response: 200 OK (12ms)`,
    line: 3
  }
];
function WebSolutionsPage() {
  const [hoveredMetric, setHoveredMetric] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none opacity-[0.015]", style: {
      backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    } }),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center space-x-2 px-6 py-3 bg-[#f1592a]/5 backdrop-blur-sm rounded-full border border-[#f1592a]/10 mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Code2, { className: "text-[#f1592a]", size: 20, strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wider text-[#f1592a]", children: "WEB DEVELOPMENT" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("h1", { className: "text-6xl lg:text-7xl font-bold mb-8 tracking-tight", children: [
                "Web",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Solutions" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed font-light", children: "Build lightning-fast, secure, and scalable web applications with modern technologies. From concept to deployment, we deliver exceptional digital experiences." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "100/100 Performance" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "text-gray-600", size: 16 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "Enterprise Security" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "text-gray-600", size: 16 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "99.9% Uptime" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center space-x-2",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Start Your Project" }),
                      /* @__PURE__ */ jsx(Rocket, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-[#f1592a]/30 hover:bg-gray-50 transition-all",
                    children: "View Demo"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-4 py-3 flex items-center space-x-2 border-b border-gray-300", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-red-400 rounded-full" }),
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-yellow-400 rounded-full" }),
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-1 bg-white rounded-md text-xs text-gray-500 flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx(Lock, { size: 12, className: "text-[#f1592a]" }),
                      /* @__PURE__ */ jsx("span", { children: "your-website.com" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-8 relative", style: { minHeight: "400px" }, children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
                      backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    } }),
                    /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { delay: 0.3 },
                          className: "h-12 bg-gradient-to-r from-[#f1592a]/20 to-[#ff7a45]/20 rounded-lg border border-[#f1592a]/30 flex items-center px-4",
                          children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#f1592a]/30 rounded" }),
                            /* @__PURE__ */ jsx("div", { className: "flex-1 h-4 bg-[#f1592a]/20 rounded w-32" })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.4 + i * 0.1 },
                          className: "space-y-2",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "h-24 bg-gray-200 rounded-lg border border-gray-300 flex items-center justify-center", children: /* @__PURE__ */ jsx(Layers, { className: "text-gray-400", size: 32, strokeWidth: 1 }) }),
                            /* @__PURE__ */ jsx("div", { className: "h-2 bg-gray-200 rounded w-full" }),
                            /* @__PURE__ */ jsx("div", { className: "h-2 bg-gray-200 rounded w-3/4" })
                          ]
                        },
                        i
                      )) }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { delay: 0.7 },
                          className: "h-16 bg-gray-200 rounded-lg border border-gray-300 mt-6"
                        }
                      )
                    ] })
                  ] })
                ] }),
                codeSnippets.map((snippet, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.8, rotate: -5 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      y: [0, -10, 0]
                    },
                    transition: {
                      delay: 0.8 + i * 0.2,
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }
                    },
                    className: "absolute bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl border border-gray-700 font-mono text-xs",
                    style: {
                      top: `${20 + i * 25}%`,
                      right: i % 2 === 0 ? "-80px" : "auto",
                      left: i % 2 === 1 ? "-80px" : "auto"
                    },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: snippet.language })
                      ] }),
                      /* @__PURE__ */ jsx("pre", { className: "text-gray-300", children: /* @__PURE__ */ jsx("code", { children: snippet.code }) })
                    ]
                  },
                  i
                ))
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-full blur-3xl" })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            rotate: 360,
            scale: [1, 1.1, 1]
          },
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
          className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-full blur-3xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.015]", style: {
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-200 shadow-2xl", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Gauge, { className: "text-white", size: 24, strokeWidth: 1.5 }) }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Powered by Google" }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: performanceMetrics.map((metric, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    onMouseEnter: () => setHoveredMetric(index),
                    onMouseLeave: () => setHoveredMetric(null),
                    className: "group cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700", children: metric.label }),
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "text-2xl font-bold",
                            style: { color: hoveredMetric === index ? metric.color : "#1f2937" },
                            animate: { scale: hoveredMetric === index ? 1.1 : 1 },
                            children: metric.score
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative h-3 bg-gray-200 rounded-full overflow-hidden", children: [
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { width: 0 },
                            whileInView: { width: `${metric.score}%` },
                            viewport: { once: true },
                            transition: { delay: index * 0.1 + 0.3, duration: 1 },
                            className: "absolute inset-y-0 left-0 rounded-full",
                            style: {
                              background: hoveredMetric === index ? `linear-gradient(to right, ${metric.color}, ${metric.color})` : "#f1592a"
                            }
                          }
                        ),
                        hoveredMetric === index && /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 bg-white/30",
                            animate: { x: ["-100%", "100%"] },
                            transition: { duration: 1, repeat: Infinity }
                          }
                        )
                      ] })
                    ]
                  },
                  metric.label
                )) }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    whileInView: { scale: 1 },
                    viewport: { once: true },
                    transition: { delay: 0.6 },
                    className: "mt-8 p-6 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-2xl text-center",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-3 mb-2", children: [
                        /* @__PURE__ */ jsx(Zap, { className: "text-white", size: 28 }),
                        /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-white", children: "100/100" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-white/90 text-sm font-light", children: "Perfect Performance Score" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -15, 0] },
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  className: "absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(Server, { className: "text-[#f1592a]", size: 20 }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-900", children: "Response Time" }),
                      /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-[#f1592a]", children: "12ms" })
                    ] })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/5 backdrop-blur-sm rounded-full border border-[#f1592a]/10 mb-8", children: [
                /* @__PURE__ */ jsx(Zap, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "OPTIMIZED PERFORMANCE" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-5xl lg:text-6xl font-bold mb-6 tracking-tight", children: [
                "Lightning",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Fast" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed font-light", children: "Every millisecond counts. Our web solutions are engineered for speed, delivering perfect 100/100 Lighthouse scores across all metrics." }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: [
                "Server-side rendering for instant page loads",
                "Optimized images with next-gen formats",
                "Edge caching for global performance",
                "Code splitting and lazy loading"
              ].map((item, i) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.1 },
                  className: "flex items-start space-x-3",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
                  ]
                },
                i
              )) }),
              /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Test Your Site" }),
                    /* @__PURE__ */ jsx(Eye, { className: "group-hover:scale-110 transition-transform", size: 20 })
                  ]
                }
              ) })
            ]
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-5xl lg:text-6xl font-bold mb-6 tracking-tight", children: [
                "Why Choose",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Our Solutions" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "Built for the modern web with security, performance, and scalability at the core." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: webFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: "group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f1592a] transition-all", children: /* @__PURE__ */ jsx(feature.icon, { className: "text-gray-700 group-hover:text-white transition-colors", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-gray-900", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 font-light leading-relaxed", children: feature.description }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" })
            ]
          },
          feature.title
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.015]", style: {
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: {
              backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            } }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  viewport: { once: true },
                  className: "inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6",
                  children: /* @__PURE__ */ jsx(Terminal, { className: "text-white", size: 40, strokeWidth: 1.5 })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight", children: "Ready to Build Something Amazing?" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-8 font-light", children: "Let's create a lightning-fast, secure web application that exceeds expectations. Get started with a free consultation today." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all",
                    children: "Start Your Project"
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold",
                    children: "Schedule Demo"
                  }
                )
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-5xl lg:text-6xl font-bold mb-6 tracking-tight", children: [
                "Our Web",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Solutions" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "Comprehensive web development services tailored to your business needs." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto space-y-6", children: webSolutionTypes.map((solution, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: "group relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
                backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              } }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start", children: [
                /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
                  /* @__PURE__ */ jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`, children: (() => {
                    const IconComponent = solution.icon;
                    return /* @__PURE__ */ jsx(IconComponent, { className: "text-white", size: 32, strokeWidth: 1.5 });
                  })() }),
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-3 text-gray-900", children: solution.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 font-light leading-relaxed mb-6", children: solution.description }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Technologies:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: solution.technologies.map((tech, i) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200", children: tech }, i)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700 mb-4", children: "Key Features:" }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -10 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 + i * 0.05 },
                      className: "flex items-start space-x-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#f1592a]/20 transition-all",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 12, strokeWidth: 2.5 }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-medium", children: feature })
                      ]
                    },
                    i
                  )) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" })
            ]
          },
          solution.title
        )) })
      ] })
    ] })
  ] });
}
export {
  WebSolutionsPage
};
