import { createContext, useContext, useState, ReactNode } from "react";

interface CareerModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CareerModalContext = createContext<CareerModalContextType | undefined>(
  undefined
);

export function CareerModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CareerModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </CareerModalContext.Provider>
  );
}

export function useCareerModal() {
  const context = useContext(CareerModalContext);
  if (context === undefined) {
    throw new Error("useCareerModal must be used within a CareerModalProvider");
  }
  return context;
}