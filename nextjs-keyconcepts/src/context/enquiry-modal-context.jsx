'use client'

import { createContext, useContext, useState } from 'react'
import { EnquiryModal } from '../components/enquiry-modal'

const EnquiryModalContext = createContext(void 0)

function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialProduct, setInitialProduct] = useState('')

  const openModal = (product = '') => {
    setInitialProduct(product)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
    setInitialProduct('')
  }
  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        initialProduct,
      }}
    >
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} initialProduct={initialProduct} />
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
