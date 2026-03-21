import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  CheckCircle,
  Calendar,
  BarChart3,
  MessageSquare,
  GitBranch,
  Rocket,
  Target,
  FileText,
  Users,
  Code,
  TestTube,
  Upload,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Eye,
  RefreshCw,
  Settings,
  Award
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed workshops and documentation.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1728917330520-9456e3f49529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmclMjBkYXNoYm9hcmQlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzcxOTI5Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Project roadmap", "Technical specifications", "Timeline & milestones"]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Our design team creates intuitive wireframes and interactive prototypes, ensuring user experience is at the forefront.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1748801583975-720cb5e4985e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm90b3R5cGUlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzcxOTI5Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Wireframes", "UI/UX designs", "Interactive prototypes"]
  },
  {
    number: "03",
    title: "Development Sprint",
    description: "Agile development with 2-week sprints, continuous integration, and regular code reviews to maintain quality standards.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzE5MjkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Working features", "Code documentation", "Sprint demos"]
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing including functional, performance, security, and user acceptance testing before any release.",
    icon: TestTube,
    image: "https://images.unsplash.com/photo-1621361753831-e972c09ceec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBxdWFsaXR5JTIwYXNzdXJhbmNlfGVufDF8fHx8MTc3MTkyOTM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Test reports", "Bug fixes", "Performance metrics"]
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description: "Smooth deployment with zero-downtime releases, comprehensive monitoring, and immediate post-launch support.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1762135245629-1e79d4cc30b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBkZXBsb3ltZW50fGVufDF8fHx8MTc3MTkyOTM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Production release", "Deployment docs", "Monitoring setup"]
  },
  {
    number: "06",
    title: "Support & Optimization",
    description: "Ongoing maintenance, performance optimization, feature enhancements, and 24/7 technical support.",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBwZXJmb3JtYW5jZSUyMG1ldHJpY3N8ZW58MXx8fHwxNzcxOTI5Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    deliverables: ["Monthly reports", "Updates & patches", "Performance analytics"]
  }
];
const reportingFeatures = [
  {
    icon: Calendar,
    title: "Weekly Stand-ups",
    description: "30-minute video calls every Monday to discuss progress, blockers, and upcoming tasks."
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Real-time access to project dashboards showing sprint velocity, burndown charts, and completion rates."
  },
  {
    icon: MessageSquare,
    title: "Daily Updates",
    description: "End-of-day summaries via Slack/Email highlighting completed tasks and next-day priorities."
  },
  {
    icon: FileText,
    title: "Sprint Reports",
    description: "Bi-weekly detailed reports including demo videos, completed features, and upcoming sprint planning."
  }
];
const tools = [
  {
    name: "Jira",
    category: "Project Management",
    description: "Agile project tracking and sprint planning",
    icon: Settings
  },
  {
    name: "ClickUp",
    category: "Task Management",
    description: "Daily task tracking and team collaboration",
    icon: CheckCircle
  },
  {
    name: "Git / GitHub",
    category: "Version Control",
    description: "Code repository and version management",
    icon: GitBranch
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Real-time team communication",
    icon: MessageSquare
  },
  {
    name: "Figma",
    category: "Design",
    description: "UI/UX design and prototyping",
    icon: Eye
  },
  {
    name: "Jenkins / CI/CD",
    category: "Automation",
    description: "Automated testing and deployment",
    icon: Zap
  }
];
const qaProcess = [
  {
    step: "Unit Testing",
    description: "Individual component testing during development",
    coverage: "90%+ code coverage",
    icon: Code
  },
  {
    step: "Integration Testing",
    description: "Testing component interactions and API integrations",
    coverage: "All critical paths",
    icon: Upload
  },
  {
    step: "Security Testing",
    description: "Vulnerability scanning and penetration testing",
    coverage: "OWASP Top 10",
    icon: Shield
  },
  {
    step: "UAT Testing",
    description: "Client validation in staging environment",
    coverage: "All user stories",
    icon: Users
  }
];
const supportTiers = [
  {
    title: "First 30 Days",
    subtitle: "Critical Support",
    features: [
      "24/7 emergency support",
      "Immediate bug fixes",
      "Performance monitoring",
      "Daily health checks",
      "Free bug fixes"
    ],
    icon: Zap,
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    title: "Months 2-12",
    subtitle: "Standard Support",
    features: [
      "Business hours support (9-6)",
      "Weekly health reports",
      "Security patches",
      "Minor feature updates",
      "Monthly optimization"
    ],
    icon: Clock,
    color: "from-gray-600 to-gray-700"
  },
  {
    title: "Year 2+",
    subtitle: "Maintenance Plans",
    features: [
      "Flexible support packages",
      "Feature enhancements",
      "Technology upgrades",
      "Quarterly reviews",
      "Strategic consulting"
    ],
    icon: TrendingUp,
    color: "from-gray-600 to-gray-700"
  }
];
function ProcessPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-10 w-72 h-72 bg-[#f1592a]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Award, { className: "text-[#f1592a]", size: 20 }),
              /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] font-semibold", children: "Our Proven Process" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent", children: [
              "Building Trust Through",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Transparency & Excellence" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto", children: "Our structured, transparent development process ensures you're always in control. From discovery to deployment and beyond, we deliver quality with complete visibility." })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-[#f1592a]/3 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-40 left-20 w-96 h-96 bg-[#f1592a]/3 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-4", children: [
                /* @__PURE__ */ jsx(Target, { className: "text-[#f1592a]", size: 18 }),
                /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] font-semibold text-sm", children: "HOW WE WORK" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
                "Get Started in ",
                /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Six Simple Steps" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "No setup headaches. Our process makes it easy to launch, manage and grow your business." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f1592a]/20 via-[#f1592a]/40 to-[#f1592a]/20 hidden lg:block" }),
          processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: { delay: index * 0.15, duration: 0.6 },
                className: "relative mb-20 lg:mb-32",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: `grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`, children: [
                    /* @__PURE__ */ jsx("div", { className: `${isEven ? "lg:text-right" : "lg:col-start-2 lg:text-left"} lg:pr-8`, children: /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: isEven ? -20 : 20 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.15 + 0.2, duration: 0.5 },
                        children: [
                          /* @__PURE__ */ jsx("div", { className: `inline-flex items-center space-x-2 mb-4 ${isEven ? "lg:flex-row-reverse lg:space-x-reverse" : ""}`, children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-gray-400", children: [
                            "Step ",
                            step.number
                          ] }) }),
                          /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: step.title }),
                          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-6", children: step.description }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: step.deliverables.map((deliverable, i) => /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-2 ${isEven ? "lg:flex-row-reverse lg:space-x-reverse" : ""}`, children: [
                            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-[#f1592a] rounded-full" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: deliverable })
                          ] }, i)) })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: `${isEven ? "lg:col-start-2" : "lg:col-start-1"}`, children: /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.9, x: isEven ? 20 : -20 },
                        whileInView: { opacity: 1, scale: 1, x: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.15 + 0.3, duration: 0.6 },
                        className: "relative group",
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 shadow-2xl shadow-gray-400/50" }),
                          /* @__PURE__ */ jsx("div", { className: "relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg transition-all duration-500", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] relative", children: [
                            /* @__PURE__ */ jsx(
                              ImageWithFallback,
                              {
                                src: step.image,
                                alt: step.title,
                                className: "w-full h-full object-cover"
                              }
                            ),
                            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
                          ] }) })
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { scale: 0 },
                      whileInView: { scale: 1 },
                      viewport: { once: true },
                      transition: { delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 },
                      className: "w-6 h-6 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full border-4 border-white shadow-lg"
                    }
                  ) })
                ]
              },
              step.number
            );
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#f1592a]/10 rounded-full mb-4", children: [
                /* @__PURE__ */ jsx(Zap, { className: "text-[#f1592a]", size: 18 }),
                /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] font-semibold text-sm", children: "COMMUNICATION & DELIVERY" })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
                "Your Trusted Partner In",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Digital Transformation" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Discover the insights you need to make confident decisions. From setup to support, we've simplified the answers for you." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.1 },
                className: "flex items-start space-x-4 group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative flex-shrink-0", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm", children: /* @__PURE__ */ jsx(Rocket, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 24, strokeWidth: 1.5 }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Innovative Approach" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Cutting-edge solutions using the latest technologies and methodologies to deliver exceptional results." })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.2 },
                className: "flex items-start space-x-4 group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative flex-shrink-0", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm", children: /* @__PURE__ */ jsx(Users, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 24, strokeWidth: 1.5 }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Client-Centered Focus" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Your success is our priority. We maintain transparent communication throughout every project phase." })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.3 },
                className: "flex items-start space-x-4 group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative flex-shrink-0", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#f1592a]/30 transition-all shadow-sm", children: /* @__PURE__ */ jsx(Award, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 24, strokeWidth: 1.5 }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Experienced Team" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Industry veterans with proven track records in delivering complex enterprise solutions." })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 flex justify-center", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsx("div", { className: "relative w-64 h-80 rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx(
                  ImageWithFallback,
                  {
                    src: "https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwdGh1bWJzJTIwdXAlMjBzdWNjZXNzfGVufDF8fHx8MTc3MTkzMjkwOXww&ixlib=rb-4.1.0&q=80&w=1080",
                    alt: "Professional Success",
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.4 },
                    className: "absolute -top-4 -left-4 bg-white border border-gray-200 rounded-2xl p-3 shadow-lg",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "text-[#f1592a]", size: 20 }),
                      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Secure Platform" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-gray-900", children: "ISO Certified" })
                      ] })
                    ] })
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-4", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.2 },
                className: "bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] border-2 border-white" }),
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white" }),
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-white" })
                      ] }),
                      /* @__PURE__ */ jsx(TrendingUp, { className: "text-[#f1592a]", size: 20 })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-[#f1592a]", children: "66k+" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Happy Clients" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Across 40+ countries worldwide" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.3 },
                className: "bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx(BarChart3, { className: "text-[#f1592a]", size: 24 }),
                    /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-[#f1592a]", children: "89.89%" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Client Satisfaction" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 h-2 bg-gray-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      whileInView: { width: "89.89%" },
                      viewport: { once: true },
                      transition: { delay: 0.5, duration: 1 },
                      className: "h-full bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-full"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.4 },
                className: "bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-white",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "text-white", size: 24 }),
                    /* @__PURE__ */ jsx("span", { className: "text-5xl font-bold", children: "+75%" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-bold mb-1", children: "Increase company efficiency" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-white/80", children: "Average improvement in first 6 months" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.5 },
                className: "bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group cursor-pointer",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#f1592a]/10 transition-all", children: /* @__PURE__ */ jsx(Eye, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 20 }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-900", children: "More Review" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { x: 5 },
                      className: "text-gray-400 group-hover:text-[#f1592a] transition-colors",
                      children: "\u2192"
                    }
                  )
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-3", children: "Communication & Release Schedule" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Regular touchpoints and automated deployments for maximum transparency" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-xl font-bold mb-4 flex items-center", children: [
                    /* @__PURE__ */ jsx(MessageSquare, { className: "mr-2 text-[#f1592a]", size: 24 }),
                    "Communication Touchpoints"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Daily" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] text-sm", children: "Slack updates" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Weekly" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] text-sm", children: "Stand-up calls" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Bi-weekly" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] text-sm", children: "Sprint reports" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Monthly" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#f1592a] text-sm", children: "Executive summary" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-xl font-bold mb-4 flex items-center", children: [
                    /* @__PURE__ */ jsx(GitBranch, { className: "mr-2 text-[#f1592a]", size: 24 }),
                    "Release Pipeline"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: ["Code Commit", "Auto Tests", "Staging Deploy", "Client Review", "Production"].map((stage, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#f1592a] rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0", children: i + 1 }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold flex-1", children: stage }),
                    i < 4 && /* @__PURE__ */ jsx("div", { className: "text-gray-400", children: "\u2192" })
                  ] }, stage)) }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "text-[#f1592a]", size: 16 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Average deployment: 15 minutes" })
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Industry-Leading" }),
              " Tools"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "We use the best tools to ensure efficiency, collaboration, and quality" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: tools.map((tool, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#f1592a]/30 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#f1592a]/5 transition-all mx-auto", children: /* @__PURE__ */ jsx(tool.icon, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-gray-900", children: tool.name })
          ] })
        },
        tool.name
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-12 text-center",
          children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-white border border-gray-200 rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "Plus:" }),
              " Tailored tool stack based on your team's preferences"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "We adapt to your existing workflows and tools" })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Quality Assurance" }),
              " & Release"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Multi-layered testing approach to ensure bug-free deployments" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: qaProcess.map((qa, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full hover:border-[#f1592a]/30 hover:bg-white hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-white rounded-lg flex items-center justify-center group-hover:bg-[#f1592a]/5 transition-all border border-gray-200", children: /* @__PURE__ */ jsx(qa.icon, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 24, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: qa.step }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3 leading-relaxed text-sm", children: qa.description }),
            /* @__PURE__ */ jsx("div", { className: "pt-3 border-t border-gray-200", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-[#f1592a]", children: qa.coverage }) })
          ] })
        },
        qa.step
      )) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-3", children: "Release Pipeline" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Automated CI/CD for faster, safer deployments" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-5 gap-4", children: ["Code Commit", "Auto Tests", "Staging Deploy", "Client Review", "Production"].map((stage, i) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#f1592a] rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold", children: i + 1 }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: stage })
              ] }),
              i < 4 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-white/30 -translate-y-1/2" })
            ] }, stage)) }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20", children: [
              /* @__PURE__ */ jsx(Zap, { className: "text-[#f1592a]", size: 16 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Average deployment time: 15 minutes" })
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Post-Launch" }),
              " Support Model"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "We don't disappear after launch. We're here for the long haul." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: supportTiers.map((tier, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group",
          children: /* @__PURE__ */ jsxs("div", { className: `relative bg-white border-2 rounded-3xl p-8 h-full ${index === 0 ? "border-[#f1592a] shadow-xl shadow-[#f1592a]/10" : "border-gray-200 hover:border-gray-300"} transition-all duration-300`, children: [
            index === 0 && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white px-4 py-1 rounded-full text-sm font-semibold", children: "Most Critical" }) }),
            /* @__PURE__ */ jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mb-6`, children: /* @__PURE__ */ jsx(tier.icon, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-1", children: tier.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[#f1592a] font-semibold mb-6", children: tier.subtitle }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: tier.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(
                CheckCircle,
                {
                  className: index === 0 ? "text-[#f1592a] flex-shrink-0 mt-0.5" : "text-gray-400 flex-shrink-0 mt-0.5",
                  size: 18
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: feature })
            ] }, i)) })
          ] })
        },
        tier.title
      )) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-16 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] rounded-3xl p-8 md:p-12 text-white text-center",
          children: [
            /* @__PURE__ */ jsx(Shield, { className: "mx-auto mb-4", size: 48 }),
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-4", children: "Our Support Guarantee" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-white/90 max-w-3xl mx-auto mb-6", children: "Every project includes a 30-day critical support period with unlimited bug fixes and optimizations. We're committed to your success, not just your launch." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 text-center", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-1", children: "<2hr" }),
                /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Critical issue response" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-1", children: "99.9%" }),
                /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Uptime guarantee" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-1", children: "24/7" }),
                /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Monitoring & alerts" })
              ] })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-10 w-64 h-64 bg-[#f1592a] rounded-full blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-10 w-64 h-64 bg-[#ff7a45] rounded-full blur-3xl" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
              "Ready to Experience",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-[#f1592a]", children: "Our Process?" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto", children: "Let's discuss your project and show you exactly how we'll bring it to life" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsx("a", { href: "/contact", children: /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all",
                  children: "Start Your Project"
                }
              ) }),
              /* @__PURE__ */ jsx("a", { href: "/our-story", children: /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all",
                  children: "Learn About Us"
                }
              ) })
            ] })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  ProcessPage
};
