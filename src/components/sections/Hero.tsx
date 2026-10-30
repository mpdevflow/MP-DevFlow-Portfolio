export default function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="hero">
      <div className="chapter">
        <span>01</span>
        <i />
        <span>Senior-led product studio / Philippines</span>
      </div>
      <div className="hero-layout">
        <div>
          <h1>
            From rough idea
            <br />
            <em>
              to working product<span className="accent">.</span>
            </em>
          </h1>
          <p className="hero-description">
            Websites, MVPs and useful tools. Thoughtfully built, clearly delivered.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={onOpenBooking}>
              Book a project call
            </button>
            <a className="text-link" href="#work">
              Explore the work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="margin-note">
          Clear thinking.
          <br />
          Practical builds.
          <br />
          Real delivery.
          <span />
        </aside>
      </div>
    </section>
  );
}
