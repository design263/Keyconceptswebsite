import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { Award, Users, Clock, Globe } from "lucide-react";
const stats = [
  {
    icon: Award,
    value: 16,
    suffix: "+",
    label: "Years in Software Delivery",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Users,
    value: 25,
    suffix: "+",
    label: "Experienced Team Members",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Clock,
    value: 1,
    suffix: "Mn+",
    label: "Hours of Development Experience",
    color: "from-[#f1592a] to-[#ff7a45]"
  },
  {
    icon: Globe,
    value: 400,
    suffix: "+",
    label: "Clients Worldwide",
    color: "from-[#f1592a] to-[#ff7a45]"
  }
];
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-baseline", children: [
    /* @__PURE__ */ jsx("span", { ref, className: "tabular-nums", children: "0" }),
    /* @__PURE__ */ jsx("span", { className: "ml-1", children: suffix })
  ] });
}
function StatsSection() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-72 h-72 bg-[#f1592a]/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
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
                children: "Our Impact"
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Delivering Excellence Globally" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Trusted by enterprises and startups worldwide for innovative software solutions" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          whileHover: { y: -10 },
          className: "group relative",
          children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform", children: [
                /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center group-hover:[#ffffff] transition-all", children: /* @__PURE__ */ jsx(stat.icon, { className: "text-gray-700", size: 28, strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: stat.value, suffix: stat.suffix }) }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 font-medium leading-relaxed", children: stat.label })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none` })
          ] })
        },
        stat.label
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.4 },
          className: "text-center mt-12",
          children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-lg", children: [
            "Ready to transform your business with proven expertise?",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact",
                className: "text-[#f1592a] font-semibold hover:underline",
                children: "Let's talk"
              }
            )
          ] })
        }
      )
    ] })
  ] });
}
export {
  StatsSection
};
