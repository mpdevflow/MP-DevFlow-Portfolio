import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  numeric?: number;
}

const STATS: Stat[] = [
  { value: '3+', label: 'Products Shipped', numeric: 3 },
  { value: '12+', label: 'Years Experience', numeric: 12 },
  { value: 'AI-Augmented', label: 'Workflow' },
  { value: 'Senior-Led', label: 'Every Project' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

interface StatItemProps {
  stat: Stat;
  active: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, active }) => {
  const count = useCountUp(stat.numeric ?? 0, 1200, active && stat.numeric !== undefined);
  const isNumeric = stat.numeric !== undefined;
  const suffix = stat.value.replace(String(stat.numeric ?? ''), '');

  return (
    <div
      className={`flex flex-col items-center gap-1 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {isNumeric ? `${count}${suffix}` : stat.value}
      </span>
      <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
        {stat.label}
      </span>
    </div>
  );
};

const StatsBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-y border-white/10 bg-white/5 py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} active={active} />
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
