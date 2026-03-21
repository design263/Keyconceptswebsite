import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Transform Your Business with Next-Gen Technology";
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    const particleCount = 80;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = i / particleCount * Math.PI * 2;
      const distance = radius + (Math.random() - 0.5) * 50;
      particlesRef.current.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const centerX2 = canvas.width / 2;
      const centerY2 = canvas.height / 2;
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        const dx = centerX2 - particle.x;
        const dy = centerY2 - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = 1e-3;
        particle.vx += dx / distance * force;
        particle.vy += dy / distance * force;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle + Math.PI / 2) * 0.01;
        particle.vy += Math.sin(angle + Math.PI / 2) * 0.01;
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        const maxDistance = radius * 1.5;
        if (distance > maxDistance) {
          const angle2 = Math.atan2(dy, dx);
          particle.x = centerX2 + Math.cos(angle2) * (radius * 0.5);
          particle.y = centerY2 + Math.sin(angle2) * (radius * 0.5);
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(241, 89, 42, 0.6)";
        ctx.fill();
        particles.forEach((other, j) => {
          if (j <= i) return;
          const dx2 = other.x - particle.x;
          const dy2 = other.y - particle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (distance2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const opacity2 = (1 - distance2 / 120) * 0.3;
            ctx.strokeStyle = `rgba(241, 89, 42, ${opacity2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          },
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
          className: "absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#f1592a]/10 to-gray-200/10 rounded-full blur-3xl"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          },
          transition: { duration: 15, repeat: Infinity, ease: "linear" },
          className: "absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-200/10 to-[#f1592a]/10 rounded-full blur-3xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y, opacity },
        className: "container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10",
        children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "text-[#f1592a]", size: 18 }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "End-to-end Product Development Company" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.3 },
                      className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight",
                      children: [
                        "Product Engineering & Digital ",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Transformation Partner" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.5 },
                      className: "h-16 flex items-center",
                      children: /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-2xl text-gray-600", children: [
                        displayedText,
                        /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "|" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.7 },
                      className: "text-lg text-gray-600 leading-relaxed",
                      children: "From MVP to enterprise-grade systems \u2014 we ship fast, keep quality high, and stay with you for long-term support."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.9 },
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          className: "group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2",
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Book a Discovery Call" }),
                            /* @__PURE__ */ jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsx(Link, { to: "/services", children: /* @__PURE__ */ jsx(
                        motion.button,
                        {
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          className: "px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg",
                          children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Explore Our Products" })
                        }
                      ) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, delay: 0.3 },
              className: "relative h-[600px] hidden lg:block",
              children: [
                /* @__PURE__ */ jsx(
                  "canvas",
                  {
                    ref: canvasRef,
                    className: "w-full h-full"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { scale: [1, 1.1, 1] },
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    className: "absolute top-10 right-10 w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 flex items-center justify-center",
                    children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { scale: [1.1, 1, 1.1] },
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    className: "absolute bottom-16 left-10 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-xl shadow-xl border border-white/60 flex items-center justify-center",
                    children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { opacity: [0.5, 1, 0.5] },
                    transition: { duration: 2, repeat: Infinity },
                    className: "absolute bottom-32 right-16 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#f1592a]/20",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#f1592a] rounded-full animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-700", children: "Global Network" })
                    ] })
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { y: [0, 10, 0] },
        transition: { duration: 1.5, repeat: Infinity },
        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
        children: /* @__PURE__ */ jsx("div", { className: "w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { y: [0, 12, 0] },
            transition: { duration: 1.5, repeat: Infinity },
            className: "w-1.5 h-1.5 bg-[#f1592a] rounded-full"
          }
        ) })
      }
    )
  ] });
}
export {
  HeroSection
};
