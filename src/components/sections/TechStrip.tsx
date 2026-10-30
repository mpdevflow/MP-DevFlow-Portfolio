import { TRUST_POINTS } from '@/data/studio';
import React from 'react';

const TechStrip: React.FC = () => {
  return (
    <section className="border-b border-[var(--hairline)] bg-[var(--surface-tint)] px-4 py-5">
      <div className="mx-auto grid max-w-7xl gap-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--secondary)] sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_POINTS.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStrip;
