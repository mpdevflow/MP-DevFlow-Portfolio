import { Project } from '@/types';
import { ExternalLink, Shield, TrendingUp, X, Zap } from 'lucide-react';
import React from 'react';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-[#0B0E14] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header Image Area */}
        <div
          className={`h-40 w-full ${project.color} bg-opacity-20 relative overflow-hidden shrink-0`}
        >
          <div className={`absolute inset-0 ${project.color} bg-opacity-30 blur-3xl`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md z-10"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-8 custom-scrollbar">
          {/* Context */}
          <div className="mb-10">
            <p className="text-lg text-slate-300 leading-relaxed font-medium">{project.context}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Challenge */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4 text-red-400">
                <TrendingUp className="rotate-180" size={24} />
                <h3 className="text-lg font-bold text-white">The Challenge</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <Zap size={24} />
                <h3 className="text-lg font-bold text-white">Our Solution</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Impact/Outcome */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-blue-500/10 rounded-full text-blue-400">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Outcome</h3>
                <p className="text-slate-400 leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-white/5 bg-[#0B0E14] shrink-0 flex flex-col md:flex-row gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              Visit Live Site <ExternalLink size={18} />
            </a>
          )}
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold rounded-xl transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default WorkModal;
