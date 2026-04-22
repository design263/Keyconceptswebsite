'use client'

import { MegaMenuHeader } from './mega-menu-header-final'
import { Footer } from './footer'
import { EnquiryModalProvider, useEnquiryModal } from '../context/enquiry-modal-context'
import { EnquiryModal } from './enquiry-modal'
import { CareerModalProvider, useCareerModal } from '../context/career-modal-context'
import { CareerModal } from './career-modal'

function LayoutWrapper({ children }) {
  return (
    <EnquiryModalProvider>
      <CareerModalProvider>
        <div className="min-h-screen flex flex-col">
          <MegaMenuHeader />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </CareerModalProvider>
    </EnquiryModalProvider>
  )
}

export default LayoutWrapper
