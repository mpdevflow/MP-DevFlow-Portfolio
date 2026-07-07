import { ArrowRight } from 'lucide-react';
import React from 'react';

interface CTAProps {
  onOpenBooking: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#14130F] px-4 py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_115%,rgba(232,98,47,0.85)_0%,rgba(217,72,31,0.42)_36%,transparent_72%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[#E6A58E]">
          Free project call
        </p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-none tracking-tight text-[#F5F4F0] md:text-7xl">
          Talk through the build before you commit.
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D6D4CC]">
          Bring the rough idea, messy notes, or half-formed scope. We can help clarify the next
          practical step in a free project call, like a quick virtual coffee before any commitment.
        </p>
        <button
          onClick={onOpenBooking}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#F5F4F0] py-3 pl-3 pr-7 text-sm font-semibold text-[#191813] transition-colors hover:bg-white"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9481F] text-[#F5F4F0]">
            <ArrowRight size={18} />
          </span>
          Book a Free Project Call
        </button>
      </div>
    </section>
  );
};

export default CTA;
