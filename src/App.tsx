import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import MarketingLayout from './components/layout/MarketingLayout';
import SEO from './components/SEO';
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
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage';
import ServicesPage from './pages/ServicesPage';
import TermsOfService from './pages/TermsOfService';

const HomePage: React.FC = () => {
  return (
    <MarketingLayout>
      {(openBooking) => (
        <>
          <SEO
            title="MPDevFlow - Web & Product Development Studio"
            description="MPDevFlow helps startups, agencies, and growing businesses build landing pages, MVPs, SaaS apps, dashboards, and internal tools with a trusted developer network from the Philippines."
            path="/"
          />
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
    <div className="min-h-screen overflow-x-clip bg-[#F5F4F0] text-[#191813] selection:bg-[#D9481F]/20 font-sans">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'MPDevFlow',
            description:
              'Web and product development studio for landing pages, MVPs, SaaS apps, dashboards, and internal tools.',
            url: 'https://mpdevflow.com',
            email: 'hello@mpdevflow.com',
            image: 'https://mpdevflow.com/images/mpdevflow-hero-bg-desktop.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Quezon City',
              addressCountry: 'PH',
            },
            serviceType: [
              'Landing Page Development',
              'MVP Development',
              'SaaS App Development',
              'Dashboard Development',
              'Internal Tool Development',
            ],
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
        <Route
          path="/case-studies/serbisyo-barangay"
          element={<ProjectCaseStudyPage title="Serbisyo Barangay" />}
        />
        <Route
          path="/case-studies/supra-data"
          element={<ProjectCaseStudyPage title="Supra Data" />}
        />
        <Route
          path="/case-studies/diwata-ai"
          element={<ProjectCaseStudyPage title="Diwata AI" />}
        />
        <Route
          path="/privacy"
          element={<MarketingLayout>{() => <PrivacyPolicy />}</MarketingLayout>}
        />
        <Route
          path="/terms"
          element={<MarketingLayout>{() => <TermsOfService />}</MarketingLayout>}
        />
      </Routes>
    </div>
  );
};

export default App;
