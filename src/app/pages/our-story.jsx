import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  Target,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Clock,
  FileCheck,
  Rocket,
  Globe,
  Lightbulb,
  HandshakeIcon,
  Building2,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ourStory from "../../assets/ourStory/Our-Story.jpg";
import team from "../../assets/ourStory/team.jpg";
const coreValues = [
  {
    icon: Target,
    title: "Delivery Discipline",
    description:
      "We ship on time, every time. Structured execution with clear milestones, strong QA, and predictable timelines ensure consistent delivery.",
    color: "from-[#f1592a] to-[#ff7a45]",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Clear communication at every stage. You know where your project stands\u2014risks, progress, and decisions are communicated openly.",
    color: "from-[#f1592a] to-[#ff7a45]",
  },
  {
    icon: Heart,
    title: "Long-Term Ownership",
    description:
      "We build systems meant to last. Maintenance, improvements, and ongoing support\u2014we stay invested in your success beyond launch.",
    color: "from-[#f1592a] to-[#ff7a45]",
  },
];
const whatWeCombine = [
  {
    icon: CheckCircle,
    title: "Structured Execution",
    description: "Process + Planning",
    details:
      "Agile sprints, detailed roadmaps, and milestone-based delivery ensure predictability.",
  },
  {
    icon: Users,
    title: "Senior Oversight",
    description: "Architecture + Risk Control",
    details:
      "Experienced architects review every decision to ensure scalability and maintainability.",
  },
  {
    icon: FileCheck,
    title: "Strong QA Discipline",
    description: "Quality First",
    details:
      "Comprehensive testing protocols, automated QA, and manual verification before every release.",
  },
  {
    icon: Globe,
    title: "Enterprise Communication",
    description: "Documentation + Clarity",
    details:
      "Clear documentation, stakeholder updates, and enterprise-friendly reporting at every stage.",
  },
];
const hybridApproach = [
  {
    title: "Modern Stack",
    description: "Latest technologies with proven stability",
    icon: Zap,
    benefit: "Speed without compromise",
  },
  {
    title: "Strong Fundamentals",
    description: "Engineering discipline built over years",
    icon: Building2,
    benefit: "Reliability you can trust",
  },
  {
    title: "Rapid Iterations",
    description: "Fast feedback cycles + continuous delivery",
    icon: TrendingUp,
    benefit: "Quick market response",
  },
  {
    title: "Stability Focus",
    description: "Never sacrifice system integrity for speed",
    icon: Shield,
    benefit: "Production-grade quality",
  },
  {
    title: "Clear Communication",
    description: "Stakeholder-friendly updates and timelines",
    icon: Globe,
    benefit: "Predictable outcomes",
  },
  {
    title: "Long-Term Support",
    description: "Maintenance + continuous improvements",
    icon: Heart,
    benefit: "Lasting partnerships",
  },
];
const teamStats = [
  {
    value: "50+",
    label: "Engineering Professionals",
    icon: Users,
  },
  {
    value: "100+",
    label: "Projects Delivered",
    icon: Rocket,
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    icon: Star,
  },
  {
    value: "10+",
    label: "Years Combined Experience",
    icon: Award,
  },
];
const whyClientsStay = [
  {
    icon: Target,
    title: "Predictable Delivery",
    description:
      "We commit to timelines and hit them. Clients know they can count on us for consistent, reliable delivery\u2014sprint after sprint.",
  },
  {
    icon: Shield,
    title: "Proactive Risk Management",
    description:
      "We identify issues before they become problems. Senior oversight and strong architecture reviews prevent costly surprises.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We're not just vendors\u2014we're invested in your success. Long-term relationships built on trust, transparency, and shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Guidance",
    description:
      "Beyond code, we provide strategic advice on technology decisions, roadmap planning, and business-aligned solutions.",
  },
  {
    icon: Clock,
    title: "Responsive Support",
    description:
      "Post-launch support that's actually responsive. Bug fixes, improvements, and feature updates handled with the same discipline.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We don't just maintain\u2014we continuously optimize. Performance improvements, refactoring, and tech debt management included.",
  },
];
function OurStoryPage() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      /* @__PURE__ */ jsxs("section", {
        className:
          "relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl",
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl",
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: /* @__PURE__ */ jsxs("div", {
              className: "mx-auto text-center",
              children: [
                /* @__PURE__ */ jsxs(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6",
                  children: [
                    /* @__PURE__ */ jsx(Building2, {
                      className: "text-[#f1592a]",
                      size: 18,
                    }),
                    /* @__PURE__ */ jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: "Our Story",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(motion.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "text-4xl md:text-6xl font-bold mb-6",
                  children: [
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "New Generation Company",
                    }),
                    /* @__PURE__ */ jsx("br", {}),
                    "with Legacy",
                  ],
                }),
                /* @__PURE__ */ jsx(motion.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className:
                    "text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto",
                  children:
                    "We bring the speed and agility of a modern engineering organization, with the reliability and discipline built over years of real-world delivery.",
                }),
                /* @__PURE__ */ jsxs(motion.div, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className:
                    "relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200",
                  children: [
                    /* @__PURE__ */ jsx(ImageWithFallback, {
                      src: ourStory,
                      alt: "Key Concepts Office",
                      className: "w-full h-auto",
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-white",
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsxs(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-5xl mx-auto",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsxs("h2", {
                    className: "text-3xl md:text-5xl font-bold mb-6",
                    children: [
                      "About",
                      " ",
                      /* @__PURE__ */ jsx("span", {
                        className:
                          "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                        children: "Key Concepts",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("p", {
                    className: "text-xl text-gray-600 leading-relaxed",
                    children: [
                      /* @__PURE__ */ jsx("strong", {
                        children: "Key Concepts Innovations Pvt. Ltd.",
                      }),
                      " is a global technology partner focused on",
                      /* @__PURE__ */ jsx("span", {
                        className: "text-[#f1592a] font-semibold",
                        children: " product-grade software engineering",
                      }),
                      ". We build systems that run day-to-day operations\u2014where uptime, clarity, and accountability matter.",
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: whatWeCombine.map((item, index) =>
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                      className:
                        "group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-xl flex items-center justify-center border border-[#f1592a]/20",
                            children: /* @__PURE__ */ jsx(item.icon, {
                              className: "text-[#f1592a]",
                              size: 24,
                              strokeWidth: 2,
                            }),
                          }),
                          /* @__PURE__ */ jsxs("div", {
                            className: "flex-1",
                            children: [
                              /* @__PURE__ */ jsx("h3", {
                                className:
                                  "text-xl font-bold text-gray-900 mb-2",
                                children: item.title,
                              }),
                              /* @__PURE__ */ jsx("p", {
                                className:
                                  "text-sm text-[#f1592a] font-semibold mb-2",
                                children: item.description,
                              }),
                              /* @__PURE__ */ jsx("p", {
                                className: "text-gray-600 leading-relaxed",
                                children: item.details,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    item.title,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("h2", {
                  className: "text-3xl md:text-5xl font-bold mb-6",
                  children: [
                    "The",
                    " ",
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "Hybrid Approach",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className:
                    "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed",
                  children:
                    "Modern stack + strong engineering fundamentals. Rapid iterations without compromising stability. Clear stakeholder communication and predictable timelines.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
              children: hybridApproach.map((item, index) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    className:
                      "group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "relative w-12 h-12 mb-4",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm",
                            children: /* @__PURE__ */ jsx(item.icon, {
                              className:
                                "text-gray-700 group-hover:text-[#f1592a] transition-colors",
                              size: 24,
                              strokeWidth: 1.5,
                            }),
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "absolute -bottom-1 -right-1 w-3 h-3 bg-[#f1592a] rounded-full border-2 border-white",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-lg font-bold text-gray-900 mb-2",
                        children: item.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-sm text-gray-600 mb-3",
                        children: item.description,
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className:
                          "inline-flex items-center space-x-2 px-3 py-1.5 bg-[#f1592a]/5 rounded-full border border-[#f1592a]/20",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            className: "text-[#f1592a]",
                            size: 14,
                            strokeWidth: 2,
                          }),
                          /* @__PURE__ */ jsx("span", {
                            className: "text-xs text-[#f1592a] font-semibold",
                            children: item.benefit,
                          }),
                        ],
                      }),
                    ],
                  },
                  item.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("h2", {
                  className: "text-3xl md:text-5xl font-bold mb-6",
                  children: [
                    "Our",
                    " ",
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "Core Values",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "The principles that guide every project, every decision, and every line of code we write.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
              children: coreValues.map((value, index) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    className: "relative group",
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-[#f1592a]/5 to-[#ff7a45]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all",
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className:
                          "relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-[#f1592a]/30 shadow-lg hover:shadow-2xl transition-all h-full",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className: `w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`,
                            children: /* @__PURE__ */ jsx(value.icon, {
                              className: "text-white",
                              size: 32,
                              strokeWidth: 2,
                            }),
                          }),
                          /* @__PURE__ */ jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: value.title,
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: value.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  value.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs("section", {
        className:
          "py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl",
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            className:
              "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [
              /* @__PURE__ */ jsxs(motion.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsxs("h2", {
                    className: "text-3xl md:text-5xl font-bold text-white mb-6",
                    children: [
                      "Team",
                      " ",
                      /* @__PURE__ */ jsx("span", {
                        className:
                          "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                        children: "Snapshot",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "text-lg text-gray-300 max-w-3xl mx-auto",
                    children:
                      "A talented team of engineers, designers, and product specialists committed to delivering excellence.",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto",
                children: teamStats.map((stat, index) =>
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                      className: "relative group",
                      children: /* @__PURE__ */ jsxs("div", {
                        className:
                          "p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#f1592a]/30 hover:bg-white/10 transition-all text-center",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl mb-4 shadow-lg",
                            children: /* @__PURE__ */ jsx(stat.icon, {
                              className: "text-white",
                              size: 28,
                              strokeWidth: 2,
                            }),
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "text-4xl md:text-5xl font-bold text-white mb-2",
                            children: stat.value,
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className: "text-gray-300 font-medium",
                            children: stat.label,
                          }),
                        ],
                      }),
                    },
                    stat.label,
                  ),
                ),
              }),
              /* @__PURE__ */ jsx(motion.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "mt-16 max-w-5xl mx-auto",
                children: /* @__PURE__ */ jsx("div", {
                  className: "flex items-center justify-center",
                  children: /* @__PURE__ */ jsxs("div", {
                    className:
                      "relative overflow-hidden shadow-2xl border border-white/10",
                    style: {
                      width: "60%",
                      margin: "0 auto",
                      borderRadius: "20px",
                    },
                    children: [
                      /* @__PURE__ */ jsx(ImageWithFallback, {
                        src: team,
                        alt: "Key Concepts Team",
                        className: "block h-auto w-full",
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className:
                          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("h2", {
                  className: "text-3xl md:text-5xl font-bold mb-6",
                  children: [
                    "Why Clients",
                    " ",
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "Stay With Us",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Our 98% client retention rate isn't accidental\u2014it's the result of consistent delivery, transparent communication, and genuine partnership.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
              children: whyClientsStay.map((reason, index) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    className:
                      "group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "relative w-12 h-12 mb-6",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm",
                            children: /* @__PURE__ */ jsx(reason.icon, {
                              className:
                                "text-gray-700 group-hover:text-[#f1592a] transition-colors",
                              size: 24,
                              strokeWidth: 1.5,
                            }),
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3",
                        children: reason.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: reason.description,
                      }),
                    ],
                  },
                  reason.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsxs(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className:
              "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className:
                  "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "absolute top-0 right-0 w-64 h-64 bg-[#f1592a]/10 rounded-full blur-3xl",
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "absolute bottom-0 left-0 w-64 h-64 bg-[#f1592a]/10 rounded-full blur-3xl",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "relative z-10",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className:
                      "inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8",
                    children: [
                      /* @__PURE__ */ jsx(HandshakeIcon, {
                        className: "text-[#f1592a]",
                        size: 18,
                      }),
                      /* @__PURE__ */ jsx("span", {
                        className: "text-sm font-medium text-white",
                        children: "Let's Build Together",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("h2", {
                    className: "text-3xl md:text-5xl font-bold text-white mb-6",
                    children: [
                      "Ready to Start Your",
                      " ",
                      /* @__PURE__ */ jsx("span", {
                        className:
                          "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                        children: "Next Project?",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className:
                      "text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed",
                    children:
                      "Partner with a team that brings both modern agility and legacy reliability. Let's build something that lasts.",
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row items-center justify-center gap-4",
                    children: [
                      /* @__PURE__ */ jsx(motion.a, {
                        href: "/contact",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className:
                          "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold",
                        children: "Get In Touch",
                      }),
                      /* @__PURE__ */ jsx(motion.a, {
                        href: "/services",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className:
                          "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all font-semibold",
                        children: "Explore Services",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { OurStoryPage };
