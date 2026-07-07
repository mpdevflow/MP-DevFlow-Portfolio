import SEO from '@/components/SEO';
import BentoGrid from '@/components/sections/BentoGrid';
import CTA from '@/components/sections/CTA';
import HowWeWork from '@/components/sections/HowWeWork';
import TechStrip from '@/components/sections/TechStrip';
import React from 'react';

interface ServicesPageProps {
  onOpenBooking: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SEO
        title="Services - MPDevFlow"
        description="Explore MPDevFlow services for landing pages, MVPs, SaaS apps, dashboards, internal tools, and flexible build support for growing teams."
        path="/services"
      />
      <section className="border-b border-[#DDDAD1] px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
            Services
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-none tracking-tight text-[#191813] md:text-7xl">
            Websites, MVPs, dashboards, and dev support for teams that need momentum.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#55524A]">
            Choose a focused build, ongoing support, or a flexible execution team around a product
            problem that needs momentum.
          </p>
        </div>
      </section>
      <TechStrip />
      <BentoGrid />
      <HowWeWork onOpenBooking={onOpenBooking} />
      <CTA onOpenBooking={onOpenBooking} />
    </>
  );
};

export default ServicesPage;
