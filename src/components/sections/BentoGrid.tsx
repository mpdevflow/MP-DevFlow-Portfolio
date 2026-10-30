import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export const serviceGroups = [
  {
    title: 'Websites & launches',
    description:
      'Business websites, landing pages and CMS builds. A clear message, responsive design and a considered path to inquiry.',
    scope: 'Business websites · Landing pages · CMS',
  },
  {
    title: 'MVPs & web apps',
    description:
      'Move from rough requirements to a useful first release. Booking systems, SaaS products, dashboards, payments and integrations.',
    scope: 'Product builds · Booking · SaaS',
  },
  {
    title: 'Tools & ongoing support',
    description:
      'Make the everyday work easier. Internal tools, workflow automation, focused improvements, maintenance and agency support.',
    scope: 'Internal tools · Automation · Maintenance',
  },
];
export default function BentoGrid() {
  return (
    <section id="services" className="journal-section services-section">
      <div className="chapter">
        <span>03</span>
        <i />
        <span>What we do</span>
      </div>
      <div className="section-heading">
        <h2>
          Senior-led.
          <br className="mobile-break" />{' '}
          <em>
            Built with care<span className="accent">.</span>
          </em>
        </h2>
        <p>
          Helping founders, teams and organizations turn ideas into well-built websites and
          products, with clear decisions and a practical path to launch.
        </p>
      </div>
      <div className="service-grid">
        {serviceGroups.map((s, i) => (
          <Link to={`/services#service-${i + 1}`} className="service-preview" key={s.title}>
            <div>
              <h3>{s.title}</h3>
              <ArrowUpRight size={20} />
            </div>
            <p>{s.scope}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
