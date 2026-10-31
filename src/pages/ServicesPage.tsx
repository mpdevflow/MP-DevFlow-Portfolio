import SEO from '@/components/SEO';
import CTA from '@/components/sections/CTA';
import HowWeWork from '@/components/sections/HowWeWork';
import { serviceGroups } from '@/components/sections/BentoGrid';
export default function ServicesPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      <SEO path="/services" />
      <section className="page-intro">
        <div className="chapter">
          <span>Services</span>
          <i />
          <span>Practical work. Clear ownership.</span>
        </div>
        <h1>
          What you need.
          <br />
          <em>
            Built thoughtfully<span className="accent">.</span>
          </em>
        </h1>
        <p className="lead">
          A focused launch, a working first product or a better way to run the day-to-day. Senior
          direction from scoping through delivery.
        </p>
      </section>
      <section className="service-details">
        {serviceGroups.map((s, i) => (
          <article className="service-detail" id={`service-${i + 1}`} key={s.title}>
            <span className="eyebrow">0{i + 1} / Service</span>
            <h2>{s.title}</h2>
            <div>
              <p>{s.description}</p>
              <p className="eyebrow">{s.scope}</p>
              <button className="text-link" onClick={onOpenBooking}>
                Discuss this work <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </section>
      <HowWeWork onOpenBooking={onOpenBooking} />
      <CTA onOpenBooking={onOpenBooking} />
    </>
  );
}
