"use client";

import { MegaMenuHeader } from "@/app/components/mega-menu-header";
import { Footer } from "@/app/components/footer";
import { EnquiryModalProvider, useEnquiryModal } from "@/app/context/enquiry-modal-context";
import { EnquiryModal } from "@/app/components/enquiry-modal";
import { CareerModalProvider, useCareerModal } from "@/app/context/career-modal-context";
import { CareerModal } from "@/app/components/career-modal";

function ModalWrapper() {
  const { isOpen, closeModal } = useEnquiryModal();
  return <EnquiryModal isOpen={isOpen} onClose={closeModal} />;
}

function CareerModalWrapper() {
  const { isOpen, closeModal } = useCareerModal();
  return <CareerModal isOpen={isOpen} onClose={closeModal} />;
}

export default function PublicLayout({ children }) {
  return (
    <EnquiryModalProvider>
      <CareerModalProvider>
        <div className="min-h-screen flex flex-col">
          <MegaMenuHeader />
          <main className="flex-1">{children}</main>
          <Footer />
          <ModalWrapper />
          <CareerModalWrapper />
        </div>
      </CareerModalProvider>
    </EnquiryModalProvider>
  );
}
