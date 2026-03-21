import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  Search,
  Target,
  Palette,
  Code,
  Rocket,
  Settings
} from "lucide-react";
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your business goals, target audience, and challenges to understand your unique needs.",
    icon: Search,
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    number: "02",
    title: "Define",
    description: "Clear objectives and requirements are established, creating a roadmap for your project success.",
    icon: Target,
    color: "from-gray-600 to-gray-800"
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers craft intuitive, beautiful interfaces that align with your brand and user expectations.",
    icon: Palette,
    color: "from-gray-700 to-gray-900"
  },
  {
    number: "04",
    title: "Develop",
    description: "Expert developers bring designs to life with clean, scalable code and cutting-edge technologies.",
    icon: Code,
    color: "from-gray-600 to-gray-800"
  },
  {
    number: "05",
    title: "Deploy",
    description: "We launch your solution with rigorous testing, ensuring a smooth and successful go-live experience.",
    icon: Rocket,
    color: "from-[#f1592a] to-[#d94d24]"
  },
  {
    number: "06",
    title: "Maintain",
    description: "Continuous support and optimization keep your solution running at peak performance.",
    icon: Settings,
    color: "from-gray-700 to-gray-900"
  }
];
function ProcessSection() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-0 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                children: "Our Process"
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "How We Work" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "A proven methodology that transforms your vision into reality through six strategic phases" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[100px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-24", children: processSteps.map((step, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "group relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300", children: [
                /* @__PURE__ */ jsx("div", { className: "hidden lg:flex absolute -top-[38px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-100 items-center justify-center z-10 group-hover:border-[#f1592a]/20 transition-colors", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold", children: step.number }) }) }),
                /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white text-xs font-bold rounded-full", children: step.number }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all", children: /* @__PURE__ */ jsx(step.icon, { className: "text-gray-700", size: 28, strokeWidth: 1.5 }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 group-hover:text-[#f1592a] transition-colors", children: step.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: step.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none` }),
                index % 3 !== 2 && index < processSteps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[100px] -right-4 w-8 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] z-0", children: /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-[#f1592a] rotate-45 -mr-1" }) })
              ] }),
              index < processSteps.length - 1 && /* @__PURE__ */ jsx("div", { className: "lg:hidden flex justify-center my-8", children: /* @__PURE__ */ jsx("div", { className: "w-1 h-16 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] relative", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border-l-2 border-b-2 border-[#f1592a] rotate-45 -mb-1" }) }) })
            ]
          },
          step.number
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.6 },
          className: "text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Ready to start your project journey?" }),
            /* @__PURE__ */ jsx(
              motion.a,
              {
                href: "/contact",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "inline-block px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold",
                children: "Book a Discovery Call"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  ProcessSection
};
