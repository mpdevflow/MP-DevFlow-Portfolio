import { ServiceCardProps } from '@/types';
import { Bot, Layers, Server, Smartphone } from 'lucide-react';
import React from 'react';

const Card: React.FC<ServiceCardProps> = ({ title, description, icon, colSpan = 'col-span-1' }) => (
  <div
    className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/[0.07] transition-all duration-300 ${colSpan}`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 text-blue-500">
      {icon}
    </div>
    <div className="relative z-10 h-full flex flex-col justify-end">
      <div className="mb-4 text-blue-400 p-3 bg-blue-500/10 w-fit rounded-2xl border border-blue-500/20 backdrop-blur-md">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-slate-400">Technical capabilities designed for speed and scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: Web Apps */}
          <Card
            title="Full-Stack Web Apps"
            description="Custom dashboards, SaaS platforms, and internal tools built with React, Vite, and Supabase for maximum performance."
            icon={<Layers size={80} />}
            colSpan="md:col-span-2"
          />

          {/* Card 2: AI */}
          <Card
            title="API Integration"
            description="We add smart features to your app using reliable APIs like OpenAI. Practical implementation, no complex research required."
            icon={<Bot size={80} />}
          />

          {/* Card 3: Mobile */}
          <Card
            title="Mobile-Responsive"
            description="We build web apps that work perfectly on phones. If you need a native app later, we can adapt our React code to React Native."
            icon={<Smartphone size={80} />}
          />

          {/* Card 4: Infra */}
          <Card
            title="Secure Cloud Hosting"
            description="Secure, zero-config hosting on Vercel and Supabase. We focus on shipping products, not managing servers."
            icon={<Server size={80} />}
            colSpan="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
