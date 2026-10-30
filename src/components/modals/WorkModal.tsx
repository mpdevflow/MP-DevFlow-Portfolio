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

  const shouldShowProjectImage = project.hasPreviewImage && project.image;
  const liveSiteUrl =
    project.liveUrl ?? (project.link?.startsWith('http') ? project.link : undefined);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] shadow-2xl">
        <div className="relative h-52 shrink-0 overflow-hidden bg-[var(--ink)]">
          {shouldShowProjectImage ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className={`absolute inset-0 h-full w-full ${
                project.previewImageFit === 'contain'
                  ? 'object-contain p-8 md:p-10'
                  : 'object-cover'
              }`}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_50%_115%,rgba(217,72,31,0.7),transparent_70%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/45 to-[var(--ink)]/15" />
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-[var(--canvas)] transition-colors hover:bg-white/20"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--secondary)]">
              {project.category}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--canvas)] md:text-4xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 md:p-8">
          <p className="mb-8 text-lg font-medium leading-8 text-[var(--ink)]">{project.context}</p>

          <div className="mb-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-5">
              <div className="mb-4 flex items-center gap-3 text-[var(--accent)]">
                <TrendingUp className="rotate-180" size={22} />
                <h3 className="font-semibold text-[var(--ink)]">The Challenge</h3>
              </div>
              <p className="text-sm leading-6 text-[var(--secondary)]">{project.challenge}</p>
            </div>

            <div className="rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-5">
              <div className="mb-4 flex items-center gap-3 text-[var(--accent)]">
                <Zap size={22} />
                <h3 className="font-semibold text-[var(--ink)]">Our Solution</h3>
              </div>
              <p className="text-sm leading-6 text-[var(--secondary)]">{project.solution}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--secondary)]">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--hairline)] pt-7">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-[var(--ink)] p-2 text-[var(--canvas)]">
                <Shield size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--ink)]">
                  The Outcome
                </h3>
                <p className="leading-7 text-[var(--secondary)]">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 border-t border-[var(--hairline)] bg-[var(--surface-tint)] p-5 md:flex-row">
          {liveSiteUrl && (
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-[var(--control-border)] bg-[var(--surface)] py-4 text-center font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              <span className="inline-flex items-center justify-center gap-2">
                Visit Live Site <ExternalLink size={18} />
              </span>
            </a>
          )}
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-[var(--control-border)] bg-[var(--surface)] py-4 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
