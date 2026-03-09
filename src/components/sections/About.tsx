import React from 'react';

const PILLS = ['🇵🇭 Philippines-Based', 'Senior-Led', 'AI-Augmented'];

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="pl-6 border-l-4 border-cyan-500/60 max-w-3xl">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
            The Studio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Built Lean. Shipped Fast. Built to Last.
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              MP DevFlow is a boutique product development studio founded in the Philippines. We
              operate lean by design — a senior engineer and a tight network of specialists who've
              shipped products across gaming, SaaS, and e-commerce.
            </p>
            <p>
              When you work with us, you work directly with a senior engineer, not a project manager
              relaying messages to a junior team. Every architectural decision, every line of code,
              goes through someone who's built products at scale.
            </p>
            <p>
              Founded by a Senior Frontend Engineer with 12+ years building and leading development
              teams — now applying that same discipline to client products.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
