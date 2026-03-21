import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Smartphone, Apple, Bot, Fingerprint, Shield, Zap, Layers, CheckCircle, Rocket, Globe, Lock, Code2, Users, TrendingUp, Workflow } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
const mobileServices = [
  {
    icon: Bot,
    title: "Android Application",
    description: "Native Android apps built with Kotlin and Jetpack Compose for optimal performance",
    features: [
      "Material Design 3",
      "Kotlin Coroutines",
      "Room Database",
      "Firebase Integration"
    ],
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Apple,
    title: "iOS Application",
    description: "Swift-powered iOS apps with SwiftUI for seamless Apple ecosystem integration",
    features: [
      "SwiftUI Framework",
      "Core Data",
      "Push Notifications",
      "iCloud Sync"
    ],
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Globe,
    title: "Seamless API Integration",
    description: "Connect your mobile apps to powerful backend services and third-party APIs",
    features: [
      "RESTful APIs",
      "GraphQL",
      "WebSocket",
      "OAuth 2.0"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Advanced authentication with Face ID, Touch ID, and fingerprint recognition",
    features: [
      "Face Recognition",
      "Fingerprint Auth",
      "Secure Enclave",
      "End-to-end Encryption"
    ],
    color: "from-gray-500 to-gray-700"
  }
];
const processTimeline = [
  {
    phase: "Wireframing",
    icon: Layers,
    description: "Sketching user flows and interface layouts",
    duration: "1-2 weeks",
    deliverables: ["User Flow Diagrams", "Low-fidelity Mockups", "Feature Specification"]
  },
  {
    phase: "UI/UX Design",
    icon: Workflow,
    description: "Creating high-fidelity designs and prototypes",
    duration: "2-3 weeks",
    deliverables: ["Design System", "Interactive Prototypes", "Style Guide"]
  },
  {
    phase: "Development",
    icon: Code2,
    description: "Building native apps with clean, maintainable code",
    duration: "8-12 weeks",
    deliverables: ["Alpha Build", "Beta Release", "Code Documentation"]
  },
  {
    phase: "Testing",
    icon: Shield,
    description: "Comprehensive QA testing across devices",
    duration: "2-3 weeks",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization"]
  },
  {
    phase: "App Store Launch",
    icon: Rocket,
    description: "Publishing to App Store and Play Store",
    duration: "1 week",
    deliverables: ["App Submission", "Store Optimization", "Launch Support"]
  }
];
const appFeatures = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and battery efficiency"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security and data protection"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Intuitive interfaces that users love"
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Built to grow with your business needs"
  }
];
function MobileDevelopmentPage() {
  const [activePhone, setActivePhone] = useState("ios");
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
                    /* @__PURE__ */ jsx(Smartphone, { className: "text-[#f1592a]", size: 20, strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wider text-[#f1592a]", children: "MOBILE DEVELOPMENT" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("h1", { className: "text-6xl lg:text-7xl font-bold mb-8 tracking-tight", children: [
                "Mobile",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Applications" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed font-light", children: "Build stunning native iOS and Android applications with cutting-edge technology. From concept to App Store launch, we deliver exceptional mobile experiences." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "Native Performance" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "text-gray-600", size: 16 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "Biometric Security" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200", children: [
                  /* @__PURE__ */ jsx(Apple, { className: "text-gray-600", size: 16 }),
                  /* @__PURE__ */ jsx(Bot, { className: "text-gray-600", size: 16 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "iOS & Android" })
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
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Start Your App" }),
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
                    children: "View Portfolio"
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
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center gap-8", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -50, rotate: -5 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      rotate: activePhone === "ios" ? 0 : -5,
                      scale: activePhone === "ios" ? 1.05 : 1,
                      zIndex: activePhone === "ios" ? 20 : 10
                    },
                    transition: { duration: 0.5 },
                    onMouseEnter: () => setActivePhone("ios"),
                    className: "relative cursor-pointer",
                    style: { transformOrigin: "center" },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "w-[280px] h-[570px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800", children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" }),
                        /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2.5rem] overflow-hidden", children: [
                          /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 px-8 pt-3 pb-2 flex items-center justify-between text-xs font-semibold text-gray-900 z-20", children: [
                            /* @__PURE__ */ jsx("span", { children: "9:41" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
                              /* @__PURE__ */ jsx("div", { className: "w-4 h-3 bg-gray-900 rounded-sm" }),
                              /* @__PURE__ */ jsx("div", { className: "w-4 h-3 bg-gray-900 rounded-sm" }),
                              /* @__PURE__ */ jsx("div", { className: "w-4 h-3 bg-gray-900 rounded-sm" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-6 pt-14", children: [
                            /* @__PURE__ */ jsxs(
                              motion.div,
                              {
                                initial: { y: -20, opacity: 0 },
                                animate: { y: 0, opacity: 1 },
                                transition: { delay: 0.3 },
                                className: "bg-white/70 backdrop-blur-xl rounded-3xl p-6 mb-4 border border-white/50 shadow-xl",
                                children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
                                    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Apple, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
                                    /* @__PURE__ */ jsxs("div", { children: [
                                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900", children: "iOS App" }),
                                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Swift & SwiftUI" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      initial: { width: 0 },
                                      animate: { width: "85%" },
                                      transition: { delay: 0.5, duration: 1 },
                                      className: "h-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45]"
                                    }
                                  ) })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                              { icon: Shield, label: "Secure", color: "from-[#f1592a] to-[#ff7a45]" },
                              { icon: Zap, label: "Fast", color: "from-gray-600 to-gray-800" },
                              { icon: Globe, label: "Cloud", color: "from-gray-500 to-gray-700" },
                              { icon: Fingerprint, label: "Biometric", color: "from-gray-700 to-gray-900" }
                            ].map((item, i) => {
                              const Icon = item.icon;
                              return /* @__PURE__ */ jsxs(
                                motion.div,
                                {
                                  initial: { scale: 0, opacity: 0 },
                                  animate: { scale: 1, opacity: 1 },
                                  transition: { delay: 0.4 + i * 0.1 },
                                  className: "bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-white/50 shadow-lg",
                                  children: [
                                    /* @__PURE__ */ jsx("div", { className: `w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-md`, children: /* @__PURE__ */ jsx(Icon, { className: "text-white", size: 20, strokeWidth: 1.5 }) }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-gray-900", children: item.label })
                                  ]
                                },
                                i
                              );
                            }) }),
                            /* @__PURE__ */ jsx(
                              motion.div,
                              {
                                initial: { y: 20, opacity: 0 },
                                animate: { y: 0, opacity: 1 },
                                transition: { delay: 0.8 },
                                className: "absolute bottom-6 left-6 right-6",
                                children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-2xl p-4 shadow-2xl", children: /* @__PURE__ */ jsx("p", { className: "text-white font-semibold text-center text-sm", children: "Get Started" }) })
                              }
                            )
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: { opacity: activePhone === "ios" ? 1 : 0.5 },
                          className: "absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200",
                          children: /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-gray-900 flex items-center space-x-2", children: [
                            /* @__PURE__ */ jsx(Apple, { size: 14 }),
                            /* @__PURE__ */ jsx("span", { children: "iOS" })
                          ] })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 50, rotate: 5 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      rotate: activePhone === "android" ? 0 : 5,
                      scale: activePhone === "android" ? 1.05 : 1,
                      zIndex: activePhone === "android" ? 20 : 10
                    },
                    transition: { duration: 0.5 },
                    onMouseEnter: () => setActivePhone("android"),
                    className: "relative cursor-pointer",
                    style: { transformOrigin: "center" },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-[280px] h-[570px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2.2rem] overflow-hidden", children: [
                        /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 px-6 pt-2 pb-2 flex items-center justify-between text-xs font-semibold text-gray-900 z-20 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm", children: [
                          /* @__PURE__ */ jsx("span", { children: "9:41" }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gray-900 rounded-full" }),
                            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gray-900 rounded-full" }),
                            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gray-900 rounded-full" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-6 pt-12", children: [
                          /* @__PURE__ */ jsxs(
                            motion.div,
                            {
                              initial: { y: -20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.3 },
                              className: "bg-white/70 backdrop-blur-xl rounded-3xl p-6 mb-4 border border-white/50 shadow-xl",
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Bot, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900", children: "Android App" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Kotlin & Compose" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                                  motion.div,
                                  {
                                    initial: { width: 0 },
                                    animate: { width: "90%" },
                                    transition: { delay: 0.5, duration: 1 },
                                    className: "h-full bg-gradient-to-r from-gray-700 to-gray-900"
                                  }
                                ) })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                            { icon: Lock, label: "Encrypted", color: "from-gray-700 to-gray-900" },
                            { icon: Zap, label: "Optimized", color: "from-[#f1592a] to-[#ff7a45]" },
                            { icon: Globe, label: "API", color: "from-gray-600 to-gray-800" },
                            { icon: Fingerprint, label: "Touch ID", color: "from-gray-500 to-gray-700" }
                          ].map((item, i) => {
                            const Icon = item.icon;
                            return /* @__PURE__ */ jsxs(
                              motion.div,
                              {
                                initial: { scale: 0, opacity: 0 },
                                animate: { scale: 1, opacity: 1 },
                                transition: { delay: 0.4 + i * 0.1 },
                                className: "bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-white/50 shadow-lg",
                                children: [
                                  /* @__PURE__ */ jsx("div", { className: `w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-md`, children: /* @__PURE__ */ jsx(Icon, { className: "text-white", size: 20, strokeWidth: 1.5 }) }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-gray-900", children: item.label })
                                ]
                              },
                              i
                            );
                          }) }),
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              initial: { y: 20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.8 },
                              className: "absolute bottom-6 left-6 right-6",
                              children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl p-4 shadow-2xl", children: /* @__PURE__ */ jsx("p", { className: "text-white font-semibold text-center text-sm", children: "Launch App" }) })
                            }
                          )
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: { opacity: activePhone === "android" ? 1 : 0.5 },
                          className: "absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200",
                          children: /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-gray-900 flex items-center space-x-2", children: [
                            /* @__PURE__ */ jsx(Bot, { size: 14 }),
                            /* @__PURE__ */ jsx("span", { children: "Android" })
                          ] })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-full blur-3xl -z-10" })
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
          className: "absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-full blur-3xl"
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
                "Mobile",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Services" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "Comprehensive mobile development services for iOS and Android platforms." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto", children: mobileServices.map((service, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: "group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 hover:border-[#f1592a]/30 hover:shadow-2xl transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
                backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              } }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`, children: (() => {
                  const IconComponent = service.icon;
                  return /* @__PURE__ */ jsx(IconComponent, { className: "text-white", size: 32, strokeWidth: 1.5 });
                })() }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-gray-900", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 font-light leading-relaxed", children: service.description }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: service.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0", size: 14, strokeWidth: 2.5 }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-700 font-medium", children: feature })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" })
            ]
          },
          service.title
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white relative overflow-hidden", children: [
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
                "Development",
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Process" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "From wireframing to App Store launch, our proven process ensures success." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] -translate-x-1/2" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-16", children: processTimeline.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: isEven ? -50 : 50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1 },
                className: `relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: `${isEven ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all group", children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02] rounded-3xl", style: {
                      backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    } }),
                    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                      /* @__PURE__ */ jsx("div", { className: `flex items-center ${isEven ? "lg:justify-end" : "justify-start"} mb-4`, children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Icon, { className: "text-white", size: 28, strokeWidth: 1.5 }) }) }),
                      /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1 bg-[#f1592a]/10 text-[#f1592a] rounded-full text-xs font-semibold mb-3", children: phase.duration }) }),
                      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-gray-900", children: phase.phase }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 font-light", children: phase.description }),
                      /* @__PURE__ */ jsxs("div", { className: `space-y-2 ${isEven ? "lg:items-end" : "items-start"}`, children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Deliverables:" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, i) => /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-2 ${isEven ? "lg:justify-end" : "justify-start"}`, children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0", size: 16, strokeWidth: 2.5 }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: deliverable })
                        ] }, i)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/0 to-[#ff7a45]/0 group-hover:from-[#f1592a]/5 group-hover:to-[#ff7a45]/5 rounded-3xl transition-all pointer-events-none" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { scale: 0 },
                      whileInView: { scale: 1 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 + 0.2 },
                      className: "w-8 h-8 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full border-4 border-white shadow-xl"
                    }
                  ) })
                ]
              },
              phase.phase
            );
          }) })
        ] }) })
      ] })
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
                /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Our Apps" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto font-light", children: "Built with performance, security, and user experience at the core." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: appFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
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
                  children: /* @__PURE__ */ jsx(Smartphone, { className: "text-white", size: 40, strokeWidth: 1.5 })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight", children: "Ready to Launch Your Mobile App?" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-8 font-light", children: "Transform your idea into a powerful mobile application. Get started with a free consultation and bring your vision to life." }),
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
                    children: "View Case Studies"
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
  MobileDevelopmentPage
};
