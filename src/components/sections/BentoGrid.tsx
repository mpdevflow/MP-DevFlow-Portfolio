import { AUDIENCES, SERVICES } from '@/data/studio';
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <>
      <section className="border-b border-[#DDDAD1] px-4 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
              (01) Who we help
            </p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-[#191813] md:text-5xl">
              Built for the people who have to ship it.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map((audience) => (
              <article
                key={audience.title}
                className="rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] p-6 transition-colors hover:border-[#C8C2B4]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#191813] text-[#F5F4F0]">
                  {audience.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#191813]">
                  {audience.title}
                </h3>
                <p className="leading-7 text-[#55524A]">{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[#DDDAD1] px-4 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
              (02) What we build
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#191813] md:text-5xl">
              Practical builds for websites, products, and operations.
            </h2>
          </div>

          <div className="divide-y divide-[#DDDAD1] border-y border-[#DDDAD1]">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-5 py-7 md:grid-cols-[72px_0.9fr_1.1fr] md:items-center md:gap-8"
              >
                <div className="flex items-center gap-4 font-mono text-sm text-[#6E6B62]">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFEEE8] text-[#D9481F] md:hidden">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#191813] md:text-4xl">
                  {service.title}
                </h3>
                <div className="flex gap-4">
                  <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFEEE8] text-[#D9481F] md:flex">
                    {service.icon}
                  </span>
                  <p className="max-w-xl leading-7 text-[#55524A]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoGrid;
