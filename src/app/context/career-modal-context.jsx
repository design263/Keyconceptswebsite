import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const CareerModalContext = createContext(
  void 0
);
function CareerModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return /* @__PURE__ */ jsx(CareerModalContext.Provider, { value: { isOpen, openModal, closeModal }, children });
}
function useCareerModal() {
  const context = useContext(CareerModalContext);
  if (context === void 0) {
    throw new Error("useCareerModal must be used within a CareerModalProvider");
  }
  return context;
}
export {
  CareerModalProvider,
  useCareerModal
};
