'use client'

import { EnquiryModalProvider } from '@/context/enquiry-modal-context'
import { CareerModalProvider } from '@/context/career-modal-context'

export function Providers({ children }) {
  return (
    <EnquiryModalProvider>
      <CareerModalProvider>
        {children}
      </CareerModalProvider>
    </EnquiryModalProvider>
  )
}
