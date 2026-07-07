import CTA from '@/components/sections/CTA';
import { CONTACT_EMAIL } from '@/constants';
import { ArrowRight, Mail } from 'lucide-react';
import React from 'react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <section className="border-b border-[#DDDAD1] px-4 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
              Contact
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-tight text-[#191813] md:text-7xl">
              Send the rough version. We can shape the scope together.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#55524A]">
              You do not need a perfect brief, fixed budget, or final timeline to start the
              conversation. Share what you know and MPDevFlow will help clarify the path.
            </p>
          </div>

          <div className="rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] p-6">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#191813]">
              Start with a project brief
            </h2>
            <p className="mb-6 leading-7 text-[#55524A]">
              The form captures project type, current stage, timeline, budget comfort, and the
              details that matter for the first reply.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#191813] px-6 py-3 text-sm font-semibold text-[#F5F4F0] transition-colors hover:bg-[#D9481F]"
              >
                Open Project Brief
                <ArrowRight size={17} />
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CFCBC0] px-6 py-3 text-sm font-semibold text-[#191813] transition-colors hover:border-[#191813]"
              >
                <Mail size={17} />
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTA onOpenBooking={onOpenBooking} />
    </>
  );
};

export default ContactPage;
