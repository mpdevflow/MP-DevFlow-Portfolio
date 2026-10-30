import SEO from '@/components/SEO';
import { CONTACT_EMAIL } from '@/constants';
export default function ContactPage({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      <SEO
        title="Contact — MPDevFlow"
        description="Bring your rough idea. Talk directly about scope, timing and the practical next step for your website or product."
        path="/contact"
      />
      <section className="page-intro">
        <div className="chapter">
          <span>Contact</span>
          <i />
          <span>Start with a conversation</span>
        </div>
        <h1>
          Send the rough version.
          <br />
          <em>
            We’ll find the shape<span className="accent">.</span>
          </em>
        </h1>
        <p className="lead">
          A few notes, a problem you keep running into, or a product that needs a better next
          chapter. That’s enough to start.
        </p>
      </section>
      <section className="contact-layout journal-section">
        <div>
          <h2>
            Let’s talk
            <br />
            <em>through the work.</em>
          </h2>
          <p>
            We’ll discuss your goals, constraints and what a useful first step looks like. A free
            project call, with room for questions.
          </p>
          <div className="contact-actions">
            <button className="button" onClick={onOpenBooking}>
              Book a project call
            </button>
            <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
              Email directly <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="contact-note">
          <p className="eyebrow">Helpful to bring</p>
          <ol>
            <li>What you’re trying to build or improve</li>
            <li>Who it needs to work for</li>
            <li>Any timing or budget constraints</li>
            <li>Links, sketches or an existing product</li>
          </ol>
          <p>Not sure yet? We can work through it together.</p>
        </aside>
      </section>
    </>
  );
}
