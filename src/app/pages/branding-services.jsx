import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Sparkles, Palette, MessageSquare, FileText, Target, Lightbulb, Layers, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router";
const brandEvolutionStages = [
  {
    stage: "01",
    title: "Sketch",
    description: "Initial concept",
    style: "outline",
    opacity: 0.3
  },
  {
    stage: "02",
    title: "Refine",
    description: "Design iteration",
    style: "partial",
    opacity: 0.6
  },
  {
    stage: "03",
    title: "Digital",
    description: "Final identity",
    style: "solid",
    opacity: 1
  }
];
const ecosystemNodes = [
  {
    id: "strategy",
    icon: Target,
    title: "Brand Strategy",
    description: "Positioning & Values",
    position: "top",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    id: "identity",
    icon: Palette,
    title: "Visual Identity",
    description: "Design System",
    position: "left",
    color: "from-gray-700 to-gray-900"
  },
  {
    id: "voice",
    icon: MessageSquare,
    title: "Brand Voice",
    description: "Tone & Messaging",
    position: "right",
    color: "from-gray-600 to-gray-800"
  }
];
const brandServices = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    features: ["Market Research", "Competitive Analysis", "Brand Positioning", "Value Proposition"]
  },
  {
    icon: Palette,
    title: "Visual Identity",
    features: ["Logo Design", "Color Palette", "Typography System", "Brand Assets"]
  },
  {
    icon: MessageSquare,
    title: "Brand Voice",
    features: ["Tone Guidelines", "Messaging Framework", "Content Strategy", "Copywriting"]
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    features: ["Style Guide", "Usage Rules", "Asset Library", "Documentation"]
  }
];
const brandGuidelinePages = [
  { title: "Logo Usage", color: "bg-[#f1592a]" },
  { title: "Color System", color: "bg-gray-800" },
  { title: "Typography", color: "bg-gray-600" },
  { title: "Photography", color: "bg-gray-400" }
];
function BrandingServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none opacity-[0.015]", style: {
      backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    } }),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center space-x-2 px-6 py-3 bg-[#f1592a]/5 backdrop-blur-sm rounded-full border border-[#f1592a]/10 mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "text-[#f1592a]", size: 20, strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wider text-[#f1592a]", children: "PREMIUM BRANDING" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("h1", { className: "text-6xl lg:text-7xl font-bold mb-8 tracking-tight", children: [
                "360\xB0 Branding",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Services" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light", children: "We craft unforgettable brand identities that resonate with your audience and stand the test of time. From concept to execution, we bring your vision to life." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-16", children: brandEvolutionStages.map((stage, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.2 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-8xl font-bold text-gray-100 mb-4", children: stage.stage }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 flex items-center justify-center mb-6 overflow-hidden group", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                } }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: {
                      scale: [1, 1.05, 1],
                      rotate: stage.style === "outline" ? [0, 5, 0] : 0
                    },
                    transition: { duration: 3, repeat: Infinity },
                    className: "relative",
                    style: { opacity: stage.opacity },
                    children: stage.style === "outline" ? (
                      // Sketch Style
                      /* @__PURE__ */ jsxs("svg", { width: "120", height: "120", viewBox: "0 0 120 120", className: "text-gray-400", children: [
                        /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "40", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "4 4" }),
                        /* @__PURE__ */ jsx("path", { d: "M 40 60 L 80 60 M 60 40 L 60 80", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "4 4" })
                      ] })
                    ) : stage.style === "partial" ? (
                      // Refined Style
                      /* @__PURE__ */ jsxs("svg", { width: "120", height: "120", viewBox: "0 0 120 120", className: "text-gray-600", children: [
                        /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "40", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
                        /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "20", fill: "currentColor", fillOpacity: "0.2" }),
                        /* @__PURE__ */ jsx("path", { d: "M 60 40 L 60 80", stroke: "currentColor", strokeWidth: "2" })
                      ] })
                    ) : (
                      // Final Digital Style
                      /* @__PURE__ */ jsx("div", { className: "w-32 h-32 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx(Layers, { className: "text-white", size: 48, strokeWidth: 1.5 }) })
                    )
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 transition-all rounded-2xl" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: stage.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 font-light", children: stage.description })
              ] }),
              index < brandEvolutionStages.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-24 -right-6 z-10", children: /* @__PURE__ */ jsx(ArrowRight, { className: "text-[#f1592a]", size: 24, strokeWidth: 1.5 }) })
            ]
          },
          stage.stage
        )) }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            rotate: 360,
            scale: [1, 1.1, 1]
          },
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
          className: "absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-full blur-3xl"
        }
      )
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
                "Brand",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Ecosystem" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "A holistic approach connecting strategy, identity, and voice into one cohesive system." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0 },
              whileInView: { scale: 1 },
              viewport: { once: true },
              className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20",
              children: /* @__PURE__ */ jsx("div", { className: "w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-[#f1592a] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "text-[#f1592a] mx-auto mb-2", size: 32, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-900", children: "360\xB0" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Branding" })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full", style: { zIndex: 1 }, children: [
            /* @__PURE__ */ jsx(
              motion.line,
              {
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: true },
                transition: { duration: 1, delay: 0.3 },
                x1: "50%",
                y1: "50%",
                x2: "50%",
                y2: "15%",
                stroke: "#f1592a",
                strokeWidth: "2",
                strokeDasharray: "4 4"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.line,
              {
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: true },
                transition: { duration: 1, delay: 0.5 },
                x1: "50%",
                y1: "50%",
                x2: "15%",
                y2: "50%",
                stroke: "#f1592a",
                strokeWidth: "2",
                strokeDasharray: "4 4"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.line,
              {
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: true },
                transition: { duration: 1, delay: 0.7 },
                x1: "50%",
                y1: "50%",
                x2: "85%",
                y2: "50%",
                stroke: "#f1592a",
                strokeWidth: "2",
                strokeDasharray: "4 4"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 pb-16", style: { minHeight: "500px" }, children: ecosystemNodes.map((node, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: index * 0.2 + 0.3 },
              className: `relative ${node.position === "top" ? "md:col-span-3 md:mx-auto md:max-w-md" : ""}`,
              style: {
                marginTop: node.position === "top" ? "0" : "150px"
              },
              children: /* @__PURE__ */ jsxs("div", { className: "group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsx(node.icon, { className: "text-white", size: 28, strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-gray-900", children: node.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 font-light", children: node.description }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all" })
              ] })
            },
            node.id
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.015]", style: {
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
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
                "Comprehensive",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Deliverables" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "Everything you need to build a powerful, consistent brand presence." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: brandServices.map((service, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: "group relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f1592a] transition-all", children: /* @__PURE__ */ jsx(service.icon, { className: "text-gray-700 group-hover:text-white transition-colors", size: 24, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-6 text-gray-900", children: service.title }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: service.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-5 h-5 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 12, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 font-light", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" })
            ]
          },
          service.title
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
        backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/5 backdrop-blur-sm rounded-full border border-[#f1592a]/10 mb-8", children: [
                /* @__PURE__ */ jsx(FileText, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "DOCUMENTATION" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-5xl lg:text-6xl font-bold mb-6 tracking-tight", children: [
                "Brand",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Guidelines" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed font-light", children: "Comprehensive documentation ensuring brand consistency across all touchpoints. A living system that scales with your business." }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: [
                "Complete logo usage guide",
                "Color system & accessibility",
                "Typography hierarchy",
                "Photography & illustration style",
                "Digital & print specifications"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
              ] }, i)) }),
              /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Request Brand Audit" }),
                    /* @__PURE__ */ jsx(Zap, { className: "group-hover:scale-110 transition-transform", size: 20 })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -10, 0] },
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    className: "relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden",
                    style: { perspective: "1000px" },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-[#f1592a] to-[#ff7a45] p-12 relative overflow-hidden", children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: {
                          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                          backgroundSize: "20px 20px"
                        } }),
                        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Layers, { className: "text-white", size: 40, strokeWidth: 1.5 }) }),
                          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: "Brand" }),
                          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-8", children: "Guidelines" }),
                          /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm font-light", children: "Version 2.0 \u2022 2026" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 p-6 bg-gray-50", children: brandGuidelinePages.map((page, i) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, scale: 0.9 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: true },
                          transition: { delay: i * 0.1 },
                          className: "bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all group cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: `${page.color} h-24 rounded-lg mb-3 group-hover:scale-105 transition-transform` }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 font-light", children: page.title })
                          ]
                        },
                        i
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: {
                      y: [0, -15, 0],
                      rotate: [0, 2, 0]
                    },
                    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    className: "absolute -top-8 -right-8 w-64 h-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 -rotate-6",
                    children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
                      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-full" }),
                      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-5/6" }),
                      /* @__PURE__ */ jsx("div", { className: "h-32 bg-gradient-to-br from-[#f1592a]/20 to-[#ff7a45]/20 rounded-lg mt-4" }),
                      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-2/3" })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-full blur-2xl" })
            ]
          }
        )
      ] }) }) })
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
                  children: /* @__PURE__ */ jsx(Sparkles, { className: "text-white", size: 40, strokeWidth: 1.5 })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight", children: "Ready to Build Your Brand?" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-8 font-light", children: "Let's create a brand identity that captures your vision and resonates with your audience. Book a discovery call today." }),
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
                    children: "View Portfolio"
                  }
                )
              ] })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  BrandingServicesPage
};
