import { PROCESS_STEPS } from '@/data/studio';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HowWeWorkProps {
  onOpenBooking: () => void;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ onOpenBooking }) => {
  return (
    <section className="border-b border-[#DDDAD1] bg-[#EFEEE8] px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
              (04) How we work
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#191813] md:text-5xl">
              Clear delivery without heavy agency overhead.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#55524A]">
            Every build gets clear technical direction, practical review, and steady communication,
            with execution capacity shaped around the actual scope.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-[#D3CFC2] bg-[#F5F4F0] p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6E6B62]">
                  Step {index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191813] text-[#F5F4F0]">
                  {step.icon}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#191813]">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-[#55524A]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-full bg-[#191813] px-7 py-4 text-sm font-semibold text-[#F5F4F0] transition-colors hover:bg-[#D9481F]"
          >
            Book a Free Project Call
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
