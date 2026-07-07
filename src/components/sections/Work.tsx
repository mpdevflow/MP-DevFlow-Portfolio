import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ArrowRight, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import WorkModal from '../modals/WorkModal';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const pressedProjectRef = useRef<Project | null>(null);

  const loopProjects = [...PROJECTS, ...PROJECTS];

  useEffect(() => {
    let frameId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const rail = railRef.current;
      const delta = Math.min(50, now - last);
      last = now;

      if (rail && !rail.matches(':hover') && !hoveringRef.current && !draggingRef.current) {
        rail.scrollLeft += delta * 0.045;
        const halfway = rail.scrollWidth / 2;

        if (halfway > 0 && rail.scrollLeft >= halfway) {
          rail.scrollLeft -= halfway;
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail) return;

    const card = (event.target as HTMLElement).closest<HTMLElement>('[data-project-index]');
    const projectIndex = card?.dataset.projectIndex;

    draggingRef.current = true;
    dragMovedRef.current = 0;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = rail.scrollLeft;
    pressedProjectRef.current =
      projectIndex === undefined ? null : PROJECTS[Number(projectIndex) % PROJECTS.length] || null;
    rail.setPointerCapture(event.pointerId);
    rail.style.cursor = 'grabbing';
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || !draggingRef.current) return;

    const deltaX = event.clientX - dragStartXRef.current;
    dragMovedRef.current = Math.max(dragMovedRef.current, Math.abs(deltaX));

    let nextScroll = dragStartScrollRef.current - deltaX;
    const halfway = rail.scrollWidth / 2;

    if (halfway > 0) {
      if (nextScroll >= halfway) {
        dragStartScrollRef.current -= halfway;
        nextScroll -= halfway;
      }

      if (nextScroll < 0) {
        dragStartScrollRef.current += halfway;
        nextScroll += halfway;
      }
    }

    rail.scrollLeft = nextScroll;
  };

  const stopDragging = (clearPressedProject = true) => {
    draggingRef.current = false;
    if (clearPressedProject) pressedProjectRef.current = null;
    if (railRef.current) railRef.current.style.cursor = 'grab';
  };

  const handlePointerUp = () => {
    const project = pressedProjectRef.current;
    const shouldOpenProject = project && dragMovedRef.current <= 6;

    stopDragging();

    if (shouldOpenProject) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleKeyboardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="work"
      className="overflow-x-clip border-b border-[#DDDAD1] bg-[#F5F4F0] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
              (03) Selected work
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#191813] md:text-5xl">
              The work gets more room to speak.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#55524A]">
            A unified look at websites, product builds, dashboards, support work, and shipped
            experiments that show how MPDevFlow thinks through delivery.
          </p>
        </div>

        <div
          ref={railRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => {
            hoveringRef.current = true;
          }}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => stopDragging()}
          onPointerLeave={() => {
            hoveringRef.current = false;
            stopDragging(false);
          }}
          onMouseEnter={() => {
            hoveringRef.current = true;
          }}
          onMouseLeave={() => {
            hoveringRef.current = false;
            stopDragging();
          }}
          className="work-rail flex cursor-grab touch-pan-y select-none overflow-x-auto pb-2"
          style={{
            marginLeft: 'calc(50% - 50vw)',
            marginRight: 'calc(50% - 50vw)',
            paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 1rem))',
            paddingRight: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          {loopProjects.map((project, index) => (
            <button
              key={`${project.title}-${index}`}
              type="button"
              data-project-index={index}
              onClick={(event) => {
                if (event.detail === 0) handleKeyboardClick(project);
              }}
              className="group mr-5 flex w-[min(620px,85vw)] shrink-0 flex-col overflow-hidden rounded-lg bg-[#191813] text-left"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
                  project.previewImageFit === 'contain' ? 'bg-[#0C0516]' : 'bg-[#EFEEE8]'
                }`}
              >
                {project.hasPreviewImage && project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                        project.previewImageFit === 'contain'
                          ? 'object-contain p-10 md:p-14'
                          : 'object-cover'
                      }`}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191813]/20 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#EAE8E0_0_12px,#E4E2D9_12px_24px)] opacity-70" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(217,72,31,0.38),transparent_62%)]" />
                    <div className="absolute inset-10 rounded-full border border-[#CFCBC0]/60 opacity-70 transition-transform duration-700 group-hover:scale-95" />
                    <div className="absolute inset-20 rounded-full border border-[#CFCBC0]/50 opacity-70 transition-transform duration-700 group-hover:scale-105" />
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full ${project.color} text-white shadow-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <ExternalLink size={28} />
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between gap-5 p-5 md:px-6">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold tracking-tight text-[#F5F4F0] md:text-xl">
                    {project.title}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#A5A199]">
                    {project.category}
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-[#D6D4CC] transition-colors group-hover:border-[#F5F4F0] group-hover:text-[#F5F4F0]">
                  View work
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </button>
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
