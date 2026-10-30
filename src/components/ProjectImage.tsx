import { useState } from 'react';
import type { Project } from '@/types';
export default function ProjectImage({
  project,
  eager = false,
}: {
  project: Project;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`project-image ${project.previewImageFit === 'contain' ? 'image-contain' : ''}`}
    >
      {project.image && !failed ? (
        <img
          src={project.image}
          alt={
            project.title === 'DinkOS'
              ? 'DinkOS public website for pickleball court booking and operations'
              : `${project.title} ${project.previewImageFit === 'contain' ? 'logo' : 'project interface preview'}`
          }
          width={
            project.title === 'GameLobbyPH' ? 1240 : project.title === 'Diwata AI' ? 1024 : 1440
          }
          height={
            project.title === 'GameLobbyPH'
              ? 1208
              : project.title === 'Serbisyo Barangay'
                ? 778
                : project.title === 'Diwata AI'
                  ? 1024
                  : 1000
          }
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback">
          <span className="eyebrow">Project journal</span>
          <strong>{project.title}</strong>
          <span>Explore the project below.</span>
        </div>
      )}
    </div>
  );
}
