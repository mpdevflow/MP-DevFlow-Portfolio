import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToSection = useSmoothScroll();

  return (
    <section className="relative overflow-hidden border-b border-[#DDDAD1] px-4 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(80%_90%_at_50%_110%,rgba(217,72,31,0.22),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10">
        <div className="inline-flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#6E6B62]">
          <span className="h-2 w-2 rounded-full bg-[#D9481F]" />
          Founder-led studio from the Philippines
        </div>

        <div className="max-w-6xl">
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-[#191813] md:text-7xl lg:text-8xl">
            Founder-led web and product development for teams that need to ship.
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-[#55524A] md:text-xl">
            MP DevFlow helps startups, agencies, and growing businesses build landing pages, MVPs,
            SaaS apps, dashboards, and internal tools with a trusted developer network led by MP.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#191813] px-7 py-4 text-sm font-semibold text-[#F5F4F0] transition-colors hover:bg-[#D9481F]"
            >
              Start a Project
              <ArrowRight size={17} />
            </button>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="inline-flex items-center justify-center rounded-full border border-[#CFCBC0] px-7 py-4 text-sm font-semibold text-[#191813] transition-colors hover:border-[#191813]"
            >
              View Work
            </a>
          </div>
        </div>

        <p className="max-w-2xl font-mono text-sm leading-7 text-[#6E6B62]">
          From a single launch page to a complex product build, we plug in where your team needs
          momentum.
        </p>
      </div>
    </section>
  );
};

export default Hero;
