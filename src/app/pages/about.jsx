import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Users, Target, Award, Lightbulb, Heart, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake."
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changes and deliver solutions efficiently."
  }
];
const team = [
  {
    name: "John Anderson",
    role: "Chief Executive Officer",
    initial: "JA"
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    initial: "SM"
  },
  {
    name: "Michael Brown",
    role: "Head of Development",
    initial: "MB"
  },
  {
    name: "Emily Davis",
    role: "Head of Marketing",
    initial: "ED"
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" })
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
                children: "About Us"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: "Transforming Businesses Since 2009" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed", children: "We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative IT solutions." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Our Story" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-lg text-gray-600 leading-relaxed", children: [
              /* @__PURE__ */ jsx("p", { children: "Founded in 2009, Key Concepts emerged from a simple vision: to bridge the gap between businesses and technology. What started as a small team of developers has grown into a full-service IT solutions provider." }),
              /* @__PURE__ */ jsx("p", { children: "Over 15 years, we've helped over 500 businesses transform their operations through intelligent ERP solutions, cutting-edge web and mobile applications, and comprehensive digital marketing strategies." }),
              /* @__PURE__ */ jsx("p", { children: "As an official Odoo partner, we specialize in delivering tailored ERP solutions that drive efficiency and growth. Our commitment to innovation and excellence has made us a trusted partner for enterprises and startups alike." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "relative",
          children: /* @__PURE__ */ jsxs("div", { className: "relative h-[500px] rounded-3xl overflow-hidden shadow-2xl", children: [
            /* @__PURE__ */ jsx(
              ImageWithFallback,
              {
                src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
                alt: "Team collaboration",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#f1592a]/20 to-transparent" })
          ] })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "relative group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-lg border border-white/60 hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-4", children: "Our Mission" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape." })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "relative group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-700 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-gray-700" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-4", children: "Our Vision" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "To be the leading IT solutions provider recognized for excellence, innovation, and transformative impact on businesses worldwide." })
          ] })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Our Core Values" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "The principles that guide everything we do" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -10 },
          className: "group text-center",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(value.icon, { className: "text-gray-700", size: 28, strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: value.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: value.description })
          ] })
        },
        value.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Meet Our Leadership" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Experienced professionals dedicated to your success" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: team.map((member, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -10 },
          className: "group text-center",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform", children: member.initial }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: member.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: member.role })
          ] })
        },
        member.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Projects Delivered" },
      { value: "150+", label: "Enterprise Clients" },
      { value: "98%", label: "Client Satisfaction" }
    ].map((stat, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-5xl md:text-6xl font-bold mb-2", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-white/80", children: stat.label })
        ]
      },
      index
    )) }) }) })
  ] });
}
export {
  AboutPage
};
