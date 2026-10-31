import { Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '@/data/projects';
import SEO from '@/components/SEO';
import MarketingLayout from '@/components/layout/MarketingLayout';
import ProjectImage from '@/components/ProjectImage';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import { GAMELOBBY_FEATURES, GAMELOBBY_TIMELINE, GAMELOBBY_OUTCOMES } from '@/data/gamelobby';
export default function ProjectCaseStudyPage({ title }: { title: string }) {
  const project = PROJECTS.find((p) => p.title === title);
  if (!project) return <Navigate to="/" replace />;
  const isGame = title === 'GameLobbyPH';
  return (
    <MarketingLayout>
      {(openBooking) => (
        <>
          <SEO path={project.caseStudyPath} />
          <section className="page-intro case-intro">
            <Link className="text-link back-link" to="/#work">
              ← Back to work
            </Link>
            <div className="chapter">
              <span>Field notes</span>
              <i />
              <span>{project.category}</span>
            </div>
            <h1>
              {project.title}
              <span className="accent">.</span>
            </h1>
            <p className="lead">{project.description}</p>
            <div className="case-meta">
              <span className="eyebrow">{project.tech.join(' / ')}</span>
              {project.liveUrl && (
                <a
                  className="text-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
          <figure className="case-image">
            <ProjectImage project={project} eager />
            <figcaption>
              {title === 'DinkOS'
                ? 'DinkOS public website. Booking volume confirmed by the product owner.'
                : title === 'Serbisyo Barangay'
                  ? 'Serbisyo Barangay · Product concept preview.'
                  : title === 'Diwata AI'
                    ? 'Diwata AI · Project identity.'
                    : title === 'GameLobbyPH'
                      ? 'GameLobbyPH · Project interface from the existing portfolio.'
                      : `${title} · Public website capture.`}
            </figcaption>
          </figure>
          {title === 'DinkOS' && (
            <div className="case-metric">
              <strong>500+</strong>
              <div>
                bookings per month<p>Active clients. A recurring operational need.</p>
              </div>
            </div>
          )}
          <div className="case-story">
            {[
              ['Context', project.context],
              ['The problem', project.challenge],
              ['The approach', project.solution],
              ['The outcome', project.outcome],
            ].map(([heading, body], i) => (
              <section className="story-row" key={heading}>
                <span className="eyebrow">
                  0{i + 1} / {heading}
                </span>
                <div>
                  <h2>{heading}</h2>
                  <p>{body}</p>
                </div>
              </section>
            ))}
          </div>
          {isGame && (
            <>
              <section className="journal-section">
                <div className="section-heading">
                  <h2>
                    The tournament
                    <br />
                    <em>building blocks.</em>
                  </h2>
                  <p>
                    A six-week delivery with real-time match management, automated prize
                    distribution and dispute resolution.
                  </p>
                </div>
                <div className="case-feature-list">
                  {GAMELOBBY_FEATURES.map((f) => (
                    <article key={f.title}>
                      <h3>{f.title}</h3>
                      <p>{f.description}</p>
                    </article>
                  ))}
                </div>
              </section>
              <section className="journal-section">
                <h2>
                  Six weeks.
                  <br />
                  <em>From plan to play.</em>
                </h2>
                <ol className="case-timeline">
                  {GAMELOBBY_TIMELINE.map((t) => (
                    <li key={t.week}>
                      <span className="eyebrow">{t.week}</span>
                      <span>{t.milestone}</span>
                    </li>
                  ))}
                </ol>
                <h3>Delivery outcomes</h3>
                <ul className="outcomes">
                  {GAMELOBBY_OUTCOMES.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </section>
              <Testimonials />
            </>
          )}
          <CTA onOpenBooking={openBooking} />
        </>
      )}
    </MarketingLayout>
  );
}
