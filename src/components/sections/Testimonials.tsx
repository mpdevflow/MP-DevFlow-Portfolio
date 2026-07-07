import { Quote, Star } from 'lucide-react';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="border-b border-[#DDDAD1] px-4 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#D9481F]">
            Client feedback
          </p>
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-[#191813] md:text-5xl">
            Proof that delivery stays close and practical.
          </h2>
        </div>

        <figure className="relative rounded-lg border border-[#DDDAD1] bg-[#FAF9F5] p-7 md:p-10">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-[#EFEEE8]" />
          <div className="mb-8 flex gap-1 text-[#D9481F]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} className="fill-current" />
            ))}
          </div>
          <blockquote className="relative mb-8 text-xl font-medium leading-8 text-[#191813] md:text-2xl md:leading-10">
            "MP DevFlow is very detail-oriented and consistently delivers projects on time. They
            make sure everything matches exactly what we discussed, and they provide constant
            updates to ensure the output is as good as possible."
          </blockquote>
          <figcaption className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#191813] font-bold text-[#F5F4F0]">
              G
            </div>
            <div>
              <div className="font-semibold text-[#191813]">GameLobbyPH</div>
              <div className="text-sm text-[#6E6B62]">Verified client</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
