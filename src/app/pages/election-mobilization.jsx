import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  BarChart3,
  Bell,
  MessageSquare,
  TrendingUp,
  MapPin,
  Phone,
  Megaphone,
  Vote,
  UserPlus,
  Radio,
  Zap,
  Eye,
  GitBranch,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1e3
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    "0",
    suffix
  ] });
}
const heroStats = [
  { value: 5e5, suffix: "+", label: "Voters Reached", prefix: "", icon: Users, decimals: 0 },
  { value: 150, suffix: "+", label: "Campaigns Managed", prefix: "", icon: Megaphone, decimals: 0 },
  { value: 98, suffix: "%", label: "Volunteer Engagement", prefix: "", icon: TrendingUp, decimals: 0 },
  { value: 24, suffix: "/7", label: "Campaign Monitoring", prefix: "", icon: Eye, decimals: 0 }
];
const coreFeatures = [
  {
    id: "campaign",
    icon: Megaphone,
    title: "Digital Campaign Management",
    description: "Plan, schedule, and monitor campaigns",
    longDescription: "Streamline your campaign operations with comprehensive planning and execution tools. Schedule activities, coordinate teams, monitor progress in real-time, and ensure every campaign element is executed flawlessly across all digital channels.",
    features: [
      "Campaign calendar & activity scheduling",
      "Multi-channel campaign coordination",
      "Asset management (graphics, videos, content)",
      "Budget tracking & resource allocation",
      "Automated workflow & task assignment",
      "Campaign performance dashboards"
    ],
    image: "https://images.unsplash.com/photo-1538688210005-863b336def45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "outreach",
    icon: MessageSquare,
    title: "Voter Outreach Tools",
    description: "Targeted messaging & volunteer coordination",
    longDescription: "Engage voters effectively with precision-targeted messaging, volunteer management tools, and comprehensive tracking systems. Coordinate door-to-door campaigns, phone banking, and digital outreach\u2014all from one centralized platform.",
    features: [
      "Voter database with segmentation",
      "Targeted SMS & WhatsApp campaigns",
      "Volunteer management & scheduling",
      "Door-to-door canvassing coordination",
      "Phone banking with call scripts",
      "Engagement tracking & follow-ups"
    ],
    image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance & optimize strategy",
    longDescription: "Make data-driven decisions with comprehensive analytics and reporting tools. Monitor campaign performance, measure voter sentiment, track outreach effectiveness, and optimize your strategy in real-time based on actionable insights.",
    features: [
      "Real-time campaign performance metrics",
      "Voter sentiment analysis",
      "Geographic heat maps & targeting",
      "Volunteer productivity tracking",
      "ROI & cost-per-engagement analysis",
      "Predictive modeling & forecasting"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];
const whyItMatters = [
  {
    icon: Target,
    title: "Organized Campaign Execution",
    description: "Streamline all campaign activities with centralized planning, scheduling, and task management\u2014ensuring nothing falls through the cracks."
  },
  {
    icon: Users,
    title: "Data-Driven Voter Targeting",
    description: "Leverage advanced analytics and voter segmentation to reach the right voters with the right message at the right time."
  },
  {
    icon: UserPlus,
    title: "Improved Volunteer Coordination",
    description: "Efficiently manage volunteers, assign tasks, track progress, and maximize grassroots impact across your constituency."
  },
  {
    icon: TrendingUp,
    title: "Scalable for Large Constituencies",
    description: "Built to scale seamlessly from local to national campaigns\u2014handling millions of voter records and thousands of volunteers."
  }
];
const additionalCapabilities = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts for campaign milestones, volunteer tasks, and voter engagement opportunities via SMS, email, and push notifications."
  },
  {
    icon: Radio,
    title: "Social Media Integration",
    description: "Schedule, publish, and monitor social media campaigns across Facebook, Twitter, Instagram, and WhatsApp with unified analytics."
  },
  {
    icon: Phone,
    title: "Call Center Management",
    description: "Integrated phone banking with call scripts, automated dialing, call recording, and real-time performance tracking."
  },
  {
    icon: Shield,
    title: "Data Security & Privacy",
    description: "Enterprise-grade security with voter data encryption, role-based access control, and compliance with election data regulations."
  },
  {
    icon: MapPin,
    title: "Geographic Mapping",
    description: "Interactive maps for booth-level planning, volunteer deployment, and identifying high-priority areas for voter outreach."
  },
  {
    icon: GitBranch,
    title: "API Integration",
    description: "Connect with voter databases, CRM systems, payment gateways, and third-party tools via RESTful APIs and webhooks."
  }
];
const campaignTypes = [
  {
    type: "National Elections",
    icon: Vote,
    title: "Win National Mandates",
    description: "Run large-scale national campaigns with multi-state coordination, centralized messaging, and real-time performance tracking across constituencies. Manage millions of voters, thousands of volunteers, and complex campaign hierarchies.",
    highlightedFeature: {
      icon: MapPin,
      title: "Multi-State Coordination",
      description: "Centralized command center with state, district, and booth-level campaign management and reporting"
    },
    features: [
      "Multi-tier campaign hierarchy",
      "Centralized messaging & branding",
      "State & district-level dashboards",
      "Cross-constituency resource allocation",
      "National volunteer network management",
      "Media monitoring & response coordination"
    ],
    image: "https://images.unsplash.com/photo-1593014044850-826e846a96b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    contentAlign: "left"
  },
  {
    type: "Regional Elections",
    icon: MapPin,
    title: "Dominate Regional Markets",
    description: "Execute focused regional campaigns with localized messaging, targeted voter outreach, and community-specific engagement strategies. Perfect for state elections, municipal races, and regional party building.",
    highlightedFeature: {
      icon: Users,
      title: "Community Engagement",
      description: "Localized messaging with region-specific content, language support, and cultural sensitivity"
    },
    features: [
      "Regional voter database management",
      "Localized content & language support",
      "Community leader coordination",
      "Regional media & influencer outreach",
      "Local volunteer recruitment",
      "Booth-level micro-targeting"
    ],
    image: "https://images.unsplash.com/photo-1591765590199-3658212ff852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    contentAlign: "right"
  },
  {
    type: "Grassroots Mobilization",
    icon: Zap,
    title: "Build Grassroots Movements",
    description: "Empower ground-level volunteers with tools for door-to-door canvassing, community events, and person-to-person engagement. Turn supporters into advocates and advocates into organizers.",
    highlightedFeature: {
      icon: UserPlus,
      title: "Volunteer Empowerment",
      description: "Mobile-first tools for volunteers with offline capabilities, real-time updates, and gamification"
    },
    features: [
      "Door-to-door canvassing tools",
      "Volunteer recruitment & training",
      "Community event management",
      "Peer-to-peer messaging campaigns",
      "Supporter mobilization & GOTV",
      "Grassroots fundraising coordination"
    ],
    image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    contentAlign: "left"
  }
];
function ElectionMobilizationPage() {
  const [activeTab, setActiveTab] = useState(coreFeatures[0].id);
  const activeFeature = coreFeatures.find((f) => f.id === activeTab) || coreFeatures[0];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center max-w-5xl mx-auto",
          children: [
            /* @__PURE__ */ jsxs(
              motion.span,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8",
                children: [
                  /* @__PURE__ */ jsx(Vote, { className: "text-[#f1592a]", size: 18 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Election Campaign Platform" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "text-4xl md:text-6xl font-bold mb-6",
                children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Power Your Digital Campaign" })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                className: "text-lg md:text-xl text-gray-600 mb-10 leading-relaxed",
                children: "Digital Campaigning. Voter Reachout. Simplified."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                className: "text-base text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed",
                children: "A centralized platform designed to manage digital campaigning, engage voters effectively, and track outreach performance in real time."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 },
                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: "/contact",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Request a Demo" }),
                        /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.a,
                    {
                      href: "#features",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className: "px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg",
                      children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Explore Features" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.7 },
                className: "grid grid-cols-2 md:grid-cols-4 gap-8 mt-20",
                children: heroStats.map((stat, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    className: "text-center",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 mx-auto mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsx(stat.icon, { className: "text-[#364153]", size: 24, strokeWidth: 2 }) }),
                        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-[#364153] mb-2", children: /* @__PURE__ */ jsx(
                        AnimatedCounter,
                        {
                          value: stat.value,
                          suffix: stat.suffix,
                          prefix: stat.prefix,
                          decimals: stat.decimals
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
                    ]
                  },
                  stat.label
                ))
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Core ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Features" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Everything you need to run a winning campaign\u2014from strategic planning to voter engagement and real-time performance tracking." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "flex flex-wrap justify-center gap-4 mb-16",
          children: coreFeatures.map((feature) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveTab(feature.id),
              className: `group flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all ${activeTab === feature.id ? "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] border-transparent text-white shadow-lg shadow-[#f1592a]/30" : "bg-white border-gray-200 text-gray-700 hover:border-[#f1592a]/30 hover:bg-gray-50"}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center transition-all ${activeTab === feature.id ? "bg-white/20" : "bg-gray-100"}`, children: /* @__PURE__ */ jsx(
                  feature.icon,
                  {
                    className: activeTab === feature.id ? "text-white" : "text-gray-700",
                    size: 20,
                    strokeWidth: 2
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold", children: feature.title }),
                  /* @__PURE__ */ jsx("div", { className: `text-sm ${activeTab === feature.id ? "text-white/80" : "text-gray-500"}`, children: feature.description })
                ] })
              ]
            },
            feature.id
          ))
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "grid md:grid-cols-2 gap-12 items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "order-2 md:order-1", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200", children: [
              /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: activeFeature.image,
                  alt: activeFeature.title,
                  className: "w-full h-auto"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "order-1 md:order-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6", children: [
                /* @__PURE__ */ jsx(activeFeature.icon, { className: "text-[#f1592a]", size: 18 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#f1592a]", children: activeFeature.title })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: activeFeature.longDescription }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: activeFeature.features.map((feature, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: index * 0.1 },
                  className: "flex items-start space-x-3",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 bg-[#f1592a]/10 rounded-full flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a]", size: 14, strokeWidth: 2.5 }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700 leading-relaxed", children: feature })
                  ]
                },
                index
              )) })
            ] })
          ]
        },
        activeTab
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Why It ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Matters" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Win elections with organized campaigns, data-driven targeting, and scalable technology." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: whyItMatters.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#f1592a]/10 transition-all", children: /* @__PURE__ */ jsx(item.icon, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: item.description })
          ]
        },
        item.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-20",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Built For ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Every Campaign" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "From national elections to grassroots movements\u2014our platform scales to meet your campaign needs." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-32", children: campaignTypes.map((campaign, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, delay: index * 0.2 },
          className: `grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${campaign.contentAlign === "right" ? "lg:grid-flow-dense" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: campaign.contentAlign === "right" ? "lg:col-start-2" : "", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6",
                  children: [
                    /* @__PURE__ */ jsx(campaign.icon, { className: "text-[#f1592a]", size: 16 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#f1592a] uppercase tracking-wide", children: campaign.type })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h3,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.3 },
                  className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                  children: campaign.title
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.4 },
                  className: "text-gray-600 leading-relaxed mb-8",
                  children: campaign.description
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.5 },
                  className: "bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-2xl p-6 mb-8 border border-[#f1592a]/20",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#f1592a]/30 shadow-sm", children: /* @__PURE__ */ jsx(campaign.highlightedFeature.icon, { className: "text-[#f1592a]", size: 22, strokeWidth: 2 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-2", children: campaign.highlightedFeature.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: campaign.highlightedFeature.description })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.6 },
                  className: "grid sm:grid-cols-2 gap-x-6 gap-y-3",
                  children: campaign.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0", size: 16, strokeWidth: 2 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: feature })
                  ] }, idx))
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: campaign.contentAlign === "right" ? "lg:col-start-1 lg:row-start-1" : "", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.3 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/5 rounded-[3rem] blur-3xl scale-105 -z-10" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200", children: [
                    /* @__PURE__ */ jsx(
                      ImageWithFallback,
                      {
                        src: campaign.image,
                        alt: campaign.type,
                        className: "w-full h-auto"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" })
                  ] })
                ]
              }
            ) })
          ]
        },
        campaign.type
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Additional ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Capabilities" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "A comprehensive toolkit designed to address every aspect of modern political campaigning." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: additionalCapabilities.map((capability, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-lg transition-all",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all", children: /* @__PURE__ */ jsx(capability.icon, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 22, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: capability.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: capability.description })
            ] })
          ] })
        },
        capability.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center max-w-4xl mx-auto",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "text-[#f1592a]", size: 18 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: "Ready to Win Your Next Election?" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6", children: [
              "Mobilize. Engage. ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Win." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 mb-10 leading-relaxed", children: "Book a Demo Today and see how our platform can transform your campaign operations, amplify your reach, and drive voter engagement like never before." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "/contact",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Book a Demo" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "/contact",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all",
                  children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Contact Sales" })
                }
              )
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  ElectionMobilizationPage
};
