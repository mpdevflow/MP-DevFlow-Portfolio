import BookingModal from '@/components/modals/BookingModal';
import SEO from '@/components/SEO';
import { PROJECTS } from '@/data/projects';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Layers,
  Target,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

interface ProjectCaseStudyPageProps {
  title: string;
}

const ProjectCaseStudyPage: React.FC<ProjectCaseStudyPageProps> = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = PROJECTS.find((item) => item.title === title);

  if (!project) return <Navigate to="/" replace />;

  const shouldShowPreview = project.hasPreviewImage && project.image;
  const focusItems = [
    { title: 'Context', description: project.context, icon: <Layers size={20} /> },
    { title: 'Challenge', description: project.challenge, icon: <Target size={20} /> },
    { title: 'Approach', description: project.solution, icon: <Zap size={20} /> },
    { title: 'Outcome', description: project.outcome, icon: <CheckCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <SEO
        title="Case Study - MPDevFlow"
        description="Explore an MPDevFlow case study covering project context, challenge, approach, outcome, and the product delivery decisions behind the work."
        path={project.caseStudyPath}
        type="article"
      />

      <div className="mx-auto max-w-5xl px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Work
        </Link>
      </div>

      <section className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,72,31,0.14)_0%,transparent_58%)]" />

        <div className="relative z-10 mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9481F]/25 bg-[#D9481F]/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[#F2A58A]">
              {project.category}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9481F] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#F0642F]"
              >
                Book a Free Project Call
                <ArrowRight size={17} />
              </button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  Visit Live Site
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
            {shouldShowPreview ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className={`aspect-[16/10] w-full ${
                  project.previewImageFit === 'contain'
                    ? 'bg-[#0C0516] object-contain p-10'
                    : 'object-cover'
                }`}
              />
            ) : (
              <div className="aspect-[16/10] bg-[radial-gradient(circle_at_50%_110%,rgba(217,72,31,0.7),transparent_70%)]" />
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {focusItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-4 flex items-center gap-3 text-[#F2A58A]">
                {item.icon}
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              </div>
              <p className="text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Want to talk through something similar?
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            Bring the rough idea. We can walk through the scope, risks, and practical next step in a
            free project call, like a quick virtual coffee before any commitment.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#D9481F] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#F0642F]"
          >
            Book a Free Project Call
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProjectCaseStudyPage;
