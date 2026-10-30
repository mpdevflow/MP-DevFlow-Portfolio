export default function CTA({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="contact" className="journal-section cta-section">
      <div>
        <p className="eyebrow">Your next entry</p>
        <h2>
          Have a rough idea?
          <br />
          <em>
            Let’s make it work<span className="accent">.</span>
          </em>
        </h2>
        <p>You don’t need a perfect brief. Start with what you have.</p>
      </div>
      <button className="button" onClick={onOpenBooking}>
        Book a project call
      </button>
    </section>
  );
}
