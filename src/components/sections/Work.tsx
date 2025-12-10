import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ArrowRight, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import WorkModal from '../modals/WorkModal';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="py-24 px-4 relative bg-[#0B0E14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-lg">
              We don't just write code; we build revenue-generating assets. Here are a few of our
              recent favorites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Image Placeholder */}
              {/* Image Placeholder */}
              <div
                className={`h-48 w-full ${project.color} bg-opacity-5 flex items-center justify-center relative overflow-hidden`}
              >
                {/* 1. Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                {/* 2. Glow Effects */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${project.color} bg-opacity-20 rounded-full blur-[50px] group-hover:blur-[70px] transition-all duration-500`}
                />

                {/* 3. Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-64 h-64 border border-white/10 rounded-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" />
                  <div className="w-48 h-48 border border-white/10 rounded-full scale-95 group-hover:scale-100 transition-transform duration-700 ease-out absolute" />
                </div>

                {/* 4. Icon */}
                <div className="z-10 bg-white/5 p-5 rounded-2xl backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-2xl">
                  <ExternalLink size={28} className="text-white opacity-90" />
                </div>

                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <span className="text-white font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Work;
