import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Shield, Zap, Bell, Scan, UserX, Clock, CheckCircle, Smartphone, Calendar, Package, Car, ClipboardCheck, DoorOpen, TrendingUp, Leaf, UserCog } from "lucide-react";
import { Link } from "react-router";
const features = [
  {
    icon: Bell,
    title: "Instant Host Alerts",
    description: "Real-time notifications sent to hosts the moment their visitor arrives, ensuring seamless communication."
  },
  {
    icon: Scan,
    title: "Touchless Entry",
    description: "QR code-based contactless check-in system for a safe, hygienic, and modern visitor experience."
  },
  {
    icon: UserX,
    title: "Blacklist Management",
    description: "Automated screening against blacklisted individuals with instant alerts for enhanced security."
  },
  {
    icon: Clock,
    title: "Pre-Registration",
    description: "Allow visitors to pre-register online, reducing wait times and streamlining the check-in process."
  },
  {
    icon: Shield,
    title: "Visitor Badges",
    description: "Automatically generate and print professional visitor badges with photos and access permissions."
  },
  {
    icon: CheckCircle,
    title: "Audit Trail",
    description: "Complete visitor history and analytics for compliance, security audits, and reporting."
  },
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    description: "Streamline reception workflows with automated processes, reducing manual tasks and improving staff productivity."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Go paperless with digital check-ins, e-badges, and cloud storage, reducing environmental impact."
  },
  {
    icon: UserCog,
    title: "Personalization",
    description: "Customize visitor experiences with personalized greetings, host preferences, and tailored access levels."
  }
];
const inbuiltProducts = [
  {
    icon: DoorOpen,
    title: "Meeting Room Management",
    description: "Smart booking system with real-time availability, automated scheduling, and resource allocation for all meeting spaces.",
    features: [
      "Real-time room availability",
      "Calendar integration",
      "Automated check-in/out",
      "Capacity management"
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "group-hover:border-blue-500/30",
    iconBg: "group-hover:bg-blue-500"
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Comprehensive event planning and coordination with attendee tracking, registration, and access control for seamless events.",
    features: [
      "Attendee registration",
      "Batch invitations",
      "Access control",
      "Real-time analytics"
    ],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "group-hover:border-purple-500/30",
    iconBg: "group-hover:bg-purple-500"
  },
  {
    icon: Package,
    title: "Parcel Management",
    description: "Track and manage all incoming and outgoing parcels with automatic notifications and secure handover verification.",
    features: [
      "Parcel tracking",
      "Delivery notifications",
      "Photo verification",
      "Digital signatures"
    ],
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "group-hover:border-green-500/30",
    iconBg: "group-hover:bg-green-500"
  },
  {
    icon: Car,
    title: "Parking Management",
    description: "Optimize parking space utilization with smart allocation, automated gate control, and violation monitoring.",
    features: [
      "Slot allocation",
      "License plate recognition",
      "Automated gates",
      "Violation alerts"
    ],
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "group-hover:border-orange-500/30",
    iconBg: "group-hover:bg-orange-500"
  },
  {
    icon: ClipboardCheck,
    title: "Material Gate Pass",
    description: "Streamline material movement with digital gate passes, approval workflows, and complete audit trails for compliance.",
    features: [
      "Digital gate passes",
      "Approval workflows",
      "Material tracking",
      "Compliance reporting"
    ],
    color: "from-red-500/10 to-rose-500/10",
    borderColor: "group-hover:border-red-500/30",
    iconBg: "group-hover:bg-red-500"
  }
];
const benefits = [
  { metric: "80%", label: "Faster Check-In" },
  { metric: "100%", label: "Contactless" },
  { metric: "24/7", label: "Monitoring" }
];
function VisitorManagementPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100", children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          },
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
          className: "absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-gray-200/10 rounded-full blur-3xl"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Shield, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700", children: "Enterprise-Grade Security" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "text-5xl lg:text-6xl font-bold mb-6 leading-tight",
                  children: [
                    "Visitor Management",
                    /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Built for Safety & Speed" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "text-xl text-gray-600 leading-relaxed mb-8",
                  children: "Transform your reception area with a modern, touchless visitor management system that prioritizes security without compromising user experience."
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className: "flex flex-wrap gap-6 mb-8",
                  children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-2xl text-[#f1592a]", children: benefit.metric }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: benefit.label })
                  ] }, index))
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 },
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Request Demo" }),
                          /* @__PURE__ */ jsx(Zap, { className: "group-hover:scale-110 transition-transform", size: 20 })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg",
                        children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "View Pricing" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, delay: 0.3 },
            className: "relative flex justify-center lg:justify-end",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/20 to-gray-300/20 blur-3xl scale-75" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-[320px] h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" }),
                /* @__PURE__ */ jsxs("div", { className: "w-full h-full bg-white overflow-hidden", children: [
                  /* @__PURE__ */ jsxs("div", { className: "h-12 bg-white flex items-center justify-between px-8 pt-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-900", children: "9:41" }),
                    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-3 border border-gray-900 rounded-sm" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "px-6 pt-4 pb-6 h-full bg-gradient-to-br from-gray-50 to-white", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16 mx-auto mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Smartphone, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
                        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" })
                      ] }),
                      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-1", children: "Visitor Check-In" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Scan QR code to enter" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { scale: [1, 1.02, 1] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 mb-6",
                        children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden", children: [
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-8 gap-1 p-4", children: Array.from({ length: 64 }).map((_, i) => /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: `w-full aspect-square rounded-sm ${Math.random() > 0.5 ? "bg-gray-900" : "bg-white"}`
                            },
                            i
                          )) }),
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white rounded-xl shadow-lg border-2 border-[#f1592a] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a] rounded-lg" }) }) }),
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              animate: { y: [-100, 100] },
                              transition: { duration: 2, repeat: Infinity, ease: "linear" },
                              className: "absolute inset-0 h-1 bg-gradient-to-r from-transparent via-[#f1592a] to-transparent"
                            }
                          )
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#f1592a]/10 to-orange-100/50 rounded-2xl p-4 border border-[#f1592a]/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsx(Shield, { className: "text-[#f1592a]", size: 20, strokeWidth: 1.5 }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 font-medium", children: "Status" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-900", children: "Verified & Secure" })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl p-4 border border-gray-200 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Clock, { className: "text-gray-700", size: 20, strokeWidth: 1.5 }) }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 font-medium", children: "Time" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-900", children: "Instant Access" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            animate: { scale: [1, 1.2, 1] },
                            transition: { duration: 2, repeat: Infinity },
                            className: "w-2 h-2 bg-[#f1592a] rounded-full"
                          }
                        )
                      ] }) })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -20, 0] },
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  className: "absolute top-10 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#f1592a] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-white", size: 18, strokeWidth: 2 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-900", children: "Check-in Complete" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Host notified" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 20, 0] },
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  className: "absolute bottom-20 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#f1592a] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "text-white", size: 18, strokeWidth: 2 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-900", children: "Secure Entry" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Badge printed" })
                    ] })
                  ] })
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: [
              "Comprehensive Features for",
              /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Modern Reception Areas" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Everything you need to manage visitors efficiently while maintaining the highest security standards." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -8 },
          className: "group relative",
          children: /* @__PURE__ */ jsxs("div", { className: "h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#f1592a]/20 transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all", children: /* @__PURE__ */ jsx(feature.icon, { className: "text-gray-700", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-gray-900", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: feature.description }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" })
          ] })
        },
        feature.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-20",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: [
              "Inbuilt Products for",
              /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Complete Facility Management" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Discover a suite of integrated solutions designed to streamline your operations and ensure the safety of your premises." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6", children: [
                /* @__PURE__ */ jsx(DoorOpen, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "Smart Spaces" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold mb-4 text-gray-900", children: "Meeting Room Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "Smart booking system with real-time availability, automated scheduling, and resource allocation for all meeting spaces." }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: ["Real-time room availability", "Calendar integration", "Automated check-in/out", "Capacity management"].map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("button", { className: "group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Learn More" }),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { x: [0, 5, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    children: "\u2192"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: "Available Rooms" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "Today, Feb 10" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { name: "Conference Room A", status: "Available", time: "10:00 AM - 2:00 PM" },
                  { name: "Meeting Room 3", status: "Occupied", time: "Until 11:30 AM" },
                  { name: "Board Room", status: "Available", time: "2:00 PM - 5:00 PM" }
                ].map((room, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.1 },
                    className: "flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsx(DoorOpen, { className: "text-gray-700", size: 24, strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900", children: room.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: room.time })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-xs font-semibold ${room.status === "Available" ? "bg-[#f1592a]/10 text-[#f1592a]" : "bg-gray-200 text-gray-700"}`, children: room.status })
                    ]
                  },
                  i
                )) })
              ] }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 3, repeat: Infinity },
                  className: "absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#f1592a]", children: "95%" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Utilization" })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "text-white", size: 24, strokeWidth: 1.5 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: "Tech Summit 2026" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Feb 15 \u2022 500 Attendees" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
                  { label: "Registered", value: "487" },
                  { label: "Checked In", value: "312" },
                  { label: "Pending", value: "175" }
                ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-3 text-center border border-gray-100", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: stat.value }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: stat.label })
                ] }, i)) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: ["VIP Lounge Access", "Lunch Voucher", "Workshop Pass"].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: item }),
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full" })
                ] }, i)) })
              ] }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 3, repeat: Infinity, delay: 0.5 },
                  className: "absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsx(Bell, { className: "text-[#f1592a]", size: 20 }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-900", children: "New Check-in" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "John Doe" })
                    ] })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "Event Platform" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold mb-4 text-gray-900", children: "Event Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "Comprehensive event planning and coordination with attendee tracking, registration, and access control for seamless events." }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: ["Attendee registration", "Batch invitations", "Access control", "Real-time analytics"].map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("button", { className: "group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Learn More" }),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { x: [0, 5, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    children: "\u2192"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6", children: [
                /* @__PURE__ */ jsx(Package, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "Delivery Tracking" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold mb-4 text-gray-900", children: "Parcel Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "Track and manage all incoming and outgoing parcels with automatic notifications and secure handover verification." }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: ["Parcel tracking", "Delivery notifications", "Photo verification", "Digital signatures"].map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("button", { className: "group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Learn More" }),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { x: [0, 5, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    children: "\u2192"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-4", children: "Today's Deliveries" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { id: "#PKG-1247", recipient: "Marketing Dept", status: "Delivered", time: "10:30 AM" },
                  { id: "#PKG-1248", recipient: "John Smith", status: "In Transit", time: "Est. 2:00 PM" },
                  { id: "#PKG-1249", recipient: "HR Department", status: "Pending", time: "Est. 4:30 PM" }
                ].map((parcel, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.1 },
                    className: "flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsx(Package, { className: "text-gray-700", size: 24, strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900", children: parcel.id }),
                        /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
                          parcel.recipient,
                          " \u2022 ",
                          parcel.time
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-xs font-semibold ${parcel.status === "Delivered" ? "bg-[#f1592a]/10 text-[#f1592a]" : parcel.status === "In Transit" ? "bg-gray-300 text-gray-700" : "bg-gray-200 text-gray-600"}`, children: parcel.status })
                    ]
                  },
                  i
                )) })
              ] }) }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 3, repeat: Infinity },
                  className: "absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#f1592a]", children: "127" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "This Month" })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: "Parking Overview" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-[#f1592a] rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: "Available" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-2 mb-6", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `aspect-square rounded-lg flex items-center justify-center border ${i % 3 === 0 ? "bg-gray-200 border-gray-300" : "bg-[#f1592a]/10 border-[#f1592a]/20"}`,
                    children: /* @__PURE__ */ jsx(
                      Car,
                      {
                        className: i % 3 === 0 ? "text-gray-600" : "text-[#f1592a]",
                        size: 16,
                        strokeWidth: 1.5
                      }
                    )
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-[#f1592a]/5 rounded-xl p-3 text-center border border-[#f1592a]/20", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#f1592a]", children: "14" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Available" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 rounded-xl p-3 text-center border border-gray-200", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-700", children: "6" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Occupied" })
                  ] })
                ] })
              ] }) }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 3, repeat: Infinity, delay: 0.5 },
                  className: "absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsx(Car, { className: "text-[#f1592a]", size: 20 }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-900", children: "Slot A-12" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Just Freed" })
                    ] })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6", children: [
                /* @__PURE__ */ jsx(Car, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "Smart Parking" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold mb-4 text-gray-900", children: "Parking Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "Optimize parking space utilization with smart allocation, automated gate control, and violation monitoring." }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: ["Slot allocation", "License plate recognition", "Automated gates", "Violation alerts"].map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("button", { className: "group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Learn More" }),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { x: [0, 5, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    children: "\u2192"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 backdrop-blur-sm rounded-full border border-[#f1592a]/20 mb-6", children: [
                /* @__PURE__ */ jsx(ClipboardCheck, { className: "text-[#f1592a]", size: 18, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: "Material Control" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl lg:text-4xl font-bold mb-4 text-gray-900", children: "Material Gate Pass" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "Streamline material movement with digital gate passes, approval workflows, and complete audit trails for compliance." }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: ["Digital gate passes", "Approval workflows", "Material tracking", "Compliance reporting"].map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-[#f1592a]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsxs("button", { className: "group px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#f1592a]/30 transition-all flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Learn More" }),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { x: [0, 5, 0] },
                    transition: { duration: 1.5, repeat: Infinity },
                    children: "\u2192"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-4", children: "Active Gate Passes" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  { id: "GP-2401", material: "Office Supplies", status: "Approved", approver: "Manager" },
                  { id: "GP-2402", material: "IT Equipment", status: "Pending", approver: "IT Head" },
                  { id: "GP-2403", material: "Raw Materials", status: "In Transit", approver: "Operations" }
                ].map((pass, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.1 },
                    className: "p-4 bg-gray-50 rounded-xl border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900", children: pass.id }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: pass.material })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-xs font-semibold ${pass.status === "Approved" ? "bg-[#f1592a]/10 text-[#f1592a]" : pass.status === "Pending" ? "bg-gray-300 text-gray-700" : "bg-gray-200 text-gray-600"}`, children: pass.status })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsx(UserCog, { className: "text-gray-600", size: 12 }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: pass.approver })
                      ] })
                    ]
                  },
                  i
                )) })
              ] }) }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 3, repeat: Infinity },
                  className: "absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100",
                  children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#f1592a]", children: "98%" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Compliance" })
                  ] })
                }
              )
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          } }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                viewport: { once: true },
                className: "inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6",
                children: /* @__PURE__ */ jsx(Shield, { className: "text-white", size: 40, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-white mb-6", children: "Ready to Modernize Your Reception?" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-8 max-w-2xl mx-auto", children: "Join hundreds of companies that trust our visitor management system for safety, speed, and seamless operations." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-white text-[#f1592a] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all",
                  children: "Schedule a Demo"
                }
              ) }),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold",
                  children: "Download Brochure"
                }
              )
            ] })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  VisitorManagementPage
};
