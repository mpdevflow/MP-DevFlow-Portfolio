import BookingModal from '@/components/modals/BookingModal';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/sections/Navbar';
import React, { useState } from 'react';

interface MarketingLayoutProps {
  children: (openBooking: () => void) => React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openBooking = () => setIsModalOpen(true);

  return (
    <>
      <Navbar onOpenBooking={openBooking} />
      <main>{children(openBooking)}</main>
      <Footer onOpenBooking={openBooking} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MarketingLayout;
