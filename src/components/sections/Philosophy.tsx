import { Brain, Database, Heart, RefreshCw, Rocket, Search, ShieldCheck, Zap } from 'lucide-react';
import React from 'react';

interface PhilosophyProps {
  onOpenBooking: () => void;
}

const Philosophy: React.FC<PhilosophyProps> = ({ onOpenBooking }) => {
  return (
    <section id="philosophy" className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">
            The Anti-Agency Manifesto
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We Build Like <br />
            <span className="text-slate-500">Founders, Not Freelancers.</span>
          </h3>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Most agencies measure success by billable hours. We measure it by shipped products. Here
            is how we are different.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Point 1 */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <Zap size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Speed with Sense</h4>
            <p className="text-slate-400 leading-relaxed">
              Startups die from slow execution. We prioritize critical paths. We don't over-engineer
              "perfect" code for an MVP; we build robust, scalable foundations that let you launch
              fast and iterate based on real user feedback.
            </p>
          </div>

          {/* Point 2 */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <Brain size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">AI-Augmented</h4>
            <p className="text-slate-400 leading-relaxed">
              We aren't threatened by AI; we wield it. By embedding AI into our architecture
              planning, coding, and QA, we cut development time by 40%. You pay for high-level
              problem solving, not boilerplate typing.
            </p>
          </div>

          {/* Point 3 */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Radical Ownership</h4>
            <p className="text-slate-400 leading-relaxed">
              We challenge you. If a feature doesn't make sense, we'll tell you. We treat your
              budget like our own money. No hidden fees, no scope creep for the sake of billing.
              Pure product alignment.
            </p>
          </div>

          {/* Point 4 */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 text-orange-400">
              <Heart size={24} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Long-Term Partners</h4>
            <p className="text-slate-400 leading-relaxed">
              We don't hand over a zip file and disappear. We set up your CI/CD, documentation, and
              hosting accounts so your future internal team can take over seamlessly.
            </p>
          </div>
        </div>

        {/* How We Ship */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">How We Ship</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                number: '01',
                title: 'Discovery',
                desc: "We align on the 'Why' and the 'What'. No blind coding.",
                icon: <Search size={20} />,
              },
              {
                number: '02',
                title: 'Architecture',
                desc: 'Database schema, tech stack, and API design.',
                icon: <Database size={20} />,
              },
              {
                number: '03',
                title: 'Sprint',
                desc: '2-week agile cycles with visible demos every Friday.',
                icon: <RefreshCw size={20} />,
              },
              {
                number: '04',
                title: 'Launch',
                desc: 'Deployment, monitoring, and handoff.',
                icon: <Rocket size={20} />,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-5xl font-bold text-white/5 mb-4 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="mb-4 text-blue-400">{step.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-300 mb-6 font-medium">Align with a team that cares.</p>

            <button
              onClick={onOpenBooking}
              className="inline-block px-8 py-4 bg-white text-blue-900 hover:bg-slate-200 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
