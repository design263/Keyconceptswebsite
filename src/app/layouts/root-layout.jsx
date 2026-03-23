import { Outlet } from 'react-router'
import { MegaMenuHeader } from '../components/mega-menu-header'
import { Footer } from '../components/footer'
import { EnquiryModalProvider, useEnquiryModal } from '../context/enquiry-modal-context'
import { EnquiryModal } from '../components/enquiry-modal'
import { CareerModalProvider, useCareerModal } from '../context/career-modal-context'
import { CareerModal } from '../components/career-modal'
function RootLayout() {
  return (
    <EnquiryModalProvider>
      {' '}
      <CareerModalProvider>
        {' '}
        <div className="min-h-screen flex flex-col">
          {' '}
          <MegaMenuHeader />{' '}
          <main className="flex-1">
            {' '}
            <Outlet />
          </main>{' '}
          <Footer /> <ModalWrapper /> <CareerModalWrapper />
        </div>
      </CareerModalProvider>
    </EnquiryModalProvider>
  )
}
function ModalWrapper() {
  const { isOpen, closeModal } = useEnquiryModal()
  return <EnquiryModal isOpen={isOpen} onClose={closeModal} />
}
function CareerModalWrapper() {
  const { isOpen, closeModal } = useCareerModal()
  return <CareerModal isOpen={isOpen} onClose={closeModal} />
}
export { RootLayout }
