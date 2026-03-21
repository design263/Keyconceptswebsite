import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "../../assets/0de5f27413ecaab432b5807952fee0d690b04505.png";
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center space-x-2 group", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: "Key Concepts",
            className: "h-10 w-auto transition-transform group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "Key Concepts Innovations Pvt. Ltd. is a global technology partner focused on product-grade software engineering. We build systems that run day-to-day operations\u2014where uptime, clarity, and accountability matter." }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: /* @__PURE__ */ jsx(Twitter, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: /* @__PURE__ */ jsx(Facebook, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 20 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Products" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/our-story", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/insights/trends", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Industry Trends" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/careers", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Careers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/insights/case-studies", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Case Studies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Services & Products" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/visitor-management", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Visitor Management System" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/younited-communities", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Younited Communities" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/election-mobilization", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Election Mobilization" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/product-development", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Product Development" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/mvp-studio", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "MVP Development" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/odoo-erp", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Odoo Development" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/support-maintenance", className: "text-gray-400 hover:text-[#f1592a] transition-colors text-sm", children: "Support & Maintenance" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-[#f1592a] mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-400 text-sm", children: [
              "301, Highfield Ascot, Opp. Palm Avenue,",
              /* @__PURE__ */ jsx("br", {}),
              "VIP Road, Vesu, Surat - 395007.",
              /* @__PURE__ */ jsx("br", {}),
              "Gujarat, India."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-[#f1592a] mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 text-sm hover:text-[#f1592a] transition-colors", children: "+91 9374 356 357" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-[#f1592a] mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@keyconcepts.co.in", className: "text-gray-400 text-sm hover:text-[#f1592a] transition-colors", children: "info@keyconcepts.co.in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-gray-700", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2 text-gray-300", children: "Our Branches" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "London | New York" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm", children: [
        "\xA9 ",
        currentYear,
        " Key Concepts. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 text-sm", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: "Terms of Service" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-400 hover:text-[#f1592a] transition-colors", children: "Cookie Policy" })
      ] })
    ] })
  ] }) });
}
export {
  Footer
};
