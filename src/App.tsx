import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MarketingLayout from './components/layout/MarketingLayout';
import SEO from './components/SEO';
import BentoGrid from './components/sections/BentoGrid';
import CTA from './components/sections/CTA';
import Hero from './components/sections/Hero';
import HowWeWork from './components/sections/HowWeWork';
import Studio from './components/sections/Studio';
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
            title="MPDevFlow — Senior-led Web & Product Studio"
            description="MPDevFlow helps startups, agencies, and growing businesses build landing pages, MVPs, SaaS apps, dashboards, and internal tools with senior-led delivery from the Philippines."
            path="/"
          />
          <Hero onOpenBooking={openBooking} />
          <Work />
          <BentoGrid />
          <HowWeWork onOpenBooking={openBooking} />
          <Testimonials />
          <Studio />
          <CTA onOpenBooking={openBooking} />
        </>
      )}
    </MarketingLayout>
  );
};

const App: React.FC = () => {
  return (
    <div className="app-root">
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'MPDevFlow',
          description:
            'Web and product development studio for landing pages, MVPs, SaaS apps, dashboards, and internal tools.',
          url: 'https://mpdevflow.com',
          email: 'hello@mpdevflow.com',
          image: 'https://mpdevflow.com/assets/seo_og_share.png',
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
        <Route path="/case-studies/dinkos" element={<ProjectCaseStudyPage title="DinkOS" />} />
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
