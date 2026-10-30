import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import ProjectImage from '@/components/ProjectImage';

export default function Work() {
  const [delivered, setDelivered] = useState(true);
  const [featured, ...others] = PROJECTS;
  return (
    <section id="work" className="journal-section work-section" aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">
        Selected work
      </h2>
      <div className="chapter">
        <span>02</span>
        <i />
        <span>Field notes / Selected work</span>
        <span className="chapter-end">01 — 05</span>
      </div>
      <div className="work-grid">
        <article className="featured-project">
          <div className="project-annotation">
            <span className="annotation-dot" />A booking slot.
            <br />
            One booking.
          </div>
          <div
            id="dinkos-view"
            className="featured-stage"
            role="region"
            aria-label={delivered ? 'DinkOS delivered product' : 'DinkOS project brief'}
          >
            {delivered ? (
              <ProjectImage project={featured} eager />
            ) : (
              <div className="brief-panel">
                <span className="eyebrow">The brief / DinkOS</span>
                <h3>
                  Two bookings.
                  <br />
                  <em>One court.</em>
                </h3>
                <p>
                  Help pickleball clubs prevent double bookings and give players a clearer path from
                  available slot to confirmed court.
                </p>
                <div className="brief-outcome">
                  <strong>500+</strong>
                  <span>
                    bookings per month
                    <br />
                    with active clients
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="project-caption">
            <div>
              <h3>
                <Link to={featured.caseStudyPath!}>
                  01 / DinkOS <ArrowUpRight size={18} />
                </Link>
              </h3>
              <p>Pickleball booking & operations · Live product</p>
            </div>
            <div className="view-control" role="group" aria-label="DinkOS project view">
              <button
                aria-pressed={!delivered}
                aria-controls="dinkos-view"
                onClick={() => setDelivered(false)}
              >
                Brief
              </button>
              <button
                aria-pressed={delivered}
                aria-controls="dinkos-view"
                onClick={() => setDelivered(true)}
              >
                Delivered
              </button>
            </div>
          </div>
          <div className="project-proof">
            <span className="proof-number">500+</span>
            <span>bookings / month</span>
            <span>Helping clubs prevent double bookings.</span>
          </div>
        </article>
        <article className="supporting-project">
          <Link
            to={others[0].caseStudyPath!}
            className="project-image-link"
            aria-label={`Explore ${others[0].title} case study`}
          >
            <ProjectImage project={others[0]} />
          </Link>
          <div className="project-caption">
            <div>
              <h3>
                <Link to={others[0].caseStudyPath!}>
                  02 / {others[0].title} <ArrowUpRight size={18} />
                </Link>
              </h3>
              <p>{others[0].category}</p>
            </div>
          </div>
          <p className="project-note">{others[0].description}</p>
        </article>
      </div>
      <details className="more-work">
        <summary>
          More from the journal{' '}
          <span>
            03 — 05 <span aria-hidden="true">↗</span>
          </span>
        </summary>
        <div className="additional-work">
          {others.slice(1).map((project, index) => (
            <article key={project.title}>
              <Link to={project.caseStudyPath!} className="project-image-link">
                <ProjectImage project={project} />
              </Link>
              <h3>
                <Link to={project.caseStudyPath!}>
                  {String(index + 3).padStart(2, '0')} / {project.title} <ArrowUpRight size={16} />
                </Link>
              </h3>
              <p>{project.category}</p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
