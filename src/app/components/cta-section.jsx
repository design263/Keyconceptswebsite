import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
function CTASection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#f1592a] via-[#ff7a45] to-[#f1592a]", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-4xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              className: "inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/40 mb-8",
              children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "text-white", size: 20 }),
                /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Ready to Transform?" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold text-white mb-6", children: "Let's Build Your Digital Future Together" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-10 leading-relaxed", children: "Join hundreds of businesses that have transformed their operations with our cutting-edge solutions. Book a discovery call today." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "group px-8 py-4 bg-white text-[#f1592a] rounded-full shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2 font-semibold",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Schedule a Consultation" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Link, { to: "/services", children: /* @__PURE__ */ jsx(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-[#f1592a] transition-all font-semibold",
                children: "View All Services"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "mt-16 flex flex-wrap justify-center gap-8 text-white/80",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Free Initial Consultation" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "24/7 Support Available" })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  CTASection
};
