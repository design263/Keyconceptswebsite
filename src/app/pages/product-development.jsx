import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  Code,
  Smartphone,
  Server,
  Brain,
  Users,
  Building2,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  GitBranch,
  Layers,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import aiIntegration from "../../assets/productDev/AIIntrigation.jpg";
import backendSystems from "../../assets/productDev/BAckent_system.jpg";
import mobileApps from "../../assets/productDev/App_Development.png";
const buildCategories = [
  {
    id: "web",
    icon: Code,
    title: "Web Applications",
    description: "Modern, scalable web apps built with cutting-edge frameworks",
    longDescription:
      "We craft responsive, high-performance web applications using the latest technologies. From progressive web apps to complex enterprise platforms, our solutions are built to scale with your business needs.",
    features: [
      "Progressive Web Apps (PWA)",
      "SaaS platforms & dashboards",
      "Enterprise portals",
      "E-commerce solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRldmVsb3BtZW50JTIwbW9kZXJufGVufDF8fHx8MTc3MTg0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native & cross-platform mobile experiences",
    longDescription:
      "Build stunning mobile applications that users love. Whether you need native iOS/Android apps or cross-platform solutions, we deliver performant, user-friendly mobile experiences.",
    features: [
      "iOS & Android native apps",
      "React Native & Flutter",
      "Hybrid mobile solutions",
      "Mobile-first design",
    ],
    image: mobileApps,
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Systems",
    description: "Robust, secure, and scalable backend infrastructure",
    longDescription:
      "Power your applications with enterprise-grade backend systems. We design and build secure, scalable APIs and microservices that handle millions of requests while maintaining peak performance.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Cloud-native applications",
      "Database design & optimization",
    ],
    image: backendSystems,
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integrations",
    description: "Intelligent features powered by modern AI/ML",
    longDescription:
      "Integrate cutting-edge AI capabilities into your products. From ChatGPT integrations to custom machine learning models, we help you leverage AI to create smarter, more powerful applications.",
    features: [
      "OpenAI & LLM integrations",
      "Natural language processing",
      "Predictive analytics",
      "Automation & chatbots",
    ],
    image: aiIntegration,
  },
];
const targetAudience = [
  {
    icon: Rocket,
    title: "Startups & Founders",
    description:
      "Launch your MVP quickly and iterate based on real user feedback",
  },
  {
    icon: Building2,
    title: "Enterprises",
    description:
      "Scale operations with custom software tailored to your unique processes",
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    description: "Modernize legacy systems and build new revenue streams",
  },
  {
    icon: Users,
    title: "Product Teams",
    description: "Extend your dev capacity with experienced product engineers",
  },
];
const deliverySteps = [
  {
    number: "01",
    title: "Sprint Planning",
    description:
      "2-week sprints with clear goals, user stories, and acceptance criteria",
  },
  {
    number: "02",
    title: "Development & QA",
    description: "Continuous integration, automated testing, and code reviews",
  },
  {
    number: "03",
    title: "Staging & Review",
    description: "Deploy to staging environment for client review and feedback",
  },
  {
    number: "04",
    title: "Production Deploy",
    description:
      "Seamless deployment with monitoring, rollback capability, and support",
  },
];
const engagementModels = [
  {
    icon: Target,
    title: "Fixed Scope Projects",
    description: "Well-defined projects with clear deliverables and timeline",
    features: [
      "Detailed project scope & requirements",
      "Fixed budget & timeline",
      "Milestone-based payments",
      "Ideal for MVPs & defined products",
    ],
    highlight: "Best for MVPs",
  },
  {
    icon: Calendar,
    title: "Monthly Retainers",
    description: "Ongoing development partnership for continuous improvement",
    features: [
      "Dedicated team allocation",
      "Flexible sprint planning",
      "Priority support & maintenance",
      "Ideal for evolving products",
    ],
    highlight: "Best for Scale-ups",
  },
];
const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Azure", "Vercel", "Docker"],
  ai: ["OpenAI", "LangChain", "TensorFlow", "Hugging Face"],
};
function ProductDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("web");
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      /* @__PURE__ */ jsxs("section", {
        className:
          "relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "absolute inset-0 opacity-30",
            children: [
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute top-20 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl",
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute bottom-10 right-10 w-[500px] h-[500px] bg-gray-300/20 rounded-full blur-3xl",
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              className: "max-w-4xl mx-auto text-center",
              children: [
                /* @__PURE__ */ jsxs(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Sparkles, {
                      className: "text-[#f1592a]",
                      size: 18,
                    }),
                    /* @__PURE__ */ jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: "Custom Product Development",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs(motion.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "text-4xl md:text-6xl font-bold mb-6",
                  children: [
                    "Build Products That",
                    " ",
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "Users Love",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx(motion.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className:
                    "text-lg md:text-xl text-gray-600 mb-10 leading-relaxed",
                  children:
                    "From concept to launch, we craft scalable web & mobile applications with modern tech stacks, agile methodology, and a relentless focus on user experience.",
                }),
                /* @__PURE__ */ jsxs(motion.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className:
                    "flex flex-col sm:flex-row items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxs(motion.a, {
                      href: "/contact",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className: "font-semibold",
                          children: "Talk to Product Team",
                        }),
                        /* @__PURE__ */ jsx(ArrowRight, {
                          className:
                            "group-hover:translate-x-1 transition-transform",
                          size: 20,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(motion.a, {
                      href: "#who-its-for",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg",
                      children: /* @__PURE__ */ jsx("span", {
                        className: "font-semibold",
                        children: "Learn More",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        id: "who-its-for",
        className: "py-24 bg-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsx(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className:
                    "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: "Who It's For",
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "Built for Ambitious Teams",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Whether you're launching a startup or scaling an enterprise, we're your technical partner",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: targetAudience.map((audience, index) =>
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    whileHover: { y: -10 },
                    className: "group",
                    children: /* @__PURE__ */ jsxs("div", {
                      className:
                        "relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full text-center",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className:
                            "relative w-14 h-14 mb-4 mx-auto group-hover:scale-110 transition-transform",
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all",
                              children: /* @__PURE__ */ jsx(audience.icon, {
                                className: "text-gray-700",
                                size: 28,
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
                          className: "text-lg font-bold mb-2",
                          children: audience.title,
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "text-gray-600 text-sm leading-relaxed",
                          children: audience.description,
                        }),
                      ],
                    }),
                  },
                  audience.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-gradient-to-b from-white to-gray-50",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsx(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className:
                    "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: "What We Build",
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "Full-Stack Product Development",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto mb-12",
                  children:
                    "From frontend to backend, mobile to AI \u2014 we build complete, production-ready products",
                }),
                /* @__PURE__ */ jsx("div", {
                  className: "flex flex-wrap items-center justify-center gap-3",
                  children: buildCategories.map((category, index) =>
                    /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.1 },
                        onClick: () => setSelectedCategory(category.id),
                        className: `px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${selectedCategory === category.id ? "bg-white border-[#f1592a] text-[#f1592a] shadow-lg" : "bg-white/60 border-gray-200 text-gray-700 hover:border-[#f1592a]/50 hover:bg-white"}`,
                        children: category.title,
                      },
                      category.id,
                    ),
                  ),
                }),
              ],
            }),
            selectedCategory &&
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "max-w-7xl mx-auto",
                  children: buildCategories
                    .filter((cat) => cat.id === selectedCategory)
                    .map((category) =>
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className:
                            "bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200",
                          children: /* @__PURE__ */ jsxs("div", {
                            className:
                              "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                            children: [
                              /* @__PURE__ */ jsxs("div", {
                                children: [
                                  /* @__PURE__ */ jsxs("div", {
                                    className: "relative w-14 h-14 mb-6",
                                    children: [
                                      /* @__PURE__ */ jsx("div", {
                                        className:
                                          "w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200",
                                        children: /* @__PURE__ */ jsx(
                                          category.icon,
                                          {
                                            className: "text-gray-700",
                                            size: 28,
                                            strokeWidth: 1.5,
                                          },
                                        ),
                                      }),
                                      /* @__PURE__ */ jsx("div", {
                                        className:
                                          "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white",
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ jsx("h3", {
                                    className:
                                      "text-3xl md:text-4xl font-bold mb-4",
                                    children: category.title,
                                  }),
                                  /* @__PURE__ */ jsx("p", {
                                    className:
                                      "text-gray-600 text-lg mb-8 leading-relaxed",
                                    children: category.longDescription,
                                  }),
                                  /* @__PURE__ */ jsx("ul", {
                                    className: "space-y-3 mb-8",
                                    children: category.features.map(
                                      (feature, idx) =>
                                        /* @__PURE__ */ jsxs(
                                          "li",
                                          {
                                            className:
                                              "flex items-start space-x-3",
                                            children: [
                                              /* @__PURE__ */ jsx(CheckCircle, {
                                                className:
                                                  "text-[#f1592a] flex-shrink-0 mt-1",
                                                size: 20,
                                                strokeWidth: 2,
                                              }),
                                              /* @__PURE__ */ jsx("span", {
                                                className: "text-gray-700",
                                                children: feature,
                                              }),
                                            ],
                                          },
                                          idx,
                                        ),
                                    ),
                                  }),
                                  /* @__PURE__ */ jsxs(motion.a, {
                                    href: "/contact",
                                    whileHover: { scale: 1.05 },
                                    whileTap: { scale: 0.95 },
                                    className:
                                      "inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold",
                                    children: [
                                      /* @__PURE__ */ jsx("span", {
                                        children: "Start Building",
                                      }),
                                      /* @__PURE__ */ jsx(ArrowRight, {
                                        size: 20,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsx("div", {
                                className: "relative",
                                children: /* @__PURE__ */ jsxs("div", {
                                  className:
                                    "relative rounded-3xl overflow-hidden shadow-2xl",
                                  children: [
                                    /* @__PURE__ */ jsx(ImageWithFallback, {
                                      src: category.image,
                                      alt: category.title,
                                      className:
                                        "w-full h-[400px] md:h-[500px] object-cover",
                                    }),
                                    /* @__PURE__ */ jsx("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        category.id,
                      ),
                    ),
                },
                selectedCategory,
              ),
            !selectedCategory &&
              /* @__PURE__ */ jsxs(motion.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                className: "text-center py-16",
                children: [
                  /* @__PURE__ */ jsx("p", {
                    className: "text-gray-500 text-lg mb-6",
                    children: "Select a category to learn more",
                  }),
                  /* @__PURE__ */ jsx(motion.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: () => setSelectedCategory("web"),
                    className:
                      "px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-xl hover:shadow-[#f1592a]/50 transition-all font-semibold",
                    children: "Explore Our Services",
                  }),
                ],
              }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs("section", {
        className: "py-24 bg-white relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "absolute inset-0 opacity-20",
            children: [
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute top-10 right-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl",
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "absolute bottom-10 left-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [
              /* @__PURE__ */ jsxs(motion.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsx(motion.span, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className:
                      "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                    children: "Delivery Approach",
                  }),
                  /* @__PURE__ */ jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4",
                    children: "Agile, Transparent, Iterative",
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                    children:
                      "Our proven delivery methodology ensures quality, speed, and continuous feedback",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: deliverySteps.map((step, index) =>
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                      className: "relative",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className:
                            "relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full",
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "text-5xl font-bold text-[#f1592a]/20 mb-4",
                              children: step.number,
                            }),
                            /* @__PURE__ */ jsx("h3", {
                              className: "text-xl font-bold mb-3",
                              children: step.title,
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className:
                                "text-gray-600 text-sm leading-relaxed",
                              children: step.description,
                            }),
                          ],
                        }),
                        index < deliverySteps.length - 1 &&
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20",
                            children: /* @__PURE__ */ jsx(ArrowRight, {
                              className: "text-[#f1592a]/30",
                              size: 24,
                            }),
                          }),
                      ],
                    },
                    step.number,
                  ),
                ),
              }),
              /* @__PURE__ */ jsx(motion.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "mt-16 max-w-5xl mx-auto",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "relative rounded-3xl overflow-hidden shadow-2xl",
                  children: [
                    /* @__PURE__ */ jsx(ImageWithFallback, {
                      src: "https://images.unsplash.com/photo-1640262014524-37583237e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNwcmludCUyMHBsYW5uaW5nJTIwbWV0aG9kb2xvZ3l8ZW58MXx8fHwxNzcxODQ3MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                      alt: "Agile Development Process",
                      className: "w-full h-[400px] object-cover",
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsx(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className:
                    "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: "Engagement Models",
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "Flexible Engagement Options",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Choose the model that fits your project stage, budget, and timeline",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto",
              children: engagementModels.map((model, index) =>
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    whileHover: { y: -10 },
                    className: "group",
                    children: /* @__PURE__ */ jsxs("div", {
                      className:
                        "relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: "absolute top-6 right-6",
                          children: /* @__PURE__ */ jsx("span", {
                            className:
                              "px-3 py-1 bg-[#f1592a]/10 text-[#f1592a] text-xs font-semibold rounded-full",
                            children: model.highlight,
                          }),
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className:
                            "relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform",
                          children: [
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all",
                              children: /* @__PURE__ */ jsx(model.icon, {
                                className: "text-gray-700",
                                size: 32,
                                strokeWidth: 1.5,
                              }),
                            }),
                            /* @__PURE__ */ jsx("div", {
                              className:
                                "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-2xl font-bold mb-4",
                          children: model.title,
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "text-gray-600 mb-6 leading-relaxed",
                          children: model.description,
                        }),
                        /* @__PURE__ */ jsx("ul", {
                          className: "space-y-3",
                          children: model.features.map((feature, idx) =>
                            /* @__PURE__ */ jsxs(
                              "li",
                              {
                                className: "flex items-start space-x-3",
                                children: [
                                  /* @__PURE__ */ jsx(CheckCircle, {
                                    className:
                                      "text-[#f1592a] flex-shrink-0 mt-0.5",
                                    size: 18,
                                    strokeWidth: 2,
                                  }),
                                  /* @__PURE__ */ jsx("span", {
                                    className: "text-gray-700 text-sm",
                                    children: feature,
                                  }),
                                ],
                              },
                              idx,
                            ),
                          ),
                        }),
                      ],
                    }),
                  },
                  model.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs("section", {
        className: "py-24 bg-white relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: /* @__PURE__ */ jsx("div", {
              className:
                "absolute top-10 left-10 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl",
            }),
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [
              /* @__PURE__ */ jsxs(motion.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "text-center mb-16",
                children: [
                  /* @__PURE__ */ jsx(motion.span, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className:
                      "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                    children: "Tech Stack",
                  }),
                  /* @__PURE__ */ jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4",
                    children: "Modern, Battle-Tested Technologies",
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                    children:
                      "We use proven frameworks and tools that scale with your business",
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto",
                children: Object.entries(techStack).map(
                  ([category, technologies], index) =>
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.1 },
                        className: "group",
                        children: /* @__PURE__ */ jsxs("div", {
                          className:
                            "relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300 h-full",
                          children: [
                            /* @__PURE__ */ jsx("h3", {
                              className:
                                "text-lg font-bold mb-4 capitalize text-center",
                              children: category,
                            }),
                            /* @__PURE__ */ jsx("ul", {
                              className: "space-y-2",
                              children: technologies.map((tech) =>
                                /* @__PURE__ */ jsx(
                                  "li",
                                  {
                                    className: "text-center",
                                    children: /* @__PURE__ */ jsx("span", {
                                      className:
                                        "inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg group-hover:bg-[#f1592a]/10 group-hover:text-[#f1592a] transition-all",
                                      children: tech,
                                    }),
                                  },
                                  tech,
                                ),
                              ),
                            }),
                          ],
                        }),
                      },
                      category,
                    ),
                ),
              }),
              /* @__PURE__ */ jsx(motion.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "mt-16 max-w-5xl mx-auto",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "relative rounded-3xl overflow-hidden shadow-2xl",
                  children: [
                    /* @__PURE__ */ jsx(ImageWithFallback, {
                      src: "https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhY2slMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzE4NDcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                      alt: "Modern Tech Stack",
                      className: "w-full h-[300px] object-cover",
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx("section", {
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "max-w-4xl mx-auto text-center mb-16",
              children: [
                /* @__PURE__ */ jsxs("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-6",
                  children: [
                    "Why Choose",
                    " ",
                    /* @__PURE__ */ jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent",
                      children: "Key Concepts?",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 leading-relaxed",
                  children:
                    "16+ years of experience building products that scale, backed by a team that cares",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                {
                  icon: Zap,
                  title: "Fast Time-to-Market",
                  description:
                    "Launch MVPs in weeks, not months, with our proven process",
                },
                {
                  icon: Shield,
                  title: "Enterprise-Grade Quality",
                  description:
                    "Code reviews, testing, and security baked into every sprint",
                },
                {
                  icon: Users,
                  title: "Dedicated Team",
                  description:
                    "Work with the same engineers throughout your project",
                },
                {
                  icon: Target,
                  title: "Product-First Mindset",
                  description:
                    "We think beyond code \u2014 UX, scalability, and business goals",
                },
                {
                  icon: GitBranch,
                  title: "Full Transparency",
                  description:
                    "Daily standups, sprint reviews, and direct Slack access",
                },
                {
                  icon: Layers,
                  title: "Scalable Architecture",
                  description:
                    "Build once, scale forever with cloud-native design",
                },
              ].map((item, index) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    className: "text-center",
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className: "relative w-12 h-12 mx-auto mb-4",
                        children: /* @__PURE__ */ jsx("div", {
                          className:
                            "w-full h-full bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center",
                          children: /* @__PURE__ */ jsx(item.icon, {
                            className: "text-white",
                            size: 24,
                            strokeWidth: 2,
                          }),
                        }),
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-xl font-bold mb-3",
                        children: item.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: item.description,
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
      /* @__PURE__ */ jsxs("section", {
        className:
          "py-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: "absolute inset-0 opacity-10",
            children: /* @__PURE__ */ jsx("div", {
              className:
                "absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]",
            }),
          }),
          /* @__PURE__ */ jsx("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: /* @__PURE__ */ jsxs(motion.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "max-w-4xl mx-auto text-center",
              children: [
                /* @__PURE__ */ jsxs(motion.span, {
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  className:
                    "inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Sparkles, {
                      className: "text-white",
                      size: 20,
                    }),
                    /* @__PURE__ */ jsx("span", {
                      className: "text-white font-medium",
                      children: "Ready to Build?",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-6",
                  children: "Let's Turn Your Idea into Reality",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-xl text-white/90 mb-10 leading-relaxed",
                  children:
                    "Schedule a free consultation with our product team. We'll discuss your vision, tech requirements, timeline, and provide a custom proposal.",
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxs(motion.a, {
                      href: "/contact",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          children: "Talk to Product Team",
                        }),
                        /* @__PURE__ */ jsx(ArrowRight, {
                          className:
                            "group-hover:translate-x-1 transition-transform",
                          size: 20,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(motion.a, {
                      href: "tel:+1234567890",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/40 hover:bg-white/20 transition-all shadow-lg font-semibold",
                      children: "Call: +123 456 7890",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { ProductDevelopmentPage };
