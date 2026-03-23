import { createContext, useContext, useState } from 'react'
const CareerModalContext = createContext(void 0)
function CareerModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <CareerModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CareerModalContext.Provider>
  )
}
function useCareerModal() {
  const context = useContext(CareerModalContext)
  if (context === void 0) {
    throw new Error('useCareerModal must be used within a CareerModalProvider')
  }
  return context
}
export { CareerModalProvider, useCareerModal }
