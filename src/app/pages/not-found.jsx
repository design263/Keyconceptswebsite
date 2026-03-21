import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router";
function NotFoundPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-[#f1592a] hover:underline", children: "Return Home" })
  ] }) });
}
export {
  NotFoundPage
};
