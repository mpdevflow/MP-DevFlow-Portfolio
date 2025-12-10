import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans selection:bg-blue-500/30">
      {/* Simple Header */}
      <header className="border-b border-white/5 bg-[#05070a]">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-blue-500">MP</span>
            <span className="text-white">DevFlow</span>
          </Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            &larr; Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">{title}</h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">{children}</div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} MP DevFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default LegalLayout;
