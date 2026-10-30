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
    <div className="site-sheet">
      <Navbar onOpenBooking={openBooking} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">{children(openBooking)}</main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MarketingLayout;
