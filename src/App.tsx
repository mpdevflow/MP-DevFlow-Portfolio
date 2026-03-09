import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BookingModal from './components/modals/BookingModal';
import About from './components/sections/About';
import BentoGrid from './components/sections/BentoGrid';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Philosophy from './components/sections/Philosophy';
import StatsBar from './components/sections/StatsBar';
import TechStrip from './components/sections/TechStrip';
import Testimonials from './components/sections/Testimonials';
import Work from './components/sections/Work';

import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import GameLobbyPHCaseStudy from './pages/GameLobbyPHCaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const MainLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openBooking = () => setIsModalOpen(true);

  return (
    <>
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <StatsBar />
        <TechStrip />
        <BentoGrid />
        <Philosophy onOpenBooking={openBooking} />
        <About />
        <Work />
        <Testimonials />
        <CTA onOpenBooking={openBooking} />
      </main>
      <Footer onOpenBooking={openBooking} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white selection:bg-blue-500/30 font-sans">
      <Helmet>
        <title>MP DevFlow — Boutique Dev Studio from the Philippines</title>
        <meta
          name="description"
          content="A boutique product development studio from the Philippines. We build full-stack web apps, SaaS products, and MVPs with senior-level execution and AI-augmented speed."
        />
        <meta property="og:title" content="MP DevFlow — We Build Products, Not Just Code" />
        <meta
          property="og:description"
          content="Boutique dev studio from the Philippines. Fast execution, honest direction, AI-augmented workflows."
        />
        <meta property="og:url" content="https://mpdevflow.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mpdevflow.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'MP DevFlow',
            description: 'Boutique product development studio from the Philippines',
            url: 'https://mpdevflow.com',
            email: 'hello@mpdevflow.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Quezon City',
              addressCountry: 'PH',
            },
            serviceType: 'Web Development',
            areaServed: 'Worldwide',
          })}
        </script>
      </Helmet>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/case-studies/gamelobbyph" element={<GameLobbyPHCaseStudy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </div>
  );
};

export default App;
