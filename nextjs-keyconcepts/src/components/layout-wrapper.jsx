'use client'

import { MegaMenuHeader } from './mega-menu-header-final'
import { Footer } from './footer'
import { EnquiryModalProvider } from '../context/enquiry-modal-context'
import { CareerModalProvider } from '../context/career-modal-context'
import { ScrollToTop } from './scroll-to-top'
import { NavigationLoader } from './navigation-loader'

function LayoutWrapper({ children }) {
  return (
    <EnquiryModalProvider>
      <CareerModalProvider>
        <NavigationLoader />
        <ScrollToTop />
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
