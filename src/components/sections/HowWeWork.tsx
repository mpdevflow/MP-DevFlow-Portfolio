import { PROCESS_STEPS } from '@/data/studio';
export default function HowWeWork({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="journal-section process-section">
      <div className="chapter">
        <span>04</span>
        <i />
        <span>From first note to release</span>
      </div>
      <div className="section-heading">
        <h2>
          A clear path.
          <br />
          <em>At every step.</em>
        </h2>
        <p>
          Know what we’re building, why it matters and what comes next. Senior technical direction
          stays close to the work from the first conversation through launch.
        </p>
      </div>
      <ol className="process-grid">
        {PROCESS_STEPS.map((s, i) => (
          <li key={s.title}>
            <span className="eyebrow">
              {String(i + 1).padStart(2, '0')} <span aria-hidden="true">—</span>
            </span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ol>
      <button className="text-link" onClick={onOpenBooking}>
        Talk through your project <span aria-hidden="true">↗</span>
      </button>
    </section>
  );
}
