import React from 'react';

const techs = [
  'React',
  'Vite',
  'Supabase',
  'Tailwind CSS',
  'TypeScript',
  'PostgreSQL',
  'OpenAI',
  'Gemini',
];

const TechStrip: React.FC = () => {
  return (
    <div className="w-full border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden transform-gpu">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Powering Next-Gen Applications
        </p>
        <div className="relative flex overflow-x-hidden group">
          {/* Row 1: Left to Right */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center will-change-transform">
            {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-bold text-slate-600/50 hover:text-blue-500/80 transition-colors cursor-default select-none transform-gpu"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Row 2: Right to Left (Absolute overlay logic maintained but optimized) */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center ml-12 will-change-transform">
            {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
              <span
                key={`dup-${i}`}
                className="text-xl md:text-2xl font-bold text-slate-600/50 hover:text-blue-500/80 transition-colors cursor-default select-none transform-gpu"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        /* Pause animation on hover for better readability */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes marquee2 {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default TechStrip;
