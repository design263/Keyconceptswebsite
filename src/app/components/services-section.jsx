import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Database, Layers, Rocket, Settings, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import productDevelopmentImage from "../../assets/support/product_development.jpg";
import specializedPlatformsImage from "../../assets/support/specialized_developmeny.jpg";
import odooDevelopmentImage from "../../assets/support/odoo_development.jpg";
import supportMaintenanceImage from "../../assets/support/support.jpg";
import mvpDevelopmentImage from "../../assets/support/MVP.png";
const services = [
  {
    icon: Layers,
    title: "Product Development",
    description:
      "End-to-end product development from ideation to launch, building scalable and innovative solutions.",
    image: productDevelopmentImage,
    color: "from-gray-600 to-gray-800",
    span: "row-span-2",
  },
  {
    icon: Rocket,
    title: "Specialized Platforms",
    description:
      "Custom-built platforms including Visitorz, Younited Communities, and Election Mobilization solutions.",
    image: specializedPlatformsImage,
    color: "from-[#f1592a] to-[#ff7a45]",
    span: "col-span-2",
  },
  {
    icon: Database,
    title: "Odoo Development",
    description:
      "Expert Odoo ERP implementation, customization, and integration tailored to your business needs.",
    image: odooDevelopmentImage,
    color: "from-gray-700 to-gray-900",
    span: "col-span-2",
  },
  {
    icon: Settings,
    title: "MVP Development",
    description:
      "Rapidly build and validate your minimum viable product with our agile development approach.",
    image: mvpDevelopmentImage,
    color: "from-gray-600 to-gray-800",
    span: "col-span-2",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description:
      "24/7 technical support and ongoing maintenance to keep your systems running smoothly.",
    image: supportMaintenanceImage,
    color: "from-[#f1592a] to-[#ff7a45]",
  },
];
const trendingServices = [
  {
    icon: Layers,
    title: "Product Development",
    description:
      "Transform your ideas into scalable, market-ready products with our end-to-end development expertise.",
    gradient: "from-[#f1592a] to-[#d94d24]",
  },
  {
    icon: Rocket,
    title: "MVP Studio",
    description:
      "Rapidly build, test, and launch your minimum viable product to validate your business concept.",
    gradient: "from-[#f1592a] to-[#d94d24]",
  },
  {
    icon: Database,
    title: "Odoo Development",
    description:
      "Streamline your business operations with our expert Odoo development and customization services.",
    gradient: "from-[#f1592a] to-[#d94d24]",
  },
];
function ServicesSection() {
  return /* @__PURE__ */ jsx("section", {
    className: "py-24 bg-gradient-to-b from-white to-gray-50",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        /* @__PURE__ */ jsxs(motion.div, {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-20",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsx(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className:
                    "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-gray-200/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: "What we do",
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "Core Capabilities",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-2xl mx-auto",
                  children:
                    "Empowering businesses with innovative solutions across product development, rapid MVP creation, and enterprise ERP systems",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: trendingServices.map((service, index) =>
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    whileHover: { y: -10 },
                    className: "group relative overflow-visible",
                    children: /* @__PURE__ */ jsxs("div", {
                      className:
                        "relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/60 hover:bg-white hover:border-[#f1592a] hover:shadow-2xl transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "flex items-start gap-6",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className:
                                "relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform",
                              children: [
                                /* @__PURE__ */ jsx("div", {
                                  className:
                                    "w-full h-full bg-gray-100 rounded-xl flex items-center justify-center",
                                  children: /* @__PURE__ */ jsx(service.icon, {
                                    className: "text-gray-700",
                                    size: 28,
                                    strokeWidth: 1.5,
                                  }),
                                }),
                                /* @__PURE__ */ jsx("div", {
                                  className:
                                    "absolute -bottom-1 -right-1 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                /* @__PURE__ */ jsx("h3", {
                                  className: "text-xl font-bold mb-2",
                                  children: service.title,
                                }),
                                /* @__PURE__ */ jsx("p", {
                                  className: "text-gray-600 leading-relaxed",
                                  children: service.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsx("div", {
                          className: `absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl shadow-lg`,
                        }),
                      ],
                    }),
                  },
                  service.title,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs(motion.div, {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsx(motion.span, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className:
                    "inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-cyan-500/10 rounded-full text-sm font-semibold text-[#f1592a] mb-4",
                  children: "Our Services",
                }),
                /* @__PURE__ */ jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "Comprehensive IT Solutions",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-gray-600 max-w-2xl mx-auto",
                  children:
                    "From strategy to execution, we deliver excellence in every aspect of digital transformation",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]",
              children: services.map((service, index) =>
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 },
                    whileHover: { y: -10, scale: 1.02 },
                    className: `group relative overflow-hidden rounded-3xl ${service.span}`,
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "absolute inset-0",
                        children: [
                          /* @__PURE__ */ jsx(ImageWithFallback, {
                            src: service.image,
                            alt: service.title,
                            className: "w-full h-full object-cover",
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity`,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className:
                          "relative h-full p-8 flex flex-col justify-end text-white",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "mb-4 transform group-hover:scale-110 transition-transform origin-left",
                            children: /* @__PURE__ */ jsx("div", {
                              className:
                                "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center",
                              children: /* @__PURE__ */ jsx(service.icon, {
                                size: 24,
                              }),
                            }),
                          }),
                          /* @__PURE__ */ jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: service.title,
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className: "text-white/90 text-sm leading-relaxed",
                            children: service.description,
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                            children: /* @__PURE__ */ jsx("div", {
                              className: `absolute inset-0 ${service.color} blur-xl`,
                              style: { transform: "translateY(50%)" },
                            }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className:
                          "absolute inset-0 bg-[#f1592a]/10 opacity-0 group-hover:opacity-100 transition-opacity",
                      }),
                    ],
                  },
                  service.title,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
export { ServicesSection };
