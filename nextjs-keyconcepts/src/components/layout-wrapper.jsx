'use client'

import { MegaMenuHeader } from './mega-menu-header-final'
import { Footer } from './footer'
import { ScrollToTop } from './scroll-to-top'
import { NavigationLoader } from './navigation-loader'

function LayoutWrapper({ children }) {
  return (
    <>
      <NavigationLoader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <MegaMenuHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
