import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Target,
  Package,
  Vote,
  Sparkles,
  Building2,
  Layers,
  Rocket,
  Settings,
  Shield,
  Heart,
  Briefcase,
  Lightbulb,
  FolderOpen
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/86d73f4575e82c2f8cca971638d48b77628092fb.png";
import { useEnquiryModal } from "../context/enquiry-modal-context";
import { useCareerModal } from "../context/career-modal-context";
const products = [
  {
    name: "Visitorz Management System",
    description: "Visitors & gate management system",
    icon: Users,
    link: "/visitor-management"
  },
  {
    name: "Younited Communities",
    description: "Community & association management",
    icon: Building2,
    link: "/younited-communities"
  },
  {
    name: "Election Mobilization APP",
    description: "Digital campaign + voter outreach platform",
    icon: Vote,
    link: "/election-mobilization"
  }
];
const services = [
  {
    name: "Product Development",
    description: "Crafting Scalable Product Experiences",
    icon: Layers,
    link: "/product-development"
  },
  {
    name: "MVP Development",
    description: "Build, Test, Launch, Scale.",
    icon: Rocket,
    link: "/mvp-studio"
  },
  {
    name: "Odoo Development",
    description: "Implement, customize, integrate, support",
    icon: Settings,
    link: "/odoo-erp"
  },
  {
    name: "Support Maintenance",
    description: "Performance Optimized, Always Secure",
    icon: Shield,
    link: "/support-maintenance"
  }
];
const company = [
  {
    name: "Our Story",
    description: "Learn about our journey",
    icon: Heart,
    link: "/our-story"
  },
  {
    name: "Process",
    description: "How we deliver exceptional results",
    icon: Target,
    link: "/process"
  },
  {
    name: "Team",
    description: "Meet the people behind us",
    icon: Users,
    link: "/about#team"
  },
  {
    name: "Careers",
    description: "Join our growing team",
    icon: Briefcase,
    link: "/careers"
  }
];
const insights = [
  {
    name: "Industry Trends",
    description: "Stay ahead with the latest industry insights",
    icon: Lightbulb,
    link: "/insights/trends"
  },
  {
    name: "Case Studies",
    description: "Explore our success stories",
    icon: FolderOpen,
    link: "/insights/case-studies"
  }
];
function MegaMenuHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const menuTimeoutRef = useRef(null);
  const { openModal } = useEnquiryModal();
  const { openModal: openCareerModal } = useCareerModal();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = (menuType) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMegaMenu(menuType);
    setActiveDropdown(null);
  };
  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 100);
  };
  const handleDropdownEnter = (dropdown) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
    setActiveMegaMenu(null);
  };
  const handleDropdownLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-white border-b border-gray-100"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo,
              alt: "Key Concepts",
              className: "h-12 w-auto transition-transform group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/",
                className: "group relative px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium",
                children: [
                  "Home",
                  /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => handleMouseEnter("services"),
                onMouseLeave: handleMouseLeave,
                children: [
                  /* @__PURE__ */ jsxs("button", { className: "group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium", children: [
                    /* @__PURE__ */ jsx("span", { children: "Services" }),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 16,
                        className: `transition-transform duration-200 ${activeMegaMenu === "services" ? "rotate-180" : ""}`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" })
                  ] }),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: activeMegaMenu === "services" && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                      },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.95, y: -10 },
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      },
                      className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-6", children: services.map((service, index) => /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: index * 0.05 },
                            className: "group/item",
                            children: /* @__PURE__ */ jsxs(
                              Link,
                              {
                                to: service.link || "/services",
                                className: "block p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all",
                                children: [
                                  /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 mb-4", children: [
                                    /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all", children: /* @__PURE__ */ jsx(
                                      service.icon,
                                      {
                                        className: "text-gray-700",
                                        size: 24,
                                        strokeWidth: 1.5
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" })
                                  ] }),
                                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors", children: service.name }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: service.description })
                                ]
                              }
                            )
                          },
                          service.name
                        )) }),
                        /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.2 },
                            className: "mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(
                                  Sparkles,
                                  {
                                    className: "text-[#f1592a]",
                                    size: 20
                                  }
                                ) }),
                                /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-semibold", children: "Need a custom solution? Talk to our experts." })
                              ] }),
                              /* @__PURE__ */ jsx(
                                "button",
                                {
                                  onClick: openModal,
                                  className: "px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors",
                                  children: "Get Started"
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => handleMouseEnter("products"),
                onMouseLeave: handleMouseLeave,
                children: [
                  /* @__PURE__ */ jsxs("button", { className: "group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium", children: [
                    /* @__PURE__ */ jsx("span", { children: "Our Platforms" }),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 16,
                        className: `transition-transform duration-200 ${activeMegaMenu === "products" ? "rotate-180" : ""}`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" })
                  ] }),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: activeMegaMenu === "products" && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                      },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.95, y: -10 },
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      },
                      className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxs("h3", { className: "font-bold text-gray-900 text-lg flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-1 h-6 bg-gradient-to-b from-[#f1592a] to-[#ff7a45] rounded-full" }),
                          /* @__PURE__ */ jsx("span", { children: "Specialized Platforms" })
                        ] }) }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6", children: products.map((product, index) => /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: index * 0.05 },
                            className: "group/item",
                            children: /* @__PURE__ */ jsxs(
                              Link,
                              {
                                to: product.link || "/services",
                                className: "block p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all",
                                children: [
                                  /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 mb-4", children: [
                                    /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all", children: /* @__PURE__ */ jsx(
                                      product.icon,
                                      {
                                        className: "text-gray-700",
                                        size: 24,
                                        strokeWidth: 1.5
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" })
                                  ] }),
                                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors", children: product.name }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: product.description })
                                ]
                              }
                            )
                          },
                          product.name
                        )) }),
                        /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.2 },
                            className: "mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(
                                  Package,
                                  {
                                    className: "text-[#f1592a]",
                                    size: 20
                                  }
                                ) }),
                                /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-semibold", children: "Looking for a custom platform? Let's build it together." })
                              ] }),
                              /* @__PURE__ */ jsx(
                                "button",
                                {
                                  onClick: openModal,
                                  className: "px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors",
                                  children: "Get Started"
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => handleMouseEnter("company"),
                onMouseLeave: handleMouseLeave,
                children: [
                  /* @__PURE__ */ jsxs("button", { className: "group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium", children: [
                    /* @__PURE__ */ jsx("span", { children: "Company" }),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 16,
                        className: `transition-transform duration-200 ${activeMegaMenu === "company" ? "rotate-180" : ""}`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" })
                  ] }),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: activeMegaMenu === "company" && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                      },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.95, y: -10 },
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      },
                      className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-6", children: company.map((item, index) => /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: index * 0.05 },
                            className: "group/item",
                            children: /* @__PURE__ */ jsxs(
                              Link,
                              {
                                to: item.link,
                                className: "block p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all",
                                children: [
                                  /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 mb-4", children: [
                                    /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all", children: /* @__PURE__ */ jsx(
                                      item.icon,
                                      {
                                        className: "text-gray-700",
                                        size: 24,
                                        strokeWidth: 1.5
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" })
                                  ] }),
                                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors", children: item.name }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: item.description })
                                ]
                              }
                            )
                          },
                          item.name
                        )) }),
                        /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.2 },
                            className: "mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#f1592a]/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(
                                  Sparkles,
                                  {
                                    className: "text-[#f1592a]",
                                    size: 20
                                  }
                                ) }),
                                /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-semibold", children: "Want to build your career with Key Concepts?" })
                              ] }),
                              /* @__PURE__ */ jsx(
                                "button",
                                {
                                  onClick: openCareerModal,
                                  className: "px-6 py-2 bg-[#f1592a] text-white rounded-full font-semibold hover:bg-[#d94d24] transition-colors",
                                  children: "Join Our Team"
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => handleMouseEnter("insights"),
                onMouseLeave: handleMouseLeave,
                children: [
                  /* @__PURE__ */ jsxs("button", { className: "group flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-[#f1592a] transition-colors font-medium", children: [
                    /* @__PURE__ */ jsx("span", { children: "Insights" }),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 16,
                        className: `transition-transform duration-200 ${activeMegaMenu === "insights" ? "rotate-180" : ""}`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] group-hover:w-full transition-all duration-300 ease-out" })
                  ] }),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: activeMegaMenu === "insights" && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                      },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.95, y: -10 },
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      },
                      className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden",
                      children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: insights.map((item, index) => /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: index * 0.05 },
                          className: "group/item",
                          children: /* @__PURE__ */ jsxs(
                            Link,
                            {
                              to: item.link,
                              className: "block p-5 rounded-xl border border-gray-100 hover:border-[#f1592a]/20 hover:bg-gray-50 transition-all",
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 mb-4", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-white transition-all", children: /* @__PURE__ */ jsx(
                                    item.icon,
                                    {
                                      className: "text-gray-700",
                                      size: 24,
                                      strokeWidth: 1.5
                                    }
                                  ) }),
                                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" })
                                ] }),
                                /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2 group-hover/item:text-[#f1592a] transition-colors", children: item.name }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: item.description })
                              ]
                            }
                          )
                        },
                        item.name
                      )) }) })
                    }
                  ) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "px-7 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f1592a]/30 transition-all font-semibold",
              children: "Contact Us"
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "lg:hidden p-2 text-gray-700 hover:text-[#f1592a] transition-colors",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200",
            children: /* @__PURE__ */ jsxs("nav", { className: "container mx-auto px-4 py-6 flex flex-col space-y-2", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium",
                  children: "Home"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/services",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium",
                  children: "Services"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/services",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium",
                  children: "Our Platforms"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/about",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium",
                  children: "Company"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/insights/trends",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#f1592a]/5 hover:to-[#ff7a45]/5 hover:text-[#f1592a] transition-all font-medium",
                  children: "Insights"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setIsMobileMenuOpen(false),
                  children: /* @__PURE__ */ jsx("button", { className: "w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg font-semibold", children: "Contact Us" })
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
export {
  MegaMenuHeader
};
