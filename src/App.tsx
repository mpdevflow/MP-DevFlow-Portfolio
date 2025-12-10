import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BookingModal from './components/modals/BookingModal';
import BentoGrid from './components/sections/BentoGrid';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Philosophy from './components/sections/Philosophy';
import TechStrip from './components/sections/TechStrip';
import Testimonials from './components/sections/Testimonials';
import Work from './components/sections/Work';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-blue-500/30 font-sans">
      <Helmet>
        <title>MP DevFlow - High Performance Web & AI Solutions</title>
        <meta
          name="description"
          content="We build revenue-generating digital assets. Full-stack web development, AI integration, and rapid MVP delivery."
        />
      </Helmet>
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <TechStrip />
        <BentoGrid />
        <Philosophy onOpenBooking={openBooking} />
        <Work />
        <Testimonials />

        {/* Call To Action Section - Enhanced with Hero-style visuals */}
        <CTA onOpenBooking={openBooking} />
      </main>
      <Footer onOpenBooking={openBooking} />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
