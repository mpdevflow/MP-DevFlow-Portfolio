import React from 'react';

interface CTAProps {
  onOpenBooking: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="contact"
      className="py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0B0E14] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
          Limited Availability
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ready to build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            remarkable?
          </span>
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          We accept a limited number of new clients each quarter to ensure uncompromised quality.
          Secure your slot today and let's turn your vision into revenue.
        </p>
        <button
          onClick={onOpenBooking}
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-blue-950 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
          <span className="relative z-10">Book a Discovery Call</span>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
        </button>
      </div>
    </section>
  );
};

export default CTA;
