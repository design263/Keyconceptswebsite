import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-[#f7f7f7] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(
          motion.span,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "text-[#f1592a]", size: 18 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Get in Touch" })
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
              "Let's Start",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent", children: "Building Together" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            className: "text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto",
            children: "We're here to help transform your business with cutting-edge ERP solutions, custom development, and intelligent technology services."
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.3 },
          children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: "Send us a Message" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "Fill out the form below and we'll get back to you shortly." }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      required: true,
                      className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors",
                      placeholder: "John Doe"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                      required: true,
                      className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors",
                      placeholder: "john@example.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "company",
                      name: "company",
                      value: formData.company,
                      onChange: handleChange,
                      className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors",
                      placeholder: "Your Company"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone Number" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      value: formData.phone,
                      onChange: handleChange,
                      className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors",
                      placeholder: "+91 9374 356 357"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-gray-700 mb-2", children: "Service Interested In *" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "service",
                    name: "service",
                    value: formData.service,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select a service" }),
                      /* @__PURE__ */ jsx("option", { value: "odoo-erp", children: "Odoo ERP Solutions" }),
                      /* @__PURE__ */ jsx("option", { value: "custom-development", children: "Custom Product Development" }),
                      /* @__PURE__ */ jsx("option", { value: "mvp-studio", children: "MVP Studio" }),
                      /* @__PURE__ */ jsx("option", { value: "web-mobile", children: "Web & Mobile Development" }),
                      /* @__PURE__ */ jsx("option", { value: "api-integration", children: "API Integration" }),
                      /* @__PURE__ */ jsx("option", { value: "digital-marketing", children: "Digital Marketing" }),
                      /* @__PURE__ */ jsx("option", { value: "seo-smo", children: "SEO/SMO Services" }),
                      /* @__PURE__ */ jsx("option", { value: "support-maintenance", children: "Support & Maintenance" }),
                      /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    rows: 3,
                    className: "w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors resize-none",
                    placeholder: "Tell us about your project..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "submit",
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "group w-full px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Book a Descovery Call" }),
                    /* @__PURE__ */ jsx(Send, { className: "group-hover:translate-x-1 transition-transform", size: 20 })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.4 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Contact Information" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Have questions? We're here to help. Reach out to us through any of these channels." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { x: 10 },
                  className: "group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 flex-shrink-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(MapPin, { className: "text-white", size: 24, strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Head Office" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
                        "301, Highfield Ascot, Opp. Palm Avenue, VIP Road,",
                        /* @__PURE__ */ jsx("br", {}),
                        "Vesu, Surat - 395007. Gujarat, India"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { x: 10 },
                  className: "group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 flex-shrink-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Mail, { className: "text-white", size: 24, strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: "Reach Us" }),
                      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services", target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-[#f1592a] transition-colors", children: "+91 9374 356 357" }) }),
                      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@keyconcepts.co.in", className: "text-gray-600 hover:text-[#f1592a] transition-colors", children: "info@keyconcepts.co.in" }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { x: 10 },
                  className: "group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-12 flex-shrink-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Phone, { className: "text-white", size: 24, strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-700" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: "For Career Enquire" }),
                      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/919376356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20career%20opportunities", target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-[#f1592a] transition-colors", children: "+91 9376 356 357" }) }),
                      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hr@keyconcepts.co.in", className: "text-gray-600 hover:text-[#f1592a] transition-colors", children: "hr@keyconcepts.co.in" }) })
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pt-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-full", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "overflow-hidden border border-gray-200",
        children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.343275721204!2d72.77929890319963!3d21.141237449811474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c3673c602d7%3A0xcefa2d39c2268022!2sKey%20Concepts!5e0!3m2!1sen!2sin!4v1772429902290!5m2!1sen!2sin",
            width: "100%",
            height: "500",
            style: { border: 0 },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            title: "Key Concepts Office Location",
            className: "w-full"
          }
        )
      }
    ) }) })
  ] });
}
export {
  ContactPage
};
