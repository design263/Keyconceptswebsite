import { jsx, jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router";
import { MegaMenuHeader } from "../components/mega-menu-header";
import { Footer } from "../components/footer";
import { EnquiryModalProvider, useEnquiryModal } from "../context/enquiry-modal-context";
import { EnquiryModal } from "../components/enquiry-modal";
import { CareerModalProvider, useCareerModal } from "../context/career-modal-context";
import { CareerModal } from "../components/career-modal";
function RootLayout() {
  return /* @__PURE__ */ jsx(EnquiryModalProvider, { children: /* @__PURE__ */ jsx(CareerModalProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(MegaMenuHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ModalWrapper, {}),
    /* @__PURE__ */ jsx(CareerModalWrapper, {})
  ] }) }) });
}
function ModalWrapper() {
  const { isOpen, closeModal } = useEnquiryModal();
  return /* @__PURE__ */ jsx(EnquiryModal, { isOpen, onClose: closeModal });
}
function CareerModalWrapper() {
  const { isOpen, closeModal } = useCareerModal();
  return /* @__PURE__ */ jsx(CareerModal, { isOpen, onClose: closeModal });
}
export {
  RootLayout
};
