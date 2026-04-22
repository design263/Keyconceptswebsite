'use client'

import { createContext, useContext, useState } from 'react'
const EnquiryModalContext = createContext(void 0)
function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  )
}
function useEnquiryModal() {
  const context = useContext(EnquiryModalContext)
  if (context === void 0) {
    throw new Error('useEnquiryModal must be used within an EnquiryModalProvider')
  }
  return context
}
export { EnquiryModalProvider, useEnquiryModal }
