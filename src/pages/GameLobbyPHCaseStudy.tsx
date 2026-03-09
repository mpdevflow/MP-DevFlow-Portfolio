import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code2, Star, Trophy, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/modals/BookingModal';

const FEATURES = [
  {
    title: 'Bracket Engine',
    description:
      'Single-elimination bracket with automated round progression and real-time state sync.',
    icon: <Trophy size={20} className="text-blue-400" />,
  },
  {
    title: 'Match Lifecycle',
    description:
      'Full match flow with cooldown timers, screenshot-based result submission, and win claim system.',
    icon: <Clock size={20} className="text-cyan-400" />,
  },
  {
    title: 'Coin Pool System',
    description:
      'Automated prize pool collection and instant champion payout with platform fee deduction.',
    icon: <Zap size={20} className="text-yellow-400" />,
  },
  {
    title: 'Dispute Resolution',
    description: 'Time-boxed dispute window with auto-resolution and admin override capability.',
    icon: <CheckCircle size={20} className="text-emerald-400" />,
  },
  {
    title: 'Persistent State',
    description:
      'All tournament data and bracket state preserved across sessions and page refreshes.',
    icon: <Code2 size={20} className="text-purple-400" />,
  },
  {
    title: 'Tournament Filtering',
    description: 'Lobby listing with status filters for spectators and active participants.',
    icon: <ArrowRight size={20} className="text-rose-400" />,
  },
];

const TIMELINE = [
  { week: 'Week 1', milestone: 'Discovery & Architecture Planning' },
  { week: 'Week 2', milestone: 'Tournament Creation & Join Flow' },
  { week: 'Week 3', milestone: 'Bracket Rendering & Lobby Generation' },
  { week: 'Week 4', milestone: 'Match Flow & Result Validation' },
  { week: 'Week 5', milestone: 'Round Progression, Champion Detection & Reward Logic' },
  { week: 'Week 6', milestone: 'Final Polish, Filtering UI & QA' },
];

const OUTCOMES = [
  'Tournament system live and running with real players and real stakes',
  'Zero manual prize distribution — fully automated end-to-end',
  'Dispute resolution system significantly reduced fraudulent win claims',
  'Platform engagement increased with repeat tournament participation',
  'Delivered on time and within scope',
];

const GameLobbyPHCaseStudy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* SECTION 1 — Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12)_0%,transparent_60%)]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Gaming Startup · Case Study
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Building the Tournament System That Turned GameLobbyPH Into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Competition Platform
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl">
            How we designed and shipped a full bracket-style tournament system in 6 weeks — with
            automated prize distribution, real-time match management, and dispute resolution built
            in.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                Stack
              </span>
              <span className="text-slate-200 font-medium">
                React · Vite · Supabase · PostgreSQL
              </span>
            </div>
            <div className="w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                Timeline
              </span>
              <span className="text-slate-200 font-medium">6 Weeks</span>
            </div>
            <div className="w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                Type
              </span>
              <span className="text-cyan-400 font-medium">Client Project</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Problem</h2>
          <div className="pl-6 border-l-2 border-blue-500/40">
            <p className="text-slate-400 leading-relaxed text-lg">
              GameLobbyPH had an active player base for 5v5 lobby battles but no structured
              competition layer. Players had no reason to stay engaged long-term, and the platform
              had no recurring revenue mechanism beyond basic match fees. They needed a tournament
              system that felt competitive, automated, and fair — without disrupting the live
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What We Built */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Built</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            A fully automated bracket-style tournament system supporting 8-player captain brackets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Timeline */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">How We Shipped It in 6 Weeks</h2>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

            <div className="flex flex-col gap-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  {/* Dot */}
                  <div className="absolute -left-8 mt-1 w-5 h-5 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                      {item.week}
                    </span>
                    <p className="text-white font-semibold mt-1">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Outcomes */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">The Outcome</h2>
          <div className="flex flex-col gap-4">
            {OUTCOMES.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-slate-300 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Testimonial */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium mb-8">
              "MP DevFlow is very detail-oriented and consistently delivers projects on time. They
              make sure everything matches exactly what we discussed, and they provide constant
              updates to ensure the output is as good as possible. MP DevFlow makes sure your money
              is well spent, making them the perfect partner for my business."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <div className="text-white font-bold">GameLobbyPH</div>
                <div className="text-slate-400 text-sm flex items-center gap-2">
                  Verified Client
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="py-24 px-4 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to build something like this?
          </h2>
          <p className="text-slate-400 mb-8">
            Let's talk about your project and see if we're the right fit.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-1 cursor-pointer"
          >
            Book a Discovery Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default GameLobbyPHCaseStudy;
