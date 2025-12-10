import { Quote, Star } from 'lucide-react';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Feedback</h2>
          <p className="text-slate-400">Trusted by founders and businesses.</p>
        </div>

        <div className="relative">
          {/* Large storage quote mark effect */}
          <Quote className="absolute -top-10 -left-10 text-white/5 w-40 h-40 rotate-180 hidden md:block select-none" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-10">
              "MP DevFlow is very detail-oriented and consistently delivers projects on time. They
              make sure everything matches exactly what we discussed, and they provide constant
              updates to ensure the output is as good as possible. MP DevFlow makes sure your money
              is well spent, making them the perfect partner for my business."
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <div className="text-white font-bold text-lg">GameLobbyPH</div>
                <div className="text-slate-400 text-sm flex items-center gap-2">
                  Verified Client
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
