import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  ArrowRight,
  Heart,
  Users,
  Rocket,
  Award,
  Coffee,
  Zap,
  Target,
  TrendingUp,
  Code,
  Palette,
  Database,
  Smartphone,
  Settings,
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  DollarSign,
  Home,
  Eye,
  X,
  FileText,
  Upload
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const whyWorkHere = [
  {
    icon: Rocket,
    title: "Impactful Work",
    description: "Build products that transform businesses and communities. Your code, your designs, your ideas\u2014they all make a real difference."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear paths for advancement. We invest in your professional development."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented, passionate people who value teamwork, open communication, and mutual respect. No egos, just great collaboration."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Experiment with cutting-edge technologies, contribute to open-source, and bring bold ideas to life. We encourage innovation at every level."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and a culture that values your well-being. We believe great work happens when you're energized."
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description: "Competitive salary, health insurance, performance bonuses, and team outings. We take care of our people."
  }
];
const cultureValues = [];
const openRoles = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Code,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "Build scalable web applications and APIs for our enterprise clients and specialized platforms."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Surat, India / Remote",
    type: "Full-Time",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    description: "Craft beautiful, intuitive interfaces that delight users and drive engagement across our product portfolio."
  },
  {
    id: 3,
    title: "Odoo ERP Consultant",
    department: "ERP Services",
    location: "Surat, India",
    type: "Full-Time",
    icon: Settings,
    skills: ["Odoo", "Python", "Business Process", "Implementation", "Training"],
    description: "Lead Odoo ERP implementations, customizations, and provide strategic consulting to enterprise clients."
  },
  {
    id: 4,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android", "Firebase", "REST APIs"],
    description: "Develop high-performance mobile applications for iOS and Android using React Native and native technologies."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Database,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Build and maintain cloud infrastructure, automate deployments, and ensure system reliability and scalability."
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "Surat, India",
    type: "Full-Time",
    icon: Target,
    skills: ["Product Strategy", "Roadmapping", "User Research", "Analytics", "Stakeholder Management"],
    description: "Define product vision, prioritize features, and work cross-functionally to deliver exceptional product experiences."
  }
];
const perksAndBenefits = [
  { icon: DollarSign, text: "Competitive salary & performance bonuses" },
  { icon: Heart, text: "Health & wellness insurance" },
  { icon: Home, text: "Remote work & flexible hours" },
  { icon: GraduationCap, text: "Learning & development budget" },
  { icon: Coffee, text: "Free snacks & beverages" },
  { icon: Users, text: "Team outings & events" },
  { icon: Briefcase, text: "Modern work equipment" },
  { icon: Award, text: "Recognition & rewards program" }
];
const cultureImages = [
  {
    url: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Team Collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Creative Brainstorming"
  },
  {
    url: "https://images.unsplash.com/photo-1693386556810-43d9451bdda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Diverse Team"
  },
  {
    url: "https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Modern Workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Team Celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Coding Together"
  }
];
function NextArrow(props) {
  const { onClick } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all",
      children: /* @__PURE__ */ jsx(ArrowRight, { size: 24, strokeWidth: 2 })
    }
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all",
      children: /* @__PURE__ */ jsx(ArrowRight, { size: 24, strokeWidth: 2 })
    }
  );
}
function CultureImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4e3,
    pauseOnHover: true,
    nextArrow: /* @__PURE__ */ jsx(NextArrow, {}),
    prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
    appendDots: (dots) => /* @__PURE__ */ jsx("div", { style: { bottom: "-45px" }, children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-center gap-2", children: [
      " ",
      dots,
      " "
    ] }) }),
    customPaging: () => /* @__PURE__ */ jsx("button", { className: "w-2 h-2 rounded-full bg-gray-300 hover:bg-[#f1592a] transition-all" })
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "relative px-8",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200", children: /* @__PURE__ */ jsx(Slider, { ...settings, children: cultureImages.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            ImageWithFallback,
            {
              src: image.url,
              alt: image.alt,
              className: "w-full h-auto"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
        ] }, index)) }) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.3 },
            className: "absolute -bottom-6 -left-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "text-white", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: "50+" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Team Members" })
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
            transition: { delay: 0.4 },
            className: "absolute -top-6 -right-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Award, { className: "text-white", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: "4.8/5" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Employee Rating" })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const openModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedRole(null);
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxs(
                motion.span,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6",
                  children: [
                    /* @__PURE__ */ jsx(Briefcase, { className: "text-[#f1592a]", size: 18 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "We're Hiring!" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "text-4xl md:text-6xl font-bold mb-6",
                  children: [
                    "Build Your Career with",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Key Concepts" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "text-lg text-gray-600 mb-8 leading-relaxed",
                  children: "Join a team of passionate builders, designers, and problem-solvers who are architecting the digital future. We're on a mission to transform businesses through innovative technology\u2014and we want you to be part of it."
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    /* @__PURE__ */ jsxs(
                      motion.a,
                      {
                        href: "#open-roles",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "View Open Roles" }),
                          /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.a,
                      {
                        href: "#why-work-here",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg",
                        children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Learn More" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(CultureImageSlider, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "why-work-here", className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Why Work at",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Key Concepts" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "We're building more than products\u2014we're building careers, relationships, and a culture that celebrates growth, innovation, and collaboration." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: whyWorkHere.map((benefit, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm", children: /* @__PURE__ */ jsx(benefit.icon, { className: "text-gray-700 group-hover:text-[#f1592a] transition-colors", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: benefit.description })
          ]
        },
        benefit.title
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
              "Our",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Culture & Values" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "These aren't just words on a wall\u2014they're the principles that guide how we work, collaborate, and deliver value every single day." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-12 mb-16", children: cultureValues.map((value, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "flex items-start space-x-6",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-2xl flex items-center justify-center border border-[#f1592a]/20", children: /* @__PURE__ */ jsx(value.icon, { className: "text-[#f1592a]", size: 28, strokeWidth: 2 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: value.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: value.description })
            ] })
          ]
        },
        value.title
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12",
          children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-6", children: "How We Work" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0 mt-1", size: 20, strokeWidth: 2 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Agile Sprints" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Two-week development cycles with daily standups and continuous delivery." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0 mt-1", size: 20, strokeWidth: 2 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Code Reviews" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Peer reviews for quality, knowledge sharing, and continuous improvement." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0 mt-1", size: 20, strokeWidth: 2 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Design Thinking" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "User-centered approach with prototyping, testing, and iterative refinement." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "text-[#f1592a] flex-shrink-0 mt-1", size: 20, strokeWidth: 2 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1", children: "Knowledge Sharing" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Weekly tech talks, documentation culture, and cross-functional learning sessions." })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-xl border border-gray-200", children: [
              /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: "https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                  alt: "Team Collaboration",
                  className: "w-full h-auto"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Perks &",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Benefits" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "We take care of our team so they can focus on doing their best work." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: perksAndBenefits.map((perk, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#f1592a]/30 transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200", children: /* @__PURE__ */ jsx(perk.icon, { className: "text-[#f1592a]", size: 20, strokeWidth: 2 }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-medium", children: perk.text })
          ]
        },
        perk.text
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "open-roles", className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
              "Open",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Positions" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Join our team and help us build the future of digital transformation." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-6xl mx-auto", children: openRoles.map((role, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "group bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all overflow-hidden",
          children: /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-start space-x-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-gray-900 mb-2", children: role.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 text-sm text-gray-600 mb-3", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx(Briefcase, { size: 14, strokeWidth: 2 }),
                  /* @__PURE__ */ jsx("span", { children: role.department })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, strokeWidth: 2 }),
                  /* @__PURE__ */ jsx("span", { children: role.location })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx(Clock, { size: 14, strokeWidth: 2 }),
                  /* @__PURE__ */ jsx("span", { children: role.type })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: role.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                role.skills.slice(0, 4).map((skill) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200",
                    children: skill
                  },
                  skill
                )),
                role.skills.length > 4 && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 text-gray-500 text-xs font-medium", children: [
                  "+",
                  role.skills.length - 4,
                  " more"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[140px]", children: [
              /* @__PURE__ */ jsx(Link, { to: `/careers/${role.id}`, children: /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  className: "w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:border-[#f1592a] hover:text-[#f1592a] transition-all font-semibold shadow-sm hover:shadow-md",
                  children: [
                    /* @__PURE__ */ jsx(Eye, { size: 18, strokeWidth: 2 }),
                    /* @__PURE__ */ jsx("span", { children: "View" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  onClick: () => openModal(role),
                  className: "w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold",
                  children: [
                    /* @__PURE__ */ jsx(FileText, { size: 18, strokeWidth: 2 }),
                    /* @__PURE__ */ jsx("span", { children: "Apply" })
                  ]
                }
              )
            ] })
          ] })
        },
        role.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "apply", className: "py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden", children: [
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
              /* @__PURE__ */ jsx(Rocket, { className: "text-[#f1592a]", size: 18 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: "Ready to Join Us?" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6", children: [
              "Let's Build Something",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Amazing Together" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 mb-10 leading-relaxed", children: "Don't see a role that fits? Send us your resume anyway! We're always looking for talented people to join our growing team." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "mailto:careers@keyconcepts.co.in?subject=Job Application",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Send Your Resume" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "mailto:careers@keyconcepts.co.in?subject=Question About Careers",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all",
                  children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Have Questions?" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.3 },
                className: "mt-12 pt-12 border-t border-white/10",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Or reach out to us directly:" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6 text-white", children: [
                    /* @__PURE__ */ jsxs("a", { href: "mailto:careers@keyconcepts.co.in", className: "flex items-center space-x-2 hover:text-[#f1592a] transition-colors", children: [
                      /* @__PURE__ */ jsx(MapPin, { size: 18 }),
                      /* @__PURE__ */ jsx("span", { children: "careers@keyconcepts.co.in" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "hidden sm:block text-gray-600", children: "|" }),
                    /* @__PURE__ */ jsxs("a", { href: "tel:+919374356357", className: "flex items-center space-x-2 hover:text-[#f1592a] transition-colors", children: [
                      /* @__PURE__ */ jsx(MapPin, { size: 18 }),
                      /* @__PURE__ */ jsx("span", { children: "+91 9374 356 357" })
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-gray-900", children: [
          "Apply for ",
          selectedRole?.title
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-gray-500 hover:text-gray-700",
            onClick: closeModal,
            children: /* @__PURE__ */ jsx(X, { size: 24 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email Address" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Phone Number" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "LinkedIn Profile" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "url",
                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Cover Letter" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm",
                rows: 4
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Resume" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  className: "sr-only",
                  id: "resume"
                }
              ),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "resume",
                  className: "inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a]",
                  children: [
                    /* @__PURE__ */ jsx(Upload, { size: 16, className: "mr-2" }),
                    "Upload Resume"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "w-full px-4 py-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold",
            children: "Submit Application"
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  CareersPage
};
