import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import MarketingLayout from './components/layout/MarketingLayout';
import BentoGrid from './components/sections/BentoGrid';
import CTA from './components/sections/CTA';
import Hero from './components/sections/Hero';
import HowWeWork from './components/sections/HowWeWork';
import TechStrip from './components/sections/TechStrip';
import Testimonials from './components/sections/Testimonials';
import Work from './components/sections/Work';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import GameLobbyPHCaseStudy from './pages/GameLobbyPHCaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServicesPage from './pages/ServicesPage';
import TermsOfService from './pages/TermsOfService';

const HomePage: React.FC = () => {
  return (
    <MarketingLayout>
      {(openBooking) => (
        <>
          <Hero onOpenBooking={openBooking} />
          <TechStrip />
          <BentoGrid />
          <Work />
          <HowWeWork onOpenBooking={openBooking} />
          <Testimonials />
          <CTA onOpenBooking={openBooking} />
        </>
      )}
    </MarketingLayout>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#191813] selection:bg-[#D9481F]/20 font-sans">
      <Helmet>
        <title>MPDevFlow - Founder-Led Web & Product Development Studio</title>
        <meta
          name="description"
          content="MPDevFlow helps startups, agencies, and growing businesses build websites, MVPs, SaaS apps, dashboards, and internal tools with a trusted developer network from the Philippines."
        />
        <meta
          property="og:title"
          content="MPDevFlow - Founder-Led Web & Product Development Studio"
        />
        <meta
          property="og:description"
          content="Founder-led web and product development for websites, MVPs, dashboards, and internal tools."
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
            description: 'Founder-led web and product development studio from the Philippines',
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
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <MarketingLayout>
              {(openBooking) => <ServicesPage onOpenBooking={openBooking} />}
            </MarketingLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MarketingLayout>
              {(openBooking) => <ContactPage onOpenBooking={openBooking} />}
            </MarketingLayout>
          }
        />
        <Route path="/case-studies/gamelobbyph" element={<GameLobbyPHCaseStudy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </div>
  );
};

export default App;
